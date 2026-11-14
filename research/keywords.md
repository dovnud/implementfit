# Keyword demand

Checked 2026-11-14. Absolute US search volumes are **unknown** unless a source is named in the same row. This environment could not use Ahrefs (the connector needs authentication) or Google Ads Keyword Planner.

Two public inputs were used:

1. Google’s suggestion endpoint, `https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q={query}`, fetched 2026-11-14. A suggestion proves the phrase has been typed often enough for Google to offer it. It is not a volume.
2. Third-party traffic writeups for TractorData, which show that tractor-spec queries as a class produce a large site. They do not measure “box blade” or “1025R oil filter.” See `competitors.md` for the conflict between those writeups. They are not reused here as keyword volumes.

An unverified scouting sheet said Google Trends, US, five years, relative to “chainsaw chain size,” was about 4.3× for compact tractor, 7.7× for box blade, 3.9× for brush hog, 2.1× for John Deere 1025R, and about 0.01× for “what size brush hog,” with a spring peak. A Trends explore request on 2026-11-14 returned **HTTP 429**. Those ratios stay unverified. If they are later confirmed, the planning implication is: head terms are large, and the exact phrase “what size brush hog” is not. The suggestions below show the real long tail is “what size brush hog for {hp or model}.”

## How to read the clusters

Intent labels:

- **Spec:** the searcher wants a number from a sheet.
- **Fit:** the searcher wants to know whether a tool matches a tractor.
- **Buy:** the searcher is close to a retailer.
- **Local:** “near me,” rental, service. Not a page this site should build.
- **Maintain:** filters, fluids, capacities, intervals.

Volume is unknown on every row that does not say otherwise.

## Model queries

Fetched query `1025R`. Suggestions:

| Suggestion | Likely intent | Page that would match | Volume |
| --- | --- | --- | --- |
| 1025r john deere | Spec / navigational | Model page | Unknown |
| 1025r john deere tractor | Spec | Model page | Unknown |
| 1025r john deere for sale | Buy | Do not build a classified. Link out | Unknown |
| 1025r weight | Spec | Model page, only with a sourced weight | Unknown |
| 1025r vs 2025r | Fit / compare | Comparison, after the 2025R sheet is verified. It is not verified yet | Unknown |
| 1025r cab | Spec / buy | Model page section | Unknown |
| 1025r for sale | Buy | Skip | Unknown |

Fetched query `kubota bx2380`. Suggestions: price, specs, for sale, attachments, weight, oil filter, oil capacity. “Specs,” “attachments,” “oil filter,” and “oil capacity” are the reference site. “Price” and “for sale” are dealers.

Fetched query `compact tractor`. Suggestions: for sale, for sale near me, with loader, attachments, with backhoe, package deals, grapple. Head term is commercial and local. A new domain should not plan to rank for the bare head term. TractorData’s estimated traffic (hundreds of thousands of visits a month, third-party, see `competitors.md`) is evidence that model-level spec queries, in aggregate, are a real market. It is not a volume for “compact tractor.”

Fetched query `sub compact tractor`. Suggestions: for sale, near me, attachments, with mower deck, with backhoe, with loader, price. Same split. “Attachments” and “with backhoe” are fit queries. “Near me” is not.

Fetched query `best compact tractor`. Suggestions: for the money, 2026, brands, with backhoe, with loader, deals right now, for 5 acres. These are list-post queries. FitTractor already has acreage scenarios. Volume unknown. Low priority until the sourced pages exist, because a “best of 2026” page with no test data is the kind of page that gets ignored.

Fetched query `how many hours compact tractor`. The endpoint returned **no suggestions**. That is not a volume of zero. It is an empty response. Forum and FitTractor pages on hours exist anyway. Volume unknown.

## Attachment queries

Fetched query `box blade`. Suggestions: for tractor, rippers, for sale, shanks, for skid steer, teeth, vs land plane. Skid steer is a different machine. “For sale” is retail. Rippers, shanks, and teeth are part and how-to queries a box-blade page can absorb. “Vs land plane” is a comparison FitTractor already publishes. Volume of the head term unknown. The unverified Trends lead would put “box blade” well above a reference query. Unconfirmed.

Fetched query `what size box blade`. Suggestions are horsepower- and model-specific: 25 hp, 35 hp, 1025r, 30 hp, 40 hp, 45 hp, “for my tractor,” plus a Ford 8N suggestion that is outside this band. Intent: fit. This is a template (one method, a block per tractor), not ten separate essays that repeat the same paragraph.

Fetched query `brush hog`. Suggestions: rental, rental near me, mower, for sale, blades, for skid steer, service near me. Rental, service, and near me are local. Blades are a maintenance query (blade bolt, sharpening) and a safety query. Volume unknown. Unverified Trends lead says the head term is large. Unconfirmed.

Fetched query `what size brush hog`. Suggestions: 40 hp, 24 hp, 35 hp, 50 hp, 55 hp, 1025r, 25 hp, 30 hp. Intent: fit. Same template as box blades. The unverified Trends lead said the exact phrase is about 0.01× the reference term, which would make the head phrase small and the suggestion variants the whole opportunity. Unconfirmed. Plan the page anyway, and do not expect it to be the traffic engine by itself.

Fetched query `rotary cutter`. Suggestions mix sewing tools (“for fabric,” “and mat,” blades) with tractor intent (“rotary cutter tractor,” for sale, near me). A page titled only “rotary cutter” will attract the wrong audience. Use “rotary cutter tractor” or “brush hog” language and say so in the title. Volume unknown, and part of it is not this market.

Fetched query `pallet forks tractor`. Suggestions: tractor supply, quick attach, bucket, attachment, tractor house, near me, loader. “Tractor supply” is a retailer navigational query and an affiliate opportunity if the Tractor Supply program terms are acceptable. “Quick attach” is a fit question. Volume unknown.

Fetched query `grapple for compact tractor`. Suggestions: small tractor, mechanical grapple, 48-inch, best, bucket, electric, sub-compact. Intent: fit and buy. “48 grapple” is a width query, same family as cutter width. Volume unknown.

Fetched query `tiller for tractor`. Suggestions: for sale, rental, price, Kubota, used, near me, PTO. Mostly buy and local. The PTO suggestion is the only reference-site query in the list. A tiller block on the model page is enough.

Fetched query `backhoe for compact tractor`. Suggestions: UK spelling/market, small tractor, mini tractor, attachment, buckets, 3-point, sub-compact. “3pt backhoe” versus a subframe backhoe has to be split or the page gives the wrong answer. Volume unknown.

## Maintenance queries

Fetched query `1025R oil filter`. Suggestions: cross reference, number, wrench, part number, location, fuel filter, fuel filter replacement. Intent: maintain, and then buy. This is the clearest gap versus FitTractor’s sitemap, which has no filter URLs. Volume unknown. The shape is specific enough to build the 1025R page even without a volume, because the cost of the page is one sourced lookup and the downside of guessing a number is a returned part and a damaged engine.

Fetched query `kubota oil filter`. Suggestions: cross reference, cross reference chart, and the strings `hh164-32430`, `hh1j0-32430`, `hh150-32094`, `hh150-32430`. Intent: maintain. Those strings are autocomplete, not verified OEM numbers. They do show that searchers type part numbers. A page can rank for a number only after the number is confirmed on a Kubota lookup for a stated model and serial range. Volume unknown.

Fetched query `tractor hydraulic fluid`. Suggestions: near me, 5 gallon, weight, viscosity, napa, rural king, stop leak. Intent: buy, with a spec question hiding under “weight” and “viscosity.” “Stop leak” is a problem query. Do not recommend an additive the OEM manual does not list. Retailer names in the suggestions (NAPA, Rural King) are competing pages, not partners, until a program is verified.

Service-interval queries were not separately expanded. The BX2380 suggestion list already includes “oil capacity,” which is the interval page’s companion field. Build capacity and filter together so the page is not a single number.

## How-to and definition queries

Fetched query `3 point hitch category`. Suggestions: category 1, category 2, 1 vs 2, dimensions, sizes, category 0, chart. Intent: definition, then fit. Volume unknown. FitTractor already has the explainer. A new page needs the dimension source and the limited-versus-full failure mode, or it should not be published.

Fetched query `limited category 1`. Suggestions: hitch, 3-point hitch, implements, “what does limited category 1 mean.” Intent: definition. This is a sub-compact-specific query the big tractor archives answer badly, because most old tractors are full Category 1 or 2. Volume unknown.

Fetched query `loader lift capacity`. Suggestions: 1025r, and John Deere loader model codes 300E, 320R, 440R, 400E, 220R, 120R. Intent: spec. Each loader code is a page only when that loader’s sheet is in hand. Volume unknown.

Fetched query `tractor ballast`. Suggestions: box, weights, fluid, box for sale, calculator, ideas, and “ballast resistor,” which is an electronics query and a false friend. Intent: buy and DIY. “Calculator” and “ideas” are the queries that invite an unsafe page. Volume unknown. The right page explains published ballast options and does not compute a weight. See `plan.md`.

## Gaps, stated as missing measurements

| Cluster | Evidence it exists | Evidence of size | Who already answers it | Gap |
| --- | --- | --- | --- | --- |
| Model specs (1025R, BX2380) | Suggestions include “specs” | TractorData’s third-party visit estimates are large and not compact-specific | TractorData, manufacturers, AI Overviews | Weak as a standalone page. Strong as the shell for maintenance and fit |
| What size cutter or box blade for {hp, model} | Long suggestion lists | Unverified Trends lead says the exact “what size brush hog” phrase is tiny | No cited tool found. FitTractor matches SKUs instead | Method page plus a block per verified model |
| Filters and fluids | “part number,” “cross reference,” “oil capacity” | Unknown | Messick’s and parts stores. Not FitTractor’s URL map | Best unmatched cluster |
| Hitch category | Suggestion list includes dimensions and “what does limited category 1 mean” | Unknown | FitTractor guides, extension sites | Only if the page adds a sourced dimension and the limited-hitch failure |
| Loader versus fork | Loader-code suggestions, pallet-fork suggestions | Unknown | FitTractor has a lift explainer | Measurement-point page, not another definition |
| Best tractor for N acres | Suggestion and FitTractor scenarios | Unknown | FitTractor, dealers, YouTube | Skip in the test |
| Local rental and service | “near me” on brush hog and tiller | Unknown | Maps and dealers | Skip |

## What not to put in a keyword map later

- A volume with no tool and no date.
- A Trends index treated as a visit forecast. Trends is relative.
- The DirectoryGems “$12M traffic value” for TractorData, which conflicts with a SEMrush value near $405K on HypeStat and is not a keyword volume for this niche.
- Autocomplete part numbers promoted into a table.

When a keyword tool is connected, the first pull should be the suggestion phrases in this file, US, and the report should keep the tool name, the database month, and the match type. Until then the demand case rests on query shape plus the size of adjacent sites, not on a spreadsheet of volumes.
