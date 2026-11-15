# Design audit

Written 15 Nov 2026 after the first static build, before the workshop restyle.

## What read as a template

The first build was a beige page with a forest-green bar, Georgia headlines, and a grid of equal white cards. That combination is the current default for generated sites.

- The header was a solid green band with the wordmark on the left and a row of underlined links. No job stated in the bar. It looked like a theme, not a catalog.
- The home page opened with a slogan, “Specs you can trace to a document,” then a paragraph about the editorial process, then an empty dashed advertisement box, then eleven identical brand cards (“15 models with a verified cell”). Equal cards with the same sentence and a soft 10px radius are the card-grid tell.
- Section rhythm was the same on every model page: title, gray lede, green left-border note, table, “How to read this page,” a peach safety box, “Related pages,” “Other series rows.” The “How to read” paragraph was copied onto all 217 model pages.
- Corners were rounded (10px cards, 8px buttons). Shadows were absent, but the radius plus the card grid did the same work.
- Type was Georgia for headings and Segoe UI / system-ui for body. No tabular numerals, so spec columns did not line up like a sheet.
- Color was a generic green-and-rust pair. Nothing in the interface said shop, hitch, or steel.
- Copy explained the site’s rules more often than it told a buyer what the cell means. “Only cells marked verified are shown, and each one keeps the wording of its source” is a process sentence, not a shop sentence.
- There was no tool on the home page. The fit check was a link in a paragraph.
- No photographs and no emoji, which was already the right call. The problem was the layout, not clip art.

## Direction

SawChainSize.com, the same owner’s site, is the model. It is a workshop page: steel header, orange rule, paper background, one finder, then a short argument, then a dense list. ImplementFit borrows that system instead of inventing a second one.

Borrowed, and used here:

- Colors: paper `#f3f4f6`, card white, ink `#1e2226`, steel header `#232a30`, accent `#cf4a08`, accent-dark `#a83c05`, accent-soft `#fbeadd`, muted `#5b636c`, lines `#d5d8de` and `#b7bec8`, ok green and warn amber with the same tokens, including the dark `prefers-color-scheme` set (`--paper #14171a`, `--card #1d2126`, `--ink #e9e6df`, `--accent #f0732f`).
- Type: Barlow for text, Barlow Condensed for the wordmark and headings, IBM Plex Mono for spec values. The woff2 files are the same cuts, served from this site.
- Structure: sticky steel header with an orange bottom edge, a literal H1 (“What fits your compact tractor”), a finder card with a steel title bar and an orange full-width button, brand then model selects fed by inlined JSON, then the section “Horsepower alone does not pick the implement,” then a dense table of often-looked-up models instead of a card grid.
- Small radius (4–6px) only on the finder, chips, and buttons, matching that site. No decorative illustration. The chainsaw drawing on SawChainSize is theirs; this site does not copy it.

Not borrowed: their animated saw, cookie bar, shop buttons, and page copy.
