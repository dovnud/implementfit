# Model data notes

Checked 2026-11-14. The table is `models.csv` in this folder. A cell is verified only when a manufacturer brochure or an official product page was opened and the figure was read. Search snippets were not copied in as facts. A confidential Kubota L3560 dealer PDF was not used.

`models.csv` has 124 rows after the visual pass on 2026-11-14. About 111 of those are individual variants with a verified PTO figure. The rest are still gap bundles.

Field counts across all 124 rows. A status that begins with VERIFIED is counted as verified, including rows that also carry a conflict note. The CS2510H lift row is the one rear-lift conflict.

| Field | Verified rows | Not verified |
| --- | ---: | ---: |
| Engine hp | 103 | 21 |
| PTO hp | 111 | 13 |
| Hitch | 97 | 27 |
| Rear lift value | 91 | 33, including 1 conflict |
| Loader lift | 17 | 107 |
| Weight | 47 | 77 |
| Transmission | 101 | 23 |
| Tires | 60 | 64 |

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

## Resolutions from rendered pages, 2026-11-14

**Mahindra 2600.** The specifications page was rendered. Nine tractors now have their own rows. PTO is 31 hp on the 2638 HST, 29.5 on the 2638 cab, 36 on both 2645s, 46.3 on both 2660 HSTs, 48.5 on both 2660 power shuttles, and 53.8 on the 2670 cab. Hitch is Category 1 on the 2638 and 2645, Category I with telescoping links on the 2660, and Category II on the 2670. The lift number is on the page. The measurement point is still not stated.

**John Deere 4 Series page 15.** Rendered and checked against the PDF text layer. 4066M Heavy Duty is hydrostatic only, 51.9 PTO hp (38.7 kW), Category 1/2, 4,255 lb open station. 4044R, 4052R, and 4066R have both a gear and a hydro PTO. 4075R is 60 PTO hp (44.7 kW) on the hydro, with no gear figure, Category 1, and a cab weight of 4,828 lb. The 4066M and 4066R gear cell really does print **58 (53.2)**. A closer crop matches the text layer. 58 mechanical horsepower is about 43.3 kW, not 53.2. That conflict stays. Do not “correct” it to 43.2.

**Land Pride RCR12.** The rendered spec page puts 18–40 hp on the 42-inch model, one shared 20–60 hp cell across the 48-inch and 60-inch models, and 25–60 hp on the 72-inch model alone.

**Kubota L2502.** Both pages were rendered. They do not say the same thing. The February 2023 spec sheet prints 24.8 gross hp, 20.5 gear PTO hp, and 19.0 HST PTO hp. The January 2026 full-line book prints 23.3 gross hp, 19.8 PTO hp on the 2WD gear model, and 18.4 PTO hp on the 4WD HST. The 24-inch lift, 1,389 lb, is the same in both. Keep both figures. The later catalog number is the 2026 book. L3302, L3902, and L4802 PTO figures match across the two documents, and the 2026 book adds weights.

**Kioti CS2510H.** The official product page still prints 700 lb (318 kg) in the hydraulics block and 318 lb (700 kg) in the hitch block. Only the first pair is unit-consistent. The conflict stays. No lift number from that page should be published.

## Models added from official documents this pass

John Deere 2025R, 2032R, and 2038R from the Deere 2 Series brochure (copyright 2021). Kioti NX4510, NX4510H, and the NX4510H cab from kioti.com product pages. Massey Ferguson 1835M, 1840M, 2850M, 2855M, and 2860M from the US 1800M/2800M brochure, including FL2611 and FL2814 loader lifts at the pivot pin and at 19.5 inches forward of the pin. LS MT122 and MT125 from the October 2025 MT1 brochure. TYM T264 and T394 from 2024 TYM brochures, including both hitch-end and 24-inch lift.

## 4 Series unit fix

On `4-Series.pdf`, page 14:

| Model | Engine as printed | What the pair fits | PTO as printed | What the PTO pair fits |
| --- | --- | --- | --- | --- |
| 4044M | 43.1 (31.7 kW) | metric PS | 34.6 (25.8) gear; 33.6 (25.0) hydro | mechanical hp |
| 4052M | 51.5 (37.9 kW) | metric PS | 42.2 (31.4) gear; 41.2 (30.7) hydro | mechanical hp |
| 4066M | 65.9 (48.5 kW) | metric PS | 57 (42.5) hydro | mechanical hp. Gear cell rejected |
| 4052M HD | 51.5 (37.9 kW) | metric PS | 40.8 (30.5) hydro | mechanical hp |

Page 15 hitch cells, in header order 4066M HD, 4044R, 4052R, 4066R, 4075R, extracted as Category 1/2, then Category 1 four times. PTO on that page was not used.
