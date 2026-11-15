export const attachmentTypes = [
  {
    slug: "rotary-cutter",
    title: "Rotary cutters",
    lede: "A rotary cutter page on this site lists only cutters whose maker published a width and a horsepower range.",
    body: [
      "The tractor side of the match is PTO horsepower for the transmission you will use, a 540 rpm rear PTO, and the hitch phrase on the tractor sheet. Limited Category 1 is not rewritten as Category 1.",
      "Land Pride manual 326-047M, read from the rendered spec page, puts 18–40 hp on the 42-inch RCR1242, a shared 20–60 hp cell on the 48-inch and 60-inch models, and 25–60 hp on the 72-inch RCR1272. Woods BrushBull literature prints separate ranges for the 48, 60, 72, and 84 inch models. Titan’s product page states 20–60 HP tractor power and a 40 HP gearbox rating for the 48 inch standard cutter.",
      "There is no horsepower-per-inch rule on this page. A width is used only when the maker printed it.",
    ],
  },
  {
    slug: "box-blade",
    title: "Box blades",
    lede: "Woods publishes these as box scrapers. Each product page uses the width and horsepower range printed on that Woods page.",
    body: [
      "A box blade still has to match the hitch phrase on the tractor. Woods prints Limited CAT 1 and CAT 1 on some scrapers and CAT 1, or CAT 1 and CAT 2, on others. Limited Category 1 on a tractor is not rewritten as Category 1.",
      "The horsepower window is the maker’s window. There is no horsepower-per-inch rule. CountyLine, King Kutter, and Frontier box-blade specs were not opened and are not listed.",
    ],
  },
  {
    slug: "pallet-forks",
    title: "Pallet forks",
    lede: "Loader lift at the pivot pin is not the capacity of a set of forks.",
    body: [
      "The John Deere 2 Series brochure prints loader lift at max height at the pivot: 803 lb on the 2025R and 1,120 lb on the 2032R and 2038R. Massey Ferguson’s US brochure prints FL2611 and FL2814 lifts at the pivot pin and again at 19.5 inches forward of the pin. Moving the load forward of the pin lowers the published figure.",
      "Woods publishes pallet-fork widths, tine sizes, and hitch styles. Those pages do not print a tractor horsepower range, so the fit check cannot put one inside a published horsepower window.",
    ],
  },
  {
    slug: "grapple",
    title: "Grapples",
    lede: "A grapple needs a loader, a third hydraulic function, and a lift figure at a named point.",
    body: [
      "Land Pride’s SGC1060 and SGC1072 operator manual prints a horsepower range of 30–55 hp and two hitch weights, one for the universal quick hitch and one for the Kubota B series hitch. A grapple still needs a loader and a hydraulic circuit the tractor sheet actually names. Most tractor rows here do not have a verified remote-flow cell.",
      "Hydraulic flow is not compared here because most tractor rows in this release do not have a verified remote-flow cell. The fit check returns cannot tell when either side of a comparison is missing.",
    ],
  },
  {
    slug: "rear-blade",
    title: "Rear blades",
    lede: "Woods rear-blade pages list a width and a tractor horsepower range. Those figures are copied here and not turned into a width rule.",
    body: [
      "The RBS models include ranges written as “up to 30” horsepower and as 20–45 horsepower. The larger RB models run from 30–65 horsepower up to 80–150. The fit check uses that printed window and the hitch phrase on the same page.",
      "A rear blade does not use a PTO shaft. Horsepower on these pages is the tractor range Woods printed, not a gearbox rating.",
    ],
  },
  {
    slug: "rotary-tiller",
    title: "Rotary tillers",
    lede: "A tiller asks for a rear PTO speed and a horsepower range. This catalog does not yet have a tiller sheet.",
    body: [
      "Verified tractor rows that state a rear PTO describe 540 rpm. The John Deere 1 Series brochure also lists a mid PTO at 2,100 rpm on the 1023E and 1025R. A mid PTO is not the shaft a rear tiller uses.",
      "Gear and hydrostatic PTO horsepower differ on models such as the Kubota L3902 and the Kioti CK2640. A tiller range has to be compared with the transmission you will run. No tiller product is verified yet, so no range is printed here.",
    ],
  },
  {
    slug: "backhoe",
    title: "Backhoes",
    lede: "A subframe backhoe and a 3-point backhoe are different tools. Neither has a verified product row yet.",
    body: [
      "Tractor pages publish rear lift only at the point the sheet names. That lift is not digging force and not a backhoe’s published bucket force.",
      "The Massey GC1700 brochure marks a tractor-loader-backhoe package on the EB and MB rows and not on the E and M rows. That is a package flag on the tractor sheet, not a backhoe spec. No backhoe width or horsepower range is stored.",
    ],
  },
  {
    slug: "ballast-box",
    title: "Ballast boxes",
    lede: "This site does not calculate how much ballast to add.",
    body: [
      "Published tractor weights are the weights on the source row, such as shipping weight or weight with fluids. They are not a prescription to add weight.",
      "A ballast box is an implement with its own mass and its own hitch. No ballast-box product sheet is verified. The fit check will not invent a weight, and there is no calculator on this site.",
    ],
  },
  {
    slug: "mid-mount-mower",
    title: "Mid-mount mowers",
    lede: "A mid-mount mower uses the mid PTO speed the tractor sheet names, which is not 540 rpm.",
    body: [
      "The John Deere 1 Series brochure lists mid PTO at 2,100 rpm for the 1023E and 1025R, alongside a 540 rpm rear PTO. The Kioti CS2510H page lists mid speed at 2,200 rpm. The Kioti NX4510 page lists an optional mid PTO at 2,000 rpm.",
      "No mid-mount mower deck has a verified width or horsepower range in the attachment table. Deck width is omitted until a maker sheet is added.",
    ],
  },
];
