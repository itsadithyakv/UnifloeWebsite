import type { MetadataRoute } from "next";
import { canonicalUrl, publicRoutes } from "./lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({ url: canonicalUrl(route.path) }));
}
