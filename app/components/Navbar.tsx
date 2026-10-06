"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { IconMenu, IconClose, IconArrow } from "./Icons";
import { APPLY_URL } from "../lib/site";

/* "Careers" is the careers page on this site, not the ATS portal.
 *
 * It used to be "View All Jobs" pointing at the portal, which meant the single
 * most clicked job link on every page of the site sent the visitor to another
 * domain - and left /careers reachable only from the homepage section and from
 * the job pages themselves, with nothing in the nav or footer pointing at it.
 * Our own page carries the same roles with search, filters and the JobPosting
 * markup, so it is the one worth linking.
 *
 * "Apply Jobs" stays external: the general-application form is the ATS's, and
 * we do not host an equivalent. */
const NAV_LINKS = [
  { label: "About", href: "/about", external: false },
  { label: "Why Us", href: "/why-us", external: false },
  { label: "Meet Our Team", href: "/meet-our-team", external: false },
  { label: "Videos", href: "/videos", external: false },
  { label: "Careers", href: "/careers", external: false },
  { label: "Apply Jobs", href: APPLY_URL, external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy-950/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-18 items-center justify-between py-3.5">
        <Link href="/" aria-label="Metro Associates home" className="shrink-0">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {NAV_LINKS.map((link) => {
            const cls =
              "group relative rounded px-3.5 py-2 text-sm font-medium text-ink-300 transition-colors hover:text-white";
            const inner = (
              <>
                {link.label}
                <span className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-amber-500 transition-transform duration-300 group-hover:scale-x-100" />
              </>
            );
            return (
              <li key={link.label}>
                {link.external ? (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {inner}
                  </a>
                ) : (
                  <Link href={link.href} className={cls}>
                    {inner}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="mono-label hidden text-ink-400 2xl:inline">+1 312-500-1878</span>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-amber-500 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-amber-400"
          >
            Contact With Us
            <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center border border-white/15 text-white xl:hidden"
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-navy-900 transition-[max-height] duration-300 xl:hidden ${
          open ? "max-h-120" : "max-h-0"
        }`}
      >
        <ul className="container-x flex flex-col py-4">
          {NAV_LINKS.map((link, i) => {
            const cls =
              "flex items-center gap-3 px-1 py-3.5 text-base font-medium text-ink-300 hover:text-white";
            const inner = (
              <>
                <span className="mono-label text-amber-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.label}
              </>
            );
            return (
              <li key={link.label} className="border-b border-white/5">
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className={cls}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link href={link.href} onClick={() => setOpen(false)} className={cls}>
                    {inner}
                  </Link>
                )}
              </li>
            );
          })}
          <li className="mt-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 bg-amber-500 px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-navy-950"
            >
              Contact With Us
              <IconArrow className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
