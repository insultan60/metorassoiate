import type { Metadata } from "next";
import Link from "next/link";
import { IconArrow } from "../components/Icons";

export const metadata: Metadata = {
  title: "Terms & Conditions | Metro Associates",
  description:
    "The terms and conditions governing your use of the Metro Associates, LLC website, communications, and recruiting, staffing, and consulting services.",
  alternates: { canonical: "/terms" },
};

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="display mt-14 mb-4 text-2xl text-navy-950 sm:text-3xl">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-[15px] leading-7 text-slate">{children}</p>;
}
function UL({ items }: { items: string[] }) {
  return (
    <ul className="mb-4 space-y-1.5 text-[15px] leading-7 text-slate">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-2.5">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-amber-500" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}
function Rule() {
  return <hr className="my-10 border-navy-950/10" />;
}

export default function TermsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden blueprint-shade pt-32 pb-16 sm:pt-36 lg:pt-40">
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-500/20 blur-[110px]" />
        <div className="container-x relative">
          <span className="mono-label text-amber-400">{"//"} Legal</span>
          <h1 className="display mt-5 text-4xl text-white sm:text-5xl lg:text-6xl">
            Terms &amp; Conditions
          </h1>
          <p className="mono-label mt-5 text-ink-400">Last Updated: May 18, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="container-x">
          <div className="max-w-3xl">
            <P>
              These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the
              website, communications, and recruiting, staffing, and consulting services provided by
              Metro Associates, LLC (&ldquo;Company,&rdquo; &ldquo;Metro Associates,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing metroassoc.com,
              submitting information, or engaging our services, you agree to be bound by these Terms.
              If you do not agree, please do not use our website or services.
            </P>

            <Rule />

            <H2>1. Acceptance of Terms</H2>
            <P>
              By using our website or services, you confirm that you have read, understood, and agree
              to these Terms and to our{" "}
              <Link href="/privacy" className="text-brand-500 underline">
                Privacy Policy
              </Link>
              , which is incorporated by reference. These Terms apply to all visitors, candidates,
              clients, and users of our website and services.
            </P>

            <Rule />

            <H2>2. Our Services</H2>
            <P>
              Metro Associates provides recruiting, staffing, executive search, and related
              consulting services, primarily for the engineering, transportation, and infrastructure
              sectors. We connect candidates with potential employers and assist clients with hiring.
              We may modify, suspend, or discontinue any part of our services or website at any time
              without notice.
            </P>

            <Rule />

            <H2>3. Eligibility</H2>
            <P>
              Our website and services are intended for adults and professional users who are at
              least 18 years of age. By using our website or services, you represent that you meet
              this requirement and that any information you provide is accurate, current, and
              complete.
            </P>

            <Rule />

            <H2>4. Use of the Website</H2>
            <P>You agree to use our website and services only for lawful purposes. You agree not to:</P>
            <UL
              items={[
                "Provide false, misleading, or fraudulent information",
                "Submit resumes or information on behalf of another person without authorization",
                "Attempt to gain unauthorized access to our systems, accounts, or data",
                "Interfere with or disrupt the website, servers, or security features",
                "Use automated tools to scrape, harvest, or collect data from the website",
                "Upload or transmit viruses, malware, or other harmful code",
                "Use our website or services in any way that violates applicable law",
              ]}
            />

            <Rule />

            <H2>5. Candidate &amp; Client Responsibilities</H2>
            <P>
              Candidates are responsible for the accuracy of the resumes, credentials, licenses, and
              information they submit. Clients are responsible for their own hiring decisions and for
              compliance with applicable employment laws. Metro Associates acts as an intermediary and
              is not the employer of candidates placed with clients unless expressly stated in a
              separate written agreement.
            </P>

            <Rule />

            <H2>6. No Assurance of Employment</H2>
            <P>
              Submitting information or applying through our website does not constitute an offer of
              employment, an interview invitation, or a commitment to any particular outcome. All
              staffing terms, fee arrangements, and candidate commitments are governed solely by a
              separate written agreement between Metro Associates and the applicable client.
            </P>

            <Rule />

            <H2>7. Intellectual Property</H2>
            <P>
              All content on this website, including text, graphics, logos, images, and design, is
              the property of Metro Associates or its licensors and is protected by intellectual
              property laws. You may not copy, reproduce, distribute, or create derivative works from
              our content without our prior written permission.
            </P>

            <Rule />

            <H2>8. Third-Party Links &amp; Services</H2>
            <P>
              Our website may link to third-party websites, job boards, or services (such as our
              careers portal). We are not responsible for the content, policies, or practices of those
              third parties. Your use of any third-party service is at your own risk and subject to
              that third party&rsquo;s terms.
            </P>

            <Rule />

            <H2>9. Email &amp; SMS Communications</H2>
            <P>
              By voluntarily providing your phone number or email address, you consent to receive
              business, recruiting, and follow-up communications from Metro Associates. Message
              frequency may vary, and message and data rates may apply. You may opt out at any time by
              replying STOP to text messages, using unsubscribe links where available, or contacting
              us directly. Consent is not a condition of employment or of any purchase. Additional
              details are described in our{" "}
              <Link href="/privacy" className="text-brand-500 underline">
                Privacy Policy
              </Link>
              .
            </P>

            <Rule />

            <H2>10. Disclaimers</H2>
            <P>
              Our website and services are provided &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; without warranties of any kind, whether express or implied, including
              warranties of merchantability, fitness for a particular purpose, and non-infringement.
              We do not warrant that the website will be uninterrupted, error-free, or free of harmful
              components, or that any information provided is complete or accurate.
            </P>

            <Rule />

            <H2>11. Limitation of Liability</H2>
            <P>
              To the fullest extent permitted by law, Metro Associates and its officers, employees,
              and agents will not be liable for any indirect, incidental, special, consequential, or
              punitive damages, or for any loss of profits, data, or goodwill, arising out of or
              relating to your use of the website or services, even if advised of the possibility of
              such damages.
            </P>

            <Rule />

            <H2>12. Indemnification</H2>
            <P>
              You agree to indemnify and hold harmless Metro Associates and its officers, employees,
              and agents from any claims, damages, liabilities, and expenses (including reasonable
              attorneys&rsquo; fees) arising out of your use of the website or services, your
              violation of these Terms, or your violation of any applicable law or the rights of a
              third party.
            </P>

            <Rule />

            <H2>13. Governing Law</H2>
            <P>
              These Terms are governed by and construed in accordance with the laws of the State of
              Florida, without regard to its conflict-of-law principles. Any dispute arising under
              these Terms shall be subject to the exclusive jurisdiction of the state and federal
              courts located in Florida.
            </P>

            <Rule />

            <H2>14. Changes to These Terms</H2>
            <P>
              We may update these Terms periodically. Updates will be reflected by the revised
              &ldquo;Last Updated&rdquo; date at the top of this page. Continued use of our website or
              services after updates constitutes acceptance of the revised Terms.
            </P>

            <Rule />

            <H2>15. Contact Information</H2>
            <P>If you have questions about these Terms, please contact us:</P>
            <p className="text-[15px] font-bold text-navy-950">Metro Associates, LLC</p>
            <p className="text-[15px] leading-7 text-slate">1317 Edgewater Drive</p>
            <p className="text-[15px] leading-7 text-slate">#4452</p>
            <p className="text-[15px] leading-7 text-slate">Orlando, FL 32804</p>
            <p className="mb-4 text-[15px] leading-7 text-slate">United States</p>
            <p className="mb-6 text-[15px] leading-7 text-slate">
              Email:{" "}
              <a href="mailto:patrick@metroassoc.com" className="text-brand-500 underline">
                patrick@metroassoc.com
              </a>
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 bg-navy-950 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-navy-850"
            >
              Contact Us
              <IconArrow className="h-4 w-4 text-amber-500 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
