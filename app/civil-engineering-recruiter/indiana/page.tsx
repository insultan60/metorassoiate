import type { Metadata } from "next";
import { StateHub } from "../../components/StateHub";
import { getState } from "../../lib/states";
import { fitTitle, fitDescription } from "../../lib/seo";
import { SITE_URL } from "../../lib/site";

/* A literal folder rather than another dynamic segment, for the reason set
   out on the Connecticut page: Next resolves a static segment ahead of a
   sibling [city], so the fifty city pages never had to learn that states
   exist. No city slug collides; ours all end in a state abbreviation. */

const s = getState("indiana")!;

export const revalidate = 900;

export const metadata: Metadata = {
  title: fitTitle("Civil Engineering Recruiter Indiana"),
  description: fitDescription([
    "Civil engineering recruiters placing licensed PEs, land development,",
    "transportation and municipal engineers across Indiana. Candidates never pay a fee.",
  ]),
  alternates: { canonical: `${SITE_URL}/civil-engineering-recruiter/indiana` },
};

export default function IndianaPage() {
  return <StateHub state={s} />;
}
