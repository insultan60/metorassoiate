import Link from "next/link";
import Logo from "./Logo";
import { IconPhone, IconMail, IconPin } from "./Icons";
import { CAREERS_URL, APPLY_URL } from "../lib/site";

const NAV = [
  { label: "About", href: "/about", external: false },
  { label: "Why Us", href: "/why-us", external: false },
  { label: "Meet Our Team", href: "/meet-our-team", external: false },
  { label: "Salary Guide", href: "/index_themall_awards", external: false },
  { label: "Client Awards", href: "/engineering-awards", external: false },
  { label: "FAQ", href: "/faq", external: false },
  { label: "Apply Jobs", href: APPLY_URL, external: true },
  { label: "View All Jobs", href: CAREERS_URL, external: true },
];

/* The six discipline hubs, linked for real.
 *
 * This block used to print six service NAMES, every one of them pointing at
 * "/#services" — an anchor on the homepage. So the hub pages, and the 250
 * city pages hanging off them, had no link anywhere in the site chrome. The
 * homepage linked to none of them either; seventeen internal links on it and
 * not one to a discipline.
 *
 * Search Console showed the consequence exactly: 163 URLs sitting in
 * "Discovered - currently not indexed" with Last crawled "N/A" — including
 * the /mep-engineering-recruiter, /cei-inspection-recruiter,
 * /water-wastewater-recruiter and /bridge-structural-recruiter hubs
 * themselves. Google knew the URLs from the sitemap and had never fetched
 * one, because nothing on the site said they mattered.
 *
 * A sitemap is a hint. Internal links are the argument. */
const DISCIPLINES = [
  { label: "Infrastructure", href: "/infrastructure-recruiter" },
  { label: "Civil Engineering", href: "/civil-engineering-recruiter" },
  { label: "MEP Engineering", href: "/mep-engineering-recruiter" },
  { label: "Bridge & Structural", href: "/bridge-structural-recruiter" },
  { label: "Water & Wastewater", href: "/water-wastewater-recruiter" },
  { label: "CEI & Inspection", href: "/cei-inspection-recruiter" },
  { label: "Municipal Engineering", href: "/municipal-engineering-recruiter" },
  { label: "Transportation Engineering", href: "/transportation-recruiter" },
  { label: "Project Management", href: "/project-management-recruiter" },
];

const LOCATIONS = [
  "Orlando, FL",
  "Boston, MA",
  "Washington, DC",
  "Atlanta, GA",
  "Dallas, TX",
  "Los Angeles, CA",
  "New York, NY",
  "Hartford, CT",
];

// Only platforms with a real destination are shown, so there are no dead links.
// Add more here (with an href) once the client provides their profile URLs.
const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/94152534/", d: "M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM21 21h-3.38v-6.5c0-1.55-.55-2.6-1.94-2.6-1.06 0-1.69.71-1.97 1.4-.1.25-.13.6-.13.94V21H10.2s.05-11.5 0-12.5h3.38v1.77c.45-.69 1.25-1.68 3.05-1.68 2.23 0 3.9 1.46 3.9 4.6V21Z" },
  { label: "Facebook", href: "https://www.facebook.com/MetropoAssociatesLLC/", d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12Z" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      {/* safety hatch strip */}
      <div className="hatch h-1.5 w-full opacity-70" />

      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-7 text-ink-400">
              A national staffing and executive search firm focused on
              Departments of Transportation and public infrastructure, placing
              engineers, inspectors, and construction leaders nationwide for 45+
              years.
            </p>
            <div className="mt-6 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center border border-white/12 text-ink-300 transition-colors hover:border-amber-500 hover:bg-amber-500 hover:text-navy-950"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mono-label text-ink-500">Navigate</h3>
            <ul className="mt-5 space-y-2.5">
              {NAV.map((l) =>
                l.external ? (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ink-300 transition-colors hover:text-amber-400"
                    >
                      {l.label}
                    </a>
                  </li>
                ) : (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink-300 transition-colors hover:text-amber-400"
                    >
                      {l.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="mono-label text-ink-500">What we recruit for</h3>
            <ul className="mt-5 space-y-2.5">
              {DISCIPLINES.map((d) => (
                <li key={d.href}>
                  <Link href={d.href} className="text-sm text-ink-300 transition-colors hover:text-amber-400">
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mono-label text-ink-500">Get in Touch</h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a href="tel:+13125001878" className="flex items-start gap-3 text-sm text-ink-300 transition-colors hover:text-amber-400">
                  <IconPhone className="mt-0.5 h-4.5 w-4.5 text-amber-500" />
                  +1 312-500-1878
                </a>
              </li>
              <li>
                <a href="mailto:patrick@metroassoc.com" className="flex items-start gap-3 text-sm text-ink-300 transition-colors hover:text-amber-400">
                  <IconMail className="mt-0.5 h-4.5 w-4.5 text-amber-500" />
                  patrick@metroassoc.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-ink-300">
                <IconPin className="mt-0.5 h-4.5 w-4.5 text-amber-500" />
                HQ: Orlando, Florida
              </li>
            </ul>
            <p className="mono-label mt-6 text-[9px] leading-5 text-ink-500">
              Offices: {LOCATIONS.join(" · ")}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-sm text-ink-500 sm:flex-row">
          <p className="mono-label text-[10px]">
            © {new Date().getFullYear()} Metro Associates. All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            {/* The firm holds an A+ BBB rating and nothing on the site said
                so — a trust signal a staffing buyer looks for, sitting
                unused. Worded as "A+ Rated", never "Accredited": the rating
                and the accreditation are separate things, and Metro has the
                first but not the second. Links to the profile so the claim
                is checkable rather than asserted. */}
            <a
              href="https://www.bbb.org/us/fl/altamonte-springs/profile/employment-agencies/metro-associates-engineering-of-fl-llc-0733-90259297"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label flex items-center gap-1.5 text-[10px] transition-colors hover:text-amber-400"
            >
              <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M10 2.2l6.2 2.6v4.6c0 3.6-2.5 6.6-6.2 8.4-3.7-1.8-6.2-4.8-6.2-8.4V4.8L10 2.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M7.2 10.1l2 2 3.6-3.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              BBB A+ Rated
            </a>
            <a href="/privacy" className="mono-label text-[10px] transition-colors hover:text-amber-400">Privacy Policy</a>
            <a href="/terms" className="mono-label text-[10px] transition-colors hover:text-amber-400">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
