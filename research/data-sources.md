# Data sources, terms, and caveats

Checked 2026-11-14. This is a source policy for ImplementFit. It is not legal advice. Spec numbers are facts. Brochures, manuals, parts diagrams, and standards tables are copyrighted expression. Copy the fact and the citation. Do not copy the page, the diagram, or the table layout.

## What counted as verified in this pass

A figure was treated as verified when the PDF or HTML was downloaded and the cell was read, and, where both units were printed, they did not contradict each other.

| Source | What was actually opened | Caveat |
| --- | --- | --- |
| John Deere 1 Series brochure, filename `202408_81265-1-Series-CUTS-Brochure.pdf`, linked from the live 1025R page on deere.com via `https://johndeere.widen.net/view/pdf/d1ufag7tdm/202408_81265-1-Series-CUTS-Brochure.pdf` | 1023E and 1025R PTO, engine, hitch, PTO speeds | Filename implies August 2024. The signed CDN URL expires. Cite the widen document id, not the temporary preview URL |
| Dealer-hosted John Deere 3 Series literature, `https://crossimplement.com/file/106/John-Deere-3025E-3032E-3038E-3033R-3039R-3046R-Compact-Utility-Tractor-Literature.pdf` | PTO and hitch for several 3E/3R models | Not served from deere.com. No print date in the extract. One PTO cell failed a unit check and was rejected |
| Dealer-hosted John Deere 4 Series literature, `https://ag-power.com/img/assets/virtualliteraturerack/pdf/4-Series.pdf` | PTO and hitch for 4044M, 4052M, 4066M hydrostatic, 4052M Heavy Duty | Same dealer-mirror problem. Engine cells and PTO cells do not use the same horsepower conversion. See below |
| Kubota BX2380 detailed specifications, `https://www.kubotausa.com/docs/default-source/sales1source/bx2380-detailed-specifications.pdf` | BX2380 only | PDF created 2018, modified 2019. The path says `sales1source`. It was publicly fetchable and not marked confidential. It is old enough that a 2026 tractor could differ |
| Kubota L02 spec sheet, `https://www.kubotausa.com/docs/default-source/brochure-sheets/l02_specs_2023.pdf` | L2502, L3302, L3902, L4802 PTO and Category I | Created 2023-02-15. Column order was inferred from the header. L4802-Narrow PTO was not extracted |
| Kubota LX brochure, `https://www.kubotausa.com/docs/default-source/brochure-sheets/20_04_08_lx_series_ktc.pdf` | LX2610 and LX3310 | Created 2020-04-08, Cat.No.4364-01-US. Brochure text says Kubota may change specs and disclaims liability for use of the brochure |
| Kubota MX brochure, `https://www.kubotausa.com/docs/default-source/brochure-sheets/mx-series-final-brochure.pdf` | Two PTO figures and Category I & II, not a clean per-model assignment | Created 2019-11-01, Cat.No.5504-01-US |
| LS Tractor USA MT2 brochure, `https://lstractorusa.com/wp-content/uploads/2025/10/LS-Tractor-Brochure_MT2_MT2E_Update_V8.pdf` | Fourteen MT2/MT2E columns | URL says October 2025. Footer says specs can change |
| Yanmar SA brochure on yanmartractor.com, file path containing `YT19-172-YMR SA-Series_brochure_2-17-22` | SA221, SA324, SA424 | About five years old. The spec table says Limited Category 1 and a feature bullet says Category I |
| New Holland US compact index, `https://agriculture.newholland.com/en-us/nar/products/tractors-telehandlers/compact-tractors` | Workmaster 25S PTO horsepower sentence | Hitch not stated. Other series are engine-hp ranges |

## The unit trap

Do not store one field called `horsepower`.

On the John Deere 4 Series dealer PDF, the footnote that extracted points at engine power under Directive 97/68/EC. Several engine cells fit metric PS (the printed “HP” divided by about 1.36 equals the printed kW). The PTO cells that were kept fit mechanical horsepower (printed HP times about 0.7457 equals the printed kW). Example: 51.5 (37.9) fits PS, and 42.2 (31.4) fits mechanical horsepower. Publishing “4052M is 51.5 hp and 42.2 PTO hp” as if both numbers were the same kind of horsepower overstates the PTO ratio.

On the August 2024 1 Series brochure, both the engine cell and the PTO cell fit mechanical horsepower. The rule is per document, not per brand.

A kilowatt that does not match either conversion is a bad extract or a bad cell. The 4066M gear cell “58 (53.2)” and the 3046R hydrostatic cell “34.1 (27.3)” were rejected for that reason. They are not quietly rounded.

Gear and hydrostatic PTO horsepower differ on the same model. The L2502 sheet is 20.5 gear and 19.0 HST. The LS MT226 is 19.2 shuttle and 17.1 HST. A model page that shows one PTO number has to say which transmission.

## Lift and hitch phrases

- “At lift points,” “24 inches behind lift points,” “24 inches behind link arms,” and “at the pivot pin” are different measurements. Store the phrase from the sheet.
- “Limited Category 1,” “Category I,” “Category 1,” and “Category I & II” are different phrases. The Yanmar SA brochure uses Limited Category 1 in the table and Category I in a bullet. Store both and say which is the table.
- A hitch category is geometry (pin size, link spacing, mast height). It is not a promise that every Category 1 implement will clear the tire or that the tractor will lift it.

## Sources that are legitimate and were not fully used

**Manufacturer product pages.** `deere.com` model pages are JavaScript shells. The 1025R URL returned a title and a brochure link, not a spec table, to a plain HTTP client. Kubota’s tractor index (`https://www.kubotausa.com/products/tractors`) names series and shows a few models (BX1880, L2502 were visible) without PTO figures. Kioti’s CK page labels “Power,” not PTO (`https://www.kioti.com/products/tractors/ck`). Mahindra’s series pages label “Horsepower” ranges (`https://www.mahindrausa.com/products/tractors`). Use these pages to learn which models exist. Do not promote an unlabeled horsepower figure into a PTO column.

**Operator’s manuals.** John Deere sells or gates many manuals through its publications system. TractorData’s 1025R page links `http://techpubs.deere.com/` as the official manual source. Where a manual is publicly posted, the capacities and service intervals in it are the right source for fluids and filters. The manual’s sentences, warnings, and drawings are not available to paste. Quote a short spec, cite the manual identifier and date, and tell the reader to use the manual for the procedure.

**OEM parts lookups.** John Deere parts, Kubota illustrated parts, and dealer catalogs (Messick’s is a dealer catalog, not the OEM) are the right way to confirm a filter number for a serial number. Terms of use on those sites typically forbid scraping the catalog and republishing the diagrams. A lawful pattern is: look up the number for the serial in front of you, store the number with the date and the lookup URL, and do not store the exploded diagram. A cross-reference from Wix, Baldwin, or NAPA is a second source and must be labeled as a cross, not as the OEM number. Google’s suggestion list returned Kubota-like part numbers for the query “kubota oil filter.” Suggestions are not a parts catalog. They were not entered as verified numbers.

**Standards.** Three-point hitch geometry is specified by ASABE/ASAE and by ISO 730. The standards are paid documents. Do not redraw their dimension tables. A public extension page can be cited for the practical difference between categories if the extension page itself cites the standard. This pass did not lock a specific extension URL. Find one before the hitch explainer is drafted, and prefer a land-grant page over a random blog.

**University extension and NRCS practice pages.** Good for definitions and safety principles (ROPS, overturns, PTO shields). Not a source for a 2026 model’s PTO horsepower.

## Sources that do not verify a spec

| Source | Use it for | Do not use it for |
| --- | --- | --- |
| TractorData.com | Seeing which fields a mature reference site shows, and which document it claims to have read | The number on the page. Its own footer says errors happen and to consult the manufacturer. The 1025R page is a secondary compilation |
| FitTractor.com | URL patterns and which models they already published | Any PTO, hitch, or lift figure. Their about page says figures are cited, which is a method, not a permission to copy |
| Dealer classifieds and TractorHouse listings | Evidence that a model is on the used market | Horsepower typed by a seller |
| TractorPicker and other new comparison sites | A reminder that more structured competitors exist | Their mixed engine/PTO lines |
| Google autocomplete | Proof that a query shape exists | Part numbers, capacities, or “the right width” |
| Forums and Reddit | The wording of the question | The accepted answer, unless the answer quotes a manual and you have opened that manual |
| YouTube | How owners talk about fit | A horsepower figure stated on camera |
| Confidential dealer sheets | Nothing | A Kubota L3560 PDF in search results was titled confidential. It was not downloaded for this file |

## Rights and product terms that affect the build

- **Copyright.** Facts (17.2 PTO hp, Limited Category 1) are not a brochure. The brochure’s paragraph, the photo, and the spec-table design are the manufacturer’s. Write an original sentence that states the fact and links the PDF.
- **Trademark.** John Deere, Kubota, and the other marks stay attached to the right product. A model page can use the model name to identify the tractor. It should not use the logo, the color layout, or a dealer’s photography. Affiliate agreements often add a separate trademark rule, including a ban on bidding on the brand in ads. Read the agreement before buying the name as a keyword.
- **Brochure disclaimers.** Kubota’s LX brochure says the brochure is descriptive, specs can change, and Kubota disclaims liability for use of the brochure. The site’s own disclaimer has to be at least that strict. “We typed what the April 2020 brochure said” is the claim. “This is what your tractor will do” is not.
- **Manuals and parts art.** Do not mirror PDF manuals or parts diagrams on Cloudflare. Link to the manufacturer. A mirrored manual is a copyright problem and a safety problem when the manufacturer revises a warning.
- **Database terms.** If a parts site’s terms forbid automated collection, do not run a scraper against it and do not store a bulk extract. Hand-checked numbers for the test batch are a different scale. If the project later wants a feed, ask the dealer or the OEM.
- **FTC.** A link that pays, or that might pay, needs a disclosure a reader can see before they click. The Endorsement Guides are the reference: `https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking`. Disclosure rules are also summarized in `plan.md`.
- **Privacy.** Model pages do not need accounts. If a fit checker stores a tractor and a serial number, that serial can identify a machine. Do not send serial numbers to an ad network or an affiliate pixel. The test batch should not collect them at all.

## Freshness rule

Every verified cell gets four fields in the site’s data store: value, unit system, document URL, document date, and the date a person last looked at that URL. A page renders the document date. A cell older than the current model year is labeled with the brochure year, not described as “current” by implication. The BX2380 file from 2018–2019 is the example. It is good enough to draft a page and not good enough to leave undated.

## What this policy changes about the build

The launch set is the models in `model-list.md` whose PTO and hitch are verified, plus maintenance pages that stay blank where the manual was not opened. Blank is allowed. A filled-in guess is not. Dealer-hosted John Deere PDFs can seed a draft and should be replaced by a deere.com or widen.net document before the page is the one a buyer relies on.
