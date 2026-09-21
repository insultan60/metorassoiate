import type { Metadata } from "next";
import Link from "next/link";
import { IconArrow } from "../components/Icons";
import { HeaderBackdrop } from "../components/HeaderBackdrop";
import { TEAM } from "../lib/team";
import { getJobFolderTeam } from "../lib/jobfolderTeam";
import TeamCard from "../components/TeamCard";

export const metadata: Metadata = {
  title: "Meet the Team | Metro Associates Recruiters",
  description:
    "The recruiters behind our placements, who they specialize in, the disciplines they cover, and how to reach them directly.",
  alternates: { canonical: "/meet-our-team" },
};

/* Pinned explicitly rather than left to infer from the getJobFolderTeam()
   fetch's `next.revalidate`: with only the fetch specifying a window, this
   page's own stale-while-revalidate period picked up JobFolder's /api/team
   Cache-Control instead (observed as a 5-minute staleness after toggling a
   recruiter off — the page kept serving them long after JobFolder itself had
   already stopped listing them). Keep this equal to the fetch's revalidate
   and to JobFolder's Cache-Control max-age. */
export const revalidate = 30;

export default async function MeetOurTeamPage() {
  // Recruiters a JobFolder admin has approved for this page, appended after
  // the core static roster — see app/lib/jobfolderTeam.ts.
  const roster = [...TEAM, ...(await getJobFolderTeam())];

  return (
    <main>
      {/* Hero */}
      <section className="relative isolate overflow-hidden blueprint-shade pt-32 pb-16 sm:pt-36 lg:pt-40">
        <HeaderBackdrop />
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-500/20 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[26rem] w-[26rem] rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="container-x relative">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 animate-blink bg-amber-500" />
            <span className="mono-label text-amber-400">{"//"} Meet Our Team</span>
          </div>
          <h1 className="display mt-6 max-w-4xl text-[12vw] leading-[0.92] text-white sm:text-6xl lg:text-[5rem]">
            The people behind{" "}
            <span className="text-brand-400">every placement</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-300 text-pretty">
            Our recruiters include former engineers and military-trained talent
            specialists who understand engineering, transportation, and the
            regulatory landscape, because they&apos;ve lived it.
          </p>
        </div>
      </section>

      {/* Roster */}
      <section className="relative border-t border-navy-950/10 bg-paper py-20 sm:py-24">
        <div className="container-x">
          <div className="mb-10 flex items-end justify-between border-b border-navy-950/10 pb-5">
            <span className="mono-label text-amber-500">{"//"} The Roster</span>
            <span className="mono-label text-[10px] text-slate-500">
              {String(roster.length).padStart(2, "0")} specialists
            </span>
          </div>

          <div className="reveal-children grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {roster.map((m, i) => (
              <TeamCard key={m.name} m={m} index={i} />
            ))}
          </div>

          {/* CTA — kept dark navy for a strong finish on the light section */}
          <div className="mt-16 flex flex-col items-start justify-between gap-6 section-dark border border-white/10 p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-2xl font-bold text-white">Work with our team</h2>
              <p className="mt-2 text-ink-300">
                Tell us about the role. We&apos;ll put the right specialist on
                your search.
              </p>
            </div>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 bg-amber-500 px-7 py-4 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400"
            >
              Request Talent
              <IconArrow className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
