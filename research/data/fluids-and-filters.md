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

## Launch consequence

Maintenance pages cannot all be filled before someone does the manual pass. A page with only a fuel-tank capacity from a brochure is a start. A page with invented filter numbers is a defect. The full-launch plan publishes a maintenance URL only when at least one fluid fact is verified, and it shows empty filter rows as “not in the document we read.”
