/** Canonical production origin — no trailing slash. Used for metadataBase, sitemap, robots, and canonical URLs.
 *  Must be the "www" host: Vercel's domain config 308s the apex to www, so an
 *  apex SITE_URL made every sitemap/canonical URL redirect on first fetch —
 *  the cause of Search Console's "Page with redirect" pile-up. */
export const SITE_URL = "https://www.metroassoc.com";

/* Careers portal. CAREERS_URL browses all jobs; APPLY_URL is the application
   form. Still Top Echelon's portal and the same portal id, but served on our
   own jobs.metroassoc.com rather than careers.topechelon.com.

   Every "View all openings" and "Apply" button on the site reads from these
   two constants, and on the old host each one handed a candidate to a domain
   with someone else's name on it at the moment they decided to act. It also
   means the destination is ours to redirect if the ATS is ever replaced,
   instead of a vendor URL baked into every hub page.

   Top Echelon's custom domain is additive: careers.topechelon.com still
   serves the identical portal with no redirect and no canonical pointing
   here, so nothing moves until these constants change. Verified before
   switching — both hosts 200, same portal id, same job ids, same JobPosting
   structured data on detail pages.

   app/lib/jobs.ts reads the listing and each role's JSON-LD from CAREERS_URL,
   so the /jobs mirror follows automatically. */
export const CAREERS_URL =
  "https://jobs.metroassoc.com/portals/3a7f6fd3-7cf7-447c-a20f-2354eb2031df";
export const APPLY_URL =
  "https://jobs.metroassoc.com/portals/3a7f6fd3-7cf7-447c-a20f-2354eb2031df/apply";

export const PHONE = "+1 312-500-1878";
export const PHONE_HREF = "tel:+13125001878";
export const EMAIL = "patrick@metroassoc.com";

/** Treats an unset OR still-placeholder env value as empty. Guards against
 *  exactly what happened here: PASTE_YOUR_..._HERE left in place looks
 *  "set" to a plain `?? ""` check, so the contact form tried to use it as a
 *  real CaptchaId and just showed a broken widget instead of skipping
 *  verification cleanly. Exported so app/api/contact/route.ts can apply the
 *  same rule to GEETEST_CAPTCHA_KEY. */
export function realEnvValue(v: string | undefined): string {
  const s = (v ?? "").trim();
  return s && !s.toUpperCase().startsWith("PASTE_YOUR") ? s : "";
}

/** GeeTest v4 CAPTCHA ID (public — safe to ship to the browser). Unlike
 *  Turnstile, GeeTest has no published test ID, so this is empty until set.
 *  Get it from https://console.geetest.com (Products > CAPTCHA v4), and set
 *  the matching GEETEST_CAPTCHA_KEY (secret) env var on the server — see
 *  app/api/contact/route.ts. Empty here means the contact form skips the
 *  bot check entirely rather than rendering a widget that can't work. */
export const GEETEST_CAPTCHA_ID = realEnvValue(process.env.NEXT_PUBLIC_GEETEST_CAPTCHA_ID);

/** Base URL of the JobFolder recruiter platform (a separate app), used only
 *  to pull the recruiters its admin has approved to appear on our "Meet Our
 *  Team" page — see app/lib/jobfolderTeam.ts. Empty until set, in which case
 *  the team page just shows the static roster with none added. */
export const JOBFOLDER_API_URL = process.env.JOBFOLDER_API_URL ?? "";

/* The metros Metro Associates staffs from, as published on /contact.
 *
 * Single source for two consumers that had drifted apart: the office grid on
 * the contact page, and `areaServed` in the Organization schema — which
 * previously said only "United States" while the site itself named eight
 * metros.
 *
 * City-level on purpose. No street addresses are published anywhere, and
 * that is the correct model rather than an omission: this is a national
 * service-area business, and the two addresses on file are a residential one
 * and a mail suite. Publishing the first is a privacy problem; the second
 * breaks Google's rules on virtual offices and gets profiles suspended.
 */
export type OfficeMetro = {
  office: string;
  city: string;
  state: string;
  map: string;
  /** The head office. Exactly one entry sets this. */
  hq?: boolean;
};

export const OFFICE_METROS: OfficeMetro[] = [
  { office: "Florida Office", city: "Orlando", state: "FL", map: "/maps/orlando.png", hq: true },
  { office: "Massachusetts Office", city: "Boston", state: "MA", map: "/maps/boston.png" },
  { office: "District of Columbia Office", city: "Washington", state: "DC", map: "/maps/washington.png" },
  { office: "Georgia Office", city: "Atlanta", state: "GA", map: "/maps/atlanta.png" },
  { office: "Texas Office", city: "Dallas", state: "TX", map: "/maps/dallas.png" },
  { office: "California Office", city: "Los Angeles", state: "CA", map: "/maps/los-angeles.png" },
  { office: "New York Office", city: "New York City", state: "NY", map: "/maps/new-york.png" },
  { office: "Connecticut Office", city: "Hartford", state: "CT", map: "/maps/hartford.png" },
];
