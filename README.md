# ImplementFit

Cited specifications for US compact and sub-compact tractors. Pages are generated from the CSV files in `research/data`. A field is rendered only when its status begins with `VERIFIED`. Conflict cells are shown as conflicts and are not averaged.

The public site URL is a single setting in `src/site.ts` (`https://implementfit.com`). Affiliate links are off by default. Advertisement boxes are empty placeholders with no AdSense code.

## Preview

```bash
npm install
npm run dev
```

The dev server listens on http://127.0.0.1:4178 .

## Build

```bash
npm run build
```

`astro build` writes `dist/`. The validation script then fails the build if a routed page is missing, a model page has no source, a model note is duplicated, a page is under the word threshold, or affiliate markup is present while the flag is off.

Output is static and can be uploaded to Cloudflare Pages. This repository does not deploy it.

## Add a model later

Add a row to `research/data/models.csv` with a source URL and at least one status that begins with `VERIFIED`. The next build adds `/tractors/{brand}/{model}/`. The same pattern applies to `maintenance.csv`, `attachments.csv`, and `comparisons.csv`.
