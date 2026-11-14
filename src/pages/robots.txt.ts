import type { APIRoute } from "astro";
import { isPreviewBuild, siteConfig } from "../site";

export const GET: APIRoute = () => {
  const body = isPreviewBuild()
    ? "User-agent: *\nDisallow: /\n"
    : `User-agent: *\nAllow: /\nSitemap: ${siteConfig.url}/sitemap-index.xml\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
