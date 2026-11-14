# Full launch blueprint

Checked 2026-11-14. The owner’s direction is one public launch of a large site, not a small public test. This file is the blueprint for that launch. It does not build anything.

The site this plan describes is deeper than FitTractor’s sitemap of 415 URLs (190 model pages, 136 implement SKUs, guides, scenarios). Depth here means a sourced field, a measurement point, a document date, and an original paragraph. A larger count of thinner pages is not the goal, and Google’s own AdSense material says a better small site beats a large poor one. See `adsense.md`.

The red-team section attacks this plan. The revised plan under it is the one to build from.

## What can be published on day one, from the files in `research/data`

`models.csv` has 102 rows. About 80 of them are individual variants with a verified PTO figure. Thirteen rows are explicit gaps (2 Series, NX, Case IH, Branson, TYM, Bobcat, RK, and others) with every spec unverified. Loader lift is verified on about 10 rows. Weight is verified on about 14. Filter part numbers are not in the brochures. See `fluids-and-filters.md`.

A full launch that only shows verified cells is already a large site. It is not yet the entire US catalog. The production gate below is how the rest gets in before the single release, without a public half-site.

## Page types

### Model

URL: `/tractors/{brand}/{model}/`

One URL per model, with transmission rows on the page. Not one URL per cab, tire, or loader unless the brochure gives that variant its own PTO or weight that readers actually search. LS cab models that share a PTO can be sections, not extra URLs. The CSV keeps them as rows so the data is not lost.

Template fields, each rendered only when `status` begins with VERIFIED:

- Engine horsepower, unit note, document
- PTO horsepower by transmission
- Hitch phrase, unnormalized
- Rear lift, measurement point, and the document date
- Loader model and lift, measurement point
- Weight, and what the weight includes if the sheet says
- Transmission
- Tires
- Source URL and date checked
- Unknowns listed as “not in the document,” never as zero

Required original text, or the page does not ship: what is different about this transmission’s PTO, whether the hitch is limited, and which neighboring model is the wrong comparison. That paragraph is the part FitTractor’s definition list does not have and the part an AI Overview is likely to flatten.

Schema: `BreadcrumbList`, and `Product` with `additionalProperty` entries of type `PropertyValue` for each verified spec. No `AggregateRating`. No `FAQPage` unless that model’s questions are written for it and visible on the page.

### Maintenance

URL: `/tractors/{brand}/{model}/maintenance/`

Fields: oil spec, oil capacity, oil interval, oil filter, fuel filter, hydraulic filter, hydraulic fluid spec, hydraulic capacity. Each has its own source and verified flag.

The page ships only if at least one capacity or spec is verified from a brochure or a manual. Filter numbers ship only from an OEM lookup or the manual. Empty filter rows are allowed on a page that already has a real capacity. A page that is only empty rows does not ship.

Schema: `TechArticle` or `WebPage`. Do not mark a filter number as a `Product` SKU unless it is the OEM number and the seller link is disclosed.

### Attachment type

URL: `/attachments/{type}/`

Types for the launch set: rotary cutter, box blade, rear blade, land plane, rotary tiller, finish mower, flail mower, landscape rake, post-hole digger, pallet forks, grapple, ballast box, backhoe, snow blower, mid-mount mower.

Fields: what the tractor must supply (hitch, PTO speed, hydraulic flow), the measurement owners get wrong, and links to product pages whose maker stated a range. No universal “hp per inch” rule.

### Attachment product

URL: `/attachments/{type}/{maker}-{model}/`

Fields: width, maker’s horsepower range, whether that range is tractor PTO or gearbox rating, hitch, weight, PTO speed, source URL. Only rows in `attachments.csv` with a verified status, plus later rows that pass the same rule.

Land Pride RCR1242, RCR1248, and the Woods BB48X, BB60X, BB72X, BB84X sheets are the pattern. RCR1260 and RCR1272 stay in draft until the horsepower columns are read on the manual page. Titan’s 48-inch standard cutter can ship from the product page that states 20–60 HP and a 40 HP gearbox. Everything Attachments, CountyLine, King Kutter, and Frontier do not have a verified product row yet. They are not launched as empty SKUs.

### Brand hub

URL: `/brands/{brand}/`

Lists only models that have a live page. States the series difference that the documents support (Limited Category 1 on the John Deere 1 Series, Category I on the Kubota L02 sheet). No company history.

Launch hubs that have verified models now: John Deere, Kubota, LS, Yanmar, New Holland, Massey Ferguson, Mahindra, Kioti. Hubs for Case IH, Branson, TYM, Bobcat, and RK wait until a model page exists.

### Comparison

URL: `/compare/{a}-vs-{b}/`

Both columns from named documents. Ship only pairs that are already verified on both sides. First set:

- 1023E vs 1025R (one Deere brochure)
- L3902 gear vs L3902 HST, and the same pattern for L3302 and L4802 (one Kubota sheet). Hold L2502 until the 2023 sheet and the 2026 book are reconciled.
- CK2640 manual vs CK2640H
- eMax 22L gear vs eMax 22L HST
- 1626 HST vs 1626 shuttle
- GC1723E vs GC1725M
- SA221 vs SA424
- BX1880 vs BX2380 vs BX2680 as one three-way page, not three thin pairs

Do not publish 1025R vs 2025R. The 2025R side is unverified.

### Sizing guide

URL: `/sizing/{topic}/`

Topics: rotary-cutter width, box-blade width, loader lift versus fork load center, limited Category 1 versus Category 1, gear PTO versus HST PTO, mid PTO versus rear PTO, ballast options (no computed weight), how to read a horsepower pair.

Each guide uses numbers that are already verified and links to those model pages. It does not invent a width.

### Problem and FAQ

URL: `/problems/{model}/{slug}/` only where the operator’s manual has a procedure.

Allowed: where the serial plate is, if the manual says so; the start sequence the manual lists (neutral, PTO switch, fuel shutoff); the service interval the manual lists.

Not allowed: “five common failures” from a forum, bypassing a safety switch, or a ballast recipe. FitTractor already has a won’t-start guide. Do not rewrite it from a thread.

If the manual is not in hand, the FAQ does not ship. A sitewide FAQ of three real questions (why engine hp and PTO hp differ, why two lift numbers exist, why a Category 1 implement can still not fit a limited hitch) can ship, because those answers are in the documents already read.

### Fit checker

URL: `/fit/`

One page, one tool. Result URLs are not indexed (`noindex` on any query string).

Logic:

1. The tractor must be a row with verified PTO and verified hitch.
2. The attachment must be a row with a verified horsepower range and hitch.
3. The user picks the transmission if the tractor has more than one PTO.
4. Hitch: Limited Category 1 versus Category 1 is “geometry often does not match,” not “fits.” Category I and II means the sheet says both, and the tool says so. Unknown hitch is “cannot tell.”
5. Horsepower: if the tractor’s PTO for that transmission is inside the maker’s stated range, the result is “inside the published range.” If it is outside, “outside the published range.” If either side is missing, “cannot tell.”
6. Lift: compare only when both measurement points are the same phrase. Otherwise “cannot compare lift.”
7. The words “safe,” “approved,” and “will fit” are not in the result vocabulary.
8. Every result shows the two source URLs and the document dates.

### Trust

| URL | Role |
| --- | --- |
| `/about/` | What the site is. No personal name. The byline is the site name. |
| `/methodology/` | Unit rules, what verified means, why some cells are blank |
| `/sources/` | The document list and the date each was opened |
| `/corrections/` | A log. A wrong cell gets a dated correction, not a silent edit. |
| `/contact/` | `contact@` the domain only. No owner name, no phone unless one is deliberately published later. |
| `/privacy/` | The AdSense cookie language in `adsense.md`, plus whatever a consent tool requires |
| `/disclosure/` | Affiliate relationships, including “we may earn a commission” |
| `/safety/` | The lift, PTO, hitch, and ballast text below |

Schema on the about page: `Organization` with a `contactPoint` email. No `Person` node for the owner.

## Internal linking

- Every model links to its brand, its maintenance page if that page exists, the sizing guides that use its numbers, and any comparison it is in.
- Every product links to the attachment type and to tractors only through the fit tool, not through a hand-maintained “fits these 40 tractors” list that will rot.
- Every guide links down to the models it cites.
- Trust pages are in the footer on every page.
- No page is only reachable by search. If it is not in a hub, it does not launch.

## Launch page count by type

Two counts. The ceiling is the single release after the remaining official sheets are read. The floor is what the current CSV can support without inventing a cell. The public launch is one event. It is the ceiling if the production pass finishes, and it must not drop below the floor by padding.

| Type | Floor, from documents already opened | Ceiling, after the missing sheets and manuals are read | FitTractor sitemap, for scale only |
| --- | ---: | ---: | ---: |
| Model | 80 | 160 | 190 |
| Maintenance | 25, where a brochure capacity exists | 120, where a manual was opened | 0 |
| Attachment type | 8 | 15 | about 13 category URLs |
| Attachment product | 8 | 50, maker-stated only | 136 SKUs |
| Brand hub | 8 | 14 | 14 |
| Comparison | 12 | 30 | a handful of guides |
| Sizing guide | 8 | 8 | overlapping guides |
| Problem or FAQ | 4 sitewide, plus serial pages only where a manual is open | 20 | several how-to guides |
| Trust | 8 | 8 | several policy URLs |
| Fit tool | 1 | 1 | 1 calculator |
| **Total** | **162** | **426** | **415** |

The ceiling is slightly above 415 and is heavier on maintenance, measurement, and citations. It is lighter on SKU pages. That is the depth difference. Hitting 426 by adding unverified models would erase it.

The floor is not a public “test batch.” It is the minimum honest site. The owner’s launch is the ceiling, published once, after the gap rows in `models.csv` are either verified or explicitly dropped.

## Production pipeline

1. A source file is downloaded and named with the brand, document date, and URL. PDFs stay out of the git repo. They are copyrighted layout even when a fact in them is usable.
2. A person reads the spec table. Text extraction is a hint. The L2502 conflict and the Kioti swapped lift line are why a human flag exists.
3. The row is written to `models.csv` or `attachments.csv` with a status on every field.
4. Templates read the CSV. A field renders only when the status starts with VERIFIED. Conflict statuses render the conflict, not a chosen number.
5. A second person, or the same person on a second day, checks ten pages at random against the PDF before release. Failures go to `/corrections/` and block the release.
6. Build the static site. Do not generate a URL for a gap row.
7. One DNS cutover. No earlier public subset.

`human_verified` is the status column that already exists, not a new workflow tool. Blank means do not render.

## Thin and duplicate content

- The same 200-word hitch essay is not pasted onto every model. The essay lives at `/sizing/limited-category-1/` and the model page links to it.
- Transmission variants that share every verified number do not get two indexed URLs. LS cabs can be headings on the base model if the only difference is the cab weight, once that weight is verified. Until then, do not mint the URL “for later.”
- Fit-checker query strings are `noindex`.
- Acreage “best tractor” pages are not in the launch. FitTractor already has that pattern, and the pages go stale.
- Dealer-hosted John Deere numbers stay in the data file with the dealer URL visible. Before launch, replace them with a deere.com or widen.net file, or the page says “dealer-hosted literature” in the source line.

## E-E-A-T

Experience and expertise, without naming the owner:

- The methodology page shows the unit failures this research found. That is the expertise. A biography is not required, and the owner asked that their name not appear.
- Sources are primary brochures and manuals, linked.
- Corrections are public.
- Contact is `contact@` the domain.
- Affiliate links are disclosed on the page, above the link, not only in a footer.
- No invented author photo, no stock “our team,” no fake years of experience.

## Safety text, on every lift, hitch, PTO, and ballast page

The number is the manufacturer’s number for the point the document names. It is not pallet-fork capacity and not grapple capacity. Limited Category 1 is not a synonym for Category 1. PTO horsepower is not engine horsepower, and gear and HST differ. The site does not calculate ballast. Front weights, a ballast box, and liquid in the tires are options the manual specifies for a stated loader or backhoe. A wrong ballast instruction can lead to a rearward overturn. The page tells the reader to use the operator’s manual and to keep the ROPS up and the seat belt on. It does not describe removing a PTO shield or defeating a safety switch. Specs change by year and market. The brochure date is the date of the fact.

## Monetization at launch

Turn on, in this order, only after the contract is read:

- Titan on Impact, after the offer states whether the rate is the 4% or the 5% that both appear on `https://palletforks.com/pages/affiliate-program`. The page does say 30 days.
- Tractor Supply on Partnerize, after the rate card is visible. The public page does not show a rate.
- Amazon Associates at the published 3% for Lawn & Garden, Tools, and Outdoors, knowing the session is 24 hours.
- Everything Attachments only after they state a rate. Messick’s links stay unpaid unless they offer a program.

Ads: privacy policy and consent banner first, then apply to AdSense on the finished site. Do not apply on a staging template. See `adsense.md`.

## Traffic and revenue model

Every number below is an assumption or an unknown. None of them is a forecast.

| Input | Status |
| --- | --- |
| Search volume for “box blade,” “brush hog,” “1025R” | Unknown. A Trends comparison was not confirmed (HTTP 429). |
| FitTractor’s ability to hold the fit queries | Unknown. Tranco rank about 4.3 million on 2026-11-13 says they do not dominate yet. |
| TractorData visit estimates | Third-party, hundreds of thousands a month, mostly not this compact band. See `competitors.md`. |
| Click-through on a pure “PTO hp” query | Assumed to be poor because AI Overviews can answer from the brochure. Not measured. |
| Sessions in month 12 | Unknown. Do not plan on a number. |
| AdSense RPM of about $31–$36 | Unverified scouting note. Not used. |
| A placeholder RPM of $8 | Assumption, for illustration only, not a source. |
| Titan rate | Unresolved between 4% and 5% on the merchant’s own page. |
| Average referred cutter at $2,500 | Assumption. One Titan page showed a 48-inch cutter in the $2,000s and a comparison site showed other prices. Not an average. |
| Ten Titan sales a month | Assumption. Not a pipeline. |

Illustration, labeled as arithmetic on assumptions, not a plan: if the unresolved Titan rate is 5% and someone later refers ten $2,500 orders in a month, the commission is $1,250 that month. If the rate is 4%, it is $1,000. If the orders are zero, it is zero. Amazon at 3% on a $40 filter is $1.20 per order, and the 24-hour session will miss many of them. Display revenue is not estimated.

The useful planning statement is qualitative: maintenance and product pages are the ones that can pay; spec-only pages are the ones AI Overviews can answer; the site should be able to stand with the ads removed.

## Post-launch roadmap

After the single release, in order:

1. Reconcile conflicts already in the CSV (L2502, Mahindra 1600 lift versus the HTML page, Kioti lift units, John Deere 4 Series page 15).
2. Open the gap-row documents: Deere 2 Series, Massey 1700/1800/2800, Case IH, the rest of New Holland, Branson, TYM, the rest of LS, Bobcat, RK, Kubota LX20, Mahindra 4500.
3. Manual pass for filters, one model a day, starting with 1025R, BX2380, CS2510H, and the MT2 sheet.
4. Add a product page only when the maker’s page states width and horsepower.
5. Add a comparison only when both sides are verified.
6. Re-read AdSense policy if the account is refused, and fix the pages named in the email. Do not add more thin URLs as the fix.

## Red team

**Scaled content.** Google’s spam policies treat many pages created to catch queries, without original information, as abuse (`https://developers.google.com/search/docs/essentials/spam-policies`). A 160-page model template plus a 120-page maintenance template is that pattern if the only difference is the model name. The original-paragraph rule and the “no URL without a verified fact” rule are the mitigation. They are also easy to skip under a launch deadline. If they are skipped, the site is a second FitTractor with worse citations, and AdSense’s rejection article specifically names auto-generated pages.

**The owner’s size theory.** `adsense.md` quotes Google: no minimum page count, a review of all pages, rejection for insufficient and auto-generated content, and a policy video that says a better site with fewer pages beats a large site with poor content. Launching 426 URLs to get approved faster is not supported by Google’s docs. Launching 426 URLs of sourced pages does not hurt by itself. Launching them before the cells are checked does.

**Data error.** This pass already found unit mismatches, a self-contradictory Kioti lift, two Mahindra lift numbers, and two Kubota L2502 PTO pairs. Publishing the wrong one can send someone to buy a cutter the tractor will not run, or to trust a lift number measured at the wrong point. A disclaimer under a bad number does not fix the number. The correction log and the second-person spot check are the fix. They have to be allowed to delay the cutover.

**Liability.** The fit checker looks like a decision. “Inside the published range” is as far as the language goes. A ballast calculator is not in the plan. Adding one later, because “tractor ballast calculator” is a suggestion, is the highest-risk change available. Do not add it. This is not a legal opinion. A lawyer should see the result wording before the tool is public if the publisher wants a liability review. The operational ban does not wait on that.

**Crawl.** A few hundred static pages are not a crawl-budget problem on a new domain. Millions of fit-result URLs would be. That is why result URLs are not indexed. Faceted filter pages (`/tractors/filter/under-30-pto-hp/`) should be a short list of real indexes, not every combination of hitch, horsepower, and brand. FitTractor has those filters. Copying all of them creates duplicate lists. Launch with brand hubs and two or three real indexes (limited Category 1, under 30 PTO hp, HST versus gear), each with a unique introduction.

**Affiliate thinness.** AdSense says affiliate content should be a minor part of the site if it adds nothing else. Product pages that are only a buy button will fail that sentence. The maker’s range, the measurement note, and the link to the method page are the “something else.” If they are missing, do not put the product page in the launch.

**Competition.** FitTractor can add maintenance URLs before this launch. TractorData will still own “PTO hp” queries. The launch does not beat them by count. It beats a thin SKU page by showing the measurement and the document. If that is not true of a specific URL, that URL is cut, even if the total falls under 415.

## Revised plan

The public launch stays one release. The 25-page public test from the earlier plan is not the plan.

What changed after the red team:

- The launch inventory is the ceiling table, not a promise to mint 426 URLs.
- A URL ships only with a verified fact and a short original note. Gap rows do not become pages.
- Maintenance pages ship when a capacity or a manual spec exists, not as 160 blanks.
- Fit results and extra filter combinations are not indexed.
- Dealer-hosted Deere figures stay labeled, and the 2 Series is absent until a Deere file is opened.
- AdSense is applied after the cutover, on the finished site, with the privacy policy already live. Page count is not the tactic.
- The cutover waits for the spot check. A wrong PTO cell delays the launch. That is the point of doing it in one go: the first impression is the whole site, so the whole site has to be checkable.
- Conflicts already known (L2502, CS2510H lift, 1600 lift, 4066M gear PTO, 3046R PTO) are either shown as conflicts or omitted. They are not resolved by averaging.

## What is needed before a build starts

1. Accept this gate: no page for an unverified cell, even if that holds the count down.
2. Finish the visual read of the scrambled tables: Mahindra 2600 per tractor, Kioti SE PTO row, John Deere 4 Series page 15, Land Pride 60-inch and 72-inch horsepower columns, L2502 against both Kubota documents.
3. Download the missing official sheets listed as gap rows. Do not fill them from FitTractor or TractorData.
4. Decide the domain and create `contact@` that domain. Re-check RDAP the same day. The 2026-11-14 results in `verdict.md` are already stale as a reservation.
5. Implement the CSV as the only spec source in the Astro content collection, with the template dropping non-verified fields.
6. Write the eight trust pages, including the privacy language Google lists, before any ad tag.
7. Do not start the fit checker until the result states in this file are the ones in the interface.
