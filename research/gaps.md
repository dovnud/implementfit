# Gaps and extra page types

Checked 2026-11-14. Search-volume cells are **unknown** unless a public source is named. Google’s suggestion endpoint shows that a query shape exists. It does not show how often it is searched.

Suggestion source for every bullet under “observed suggestions”: `https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q={query}`, fetched 2026-11-14. Volume: unknown.

A supplied Google Trends comparison (US, 5-year, relative to “chainsaw chain size”: compact tractor 4.3×, box blade 7.7×, brush hog 3.9×, John Deere 1025R 2.1×, “what size brush hog” about 0.01×, spring peak) was **not confirmed**. A Trends explore request from this environment returned HTTP 429. Treat those multiples as an unverified lead. Do not put them in a business model.

## 1. Implement width versus PTO horsepower

**Gap.** FitTractor matches a stored cutter to a stored tractor. It does not, in the sitemap, publish a method for choosing width. Manufacturer cutter literature states a horsepower range for a width, and owners still ask a different question: “for this tractor, what width.”

**Why a single rule is the wrong page.** A 5-foot rotary cutter behind a 25 PTO-hp tractor can be fine in field grass and wrong in saplings. Deck weight, stump jumper, blade speed, and whether the PTO figure is gear or hydrostatic all move the answer. A page that prints “4 hp per inch” as a law will be both thin and unsafe.

**Page type.** One method page, then a short block on each model page: “published PTO hp, gear and HST if both exist, hitch category, and the cutter widths whose manufacturer sheets include that PTO.” Link to the cutter maker’s sheet. Do not invent a width.

**Intent cluster.** Commercial investigation, then a fit decision.

Observed suggestions for `what size brush hog`:

- what size brush hog for 40 hp tractor
- what size brush hog for 24 hp tractor
- what size brush hog for 35 hp tractor
- what size brush hog for 50 hp tractor
- what size brush hog for 55 hp tractor
- what size brush hog for 1025r
- what size brush hog for 25hp tractor
- what size brush hog for 30 hp tractor

Observed suggestions for `what size box blade`:

- what size box blade for 25 hp tractor
- what size box blade for 35 hp tractor
- what size box blade for 1025r
- what size box blade for 30 hp tractor
- what size box blade for 40 hp tractor
- what size box blade for 45 hp tractor
- what size box blade for my tractor

Also observed on `box blade`: box blade rippers, shanks, teeth, “box blade vs land plane.” On `brush hog`: rental, blades, service. Rental and “near me” are local-pack queries. Skip them.

Volume of the head terms “box blade” and “brush hog” is unknown here. The Trends lead, if it were ever verified, would say those head terms are large and the “what size” phrase is tiny. The suggestions show the long tail is model- and horsepower-specific. That is the page to write, and it will not look like a big keyword in a tool that only scores the head term.

## 2. Loader lift versus fork and grapple capacity

**Gap.** Brochures publish loader lift at the pivot pin, or at a stated distance forward of the pin. Pallet-fork capacity depends on load center. A grapple’s load is not a pallet. FitTractor’s model-page labels include “loader lift at pivot pin,” which is the right field and the wrong number to compare with a fork’s rated capacity.

**Page type.** An explainer that forces three labeled numbers: pivot-pin lift, lift at the manufacturer’s forward point, and fork capacity at a stated load center. A model page shows only the numbers the loader sheet actually prints, with the point named. No “your tractor can lift X pounds of pallets.”

**Intent.** Commercial investigation mixed with a safety question.

Observed suggestions for `loader lift capacity`: loader lift capacity 1025r, and a string of John Deere loader model numbers (120R, 220R, 300E, 320R, 400E, 440R). Those loader-model queries are their own pages if the loader sheet is in hand.

Observed suggestions for `pallet forks tractor`: “pallet forks tractor supply,” quick attach, bucket-mounted, “near me.” The Tractor Supply suggestion is a retailer query, which is the affiliate path, not a spec path.

Observed suggestions for `grapple for compact tractor`: mechanical grapple, 48-inch grapple, electric grapple, sub-compact grapple.

Volume: unknown.

## 3. Hitch category, especially “limited” Category 1

**Gap.** Owners buy a Category 1 implement and then find the lower-link balls, mast height, or sway clearance do not match a sub-compact “limited” hitch. FitTractor already has explainers at `/guides/3-point-hitch-categories-explained/` and `/guides/limited-category-1-hitch-explained/`. A second generic essay will not rank. A page that shows the dimension that actually fails, cited to a standard or an extension publication, and then points at the model’s published hitch type, is a different page.

**Intent.** Definitional, then a purchase check.

Observed suggestions for `3 point hitch category`: category 1, category 2, category 1 vs 2, dimensions, sizes, category 0, chart.

Observed suggestions for `limited category 1`: “what does limited category 1 mean,” limited cat 1 implements, limited cat 1 hitch.

Volume: unknown. The suggestion list is long enough to treat this as a real query family. ASABE/ISO dimension tables are copyrighted. Cite an extension summary and the standard’s identifier. Do not redraw the standard’s table.

## 4. Filter cross-reference and fluids

**Gap.** The FitTractor sitemap has no part-number URLs. Google suggestions go straight at the part number.

Observed suggestions for `1025R oil filter`:

- 1025r oil filter cross reference
- 1025r oil filter number
- 1025r oil filter part number
- 1025r oil filter location
- 1025r fuel filter
- 1025r fuel filter replacement

Observed suggestions for `kubota oil filter`:

- kubota oil filter cross reference
- kubota oil filter cross reference chart
- and three part-number-shaped suggestions: `hh164-32430`, `hh1j0-32430`, `hh150-32094`, `hh150-32430`

Those part-number strings came back from Google’s suggestion service. They are leads, not confirmed OEM numbers. Do not print them on a model page until an OEM parts lookup for that serial number shows them. Publishing a suggestion as a part number is how this site would become the thing it is trying to be better than.

Observed suggestions for `tractor hydraulic fluid`: near me, 5 gallon, weight, viscosity, NAPA, Rural King, stop leak. “Near me” is local. “5 gallon” and the brand names are retail. A fluid page can name the OEM specification (John Deere Hy-Gard, Kubota UDT / Super UDT2) from the manufacturer’s fluid page or the operator’s manual, then link to retailers. “Can I mix them” belongs on that page only with a quoted OEM statement, not a forum consensus.

**Page type.** One page per high-demand model: engine oil spec and capacity, oil filter, fuel filter, hydraulic filter, hydraulic fluid spec and capacity. Each cell is either a sourced OEM number or blank. A separate page explains how to use a Wix, Baldwin, or NAPA cross-reference and why the cross is not the OEM number.

**Intent.** Transactional. This is the Messick’s / Tractor Supply / Amazon query. Volume: unknown. The suggestion pattern is the evidence.

## 5. Gear versus hydrostatic PTO, and model versus model

**Gap.** The same marketing name often has two PTO figures. Kubota’s 2023 L02 sheet lists a higher PTO power for the gear transmission than for the HST on each model (see `model-list.md`). Comparison pages that ignore the transmission are wrong.

FitTractor already has comparison URLs, including Kubota versus John Deere and a 1025R versus BX2380 guide (sitemap and search). Do not rewrite those pairs first.

**Better pairs, because one document supports both sides.**

- L2502 gear versus L2502 HST, and the same for L3302, L3902, L4802. Source is one Kubota sheet.
- John Deere 1023E versus 1025R. Source is the August 2024 1 Series brochure: 14.9 versus 17.2 PTO hp, both Limited Category 1.
- “Why the engine hp on the hood is not the PTO hp.” FitTractor has a guide. The version worth writing adds the unit trap documented in `data-sources.md`: some John Deere brochure cells pair a metric PS figure with kilowatts and still say HP, while the PTO cell next to it matches mechanical horsepower.

**Intent.** Commercial investigation. Volume unknown. Observed suggestion on `1025R`: “1025r vs 2025r.” The 2025R side of that pair is **unverified** in this pass. Do not publish the comparison until a Deere 2 Series sheet is in hand.

## 6. Used-buyer pages: hours, year, serial

**Gap.** TractorData already prints a serial-number location and a production span. Forums own “how many hours is too many.” FitTractor search results showed a hours guide; that slug was not in the sitemap downloaded the same day, so it may exist and be unlisted. A new site does not win by restating “under 2,000 hours is fine.”

**Page type that is still open.**

- Where the serial plate is, and which character is the year, **only** where an official page or the operator’s manual says so. One model family at a time.
- A used-buyer checklist that separates “the manual says service this at N hours” from “owners report this failure.” The second half needs a date and a primary report, or it should not be written.
- Price pages go stale and invite thin content. FitTractor already has a Massey price guide in the sitemap. Skip price lists until there is a dated method (which dealer advertisement, which month).

Observed suggestions for `1025R` include “for sale,” “price” was not in the top eight, “weight,” “cab,” “vs 2025r.” `kubota bx2380` suggestions include price, specs, for sale, attachments, weight, oil filter, oil capacity. Specs, attachments, filter, and capacity are the reference site. Price and for sale belong to dealers and TractorHouse.

The suggestion query `how many hours compact tractor` returned an empty suggestion list on this fetch. That does not mean the query is absent. It means this endpoint did not expand it. Volume: unknown.

## 7. Common problems

**Gap.** Real demand, bad content risk. Google and the forums already answer “1025R won’t start” with a thread. A rewritten thread is scaled content and, if it tells someone to bypass a safety switch, a safety problem.

**Page type if any.** A short diagnostic index that quotes the operator’s manual sequence (neutral switch, PTO switch, fuel shutoff) and stops. No “the five most common causes” unless each cause cites the manual or a dealer service bulletin. FitTractor’s sitemap includes a won’t-start guide. Read it before writing another, and do not write one in the test batch.

## 8. Ballast

**Gap.** People ask for a calculator. A calculator that outputs “add 400 pounds” is a rollover hazard if it is wrong. See the safety section in `plan.md`.

Observed suggestions for `tractor ballast`: ballast box, weights, fluid, box for sale, calculator, “ideas,” and an unrelated “ballast resistor.” “Calculator” and “ideas” are the queries that produce bad DIY pages. The page to publish is an explainer of the published options (suitcase weights, ballast box, liquid in the tires) and a refusal to compute a personal ballast number. “For sale” is the affiliate query for a ballast box, after the explainer.

Volume: unknown.

## 9. Task and acreage pages

FitTractor already publishes `/scenarios/best-tractor-for-5-acres/` and a long list of the same pattern (snow, food plots, brush, 1 acre, 10 acres, horse property, vineyard). Observed suggestions for `best compact tractor` include “for the money,” “2026,” “brands,” “with backhoe,” “with loader,” “deals,” “for 5 acres.” Those queries are crowded and opinion-heavy. They also go stale every model year.

**Gap that remains.** Not another “best of” list. A task page that starts from the implement’s published requirement (PTO hp, hitch, hydraulic flow) and lists only tractors whose own sheet meets it, with the cell cited. That is a database view, not an award.

## 10. Quick-attach and mid-PTO

FitTractor has an SSQA / John Deere / Kubota quick-attach guide in the sitemap. Suggestions for pallet forks include “quick attach.” A useful leftover is the loader-specific interface on the model page (which loader, which hook), sourced from the loader sheet, not a second general essay.

Mid-PTO and a mid-mount mower are a frequent sub-compact purchase and are easy to get wrong (PTO speed is not 540). The John Deere 1 Series brochure states rear 540 and mid 2,100 rpm for the 1023E and 1025R. A short “mid versus rear PTO” block on those model pages is enough. FitTractor already has a 540-versus-1000 guide. Mid-PTO speed is the compact-specific addition.

## 11. Backhoe, tiller, snow

Observed suggestions:

- `backhoe for compact tractor`: sub-compact, 3-point backhoe, buckets. A 3-point backhoe and a subframe backhoe are different machines. The page has to say which one the model’s sheet supports. John Deere’s older price-page material has said some cabs are not compatible with a backhoe. Confirm on a current sheet before repeating that.
- `tiller for tractor`: for sale, rental, price, Kubota, used, PTO. Mostly retail. A small block for “PTO speed and horsepower the tiller sheet asks for” is enough.
- Snow is covered by FitTractor scenarios and a snow guide. Skip until the test batch has rankings.

## What not to build to “cover the gap”

- A page per county or per “near me” query.
- A page per implement SKU that only restates width, hitch, and a buy button. FitTractor already has 136 of those.
- A page per historical tractor. That is TractorData’s 18,000-page asset. It took 25 years and it is not the compact buyer’s job.
- Any page whose only source is another secondary database.

## Priority if the only goal is traffic that the current competitors do not already own

1. Model-level filters, fluids, and capacities, sourced, for the models people already type (1025R, BX2380, then the L and MT models).
2. Width-selection method pages fed by those model pages, not a universal chart.
3. Hitch and lift measurement explainers that name the measurement point.
4. Gear-versus-HST comparisons taken from a single brochure.
5. Everything else after Search Console shows impressions.
