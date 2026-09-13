import Image from "next/image";
import Link from "next/link";
import { IconArrow } from "./Icons";
import { APPLY_URL } from "../lib/site";

// The categories of roles Metro regularly recruits for. These are role TYPES,
// not specific live postings. The live ones are at /jobs, read from the Top
// Echelon portal hourly (see lib/jobs).
const ROLE_TYPES = [
  "Licensed Professional Engineers (PEs)",
  "CEI & Construction Inspectors",
  "Bridge & Structural Designers",
  "Construction & Project Managers",
  "Resident & Roadway Engineers",
  "Senior Infrastructure Leaders",
];

export default function Jobs() {
  return (
    <section
      id="jobs"
      className="relative overflow-hidden bg-paper border-t border-navy-950/10 py-24 sm:py-28"
    >
      {/* Engineering-drawing background — blueprint photo + light overlay + grid.
          Masked to feather (bleed) out at the top & bottom edges so it blends
          into the neighboring sections instead of ending in a hard rectangle. */}
      <Image
        src="/blueprints.jpeg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-30 mask-[linear-gradient(to_bottom,#000_0%,#000_60%,transparent_100%)]"
      />
      <div className="absolute inset-0 bg-paper/45" />
      <div className="blueprint-light absolute inset-0 opacity-50" />

      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} 07 / Open Roles</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Careers in engineering &amp; infrastructure
            </h2>
          </div>
          <p className="max-w-md text-slate text-pretty">
            Advance your career with a recruiting partner that understands
            engineering. We place licensed PEs, CEI inspectors, project managers,
            and senior infrastructure leaders, working confidentially to protect
            your interests at every step.
          </p>
        </div>

        <div className="mt-14 border border-navy-950/10 bg-white p-8 sm:p-10">
          <p className="mono-label text-slate-500">Roles we regularly place</p>
          <div className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {ROLE_TYPES.map((r) => (
              <div
                key={r}
                className="flex items-center gap-3 border-b border-navy-950/10 pb-4 text-[15px] font-medium text-navy-950"
              >
                <span className="h-1.5 w-1.5 shrink-0 bg-amber-500" />
                {r}
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-slate-500">
            Current openings are posted on our live job board and updated as roles
            open. Browse everything available today, or send a general application
            and we&apos;ll reach out when the right match comes up.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            {/* On-site now. This used to send the visitor straight to the
                portal, which meant every live role's content, and the
                engagement with it, belonged to that domain rather than this
                one. */}
            <Link
              href="/jobs"
              className="group inline-flex items-center gap-2 bg-amber-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400"
            >
              Browse Open Roles
              <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-navy-950/25 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:border-amber-500 hover:text-amber-500"
            >
              Submit a General Application
            </a>
          </div>

          <p className="mt-6 text-sm leading-6 text-slate-500">
            Don&apos;t see the job you&apos;re looking for?{" "}
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-navy-950 underline decoration-amber-500 decoration-2 underline-offset-4 transition-colors hover:text-amber-500"
            >
              Submit your resume for future consideration
            </a>{" "}
            and we&apos;ll contact you when a matching role opens.
          </p>
        </div>
      </div>
    </section>
  );
}
