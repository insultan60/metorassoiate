import type { Metadata } from "next";
import { DisciplineHub } from "../components/DisciplineHub";
import { getDiscipline } from "../lib/disciplines";
import { fitTitle, fitDescription } from "../lib/seo";
import { SITE_URL } from "../lib/site";

const d = getDiscipline("mechanical-engineer-recruiter")!;

/* Live roles are on the page, so it refreshes on the same schedule as the
   other market pages rather than freezing at deploy time. */
export const revalidate = 900;

export const metadata: Metadata = {
  title: fitTitle(d.metaTitle),
  description: fitDescription(d.metaDescription),
  alternates: { canonical: `${SITE_URL}/mechanical-engineer-recruiter` },
};

export default function MechanicalEngineerRecruiterPage() {
  return <DisciplineHub discipline={d} />;
}
