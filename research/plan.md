# ImplementFit plan

Checked 2026-11-14. Working name only. No site is being built in this pass. The stack in the brief is Astro on Cloudflare Pages. That stack fits a page-per-model reference site: static HTML, a small interactive checker later, no database required for the test batch. It is not a reason to generate hundreds of pages.

The red-team section is an attack on the plan above it. The revised plan under that attack is the one to follow.

## Architecture

One static site. One content collection per page type. Spec cells live in structured data (JSON or a typed collection), not in prose, so a page cannot state a PTO horsepower that the data file does not have.

```
/                                  home: what the site will and will not tell you
/tractors/{brand}/{model}/         model
/brands/{brand}/                   brand hub
/attachments/{type}/               attachment type, not a SKU
/sizing/{topic}/                   method pages
/maintenance/{model}/              filters, fluids, capacities
/compare/{a}-vs-{b}/               only when one or two documents support both sides
/guides/{topic}/                   hitch, units, lift points, safety
/fit/                              checker, after the static pages work
/sources/                          document list and dates
/disclosure/                       affiliate and safety
```

URL rules:

- One URL per model, not per transmission. Gear and HST are rows on the page.
- Do not use a numeric id in the path. TractorData’s id scheme is for 18,000 historical machines. This site has a few hundred at most.
- Do not publish `/best-tractor-for-{n}-acres/` in the test. FitTractor’s sitemap already has that pattern.
- Do not publish a URL per implement SKU in the test. FitTractor already has 136.

Internal links, required on every model page:

- Brand hub
- The sizing page for each attachment type the sheet can actually support
- The maintenance page
- The unit and hitch guides
- The source document, as an external link

No orphan model pages. A page with a spec table and no outbound citation fails the template.

## Page templates

### Model

Above the fold, in this order: model, brand, brochure year, and a sentence that engine horsepower and PTO horsepower are different numbers. Then a table with one row per sourced field:

- Engine power, with the standard named (SAE J1995, 97/68/EC, or “unlabeled”)
- PTO horsepower for each transmission the sheet lists
- PTO speeds, rear and mid, if stated
- Hitch phrase, copied from the sheet (“Limited Category 1,” not a cleaned-up synonym)
- 3-point lift, with the measurement point in the row label
- Loader lift, only if a loader sheet was opened, with the pin or the forward distance named
- Weight, only if sourced

Empty cells render as “not in the document we read,” not as a dash that looks like zero. Under the table, a source line: document title, URL, document date, date checked. A short original paragraph can explain a real consequence (the HST PTO is lower than the gear PTO on this model, so a cutter rated at the gear figure may be the wrong match). It cannot restate the table in adjectives.

Fit module, later: “implements whose own sheet overlaps this PTO and this hitch.” Each implement row cites the implement sheet. Until those sheets are opened, the module stays off. A fit list with no implement source is FitTractor’s template without FitTractor’s citations.

Maintenance module: link to the maintenance page. Do not duplicate the part numbers in two places without a single data record.

### Maintenance

Fields: engine oil spec, oil capacity, oil filter, fuel filter, hydraulic filter, hydraulic fluid spec, hydraulic capacity, change interval. Each is sourced to a manual or an OEM lookup for a stated serial guidance, or it is blank. Cross-references, if any, are in a separate column labeled “aftermarket cross, not OEM.” No Google-suggestion part numbers.

### Attachment type

What the attachment needs from a tractor: hitch, PTO speed, a horsepower range only if the maker prints one, hydraulic flow if it is a grapple or a snowblower. Then the measurement that owners get wrong (width versus PTO, pivot-pin lift versus fork load center). Retail links under the disclosure, only for programs in `affiliates.md` that have a contract in hand. Titan is not linked at a made-up rate.

### Sizing

A method, a worked example from a verified model, and a refusal where the method would require a guess. The brush-hog page does not contain a universal “hp per inch” rule. It says: take the tractor’s PTO horsepower for the transmission the buyer will use, take the cutter maker’s stated range for that width, and do not infer a width the maker did not print.

### Comparison

Two columns, each cell from a named document. If one side is unverified, the page is not published. 1023E versus 1025R qualifies. 1025R versus 2025R does not, until a 2 Series sheet is opened.

### Brand hub

A list of the models whose pages exist, grouped by series, plus the one-paragraph difference between series (sub-compact limited hitch versus compact Category 1) when that difference is in the documents. Not a history of the company.

### Fit checker

A form: pick a verified tractor, pick an attachment whose requirements are sourced, see the overlapping fields and the fields that are unknown. Unknown is a result. The checker does not say “safe.” It does not accept a typed-in horsepower from the user and then bless an implement. That path is how a wrong input becomes the site’s advice.

Ship the checker only after the static worked example has been up long enough to see if anyone uses it. The test batch uses a static example instead.

## Page-count plan by type

Counts are pages, not a promise of traffic.

| Page type | Test batch | After a successful test, first full cut | Do not build in v1 |
| --- | ---: | ---: | --- |
| Model | 8 | about 80, one per verified current US model in band | Historical tractors, one URL per transmission, one URL per option package |
| Maintenance | 4 | about 30, for models that earn impressions or that already have a manual in hand | A filter page for every model on day one |
| Attachment type | 2 | about 12 (cutter, box blade, rear blade, tiller, forks, grapple, post-hole digger, landscape rake, snow, finish mower, ballast box, backhoe) | 100+ SKU pages |
| Sizing and measurement guides | 4 | about 8 | A calculator that outputs a personal ballast weight |
| Comparison | 2 | about 15, document-backed only | “Vs” pages for unverified pairs, including 1025R vs 2025R |
| Brand hub | 2 | about 12 | Hubs for brands with no verified model |
| Static fit example, later the checker | 1 | 1 tool | A checker that runs on scraped secondary data |
| Trust, units, disclosure, safety | 2 | 4 | — |
| Task / acreage “best of” | 0 | 0 until search data asks | FitTractor’s scenario pattern |
| **Total** | **25** | **about 160** | FitTractor’s 415-URL shape |

The brief asked for a first 100 pages. The revised plan does not publish 100 pages in a batch. It publishes 25, measures them, then fills toward 100 with maintenance and verified models rather than with scenarios and SKUs. One hundred pages is a checkpoint inside the “full cut” column, not a launch quota. Hitting 100 by lowering the source rule would repeat the thin-content failure the red team describes.

## Test batch, 25 pages

Each page is here because the source already exists or the query shape showed up in suggestions, and because it is not a copy of a FitTractor URL that already does the same job.

**Models (8).** These are the pages TractorData and FitTractor already approximate. They are in the test anyway, as the shell the other pages link from, and only because the spec cells are verified.

| Page | Why this one |
| --- | --- |
| John Deere 1025R | Autocomplete is full of 1025R queries. PTO 17.2 and Limited Category 1 are from the August 2024 Deere brochure |
| John Deere 1023E | Same brochure, 14.9 PTO hp, so the page can say it sits just under a 15 PTO-hp cutter that the 1025R might run. High teaching value |
| Kubota BX2380 | Autocomplete includes specs, attachments, oil filter, and oil capacity. PTO 17.7 and Category 1 are from Kubota’s PDF, dated in the page as 2018/2019 |
| Kubota L3902 | Gear 32.1 and HST 30.3 PTO hp on one sheet. Demonstrates the transmission split |
| Kubota LX2610 | 19.5 PTO hp, Category I, 2020 brochure. The compact people buy when a BX is too small |
| LS MT226E and the HST note on the same page | 19.2 versus 17.1 PTO hp, Category I, October 2025 LS brochure. A brand FitTractor covers and most generalists cover thinly |
| New Holland Workmaster 25S | The only New Holland PTO figure verified in this pass (17.2). Hitch stays blank on purpose |
| Yanmar SA424 | 18.1 PTO hp. The page shows Limited Category 1 from the spec table and the brochure’s looser “Category I” bullet, so readers see why phrases get mis-copied |

**Maintenance (4).**

| Page | Why this one |
| --- | --- |
| 1025R filters and fluids | Suggestions include part number, cross reference, fuel filter, and location. FitTractor’s sitemap has no filter section. Cells stay blank until a manual or OEM lookup is opened. The page can launch with the fields and the blanks |
| BX2380 filters, fluids, and capacities | “Oil filter” and “oil capacity” are suggestions on this exact model. The Kubota spec PDF already has some capacities (fuel, crankcase, coolant, transmission case). Filters still need a parts lookup |
| Kubota L02 fluid and PTO note | One page for the series, because the 2023 sheet is the source and the models share Category I. Stops four thin fluid pages |
| LS MT2 service facts that the brochure actually prints | Capacities and intervals the October 2025 brochure does not contain stay blank. The page exists to learn whether an LS maintenance URL attracts anyone. If the brochure is too thin, the page waits for a manual rather than getting padded |

**Attachment types (2).** These are the requirement sheets, not the sizing method and not a SKU.

| Page | Why this one |
| --- | --- |
| Rotary cutter requirements | States hitch, rear PTO speed, and that a width is not chosen here. Pairs with the sizing method so the type page does not become a fake chart. FitTractor has 18 rotary-cutter SKU URLs. This is one page |
| Pallet-fork requirements | Separates bucket-mounted forks, quick-attach forks, and a 3-point nothing. Suggestions include “pallet forks tractor supply” and “quick attach.” No Titan SKU until the Impact contract states a rate |

**Sizing and measurement (4).**

| Page | Why this one |
| --- | --- |
| Rotary cutter width method | Suggestions are “what size brush hog for {hp or 1025R}.” No universal chart. Worked example uses only verified PTO figures |
| Box blade width method | Same pattern. Suggestions are horsepower-specific. “Vs land plane” is not rewritten, because FitTractor has that guide |
| Loader lift versus pallet-fork capacity | Suggestions include 1025R loader lift and “pallet forks tractor supply.” The page separates pivot pin, 24-inch hitch lift, and fork load center |
| Limited Category 1 versus Category 1 | Suggestions ask what limited Category 1 means. The page uses the verified models that actually say “Limited” (1023E, 1025R, Yanmar SA) and does not redraw an ISO table |

**Comparisons (2).**

| Page | Why this one |
| --- | --- |
| 1023E vs 1025R | Both columns come from one Deere brochure. FitTractor’s sitemap has 1025R vs BX2380, not this pair |
| L3902 gear vs L3902 HST | Both numbers are on the Kubota L02 sheet (32.1 and 30.3). Teaches the transmission trap without a second model’s documents |

**Hubs, example, trust (5).**

| Page | Why this one |
| --- | --- |
| Kubota compact hub | Lists only BX2380, LX2610, and the L02 models that are verified. A hub of unverified models is a directory of blanks |
| John Deere 1 Series hub | 1023E and 1025R only, plus a line that 2/3/4 Series pages are not up until their Deere-hosted sheets are opened |
| Static fit example: 1025R and a cutter | Uses 17.2 PTO hp and Limited Category 1, and stops where the cutter’s own sheet is missing. This is the prototype of the checker |
| Units and citations | Engine vs PTO, PS vs mechanical horsepower, dealer-hosted PDF vs deere.com. This is the methodology page, and it is specific because this pass found real conflicting cells |
| Disclosures | Affiliate language and the lift/ballast safety text below. Required before any retail link or lift number is public |

Count: 8 model + 4 maintenance + 2 attachment type + 4 sizing + 2 comparison + 2 hub + 1 fit example + 2 trust. **25 pages.**

Pages deliberately left out of the test, and why:

- 1025R vs BX2380. FitTractor already has the guide. The two model pages can still link to each other.
- 2025R, 3 Series, and 4 Series model pages. 3 and 4 Series numbers are only on dealer-hosted PDFs, and some cells failed a unit check. They can be drafted in private and not published.
- Acreage “best tractor” pages. FitTractor’s scenario list is already there, and the pages go stale.
- A ballast calculator. See safety.
- SKU pages for Titan products. A type page plus a real contract comes first.

## Monetization

Do not forecast revenue from the unverified $31–$36 RPM. No ad-network document in this pass stated that RPM.

**Display.** AdSense is the only network that will take a new site, and it may not take it until there is content and traffic. FitTractor already has the AdSense meta tag and a Tranco rank near 4.3 million, which is a warning against expecting ads to pay during the test. Do not put ad slots on pages that are mostly empty cells. Empty pages with ads are the bad version of this product.

**Affiliates, in the order they should be turned on.**

1. Read the Impact contract for Titan. The public page says both 4% and 5%, and it says 30 days. Link cutters, box blades, grapples, and forks only after the contract states one rate. Disclosure above the link.
2. Apply to Tractor Supply on Partnerize and write down the category rates. The public page does not list them. Use those links for fluids, filters, and CountyLine tools when the rate is known.
3. Amazon Associates at the published 3% for Lawn & Garden, Tools, and Outdoors, with a 24-hour session and an 89-day cart window. Use it for filters and small parts. Do not expect it to pay for a cutter the reader buys on Saturday after reading on Monday.
4. Email Everything Attachments and Messick’s. One has a program with no public rate. The other has no public program and has the parts traffic. Unpaid Messick’s links are allowed if they are the best lookup, and they are not described as affiliate links.
5. Northern Tool, Agri Supply, Walmart, and Home Depot stay off the site until a merchant page or a contract is in the file. See `affiliates.md`.

**What the test is allowed to earn.** Nothing is required. The test is a measurement of impressions and of whether a sourced page can be finished without inventing a cell. Adding affiliate links to unfinished spec pages mixes two experiments.

## Safety disclaimers

These go on any page that shows a lift number, a hitch claim, a PTO match, or a ballast discussion. They are part of the template, not a footer afterthought. They are not a substitute for the operator’s manual, and the page should say that in one sentence at the top of the numbers.

**Lift.** The number is the manufacturer’s number for a stated point: 24 inches behind the lower link ends, at the lift points, or at the loader pivot pin, whichever the document says. It is not the weight of a pallet on forks, not the weight of a wet log in a grapple, and not the weight of a ballast box at the end of long arms. A greater distance from the tractor lowers the weight the same tractor can raise. Exceeding the published lift can lift the rear or the front off the ground.

**Loader versus forks.** If the page does not have a fork capacity at a stated load center from the fork maker and a loader figure from the loader maker, it says the comparison cannot be made. It does not scale a pivot-pin figure by a homemade factor.

**Hitch.** Category describes pin size and linkage geometry. It does not mean every implement of that category will clear the tire, the fender, or a cab. “Limited Category 1” is not a synonym to tidy into “Category 1.”

**PTO.** The page shows PTO horsepower, not engine horsepower, and it shows the transmission. A cutter matched to engine horsepower is matched to the wrong number. A spinning PTO driveline with the shield off is a cause of severe injury and death. The page does not describe bypassing a shield, a neutral switch, or a seat switch.

**Ballast.** The site does not calculate how much ballast a reader should add. Front weights, a ballast box, and liquid in the tires are options the manufacturer publishes for a stated loader or backhoe. The operator’s manual for that tractor and that loader is the instruction. Rear overturns kill tractor operators. A wrong homemade recipe (how many bags, how much concrete, how much water in a tire) is worse than no calculator. The ballast page can name the published options and the existence of “tractor ballast calculator” as a query the site is refusing to answer with a number.

**Parts.** A filter or fluid on the page is tied to the document and, where it matters, to a serial-number note. The reader confirms it on the OEM lookup for their serial before ordering. An aftermarket cross is labeled as a cross.

**General.** Specifications change by year, market, and transmission. The brochure date is on the page. The site is not the manufacturer and is not an engineer. Nothing on the page is a certification that an implement “will fit” a particular serial number.

## Red team

**Thin content.** Twenty-five sourced pages can still be thin if eight of them are the same table with a different heading. TractorData already has the table. FitTractor already has the table plus a fit list. Google’s spam policies treat scaled pages that exist to catch queries, without original information, as abuse (`https://developers.google.com/search/docs/essentials/spam-policies`). The model template as written is close to that line. The maintenance blanks, the unit essay, and the refusal to invent a cutter width are what keep the test on the right side of it. If those are cut to ship faster, the test is not worth running. A hundred pages of the same table would fail this test even if every number were true.

**Data accuracy.** This pass rejected PTO cells because the kilowatt figure could not be true, found a Yanmar brochure that says both Limited Category 1 and Category I, and found John Deere engine cells that fit metric PS beside PTO cells that fit mechanical horsepower. A production site that “fixes” those by picking the number a competitor shows will be confidently wrong. Dealer-hosted PDFs add another failure: the file can be an old print. The BX2380 PDF is from 2018–2019. Someone will be injured or will buy the wrong implement if a lift or a PTO figure is wrong. The mitigation is the blank cell and the document date, not a longer disclaimer under a bad number.

**Liability.** A disclaimer does not erase a negligent, specific instruction. “Add 600 pounds of ballast” is an instruction. “Owners on a forum run 72-inch cutters on this tractor” is an instruction if the page presents it as a recommendation. The fit checker is the highest-risk feature because it looks like a decision. The static example is in the test so the wording can be shown to a person who has actually owned the machine before any form gives an answer. This is not a legal opinion. A publisher who wants a liability review needs a lawyer, especially before a ballast or lift tool. The operational rule does not wait on that review: no computed ballast, no “safe” or “will fit” verdict, measurement point always visible, manual always the next step.

**Affiliate fit.** Amazon at 3% with a 24-hour session does not pay for the way people buy cutters. Titan might, at 4% or 5%, and the merchant’s own page cannot currently say which. Tractor Supply’s rate is unpublished. Messick’s, the site that matches filter intent, has no public program. A plan that needs affiliate income in the first season is using income the contracts do not yet show. Display RPM at $31–$36 is an unverified lead and would be a high number to assume for a new domain in any case. FitTractor can wire AdSense and Impact and still sit outside the Tranco top million. Tags are not a market test.

**Competition.** TractorData is a 25-year spec archive, Tranco rank about 64,000, with third-party visit estimates in the hundreds of thousands. TractorByNet, Messick’s, GreenTractorTalk, and MyTractorForum are all large properties on the same queries’ borders. FitTractor registered the domain on 2026-04-17 and has already published about 415 URLs of the product this plan describes. They do not have rankings that show up in Tranco’s top million. They do have the content head start. Cloning their sitemap is the move they are already finished with. The maintenance and measurement pages are the part of the plan they have not shipped as a URL system. If they ship it before this test is finished, that opening closes. The plan should assume they will read the same suggestion list.

**AI Overviews.** A query that is only “1025R PTO hp” can be answered in the overview from Deere’s brochure or from TractorData without a click. Building the model page as that answer is building a page the overview replaces. The pages that still need a click are the ones with a comparison the overview is likely to flatten incorrectly (gear versus HST, limited versus full hitch, pivot pin versus forks) and the ones that send the reader to a part. Even those will lose some clicks. The test should count impressions and branded return visits, not assume a 2019-style click-through rate. If the Search Console impression/click ratio on the pure spec pages is as bad as a definition query, stop expanding model pages and put the next effort into maintenance and sizing.

**The “number one in the niche” goal.** That goal, taken literally, means outranking TractorData on spec queries and the forums on problems and FitTractor on fit. The first is a bad use of a new domain. The second is a bad use of a reference site. The third is open only on the slice FitTractor has not built, and only until they build it. A plan that spends the first hundred pages on model clones serves the goal’s slogan and loses the goal’s only opening.

## Revised plan

1. Keep Astro on Cloudflare Pages when the build starts. Do not start the build until the test batch’s sources are in a folder and the blank cells are accepted.
2. Publish the 25 pages above, with document dates, blank cells, the unit page, and the safety text. No acreage listicles, no SKU pages, no ballast number, no “will fit.”
3. Turn on Titan links only after the Impact contract states the rate. Turn on Tractor Supply only after Partnerize shows the rate card. Amazon links only on maintenance pages, with the required disclosure. No other programs.
4. Leave ads off until the pages are not mostly empty and a network accepts the site. Do not model $31–$36 RPM.
5. In Search Console, after the pages are indexed, decide with data:
   - If maintenance and sizing queries show impressions, write the next pages in that cluster for the next verified models.
   - If only branded spec queries show impressions, and the click-through is poor, do not scale model pages toward 100.
   - If FitTractor or TractorData occupies the sizing queries with a cited page, read theirs and add a fact they do not have, or drop the query.
6. The first “100” is allowed to be 25 live pages plus unpublished drafts of the rest of the verified model list. Drafts are not indexed. Dealer-hosted John Deere numbers stay in drafts until a Deere-hosted PDF replaces them or a person has eyeballed the conflicting cells.
7. The fit checker is a second project. It ships after the static 1025R example has been read by someone who is not the author, and after at least one cutter manufacturer sheet has been entered with its own URL.
8. Re-check the three candidate domains when a build is actually approved. RDAP on 2026-11-14 is recorded in `verdict.md`. A free name on that date is not a reservation.

The niche is real. The first version that can be defended is a sourced compact-tractor sheet with filters, fluids, and measurement rules, on the models whose documents were opened. It is not a second FitTractor, and it is not the largest tractor site on the internet.
