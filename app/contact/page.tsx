import type { Metadata } from "next";
import Image from "next/image";
import { IconPhone, IconMail, IconPin } from "../components/Icons";
import ContactForm from "../components/ContactForm";
import { HeaderBackdrop } from "../components/HeaderBackdrop";
import HubFaqs from "../components/HubFaqs";
import { PHONE, PHONE_HREF, EMAIL, OFFICE_METROS } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact Engineering Recruiters | Metro Associates",
  description:
    // Eight, matching the eight offices actually listed on this page. It read
    // "nine" while showing and naming eight, which is the kind of small
    // inaccuracy a buyer checking the firm out will notice.
    "Request engineering staffing help or talk to a recruiter about your own next move. Eight US offices, placements nationwide, employer-paid fees.",
};

/* Derived from the canonical list in lib/site.ts, which the Organization
   schema's areaServed also reads. They were separate, and the schema had
   fallen behind to just "United States" while this page named eight metros. */
const OFFICES = OFFICE_METROS.map((o) => ({
  name: o.office,
  city: `${o.city}, ${o.state}`,
  map: o.map,
  hq: o.hq ?? false,
}));

export default function ContactPage() {
  return (
    <main>
      {/* Hero + form */}
      <section className="relative isolate overflow-hidden blueprint-shade pt-32 pb-20 sm:pt-36 lg:pt-40">
        <HeaderBackdrop />
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-500/20 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[26rem] w-[26rem] rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="container-x relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: intro + direct contacts */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 animate-blink bg-amber-500" />
              <span className="mono-label text-amber-400">{"//"} Contact Us</span>
            </div>
            <h1 className="display mt-6 text-[12vw] leading-[0.92] text-white sm:text-5xl lg:text-[4rem]">
              Let&apos;s start a{" "}
              <span className="text-brand-400">conversation</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-ink-300 text-pretty">
              Whether you&apos;re hiring vetted engineering talent or seeking your
              next role, our team responds within one business day.
            </p>

            <div className="mt-9 flex flex-col gap-3">
              <a
                href={PHONE_HREF}
                className="group flex items-center gap-4 border border-white/10 bg-navy-900 p-5 transition-colors hover:border-amber-500/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center border border-white/12 text-amber-500">
                  <IconPhone className="h-5 w-5" />
                </span>
                <span>
                  <span className="mono-label block text-[9px] text-ink-500">Call us</span>
                  <span className="text-white group-hover:text-amber-300">{PHONE}</span>
                </span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-4 border border-white/10 bg-navy-900 p-5 transition-colors hover:border-amber-500/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center border border-white/12 text-amber-500">
                  <IconMail className="h-5 w-5" />
                </span>
                <span>
                  <span className="mono-label block text-[9px] text-ink-500">Email us</span>
                  <span className="text-white group-hover:text-amber-300">{EMAIL}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 border border-white/10 bg-navy-900 p-5">
                <span className="inline-flex h-11 w-11 items-center justify-center border border-white/12 text-amber-500">
                  <IconPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="mono-label block text-[9px] text-ink-500">Headquarters</span>
                  <span className="text-white">Orlando, Florida</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="border border-white/10 bg-navy-950/60 p-6 backdrop-blur-sm sm:p-8">
            <h2 className="text-2xl font-bold text-white">Send us a message</h2>
            <p className="mt-1 text-sm text-ink-400">
              Fields marked with * are required.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Branch locations */}
      <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mono-label text-amber-500">{"//"} Nationwide</span>
            <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl">
              Our branch locations
            </h2>
            <p className="mt-4 text-slate text-pretty">
              Nine U.S. offices, with recruiters who know each regional market.
            </p>
          </div>

          <div className="reveal-children mt-14 grid gap-6 lg:grid-cols-2">
            {OFFICES.map((o) => (
              <div
                key={o.name}
                className="corners overflow-hidden border border-navy-950/10 bg-white"
              >
                <div className="relative h-56 w-full bg-mist">
                  {/* Static map image, self-hosted from /public — no live embed,
                      so there's no "Open in Maps" link, zoom prompt or Google chrome. */}
                  <Image
                    src={o.map}
                    alt={`Map of ${o.name}: ${o.city}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover grayscale-[0.35]"
                  />
                  {/* OpenStreetMap data attribution (ODbL). */}
                  <span className="absolute bottom-1 right-1.5 rounded bg-white/70 px-1 text-[8px] leading-tight text-navy-950/70">
                    © OpenStreetMap
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-navy-950">{o.name}</h3>
                    {o.hq && (
                      <span className="mono-label bg-amber-500 px-2 py-0.5 text-[9px] text-navy-950">
                        HQ
                      </span>
                    )}
                  </div>
                  <p className="mono-label mt-1 text-[9px] text-slate-500">{o.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The questions a buyer asks before filling this form in: what it
          costs, who pays, how long it takes. Titles only, answers on the
          group page, per the rule in lib/hubFaqs. */}
      <HubFaqs
        group="hiring-through-a-recruiter"
        heading="Before you send it: what a search costs and how it runs"
      />
    </main>
  );
}
