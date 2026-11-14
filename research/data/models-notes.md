# Model data notes

Checked 2026-11-14. The table is `models.csv` in this folder. A cell is verified only when a manufacturer brochure or an official product page was opened and the figure was read. Search snippets were not copied in as facts. A confidential Kubota L3560 dealer PDF was not used.

`models.csv` has 102 rows. Thirteen of those rows are gap bundles (several models named, every spec field unverified). One row is the Mahindra 2600 series as a single row because the PTO cells did not line up one-to-one with the nine tractors. The rest are individual variants.

Field counts across all 102 rows, treating any status that begins with VERIFIED as verified:

| Field | Verified rows | Not verified |
| --- | ---: | ---: |
| Engine hp | 74 | 28 |
| PTO hp | 83 | 19 |
| Hitch | 73 | 29 |
| Rear lift value | 59 | 43 |
| Loader lift | 10 | 92 |
| Weight | 14 | 88 |
| Transmission | 73 | 29 |
| Tires | 42 | 60 |

Verified does not mean every sub-field is safe to publish. Read the status text. Examples:

- John Deere 4 Series engine cells are verified as printed, and they fit metric PS (the “HP” number divided by about 1.36 equals the kW). The PTO cells on the same pages fit mechanical horsepower. Do not divide PTO by engine and call it an efficiency.
- 4066M gear PTO and 3046R hydrostatic PTO were rejected because the kilowatt figure cannot be right.
- L2502 PTO is verified on the 2023 spec sheet (20.5 gear, 19.0 HST) and the 2026 full-line book prints a different small-L02 pair (19.8 and 18.4). That row is a conflict. Do not pick one silently.
- Kioti CS2510H prints two lift lines that swap pounds and kilograms. The lift is unverified on purpose. The PTO line, 18.50 hp (13.90 kW), is verified.
- Mahindra 1600 brochure lift is 2,646 lb with no measurement point. The series HTML page says 1,720 lb. Both cannot be the same fact. The CSV keeps the brochure number and does not average them.
- Yanmar’s spec table says Limited Category 1. A bullet in the same brochure says Category I.
- eMax 25L PTO is printed 16.9 hp (12.26 kW). 16.9 mechanical horsepower is about 12.6 kW, not 12.26. The cell is stored as printed.
- Rear-lift measurement points are missing on several Mahindra and Kioti rows. A number without a point is not a comparable lift.
- Loader model and loader lift are the weakest columns. Most brochures name a loader family or a lift figure without tying it to one tractor. Those stayed unverified.

## Documents opened

John Deere 1 Series, August 2024 brochure, via the link on the live 1025R page. John Deere 3 Series and 4 Series literature only as dealer-hosted PDFs. Kubota 2026 full-line book, B01 brochure, 2023 L02 sheet, 2020 LX brochure, 2019 MX brochure. LS MT2/MT2E brochure in an October 2025 uploads path. Yanmar SA brochure. New Holland US compact index (one PTO sentence). Massey Ferguson GC1700 brochure on masseyferguson.com. Mahindra eMax, 1600, and 2600 brochures on mahindrausa.com. Kioti CK and DK spec sheets on kioti.com’s file host, plus the CS2510 product page.

## Not opened, so not in the verified columns

John Deere 2 Series. Massey 1700M, 1800M, 2800M. Case IH Farmall A and C (the brochure URL returned HTML). New Holland model-level sheets beyond the 25S sentence. Branson. TYM, including a T264 PDF whose numerals did not extract. LS series other than MT2. Bobcat CT. RK. Kubota LX20 per model, BX23S, L4802 Narrow. Mahindra 4540 and 4550. Kioti CS models other than CS2510H, and the NX series.

Those names are gap rows so the production list does not pretend they were checked.

## 4 Series unit fix

On `4-Series.pdf`, page 14:

| Model | Engine as printed | What the pair fits | PTO as printed | What the PTO pair fits |
| --- | --- | --- | --- | --- |
| 4044M | 43.1 (31.7 kW) | metric PS | 34.6 (25.8) gear; 33.6 (25.0) hydro | mechanical hp |
| 4052M | 51.5 (37.9 kW) | metric PS | 42.2 (31.4) gear; 41.2 (30.7) hydro | mechanical hp |
| 4066M | 65.9 (48.5 kW) | metric PS | 57 (42.5) hydro | mechanical hp. Gear cell rejected |
| 4052M HD | 51.5 (37.9 kW) | metric PS | 40.8 (30.5) hydro | mechanical hp |

Page 15 hitch cells, in header order 4066M HD, 4044R, 4052R, 4066R, 4075R, extracted as Category 1/2, then Category 1 four times. PTO on that page was not used.
