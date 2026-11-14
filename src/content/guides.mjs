export const guides = [
  {
    slug: "rotary-cutter-width",
    title: "Rotary cutter width",
    description: "How the published cutter ranges in this catalog line up with tractor PTO horsepower.",
    paragraphs: [
      "Width on this site is the width a maker printed. Land Pride’s RCR12 manual gives 42, 48, 60, and 72 inches for four model numbers, and the rendered spec page assigns 18–40 hp to the 42-inch model, 20–60 hp jointly to the 48- and 60-inch models, and 25–60 hp to the 72-inch model.",
      "Woods BrushBull literature prints 15–50 hp for 48 inches, 25–50 hp for 60 inches, 30–65 hp for 72 inches, and 35–90 hp for 84 inches. Titan’s standard 48-inch cutter page states 20–60 HP tractor power and a 40 HP gearbox rating. Those are three different documents. They are not one chart.",
      "Match the range to the tractor’s PTO horsepower for the transmission you will use. The Kubota L3902 row prints 32.1 hp gear and 30.3 hp HST. The John Deere 1023E row prints 14.9 PTO hp, which sits below the 18 hp start of the 42-inch Land Pride range. The fit check says cannot tell when the hitch phrases do not match, including Limited Category 1 against Category I.",
    ],
  },
  {
    slug: "box-blade-width",
    title: "Box blade width",
    description: "Why this site does not assign a box-blade width from horsepower.",
    paragraphs: [
      "No verified box-blade row names a width and a horsepower range. CountyLine, King Kutter, and Frontier sheets were not opened, so they are not used to fill the gap.",
      "A box blade still has to match the hitch phrase on the tractor. Limited Category 1 on the John Deere 1023E, 1025R, 2025R, and Yanmar SA rows is stored as printed. Category 1 on a Kubota L or Kioti CK row is a different phrase.",
      "Tractor weight is part of whether a blade will stay planted, and weight is published only when the source row has it. The page does not convert PTO horsepower into a recommended blade width.",
    ],
  },
  {
    slug: "loader-vs-fork",
    title: "Loader lift and pallet forks",
    description: "Pivot-pin lift and a figure forward of the pin are different measurements.",
    paragraphs: [
      "The John Deere 2 Series brochure prints loader lift at maximum height at the pivot: 803 lb for the 2025R and 1,120 lb for the 2032R and 2038R. It does not print a pallet-fork rating.",
      "The Massey Ferguson 1800M and 2800M brochure prints two points. FL2611 is 1,870 lb at the pivot pin to maximum height and 1,380 lb at 19.5 inches forward of the pin. FL2814 is 2,570 lb and 1,880 lb at those same two points. The forward figure is lower.",
      "Until a fork maker’s load-center rating is in the attachment table, this site cannot put a fork and a loader in one range. The fit check returns cannot tell.",
    ],
  },
  {
    slug: "limited-category-1",
    title: "Limited Category 1",
    description: "Where the brochures use the words Limited Category 1 instead of Category 1.",
    paragraphs: [
      "The August 2024 John Deere 1 Series brochure prints Limited Category 1 for the 1023E and the 1025R. The 2 Series brochure prints Limited Category 1 for the 2025R and Category 1 for the 2032R and 2038R. The Yanmar SA brochure’s spec table prints Limited Category 1 for the SA221, SA324, and SA424. A feature bullet in that same brochure also says Category I. Both phrases are kept.",
      "Land Pride’s RCR12 cutters are published as Category I, quick-hitch ready. That is not the same string as Limited Category 1. The fit check does not treat them as a match.",
      "Kubota L02, BX, and many Kioti CK rows are published as Category I or Category 1, without the word Limited. Those rows are not relabeled to match the Deere 1 Series.",
    ],
  },
  {
    slug: "gear-vs-hst-pto",
    title: "Gear and hydrostatic PTO",
    description: "Same model code, two PTO horsepower figures, when the sheet prints both.",
    paragraphs: [
      "The Kubota L3302, L3902, and L4802 rows print a gear PTO and an HST PTO. On the L3902 those figures are 32.1 hp and 30.3 hp. The 2023 sheet and the 2026 full-line book agree on those three models. The L2502 does not: the 2023 sheet prints 20.5 and 19.0, and the 2026 book prints 19.8 and 18.4. Both pairs stay on the L2502 page.",
      "Kioti prints the split on separate model codes. The CK2640 manual row is 19.5 PTO hp and the CK2640H hydrostatic row is 18.7. The CK3540 and CK4040 pairs do the same. Mahindra’s 1626 shuttle row is 21.5 PTO hp and the 1626 HST row is 19.",
      "A cutter range is compared with the figure for the transmission you will use. If the row is in conflict, or the transmission is not selected, the fit check says cannot tell.",
    ],
  },
  {
    slug: "mid-vs-rear-pto",
    title: "Mid PTO and rear PTO",
    description: "540 rpm at the rear is not the mid PTO speed.",
    paragraphs: [
      "Rear PTO speed on the compact sheets in this catalog is 540 rpm when the sheet states a speed. Mid PTO is a second shaft. The John Deere 1 Series brochure lists mid PTO at 2,100 rpm. The Kioti CS2510H page lists 2,200 rpm. The Kioti NX4510 page lists an optional 2,000 rpm mid PTO.",
      "A rear rotary cutter uses the rear shaft. A mid-mount mower uses the mid shaft. The attachment pages do not yet include a verified mower deck, so no deck width is stated.",
    ],
  },
  {
    slug: "ballast-options",
    title: "Ballast, without a number to add",
    description: "Published tractor weight is not an instruction to add ballast.",
    paragraphs: [
      "Weight cells are shipping weight, weight with fluids, or weight with ROPS, depending on the sentence in the source. The John Deere 2 Series brochure says “with all fluids” and prints 1,872 lb for the 2025R. The TYM T264 brochure says weight with ROPS is 1,881 lb. Those phrases are not interchangeable, and neither one says how much ballast to bolt on.",
      "This site does not calculate ballast. It does not recommend filling tires, stacking suitcase weights, or building a box. The operator’s manual for the tractor and the loader is the instruction. A wrong added weight is a rollover risk. The omission is deliberate.",
    ],
  },
  {
    slug: "horsepower-pairs",
    title: "How to read a horsepower pair",
    description: "Engine horsepower and PTO horsepower, and why the kilowatt figure has to match.",
    paragraphs: [
      "A cell that prints horsepower and kilowatts can be checked. Mechanical horsepower times about 0.7457 is the kilowatt value. Metric PS divided by about 1.36 is a different kilowatt value. The John Deere 4 Series literature prints several engine cells that fit PS and several PTO cells that fit mechanical horsepower. The 4044R engine cell, 43.1 (32.1 kW), fits mechanical horsepower. The 4044M engine cell, 43.1 (31.7 kW), fits PS. Both are shown as printed.",
      "The 4066M and 4066R gear cell prints 58 (53.2). That pair does not fit either conversion. The page shows it as a conflict. The hydrostatic figures on those models do fit mechanical horsepower and are labeled separately.",
      "The Kioti CS2510H page prints 700 lb (318 kg) and also 318 lb (700 kg). Only the first pair is consistent. The lift is not published as a single number.",
    ],
  },
];

export const problems = [
  {
    slug: "engine-hp-and-pto-hp",
    title: "Why engine horsepower and PTO horsepower differ",
    description: "The two numbers come from different rows, and sometimes from different unit systems.",
    question: "Why is PTO horsepower lower than the engine horsepower on the hood?",
    paragraphs: [
      "The sheets store them as separate cells. On the John Deere 1025R, the August 2024 brochure prints 23.9 hp engine and 17.2 hp PTO. On the Kubota L3902, engine gross is not the 32.1 hp gear PTO or the 30.3 hp HST PTO.",
      "Some John Deere 4 Series engine cells fit metric PS while the PTO cell beside them fits mechanical horsepower. Dividing PTO by the engine number without checking the units misstates the ratio. The horsepower-pair guide shows the cells that failed that check.",
    ],
  },
  {
    slug: "two-lift-numbers",
    title: "Why one tractor has two lift numbers",
    description: "Lift at the pin and lift farther back are different measurements.",
    question: "Which lift number should I use?",
    paragraphs: [
      "Use the number whose measurement point matches the question. The Massey brochure prints lift at the ball ends and again 24 inches behind the ball ends. The forward-of-pin loader figures are lower than the pivot-pin figures on FL2611 and FL2814.",
      "If the sheet does not name the point, this site still shows the number and says the point was not stated. That number is not compared with a fork rating.",
    ],
  },
  {
    slug: "limited-category-1-implements",
    title: "Why a Category 1 implement can miss a limited hitch",
    description: "The brochures use both phrases, and this site does not merge them.",
    question: "Does Limited Category 1 mean Category 1?",
    paragraphs: [
      "Not on these pages. The Deere 1 Series brochure and the 2025R column say Limited Category 1. The Deere 2032R column and the Kubota L02 sheet say Category 1 or SAE Category I. The Yanmar SA spec table says Limited Category 1 while a bullet in the same file says Category I.",
      "The fit check treats those strings as different. The result is cannot tell, not a match.",
    ],
  },
  {
    slug: "two-brochures-disagree",
    title: "When two official documents disagree",
    description: "The Kubota L2502 is the worked example. The figures are not averaged.",
    question: "What do you publish if two Kubota documents disagree?",
    paragraphs: [
      "The February 2023 L02 spec sheet prints 24.8 gross hp and PTO horsepower of 20.5 gear and 19.0 HST for the L2502. The January 2026 full-line book prints 23.3 gross hp, 19.8 PTO hp on the 2WD gear model, and 18.4 PTO hp on the 4WD HST. The 1,389 lb lift at 24 inches matches both.",
      "The L2502 page shows both publications. L3302, L3902, and L4802 PTO figures match across those two documents, so they do not carry the same flag. The 1025R fuel-filter row is a second example: a 2019 Deere overview and a 2024 parts guide do not name the same fuel filter.",
    ],
  },
];
