# Verdict

Checked 2026-11-14. NSC here means three scores from 1 to 10: niche clarity, search demand, and how much room a new site has against current competition. Higher competition score means more room, not a fiercer market. A composite is included because the brief asked for a score, and it is the part the red team pulls apart.

## Scores

| Piece | Score | Why |
| --- | ---: | --- |
| Niche | 8 | The buyer’s job is narrow and repeated: which hitch, which PTO horsepower, which cutter, which filter, which fluid, on a US compact or sub-compact in a known horsepower band. The products exist, the brochures exist, and the retailers exist. The score is not 10 because the band blurs into utility tractors, and because “compact tractor” as a head term is a shopping query, not a reference query. |
| Search demand | 5 | Query shapes are real. Google’s suggestion endpoint on 2026-11-14 returned long lists for “what size brush hog for {hp},” “what size box blade for {hp},” “1025R oil filter,” “limited category 1,” and model-plus-specs queries. Volumes are unknown. Ahrefs was not available. A supplied Google Trends comparison was not confirmed: the explore request returned HTTP 429. Adjacent sites are large (TractorData’s public third-party estimates are in the hundreds of thousands of visits), and a meaningful share of that demand is old row-crop models, not this band. Demand for the niche is not the same as demand for a new URL. |
| Competition, as room to operate | 4 | TractorData (Tranco rank 64,419 on 2026-11-13) owns spec tables. Forums own problems. Messick’s (Tranco 58,555) owns parts commercial intent. FitTractor registered `fittractor.com` on 2026-04-17 and already published about 415 URLs of the compatibility product, including the guides and the lift calculator. They are outside the Tranco top million (rank 4,325,354 on 2026-11-13), so they have not won the rankings. They have won the template. Room remains on maintenance and on measurement pages. Room does not remain for “we will be the first fit database.” |
| Composite | 6 | A sourced maintenance-and-fit wedge for this band is a reasonable project. “The number one site in the niche,” if that means outranking TractorData, the forums, Messick’s, and FitTractor at once, is a different and worse project. The 6 applies to the wedge in the revised `plan.md`. It does not apply to the slogan. |

## Red team of the score

**The 8 on niche is soft.** A niche can be clear and still be too well served to enter. Clarity is not demand and it is not weakness of rivals. The 8 should not be quoted alone. Someone selling the project internally will quote it alone. Don’t.

**The 5 on demand could be a 3 or a 7, and this file cannot tell.** If the unverified Trends lead is true, “box blade” and “brush hog” are several times a ordinary reference query, and “what size brush hog” as an exact phrase is a rounding error. That would push head-term demand up and long-tail phrase demand down. The suggestions show the long tail is where the words are specific (“for 1025r,” “for 25 hp”). Specific and small can still be the right business if the visitor buys a cutter. Specific and small cannot support a display-ad business at a fantasy RPM. Until a keyword tool is connected, a demand score above 5 would be pretending. A score below 5 would ignore TractorData’s actual audience and the suggestion lists. Five is the honest center, and it is the weakest input in the composite.

**The 4 on room could be a 6.** TractorData’s example keywords in the DirectoryGems writeup are models like the John Deere 4020 and 4440, not the 1025R. Compact queries may be less owned than the domain’s traffic implies. FitTractor’s lack of rank is real. A new site that only publishes what FitTractor does not have (filters, fluids, unit traps, measurement points) is not walking into a wall. That argument is why the revised plan exists, and it is why the composite is 6 rather than 4.

**The 4 on room could also be a 3.** FitTractor can add a `/maintenance/` section in a week, because they already have the model records. Forums will keep the problem queries. AI Overviews will keep the one-number queries. The wedge is real and narrow, and it can close before a 25-page test is indexed. The composite does not price that speed. A founder who needs the score to stay a 6 for a year is misusing it.

**The composite hides a split decision.** For “build a careful reference and affiliate site on verified compacts,” 6 is fair. For “become the number one site in this niche,” the score is 4, and the missing piece is not content volume. It is that the number-one spec site already exists, the number-one parts intent already exists, and the number-one clone of this exact idea has a seven-month head start. Shipping 400 URLs does not change that.

**What would move the score.** A keyword export with volumes, a Trends pull that actually returns, and Search Console data on the 25-page test. Those are measurements. Another afternoon of competitor browsing will not move the score in a way that should be trusted.

## RDAP, 2026-11-14

Registry endpoint: `https://rdap.verisign.com/com/v1/domain/{name}`. Client: HTTPS GET. The same client, in the same session, received a full RDAP object for `fittractor.com`, so a 404 below is not a dead client.

| Domain | HTTP status | Content-Type | Body length | Result |
| --- | --- | --- | --- | --- |
| implementfit.com | 404 | application/rdap+json | 0 | No domain object returned |
| threepointfit.com | 404 | application/rdap+json | 0 | No domain object returned |
| compacttractorguide.com | 404 | application/rdap+json | 0 | No domain object returned |
| fittractor.com (control) | 200 | application/rdap+json | 2605 | Registered 2026-04-17, registrar Hostinger, nameservers at Cloudflare. Database event time on the object: 2026-11-14T19:32:50Z |

Verisign’s .com RDAP returns 404 when the registry has no domain object. That is evidence the three names were not registered in .com at the time of the lookup. The response bodies were empty rather than a JSON error document. The status line and the content type were still a registry 404, and the control lookup succeeded.

Limits, so this is not read as a permanent holding:

- Other TLDs were not checked. `.com` only.
- RDAP is not a shopping cart. Any of the three names can be registered after this lookup, including by someone else who reads a public writeup of this research.
- A 404 does not say the name is a good name. `implementfit.com` describes the project and collides verbally with FitTractor. `threepointfit.com` describes the hitch and is hard to say. `compacttractorguide.com` describes a guide and will compete, in the user’s memory, with every other guide. None of that is a trademark search. This pass did not do a trademark search.
- No opinion is offered on whether to register a name. The brief said not to build a site yet. Registration can wait until the test batch is actually going to be published. Re-run these three lookups that day. Do not trust this table after the date in the heading.

## Decision

Proceed only with the revised plan in `plan.md`: 25 sourced pages, blank cells where the manual was not opened, no ballast number, no affiliate link until that program’s own contract is read, and no claim of being first. The niche score is not permission to skip the source rule. The competition score is the binding constraint, and FitTractor is the reason.
