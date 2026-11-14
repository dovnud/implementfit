import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { loadCatalog, resetCatalogCache } from "./catalog.mjs";
import { attachmentTypes } from "../src/content/types.mjs";
import { guides, problems } from "../src/content/guides.mjs";

resetCatalogCache();
const catalog = loadCatalog();
const dist = join(process.cwd(), "dist");
const errors = [];

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, files);
    else if (name.endsWith(".html")) files.push(path);
  }
  return files;
}

function words(html) {
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text ? text.split(" ").length : 0;
}

function expectedPaths() {
  const paths = [
    "/",
    "/tractors/",
    "/brands/",
    "/attachments/",
    "/compare/",
    "/sizing/",
    "/problems/",
    "/fit/",
    "/about/",
    "/methodology/",
    "/sources/",
    "/corrections/",
    "/privacy/",
    "/terms/",
    "/disclosure/",
    "/contact/",
  ];
  for (const model of catalog.models) paths.push(model.path);
  for (const model of catalog.models) if (model.maintenancePath) paths.push(model.maintenancePath);
  for (const brand of catalog.brands) paths.push(brand.path);
  for (const product of catalog.products) paths.push(product.path);
  for (const type of attachmentTypes) paths.push(`/attachments/${type.slug}/`);
  for (const page of catalog.comparisons) paths.push(page.path);
  for (const guide of guides) paths.push(`/sizing/${guide.slug}/`);
  for (const item of problems) paths.push(`/problems/${item.slug}/`);
  return paths;
}

function fileFor(urlPath) {
  const rel = urlPath === "/" ? "index.html" : `${urlPath.replace(/^\//, "").replace(/\/$/, "")}/index.html`;
  return join(dist, rel);
}

const notes = [];
for (const urlPath of expectedPaths()) {
  const file = fileFor(urlPath);
  let html;
  try {
    html = readFileSync(file, "utf8");
  } catch {
    errors.push(`Missing built page ${urlPath}`);
    continue;
  }
  const count = words(html);
  const minimum = urlPath.split("/").filter(Boolean).length >= 3 ? 110 : 80;
  if (count < minimum) errors.push(`Thin page ${urlPath} (${count} words, minimum ${minimum})`);
  if (urlPath.startsWith("/tractors/") && urlPath.split("/").filter(Boolean).length === 3) {
    if (!html.includes('class="source"') || !html.includes("https://")) {
      errors.push(`Model page missing a source ${urlPath}`);
    }
    const note = html.match(/<p class="note">([\s\S]*?)<\/p>/);
    if (note) notes.push(note[1].replace(/<[^>]+>/g, "").trim());
  }
  if (/\bwill fit\b/i.test(html)) errors.push(`Forbidden fit verdict on ${urlPath}`);
}

const unique = new Set(notes);
if (unique.size !== notes.length) errors.push(`Duplicate model notes: ${notes.length - unique.size}`);

if (htmlIncludes(dist, "implementfit-20") || htmlIncludes(dist, "rel=\"sponsored\"")) {
  errors.push("Affiliate markup is present while affiliatesEnabled is false");
}

function htmlIncludes(dir, needle) {
  return walk(dir).some((file) => readFileSync(file, "utf8").includes(needle));
}

const pages = walk(dist);
const counts = {
  model: catalog.models.length,
  maintenance: catalog.models.filter((model) => model.maintenancePath).length,
  brand: catalog.brands.length,
  product: catalog.products.length,
  type: attachmentTypes.length,
  comparison: catalog.comparisons.length,
  sizing: guides.length,
  problem: problems.length,
  trust: 8,
  fit: 1,
  htmlFiles: pages.length,
};
console.log(JSON.stringify(counts, null, 2));
if (errors.length) {
  console.error(errors.slice(0, 40).join("\n"));
  console.error(`${errors.length} validation error(s)`);
  process.exit(1);
}
console.log(`Validated ${expectedPaths().length} routes in ${pages.length} HTML files.`);
