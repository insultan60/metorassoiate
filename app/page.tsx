import type { Metadata } from "next";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Disciplines from "./components/Disciplines";
import HomeFaqs from "./components/HomeFaqs";
import Programs from "./components/Programs";
import WhyUs from "./components/WhyUs";
import CaseStudies from "./components/CaseStudies";
import Team from "./components/Team";
import Jobs from "./components/Jobs";
import Locations from "./components/Locations";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import { SITE_URL } from "./lib/site";

/* The homepage had no metadata of its own and inherited the layout's, which
 * is written around DOT and infrastructure. That is what this firm does, but
 * it is not what buyers type. The layout default still covers every page
 * without its own title; this one answers the commercial head terms the
 * homepage is the only page that can rank for.
 *
 * openGraph is restated in full because a page-level object replaces the
 * layout's rather than merging into it, and dropping the image would cost the
 * social card. */
export const metadata: Metadata = {
  title: "Engineering Staffing Agency & Recruiters | Metro Associates",
  description:
    "US engineering staffing agency and recruiters. We place licensed PEs, inspectors and project managers for civil, MEP, water, bridge and municipal teams.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Engineering Staffing Agency & Recruiters | Metro Associates",
    description:
      "US engineering staffing agency and recruiters. We place licensed PEs, inspectors and project managers for civil, MEP, water, bridge and municipal teams.",
    url: SITE_URL,
    siteName: "Metro Associates",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Metro Associates, engineering staffing and recruiting",
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Disciplines />
      <Programs />
      <WhyUs />
      <CaseStudies />
      <Team />
      <Jobs />
      <Locations />
      <HomeFaqs />
      <Testimonials />
      <CTA />
    </main>
  );
}
