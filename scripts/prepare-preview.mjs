import { existsSync, unlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const headersPath = join(process.cwd(), "public", "_headers");
const preview = process.env.PREVIEW === "true";
const clean = process.argv.includes("--clean");

if (clean || !preview) {
  if (existsSync(headersPath)) unlinkSync(headersPath);
} else {
  writeFileSync(headersPath, "/*\n  X-Robots-Tag: noindex\n");
}
