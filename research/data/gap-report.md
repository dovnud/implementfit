# ImplementFit research notes

Collected 14 Nov 2026 from official maker spec sheets, maker websites, public brochures, public operator manuals, and one OEM parts catalog. Nothing was taken from fittractor.com, TractorData, TractorByNet, or dealer comparison tables. Empty cells are blank. A blank cell with status UNVERIFIED means the cited document does not print that value. Nothing was averaged or filled from memory.

Source cells are `URL | document title | date`.

## Row counts

### data/models.csv

141 data rows.

| Status | Fields | Rows that contain at least one field of this status |
| --- | ---: | ---: |
| VERIFIED | 1,185 | 141 |
| UNVERIFIED | 199 | 95 |
| CONFLICT | 26 | 26 |

### data/attachments.csv

49 data rows (43 Woods, 6 Land Pride).

| Status | Fields | Rows that contain at least one field of this status |
| --- | ---: | ---: |
| VERIFIED | 187 | 49 |
| UNVERIFIED | 9 | 9 |
| CONFLICT | 0 | 0 |

The 9 UNVERIFIED fields are tractor horsepower ranges that the page does not print (8 Woods pallet forks, and Woods BB84.50).

### data/filters.csv

76 data rows covering 19 models (4 components each). The example list in the request had 19 named models, not 20. No twentieth model was added.

| Status | Fields | Rows that contain at least one field of this status |
| --- | ---: | ---: |
| VERIFIED | 13 | 9 |
| UNVERIFIED | 215 | 74 |
| CONFLICT | 0 | 0 |

The only model with filter part numbers is the TYM T264. Kubota B2601, LS MT225E, and New Holland Workmaster 25S have some fluid capacities from brochures and no part numbers.

## Conflicts

Each of these is two figures printed by the maker for one cell, or a pair of units that do not convert. Both figures are stored. They were not averaged.

1. **Case IH Farmall 50A engine horsepower.** The 24 Aug 2026 Farmall Compact A specification sheet (CIH26081801) prints 52 hp and PTO 45.0 / 42.4. The Farmall Compact 50A product page, read the same day as this file, prints Horsepower 50 and PTO 45/42. The PTO figures match when the sheet is rounded. The engine figures do not.

2. **New Holland Workmaster 40 and Boomer 40 engine kilowatts.** The March 2025 compact brochure prints gross horsepower `40 (29.2 kW)`. 40 hp is 29.8 kW, and 29.2 kW is 39.2 hp. The Boomer product page prints both Engine Power `40 (29.8 kW)` and Gross horsepower `40 (29.2 kW)`.

3. **New Holland 260TLA loader lift.** For Boomer 45/50/55 the brochure prints lift capacity at the bucket pivot pin, maximum height, as `2371 lb (1876 kg)`. 2371 lb is 1076 kg. 1876 kg is 4136 lb. The companion figure at 500 mm forward of the pivot, `1849 lb (839 kg)`, does reconcile. The brochure says loader figures are general and may vary by tractor.

4. **KIOTI DK20 SE fuel tank.** The 24 Sep 2026 spec sheet prints `12.7 gal (39.6 L)` for every DK20 SE column. 12.7 gal is 48.1 L. 39.6 L is 10.5 gal.

5. **LS MT225E / MT225HE engine horsepower.** The specifications table prints 24.6 gross hp. The cover bullet of the same brochure prints 24.7 hp.

6. **LS MT573CPS transmission.** The specifications table prints Synchro Shuttle for the CPS column. A feature callout in the same brochure says the power shuttle is the CPS model only.

7. **TYM T454, T494, and T494C fuel tank.** The model pages print `17.0 gal | 60 L`. 17.0 US gal is 64.3 L. 60 L is 15.9 gal. The T574 fuel cell `15.9 gal | 60 L` does reconcile and is not marked CONFLICT.

These mismatches were noticed and are recorded in `notes` rather than as a stored column, because the column was not one of the requested fields:

- Case IH 25A and several other sheets print displacement `1.3 L (80.4 cu. in.)`. 80.4 cu. in. is 1.318 L.
- KIOTI DK loader sheet prints maximum lift height `107.7 in. (2375 mm)`. 107.7 in. is 2736 mm. The lift-capacity cell `2474.0 lb (1122.2 kg)` does reconcile and is the value stored.
- The same DK sheet prints bucket size `66.0 / 72.0 in. (29.9 / 32.7 mm)`. Those millimetre figures are not 66 or 72 inches. Bucket size was not stored.
- TYM 3515CH overall width is printed `55.6 in. | 1430 mm`. 55.6 in. is 1412 mm. 1430 mm is 56.3 in., which is the open-station width.
- The TYM T574 page prints height to the top of the ROPS as `141.3 in. | 3590 mm`, the same pair it prints for overall length. That height was not stored.
- Kubota B01 loader net weight is printed `208 (459)` under a lbs (kg) heading. 208 lb is not 459 kg; 459 lb is 208 kg. Tractor weights on that brochure do reconcile. The swapped loader weight was not stored.
- Bobcat CT4050 prints `50.3 hp (37.3 kW)`. 50.3 hp is 37.5 kW. The difference is about 0.2 kW and was left as VERIFIED with the printed pair, noted on the row.
- KIOTI CK4040 prints PTO `34.8 hp (26.1 kW)`. 34.8 hp is 25.9 kW. Left as printed.

## What was collected

Tractor rows are one variant per row when PTO, transmission, or weight differs. Shared cab and open-station weights are written in the weight cell when the sheet prints both and the other specs match.

- Case IH Farmall Compact A (25A from the 2023/2024 sheet; 35A–55A from the 24 Aug 2026 sheet) and Farmall Compact C (35C–55C from the brochure still linked on the US series page, CIH22041801).
- New Holland Workmaster 25, 35, and 40, and Boomer 35–55, from the March 2025 compact brochure. Workmaster 25S was left out on purpose.
- Kubota B01 (including the narrow B2401DTN), MX4900/MX5400/MX6000 from the May 2025 update, and Grand L70 from the brochure marked January 2026. Loader lifts are LA435, LA1065A, LA806, LA1056, and LM1056, with the measurement point named on the sheet.
- KIOTI CK40, CK40 SE, DK20, and DK20 SE from the September 2026 spec sheets, including KL4040 and KL5520/KL5521 lifts at the pivot pins.
- LS Tractor USA MT225E/HE, MT3, MT4, and MT5, with loader lifts at the pivot pin.
- Mahindra 4500 (4540 2WD, 4540 4WD, 4550 4WD) and Max 25XL / 26XLT, including loader lifts at the pivot pins.
- Massey Ferguson GC1723E/EB and GC1725M/MB from the May 2023 US brochure, including FL1805 lift at the pivot pin. Tractor weight is not in that brochure.
- Bobcat CT1021 through CT5558 from Tractor Family Literature B-2279, created 12 Oct 2026. Loader lift is at the bucket pivot pins at maximum height. The loader model name is not printed. The 3-point lift footnote says capacity varies with lift-point height.
- TYM US pages for T25, T254, T264, T394/C, T474/C, T454, T494/C, T574/C, T554, and the numeric 2515/3015/3515 models. Those numeric models are the current TYM listings of the former Branson 15 series. The pages do not print PTO horsepower or hitch category. Hitch-lift measurement point is not named.
- John Deere 120R on 1E/1R (manual OMPXX10623) and 300E on the 3025D through 3043D list (manual OMPXX10912). Tractor fields on those rows were not re-collected.

Attachments are Woods BrushBull, BrushFighter, box scrapers, rear blades, and pallet forks from woodsequipment.com product pages, plus Land Pride RCR1242/1248/1260/1272 from spec sheet 326-047s and SGC1060/SGC1072 from operator manual 380-092M. Woods calls its box blades box scrapers. Model codes for Woods were taken from the product-page URL because the page heading is the category name.

## Unobtainable, and why

- **CountyLine, Titan Attachments, Frontier, Everything Attachments, and a usable King Kutter spec table.** Titan's site did not respond. The Frontier implements URL returned 404. King Kutter's site listed product names, and the product HTML that was retrieved did not contain a specification table, so width, weight, and hitch were not copied from the name alone. Everything Attachments and Tractor Supply CountyLine pages were not reduced to maker specification rows. The attachment file is therefore Woods and Land Pride only.
- **Land Pride box blades and pallet forks as separate spec sheets.** The Land Pride product pages require JavaScript and did not return specification tables. The cutter spec PDF and the grapple operator manual did.
- **Massey Ferguson 1700M as a US specification.** The 1700M brochures found on masseyferguson.com are European Stage V documents in metric units. They were not copied into the US table. The US GC1700 brochure was used. A US "1M" brochure exists and was not extracted.
- **Kioti NX, and the older CK2610 / CS2520 as current spec rows.** The sheets actually downloaded are the September 2026 CK40/CK40 SE and DK20/DK20 SE sheets. NX product-page text seen in search was not re-fetched, so it was not entered.
- **LS MT1 on the US market.** The MT1 specification found is on lstractor.com and is the Korean/global sheet, in metric units, not the LS Tractor USA brochure set used for MT2–MT5.
- **RK Tractors.** rktractors.com is the maker site. Marketing horsepower is on the model pages. A full specification table was not downloaded into this file, so no RK row was entered.
- **New Holland Workmaster utility 50–75.** Those series are outside the compact brochure that was downloaded. Their brochure link did not resolve to a PDF in the page HTML that was read.
- **Filter part numbers for 18 of the 19 named models.** John Deere's public loader-manual pages do not list them, and a signed-in parts catalog was not used. Kubota, Kioti, Mahindra 1626/2638, Massey, LS, New Holland 25S, Branson, and Yanmar parts catalogs were not retrieved as text. The Mahindra 4500 operator manual hosted on mahindrausa.com is an image PDF (109 pages, about 100 characters of extractable text), so it could not be read as a table. The T264 parts catalog and operator manual are public PDFs linked from tym.world and are the source of the verified filter rows. No numeric serial-number break was printed on the T264 pages that were read. The fuel-filter line does carry a Korean order-change note from HK13010000C to HK13010000C2, and both numbers are quoted.
- **John Deere 4 Series loader lift, and Kubota loaders other than LA435, LA1065A, and the Grand L70 loaders.** Those sheets were not opened. The 120R and 300E pages were.

Brochure PDFs were read locally and are not committed. The URLs above are the sources.
