# Filters and fluids: what is gettable

Checked 2026-11-14. No third-party filter table was copied. No part number from Google autocomplete was stored. No Messick’s, TractorData, or FitTractor parts list was reused.

## What the brochures actually contain

The spec sheets opened for `models.csv` are tractor specification brochures. They often include fuel-tank capacity, and sometimes engine-oil, coolant, and transmission-case capacity. They do not include oil-filter, fuel-filter, or hydraulic-filter part numbers.

Examples of capacity fields that are on a manufacturer PDF, so they are gettable without a parts catalog:

- Kubota BX2380 detailed specifications PDF (`https://www.kubotausa.com/docs/default-source/sales1source/bx2380-detailed-specifications.pdf`, created 2018, modified 2019) prints fuel tank 6.6 US gal, engine crankcase with filter 3.5 US qt, engine coolant 3.3 US qt, recovery tank 0.4 US qt, and transmission case 3.0 US gal. Those are capacities, not filter numbers, and the file is old.
- The Kioti CK and DK spec sheets print fuel-tank capacity. They do not print filter part numbers.
- The Mahindra eMax, 1600, and 2600 brochures print fuel-tank capacity. They do not print filter part numbers.
- The Massey GC1700 brochure does not print filter part numbers.
- The John Deere 1 Series August 2024 brochure does not print filter part numbers in the extracted spec table.

A maintenance page can publish a capacity only when that sentence is in the document for that model. A blank filter cell stays blank.

## Where filter numbers and fluid specifications live

| Source | What it can provide | Constraint |
| --- | --- | --- |
| Operator’s manual, maintenance section | Oil specification, capacity, interval, and often the filter element description | John Deere manuals are sold or gated through the publications system linked from TractorData as `http://techpubs.deere.com/`. Do not mirror the PDF. Quote the spec and cite the manual identifier. Many Kubota, Kioti, Yanmar, and Mahindra manuals are not posted as open files. |
| OEM parts lookup | The filter part number for a serial range | Deere parts, Kubota illustrated parts, and dealer catalogs are the lookup. Their terms typically forbid scraping the catalog and republishing the diagrams. A person can look up one serial, store the number, the date, and the lookup URL, and not store the drawing. |
| Manufacturer fluid pages | The branded fluid (Hy-Gard, Super UDT2, and the equivalents) | Use the maker’s fluid page or the manual. Do not write a mixing recommendation the manual does not state. |
| Aftermarket cross-reference (Wix, Baldwin, NAPA) | A claimed interchange | Label it as a cross, never as the OEM number. Do not paste their chart. |
| Dealer sites such as Messick’s | A fast way for a human to see a candidate number | Not a source to copy. Link the reader to the lookup. No public affiliate program was found for Messick’s. |

## What is not gettable as a bulk public dataset

There is no open, machine-readable OEM filter file for this whole catalog that this pass was allowed to copy. Building 160 filter tables by scraping dealer catalogs would violate the usual terms and would copy someone else’s compilation. The production method is one model at a time:

1. Open the operator’s manual for that model and year, or the OEM parts page for a stated serial guidance.
2. Record oil spec, capacity, interval, and each filter number that the page shows.
3. Set `human_verified=true` and store the URL and the date.
4. Leave every other cell empty.

Google suggestions for “1025r oil filter” and “kubota oil filter” include part-number-shaped strings. Those strings are not OEM records. They are not in `models.csv` and they must not be published.

## Twenty models checked for a public filter number

The twenty models treated as the first maintenance set are the ones that already have a verified PTO and that match the suggestion and brochure work: 1025R, 1023E, 2025R, 2032R, 2038R, BX2380, BX2680, L2502, L3902, LX2610, CS2510H, CK2640, NX4510, MT226, MT125, Workmaster 25S, GC1725M, 1835M, SA424, and T264.

| Model | What was opened | Filter or capacity result |
| --- | --- | --- |
| 1025R and 1023E | Deere filter overview, February 2019, `https://www.deere.com/assets/pdfs/common/parts-and-service/manuals-training/1E%20and%201R%20Series%20Compact%20Utility%20Tractors%20-%201023E,%201025R,%201026R.pdf` and the January 2024 replacement-parts guide `https://www.deere.com/assets/pdfs/common/qrg/rpg-1025r-cut-ww-edition.pdf` | Oil filter M806418 on both documents. Hydraulic filter LVA16054 on both. The 2019 overview also lists fuel filter M801101 and inline fuel filter AM116304. The 2024 guide, for PIN HJ100001 and up, lists fuel filter MIU804763 and the same inline filter AM116304, and it splits the primary air filter at serial JJ153036 (M131802, then LVU34503). Engine oil in the 2024 guide is Plus-50 II 10W-30, 2.9 qt with filter. Transmission oil is Low Viscosity Hy-Gard, 12.9 qt. The two Deere documents do not name the same fuel filter. Publish both, with the document and the serial note. Do not pick one. |
| BX2380 | Kubota’s own parts page `https://shop.kubotausa.com/oemparts/a/kub/60a30edc87a866105438cb2b/000600-oil-filter` | Engine oil filter HH150-32430 through serial 4NDZ999, and HH1J0-32430 from 4NE0001. A different frequently-used-parts page also lists HHK20-36990 against a replacement engine. That second number is not entered as the tractor’s filter. |
| T264 and T394 | The same TYM brochures used for the spec rows | Capacities only. T264: fuel 6.6 gal, coolant 5.9 qt, crankcase 4.5 qt, transmission/hydraulics 4.7 gal. T394: fuel 9.0 gal, coolant 7.4 qt, crankcase 6 qt, transmission/hydraulics 8.5 gal. No filter part numbers. |
| 2025R, 2032R, 2038R, BX2680, L2502, L3902, LX2610, CS2510H, CK2640, NX4510, MT226, MT125, Workmaster 25S, GC1725M, 1835M, SA424 | No public operator-manual filter table or OEM parts hit was opened in this pass | Filter numbers stay unverified. Several of these brochures do contain fuel or oil capacities; those can be copied from the spec row only when that brochure states them. |

Fifteen of the twenty still have no verified filter part number. That is the maintenance bottleneck. The two Deere documents already disagree on the 1025R fuel filter, which is why a serial note has to travel with the number.

## Launch consequence

Maintenance pages cannot all be filled before someone does the manual pass. A page with only a fuel-tank capacity from a brochure is a start. A page with invented filter numbers is a defect. The full-launch plan publishes a maintenance URL only when at least one fluid fact is verified, and it shows empty filter rows as “not in the document we read.”
