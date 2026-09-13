// Writes reference/pages/<slug>.md from the built HTML in dist/client, one
// file per public page, so the page reference always matches what a visitor
// reads. Run after `npm run build`: `node scripts/build-page-reference.mjs`.
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import { join, relative, sep } from "node:path";

const root = new URL("../", import.meta.url);
const distClient = join(root.pathname.replace(/^\/([A-Za-z]:)/, "$1"), "dist", "client");
const outDir = join(root.pathname.replace(/^\/([A-Za-z]:)/, "$1"), "reference", "pages");

const entities = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#x27;": "'", "&#39;": "'", "&nbsp;": " " };
const decode = (text) => text.replace(/&#x27;|&#39;|&amp;|&lt;|&gt;|&quot;|&nbsp;/g, (match) => entities[match]).replace(/<!--.*?-->/g, "");
const clean = (text) => decode(text.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();

async function walk(dir) {
  const found = [];
  for (const name of await readdir(dir)) {
    const path = join(dir, name);
    if ((await stat(path)).isDirectory()) found.push(...(await walk(path)));
    else if (name === "index.html") found.push(path);
  }
  return found;
}

function pageToMarkdown(html, route) {
  const title = clean(html.match(/<title>(.*?)<\/title>/s)?.[1] ?? "");
  const description = decode(html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/)?.[1] ?? "");
  // The animated price renders a hidden sizing copy next to the visible one;
  // drop it so a price appears once.
  const main = (html.match(/<main[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? "").replace(/<span class="[^"]*sizer[^"]*"[^>]*>[^<]*<\/span>/g, "");
  const lines = [`# ${route}`, "", `Title tag: ${title}`, "", `Meta description: ${description}`, "", "Generated from the built page. Edit the source in app/, not this file.", ""];
  const tokens = [...main.matchAll(/<(h1|h2|h3|p|li|blockquote|th|td|small)\b[^>]*>([\s\S]*?)<\/\1>|<(strong)\b[^>]*>([\s\S]*?)<\/strong>/g)];
  let lastHeading = "";
  for (const token of tokens) {
    const tag = token[1] ?? token[3];
    const text = clean(token[2] ?? token[4] ?? "");
    if (!text) continue;
    if (tag === "h1") lines.push(`## H1: ${text}`, "");
    else if (tag === "h2") lines.push(`## ${text}`, "");
    else if (tag === "h3") lines.push(`### ${text}`, "");
    else if (tag === "li" || tag === "td" || tag === "th") lines.push(`- ${text}`);
    else if (tag === "blockquote") lines.push(`> ${text}`, "");
    else if (tag === "strong") {
      if (text !== lastHeading && text.length > 2 && text.length < 60) lines.push(`**${text}**`);
    } else lines.push(text, "");
    lastHeading = text;
  }
  return lines.join("\n").replace(/\n{3,}/g, "\n\n") + "\n";
}

await mkdir(outDir, { recursive: true });
const files = await walk(distClient);
const written = [];
for (const file of files) {
  const route = "/" + relative(distClient, file).split(sep).slice(0, -1).join("/");
  if (route === "/404") continue;
  const slug = route === "/" ? "home" : route.slice(1).replace(/\//g, "-");
  const html = await readFile(file, "utf8");
  await writeFile(join(outDir, `${slug}.md`), pageToMarkdown(html, route === "/" ? "/" : `${route}/`));
  written.push(slug);
}
console.log(`wrote ${written.length} page files: ${written.sort().join(", ")}`);
