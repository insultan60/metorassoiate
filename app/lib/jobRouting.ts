import { CITIES } from "./cities";

/* Which desk a live job belongs to, and which market page covers it.
 *
 * WHY
 *
 * A job page is the freshest content on this site and the most likely to be
 * linked from outside, and until now it pointed at exactly two places: the
 * jobs index and the ATS. Nothing carried a reader, or a crawler, from a live
 * role back into the discipline hub or the city page that is trying to rank
 * for that same work. That is the cheapest internal link on the site and it
 * was not being made.
 *
 * HOW
 *
 * Titles come from the ATS, so this classifies on the words that are actually
 * in them. Order matters: an inspector on a bridge program is CEI work, not
 * bridge design, and a project manager on a treatment plant belongs to the
 * water desk rather than to project management. Anything unmatched falls to
 * civil, which is the general desk and the correct answer for most engineering
 * titles this firm posts.
 *
 * The city link is only offered where a market page exists. The five city
 * hubs carry an identical slug list (see lib/markets), so a match against the
 * civil list is a valid match for any of them. Bridge, transportation and
 * project management have hub pages but no city pages, so a job on those
 * desks links to its civil market page instead of nowhere.
 */

export type JobDesk = {
  /** URL segment of the hub page. */
  segment: string;
  /** How the desk is named in the sentence on the job page. */
  label: string;
  /** True where the hub also publishes per-city pages. */
  hasCityPages: boolean;
};

const DESKS: { test: RegExp; desk: JobDesk }[] = [
  {
    test: /\b(cei|inspect\w*|nbis|materials testing|qa\/qc)\b/i,
    desk: { segment: "cei-inspection-recruiter", label: "CEI and inspection", hasCityPages: true },
  },
  {
    test: /\b(bridge|structural|seismic|load rating)\b/i,
    desk: { segment: "bridge-structural-recruiter", label: "bridge and structural", hasCityPages: false },
  },
  {
    test: /\b(water|wastewater|sewer|stormwater|treatment|hydraulics?|hydrolog\w+)\b/i,
    desk: { segment: "water-wastewater-recruiter", label: "water and wastewater", hasCityPages: true },
  },
  {
    test: /\b(mep|mechanical|electrical|plumbing|hvac|commissioning|cpd|fire protection)\b/i,
    desk: { segment: "mep-engineering-recruiter", label: "MEP engineering", hasCityPages: true },
  },
  {
    test: /\b(municipal|city engineer|public works|county engineer)\b/i,
    desk: { segment: "municipal-engineering-recruiter", label: "municipal engineering", hasCityPages: true },
  },
  {
    test: /\b(transportation|traffic|highway|roadway|its|transit)\b/i,
    desk: { segment: "transportation-recruiter", label: "transportation", hasCityPages: false },
  },
  /* Before project management on purpose. "Civil Engineer - Project Manager"
     is a civil role with a PM title on it, and the civil desk is the better
     landing page for it; "Construction Project Manager" still falls through
     to project management below. */
  {
    test: /\b(civil|site development|land development|drainage|geotechnical|survey\w*)\b/i,
    desk: { segment: "civil-engineering-recruiter", label: "civil engineering", hasCityPages: true },
  },
  {
    test: /\b(project manager|program manager|construction manager|owner'?s representative|pmp)\b/i,
    desk: { segment: "project-management-recruiter", label: "project management", hasCityPages: false },
  },
];

const CIVIL: JobDesk = {
  segment: "civil-engineering-recruiter",
  label: "civil engineering",
  hasCityPages: true,
};

export function deskForJob(title: string): JobDesk {
  for (const { test, desk } of DESKS) if (test.test(title)) return desk;
  return CIVIL;
}

/** The market page covering a job's location, or null if there is not one. */
export function marketForJob(
  desk: JobDesk,
  city: string,
  state: string
): { href: string; label: string } | null {
  if (!city || !state) return null;

  /* The ATS gives the state in full ("Illinois"), while the city data carries
     both the full name and the abbreviation, so both are accepted here. The
     city is compared exactly: "Bridgeport or Stratford" arrives as one string
     from the portal and should match neither. */
  const wantCity = city.trim().toLowerCase();
  const wantState = state.trim().toLowerCase();
  const match = CITIES.find(
    (c) =>
      c.city.toLowerCase() === wantCity &&
      (c.abbr.toLowerCase() === wantState || c.state.toLowerCase() === wantState)
  );
  if (!match) return null;

  const segment = desk.hasCityPages ? desk.segment : CIVIL.segment;
  const label = desk.hasCityPages ? desk.label : CIVIL.label;

  return {
    href: `/${segment}/${match.slug}`,
    label: `${label.charAt(0).toUpperCase()}${label.slice(1)} recruiting in ${match.city}, ${match.abbr}`,
  };
}
