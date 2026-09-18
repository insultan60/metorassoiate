import Link from "next/link";
import { IconArrow } from "./Icons";

// Every discipline hub links to the other five here, so no hub is an
// isolated dead end — visitors and crawlers can reach every specialty
// from any one of them.
const SPECIALTIES = [
  {
    slug: "civil-engineering-recruiter",
    label: "Civil Engineering",
    blurb: "Transportation, infrastructure & municipal projects",
  },
  {
    slug: "mep-engineering-recruiter",
    label: "MEP Engineering",
    blurb: "Mechanical, electrical & plumbing systems",
  },
  {
    slug: "water-wastewater-recruiter",
    label: "Water & Wastewater",
    blurb: "Treatment, distribution & stormwater programs",
  },
  {
    slug: "cei-inspection-recruiter",
    label: "CEI & Construction Inspection",
    blurb: "Materials testing, bridge & roadway inspection",
  },
  {
    slug: "municipal-engineering-recruiter",
    label: "Municipal Engineering",
    blurb: "Public works & capital improvement programs",
  },
  {
    slug: "bridge-structural-recruiter",
    label: "Bridge & Structural",
    blurb: "Bridge design, high-rise & seismic retrofit",
  },
  {
    slug: "transportation-recruiter",
    label: "Transportation Engineering",
    blurb: "DOT programs, highway design & transit planning",
  },
  {
    slug: "project-management-recruiter",
    label: "Project Management",
    blurb: "AEC program directors, PMs & owner's reps",
  },
] as const;

export default function OtherSpecialties({ exclude }: { exclude: string }) {
  const others = SPECIALTIES.filter((s) => s.slug !== exclude);
  return (
    <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="mono-label text-amber-500">{"//"} Other specialties</span>
          <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
            We also recruit for
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="group flex flex-col justify-between gap-5 border border-navy-950/10 bg-white p-6 transition-colors hover:border-amber-500 hover:bg-mist"
            >
              <div>
                <span className="text-[15px] font-bold text-navy-950">{s.label}</span>
                <p className="mt-1.5 text-sm text-slate-500">{s.blurb}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-amber-500">
                Explore
                <IconArrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
