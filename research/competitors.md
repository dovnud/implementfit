# Competitor teardown

Checked 2026-11-14. This file describes page types, URL patterns, fields, and public traffic estimates. It does not reproduce anyone’s spec tables, diagrams, or manual text.

Traffic figures below are third-party estimates. They disagree with each other. None of them is a log file from the site.

## FitTractor.com

This is the direct product competitor. It is a compact and sub-compact attachment-fit database, not a general tractor encyclopedia.

**Identity and age.** Verisign RDAP for `fittractor.com` returned HTTP 200 on 2026-11-14. Registration date `2026-04-17T20:20:17Z`, expiration `2028-04-17`, last change `2026-07-29`, registrar Hostinger (IANA 1636), nameservers `CASS.NS.CLOUDFLARE.COM` and `ELIAS.NS.CLOUDFLARE.COM`. Source: `https://rdap.verisign.com/com/v1/domain/fittractor.com`. The RDAP object’s “last update of RDAP database” event was `2026-11-14T19:32:50Z`.

**Traffic signal.** Tranco list API, date 2026-11-13, rank **4,325,354**. Source: `https://tranco-list.eu/api/ranks/domain/fittractor.com`. That is outside the top 1 million. A scouting note that said the domain was not in the Tranco top 1M matches this rank. The rank itself is the figure to keep. No Similarweb or Ahrefs number was opened for this domain.

**Size, two counts that do not match.** The about page, as returned in search on 2026-11-14, states 194 tractors, 154 attachments, 14 brands, and 13 attachment types (`https://www.fittractor.com/about/`). The sitemap downloaded the same day (`https://www.fittractor.com/sitemap.xml`) contained **415 URLs**:

| Section | URLs in sitemap |
| --- | ---: |
| Tractor model pages (`/tractors/{brand}/{model}/`) | 190 |
| Tractor brand hubs | 14 |
| Tractor index, hitch filters, and other filters | the rest of 208 tractor URLs |
| Implement item pages | 136 |
| Implement category and filter pages | the rest of 152 implement URLs |
| Guides, including the index | 22 |
| Task scenarios, including the index | 17 |
| Standalone tools and trust pages | home, compatibility guide, buyer’s guide, weights and sizes, loader lift calculator, glossary, methodology, about, editor, newsletter, contact, privacy, terms, cookies, affiliate disclosure, editorial policy |

`lastmod` values in that sitemap run from 2026-01-25 to 2026-11-06. Model URLs were stamped 2026-11-06. The about-page counts and the sitemap counts differ by a few tractors and by about 18 attachments. Treat the sitemap as the crawlable inventory and the about page as the site’s own claim.

**Brands in the model-page URLs.** Kubota 35, Kioti 23, LS Tractor 21, John Deere 17, Massey Ferguson 15, Mahindra 15, New Holland 13, Branson 12, Zetor 8, TYM 7, Yanmar 7, Case IH 7, Bobcat 6, RK Tractors 1. Zetor is a weak fit for a US compact retail site. RK is barely covered.

**Page types and URL shape.**

- Model: `/tractors/{brand}/{slug}/`
- Brand hub: `/tractors/{brand}/`
- Filters: `/tractors/filter/sub-compact/`, `/tractors/filter/by-hitch/limited-category-1/`, `/tractors/filter/under-30-pto-hp/`, `/tractors/filter/with-front-loader/`
- Implement item: `/implements/{type}/{slug}/`
- Implement category: `/implements/rotary-cutter/`, `box-blade`, `rotary-tiller`, `grapple`, `landscape-rake`, `snow-blower`, `rear-blade`, `finish-mower`, `post-hole-digger`, `flail-mower`, `bale-spear`, `pallet-forks`, `land-plane`
- Guides under `/guides/…` for hitch categories, limited Category 1, PTO hp versus engine hp, 540 versus 1000 rpm, loader lift, ballast, quick-attach standards, fluid types, comparisons, and seasonal jobs
- Scenarios under `/scenarios/best-tractor-for-…` (5 acres, 10 acres, snow, food plots, brush, and similar)
- A loader lift calculator at `/loader-lift-calculator/`
- Trust pages, including `/affiliate-disclosure/`, `/methodology/`, `/editorial-policy/`

**How deep one model page goes.** The Kubota BX2380 HTML fetched 2026-11-14 (`https://www.fittractor.com/tractors/kubota/bx2380/`) is server-rendered and about 22 KB. Visible structure, from headings and definition labels only:

- Definition list: engine horsepower, PTO horsepower, PTO speeds, hitch, 3-point lift capacity, class, series, front loader, loader lift at pivot pin, loader quick-attach
- Sections titled as a comparison, attachments by task, a “what fits” count, a “compatible with notes” count, a “does not fit” count, and an FAQ (PTO hp, hitch category, lift, which cutters fit, a specific SKU question)
- JSON-LD is present
- Internal links in that static HTML were sparse (assets and tractor links). The fit lists may be filled by a later render. Do not assume the static file is the whole page.

**What is missing from the URL inventory.** No `/parts/`, filter, fluid, or serial-number section. Maintenance shows up as a handful of guides (hydraulic fluid, won’t-start, tire chains, spring startup were visible in search snippets of `/guides/`), not as a part-number system. That is the clearest product gap relative to the site planned here.

**Freshness.** Sitemap dates are late 2026, and search snippets of guides carry “Updated Oct 2026” lines. The domain is seven months old. Freshness is not the weakness. Authority and links are.

**Monetization, from the page source.** The BX2380 HTML contains a `google-adsense-account` meta tag and an `impact-site-verification` meta tag, plus Google Tag Manager. No Amazon host appeared in that file. Read that as: AdSense and Impact are wired, not as evidence of revenue. The publisher ID is omitted here on purpose. Combined with the affiliate-disclosure URL, the business model is display ads plus Impact affiliate links. Titan Attachments’ own program page says it runs on Impact (see `affiliates.md`).

**UX and strategic weaknesses.**

- The product is the same product ImplementFit was meant to be: model pages, implement pages, hitch and PTO explainers, a lift calculator, task pages.
- Tranco rank near 4.3 million means the head start is in content, not in rankings. A new domain is not locked out by their links. It is locked out of “we are first to publish this template.”
- Programmatic fit lists (“what fits” / “does not fit”) will be thin if the only original sentence is a restated spec. Google’s scaled-content abuse policy is the risk for them and for any clone. Policy: `https://developers.google.com/search/docs/essentials/spam-policies`.
- Zetor and a single RK URL dilute the US compact focus.

**Ideas to take, without their words.** Citation status on each figure. Separate “fits,” “fits with a note,” and “does not fit.” Filters by hitch and by PTO band. A methodology page. Do not copy their counts, FAQ answers, or fit lists.

## TractorData.com

The incumbent reference site for tractor specifications. Homepage on 2026-11-14 titled “TractorData.com - information on all makes and models of tractors” and states a database of farm, lawn, and industrial tractors, a family business in southern Minnesota, and “for 25 years.” The homepage figure observed in search was 18,317 tractors (`https://www.tractordata.com/`). A January 2026 third-party writeup said 18,182. Use the site’s own number and expect it to move.

**URL structure, verified by opening a model URL.**

- Model: `/farm-tractors/007/2/7/7277-john-deere-1025r.html` (numeric id plus slug)
- Subpages from links on that cluster: `…-dimensions.html`, `…-engine.html`
- The same pattern supports series maps and brand indexes under `/farm-tractors/`

**How deep a model page goes.** The 1025R page is one machine, not a fit engine. Field groups visible on the page, described here without the numbers: production span, series, manufacturer and factory, original price by year, transmission, engine horsepower, claimed PTO horsepower, mechanical layout, capacities, hydraulics, hitch type, lift at 24 inches, PTO type and speeds including mid PTO, dimensions and tires, a short attachment list, serial-number location, electrical, and a references list pointing at John Deere publications. The page shows a “data modified” date; for this model the visible date was 28 February 2026. A disclaimer tells the reader that errors happen and to consult the manufacturer before service. Subpages split dimensions and engine, which multiplies indexable URLs per model.

**Internal linking.** Series map to sibling models, brand index, and the dimension and engine subpages. Attachment mentions link onward. This is an old, dense reference graph. It is not organized around “which cutter fits.”

**Freshness.** The 1025R page was touched in 2026. The site says the database is updated constantly. Individual old models can sit for years. That is acceptable for a historical spec archive and weak for “what is on the dealer lot this month.”

**Monetization.** The homepage HTML fetched 2026-11-14 loads `securepubads.g.doubleclick.net`. That is Google Publisher Tag display advertising. No store and no affiliate program was evident on the homepage fetch. Similarweb’s public page says organic search is the largest desktop channel (66.85% in the October 2026 view below).

**Traffic estimates, all third-party.**

| Source | What it claims | URL |
| --- | --- | --- |
| Tranco API, 2026-11-13 | Rank 64,419 | `https://tranco-list.eu/api/ranks/domain/tractordata.com` |
| Similarweb public page titled October 2026 | 919.4K visits, global rank 52,658, US rank 14,245, 69.38% United States, bounce 47.39%, 3.57 pages/visit, 2:05 duration, organic search 66.85% of desktop | `https://www.similarweb.com/website/tractordata.com/` |
| HypeStat | About 1,013,141 monthly visits, and a separate SEMrush block of 397,830 organic visits, 163,997 organic keywords, organic traffic value about $404,970 | `https://hypestat.com/info/tractordata.com` |
| DirectoryGems, 10 January 2026, citing Ahrefs | 475K monthly organic visits, domain rating 62, and an annual “traffic value” of $12M. Example keywords it attributes to Ahrefs: “tractor data” 9,500, “tractordata” 7,800, “john deere 4020” 3,300 | `https://www.directorygems.com/case-study/tractordata-com` |

The $12M figure and the HypeStat SEMrush value of about $405K cannot both be a normal ad-revenue number. DirectoryGems is a promotional case study. Do not use $12M for planning. The useful signal is the order of magnitude: TractorData is a top-100k site with several hundred thousand visits a month, mostly people asking for a model’s specs. Several of the keywords in that case study are vintage row-crop John Deere models, not compact tractors. Compact-only demand is a slice of this traffic, not the whole of it.

**Weakness for this niche.** No implement-fit logic, no retailer links, no filter cross-reference. Spec pages answer “what is the PTO hp” so completely that an AI Overview can lift them. Beating TractorData on a bare spec table is a bad bet. Beating it on “which cutter, which filter, which fluid, measured how” is the opening.

## TractorByNet

Forum plus marketplace. Homepage title fetched 2026-11-14: “TractorByNet - Research, Community, Marketplace” (`https://www.tractorbynet.com/`). Search snippets describe a large owner community. Page type is the thread, not the model record. URLs are forum paths. Internal linking is forum structure (board, thread, user), which is strong for “problem + model” queries and useless as a spec database.

**Traffic estimates.**

- Tranco 2026-11-13: rank 61,090. `https://tranco-list.eu/api/ranks/domain/tractorbynet.com`
- Similarweb public page (German edition, titled October 2026): 504.9K visits, global rank 109,924, 82.72% United States, organic search 55.15% of desktop, bounce 62.89%, about 2 pages/visit, duration 1:27. `https://www.similarweb.com/de/website/tractorbynet.com/`

The first 180 KB of the homepage did not include a known ad host. Ads may still load in the forum. Classifieds are part of the product. Weakness: the answer to “will a 60-inch cutter fit” is buried in a thread from an unknown year, with no source line. That is why a cited database can win snippets even against a bigger forum. Strength: trust and anecdotes. Do not scrape threads into articles.

## Messick’s

Dealer and parts seller (`https://www.messicks.com/`). A sample catalog URL is `https://www.messicks.com/catalogs/curtis/john-deere-1023e-1025r`. Page types observed from that URL and from search: illustrated parts catalogs by brand and attachment maker, parts search, and phone support. The homepage returned HTTP 403 to this client, so the nav was not fully walked.

**Traffic.** Tranco 2026-11-13: rank 58,555. `https://tranco-list.eu/api/ranks/domain/messicks.com`. That is commercial-intent traffic, close to TractorByNet’s rank and ahead of TractorData’s Tranco rank even though Similarweb rates TractorData’s visits higher. Rank lists and visit estimates are not the same metric.

**Monetization.** Parts and wholegoods margin. No public affiliate program was found (see `affiliates.md`). Weakness for a publisher: you cannot assume a commission. Strength: they already rank for part lookups. A filter page that sends the reader to Messick’s, Tractor Supply, or Amazon is useful even if only some of those links pay.

## OrangeTractorTalks and GreenTractorTalk

Brand forums. OrangeTractorTalks is Kubota. GreenTractorTalk is John Deere.

- OrangeTractorTalks homepage fetched 2026-11-14, title “OrangeTractorTalks”. A third-party host `madskills.com` was in the HTML. This pass did not confirm what that host does, so it is not labeled an ad network here.
- Fathom.tools, labeled August 2026: about 224K monthly visits, domain rating 43/100, domain registered 2008, organic search about 63%. `https://www.fathom.tools/site/orangetractortalks.com`. Another estimator, websites-traffic.com, shows 247.0K visits and says the domain was created 2008-09-11. `https://websites-traffic.com/site/orangetractortalks.com`. Two estimates, same neighborhood, neither is analytics.
- GreenTractorTalk, Similarweb public page titled September 2026: 349.5K visits, global rank 140,753, 93.46% United States, organic search 51.72% of desktop, bounce 40.13%, 2.23 pages/visit, duration 1:23. `https://www.similarweb.com/website/greentractortalks.com/`. The site’s own description in that listing is a John Deere owner forum covering towing, PTO, attachments, and troubleshooting.

These forums own “common problems,” “won’t start,” and “is this normal” queries. A reference site should link the question to the manual procedure and not reprint forum threads.

## MyTractorForum and Yesterday’s Tractors

Adjacent forums, not compact-only.

- MyTractorForum, Similarweb titled September 2026: 459.9K visits, global rank 104,219, organic search 67.58% of desktop. `https://www.similarweb.com/website/mytractorforum.com/`.
- Yesterday’s Tractors appears in Similarweb’s “compare” widgets on the pages above. This pass did not open a Similarweb number for it. It is an older-tractor forum and parts seller. Relevant as a pattern (community plus parts), not as a compact-tractor competitor.

## TractorHouse

Sandhills equipment marketplace. A listing URL observed in search: `https://www.tractorhouse.com/listing/dismantled-machines/262361313/john-deere-1025r-less-than-40-hp-tractors`. Page type is the classified (for-sale or salvage), with seller, location, and whatever the dealer typed for horsepower. That horsepower is not a spec sheet. Monetization is listing fees and lead generation to dealers. Similarweb comparison widgets on other sites hide TractorHouse’s visit count behind a placeholder, so no visit estimate is recorded here. Weakness: no fit logic. Use it only as a “for sale” destination, and do not treat listing horsepower as a spec.

## Everything Attachments

Attachment manufacturer and retailer. `https://www.everythingattachments.com/`. An affiliate info page exists at `https://www.everythingattachments.com/affiliate_info.php` and describes a first-party tracking-link program. The HTML retrieved on 2026-11-14 did not include a commission rate (see `affiliates.md`). Page types are the store taxonomy: cutters, box blades, tillers, and so on, plus a product page. They are a merchant, not a compatibility database. Internal linking is category to product. Weakness: the page answers “buy this SKU,” not “does it fit a BX2380.” That is why a reference site can sit above them in the funnel.

## Tractor Supply

Retailer. The public affiliate page names Partnerize and does not publish a rate (`affiliates.md`). Tractor Supply publishes buying guides and sells CountyLine implements, fluids, and filters. This pass did not inventory the guide URLs. Treat their guides as retail content that ranks because of the domain, and expect them on commercial queries (“pallet forks tractor supply” is a live Google suggestion; see `keywords.md`). Weakness: a guide on a retailer domain is there to sell the house brand. A cited sizing page can still rank beside it if it shows the measurement, not a slogan.

## tractorgearbox.com and tractorpartscentral.com

Both were in the brief. Homepage fetches were not completed: the batch client stopped before those responses were recorded, and a follow-up was not run. No traffic estimate, URL inventory, or monetization claim is made for either domain in this file. Do not fill the gap from memory. Re-fetch before treating either as a real competitor.

## r/tractors

The subreddit exists. `https://www.reddit.com/r/tractors/about.json` and `https://old.reddit.com/r/tractors/` both blocked this client (a challenge page, not a subscriber count). Subscriber count is **unknown**. Page type is the post. Monetization is Reddit’s, not the community’s. Useful as a source of question phrasing. Not a source of spec numbers, and not something to mine for articles.

## YouTube

No subscriber counts were verified in this pass, so none are stated. Compact-tractor fit and repair questions are answered on camera by dealer channels (Messick’s publishes video alongside parts) and by owner channels. Video wins the “watch me hook this up” query. A text site wins the “part number, PTO hp, hitch category, with a source” query. Plan on being cited by videos, not on outranking a demonstration.

## Other sites that showed up while searching

- **TractorPicker** (`https://tractorpicker.com/categories/compact`) appeared in search as a compact comparison catalog (“114 models” in the search snippet). It was not audited. It is another new structured-data competitor. Do not copy its figures. Several numbers in that snippet mix engine horsepower and PTO horsepower in one line, which is the failure mode this project has to avoid.
- **University extension and manufacturer brochures** are sources, not competitors. They outrank thin pages when the query is “what is a Category 1 hitch.”

## What the set looks like together

| Job the searcher has | Who answers it today | Opening |
| --- | --- | --- |
| “PTO hp of this model” | TractorData, and increasingly the manufacturer and AI Overviews | Do not build a second spec table as the product |
| “Will this cutter fit” | FitTractor, since April 2026, plus forum threads | They have the template and almost no domain rank. Win on sources, maintenance, and measurement, not on cloning the URL list |
| “What filter / what fluid” | Messick’s, dealer parts catalogs, Amazon | No public affiliate at Messick’s. Still the best unmet page type in the FitTractor sitemap |
| “What width cutter for this tractor” | Autocomplete shows the queries. No dominant cited tool was identified | Method page, not a copied chart |
| “It won’t start / is this noise normal” | Forums and YouTube | Leave it, or write a manual-based procedure with a date. Do not summarize a thread |

The scouting note that FitTractor is young, has on the order of 190 tractors and 150 attachments, about 415 URLs, and is outside the Tranco top 1M is confirmed, with the exact counts and rank above.
