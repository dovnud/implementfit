import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { siteConfig } from "./src/site";

export default defineConfig({
  site: siteConfig.url,
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("?"),
    }),
  ],
});
