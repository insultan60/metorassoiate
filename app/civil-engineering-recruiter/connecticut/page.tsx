import type { Metadata } from "next";
import { StateHub } from "../../components/StateHub";
import { getState } from "../../lib/states";
import { fitTitle, fitDescription } from "../../lib/seo";
import { SITE_URL } from "../../lib/site";

/* A literal folder rather than another dynamic segment.
 *
 * Next resolves a static segment ahead of a sibling [city], so this answers
 * /civil-engineering-recruiter/connecticut without the city route having to
 * know states exist. The alternative was teaching [city] to resolve two kinds
 * of page, on a file that already serves fifty, which is a lot of risk to
 * carry for a cleaner folder listing. No city slug collides: ours all end in
 * a state abbreviation. */

const s = getState("connecticut")!;

export const revalidate = 900;

export const metadata: Metadata = {
  title: fitTitle("Civil Engineering Recruiter Connecticut"),
  description: fitDescription([
    "Civil engineering recruiters placing licensed PEs, bridge, rail and",
    "municipal engineers across Connecticut. Candidates never pay a fee.",
  ]),
  alternates: { canonical: `${SITE_URL}/civil-engineering-recruiter/connecticut` },
};

export default function ConnecticutPage() {
  return <StateHub state={s} />;
}
