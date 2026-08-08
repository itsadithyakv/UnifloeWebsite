/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";
import { normalizePublicPath, permanentRedirects, robotsText, sitemapXml } from "../app/lib/seo";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const canonicalHostname = "unifloe.app";

export function canonicalRedirect(request: Request) {
  const url = new URL(request.url);
  const isCanonicalHost = url.hostname === canonicalHostname;
  const isWwwHost = url.hostname === `www.${canonicalHostname}`;
  const forwardedProtocol = request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const effectiveProtocol = forwardedProtocol ? `${forwardedProtocol}:` : url.protocol;
  const legacyTarget = permanentRedirects[normalizePublicPath(url.pathname) as keyof typeof permanentRedirects];
  const requiresCanonicalHost = isWwwHost || (isCanonicalHost && effectiveProtocol === "http:");

  if (!requiresCanonicalHost && !legacyTarget) return null;

  if (isCanonicalHost || isWwwHost) {
    url.protocol = "https:";
    url.hostname = canonicalHostname;
    url.port = "";
  }

  if (legacyTarget) {
    const target = new URL(legacyTarget, url);
    url.pathname = target.pathname;
    url.hash = target.hash;
  }

  return new Response(null, {
    status: 308,
    headers: {
      location: url.toString(),
      "cache-control": "public, max-age=3600",
    },
  });
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const redirect = canonicalRedirect(request);
    if (redirect) return redirect;

    if (url.pathname === "/robots.txt") {
      return new Response(robotsText, {
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }

    if (url.pathname === "/sitemap.xml") {
      return new Response(sitemapXml, {
        headers: { "content-type": "application/xml; charset=utf-8" },
      });
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
