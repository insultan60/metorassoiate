import type { Metadata } from "next";
import Link from "next/link";
import { IconArrow } from "../components/Icons";

export const metadata: Metadata = {
  title: "Privacy Policy | Metro Associates",
  description:
    "How Metro Associates, LLC collects, uses, stores and safeguards your personal information across our website and recruiting services.",
  alternates: { canonical: "/privacy" },
};

// Small presentational helpers so the long policy stays readable and consistent.
function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="display mt-14 mb-4 text-2xl text-navy-950 sm:text-3xl">{children}</h2>
  );
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

export default function PrivacyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden blueprint-shade pt-32 pb-16 sm:pt-36 lg:pt-40">
        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-500/20 blur-[110px]" />
        <div className="container-x relative">
          <span className="mono-label text-amber-400">{"//"} Legal</span>
          <h1 className="display mt-5 text-4xl text-white sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mono-label mt-5 text-ink-400">Last Updated: May 18, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-paper py-16 sm:py-20">
        <div className="container-x">
          <div className="max-w-3xl">
            <P>
              Metro Associates, LLC (&ldquo;Company,&rdquo; &ldquo;Metro Associates,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and
              is committed to protecting your personal information. This Privacy Policy explains how
              we collect, use, disclose, store, and safeguard your information when you use our
              website, communicate with us, or engage with our recruiting, staffing, consulting, and
              related services.
            </P>
            <P>This Policy applies when you:</P>
            <UL
              items={[
                "Visit metroassoc.com",
                "Submit resumes or employment inquiries",
                "Communicate with us via email, phone, or SMS/text message",
                "Apply for employment opportunities",
                "Use our recruiting, staffing, or consulting services",
                "Interact with our forms, communications, or website tools",
              ]}
            />
            <P>
              By using our website or services, you consent to the practices described in this
              Privacy Policy.
            </P>

            <Rule />

            <H2>Contact Us</H2>
            <P>
              If you have questions regarding this Privacy Policy or wish to submit a privacy-related
              request, please contact us below:
            </P>
            <a
              href="mailto:privacy@metroassoc.com"
              className="group inline-flex items-center gap-2 bg-navy-950 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-navy-850"
            >
              Contact Privacy Team
              <IconArrow className="h-4 w-4 text-amber-500 transition-transform group-hover:translate-x-1" />
            </a>

            <Rule />

            <H2>1. Information We Collect</H2>
            <P>We may collect personal and professional information you voluntarily provide, including:</P>
            <UL
              items={[
                "Full name",
                "Email address",
                "Phone number",
                "Mailing address",
                "Employment history",
                "Resume or CV information",
                "Professional licenses and certifications",
                "Job title and work history",
                "LinkedIn or professional profile information",
                "Communication preferences",
                "Information submitted through forms, emails, SMS/text messages, or phone calls",
              ]}
            />
            <P>
              We may also collect limited technical information including browser type, IP address,
              device information, and website activity logs necessary for website functionality and
              security.
            </P>

            <Rule />

            <H2>2. Sources of Information</H2>
            <P>Metro Associates may collect information from:</P>
            <UL
              items={[
                "Direct candidate or client submissions",
                "LinkedIn and professional networking platforms",
                "Public professional profiles",
                "Job boards and resume databases",
                "Referrals and networking contacts",
                "Recruiting and sourcing platforms",
                "Website forms and inquiries",
                "Email, phone, and SMS/text communications",
                "Third-party service providers and business tools",
              ]}
            />

            <Rule />

            <H2>3. Cookies &amp; Tracking Technologies</H2>
            <P>
              Our website may use basic cookies, analytics tools, and technical tracking
              technologies necessary for:
            </P>
            <UL
              items={[
                "Website functionality",
                "Performance monitoring",
                "Security and spam prevention",
                "Analytics and website improvement",
              ]}
            />
            <P>Third-party tools or providers may include:</P>
            <UL items={["HubSpot", "Google Analytics", "SendGrid", "LinkedIn tools", "Website hosting and security providers"]} />
            <P>
              We do not currently sell personal information or use behavioral advertising trackers
              for cross-context behavioral advertising.
            </P>

            <Rule />

            <H2>4. How We Use Your Information</H2>
            <P>We may use personal information for legitimate business purposes including:</P>
            <UL
              items={[
                "Recruiting and staffing services",
                "Matching candidates with employers",
                "Interview scheduling and coordination",
                "Client and candidate communications",
                "Responding to inquiries",
                "Website administration and security",
                "Legal and regulatory compliance",
                "Business operations and relationship management",
                "Fraud prevention and security monitoring",
              ]}
            />
            <P>We do not sell personal information.</P>

            <Rule />

            <H2>5. Email &amp; SMS Communications</H2>
            <P>
              By voluntarily providing your phone number or email address, you consent to receive
              communications from Metro Associates regarding:
            </P>
            <UL
              items={[
                "Employment opportunities",
                "Recruiting updates",
                "Interview scheduling",
                "Staffing services",
                "Business communications",
                "Follow-up communications",
              ]}
            />
            <P>
              Message frequency may vary. Message and data rates may apply depending on your mobile
              carrier and plan.
            </P>
            <P>You may opt out at any time by:</P>
            <UL
              items={[
                "Replying STOP to SMS/text messages",
                "Using unsubscribe links where available",
                "Contacting us directly",
              ]}
            />
            <P>For assistance, reply HELP or contact us directly.</P>
            <P>
              Consent to receive communications is not a condition of employment or the purchase of
              any goods or services.
            </P>
            <P>
              We do not share SMS consent data with third parties for marketing or promotional
              purposes.
            </P>

            <Rule />

            <H2>6. SMS Consent &amp; Call-To-Action Disclosure</H2>
            <div className="border border-navy-950/12 bg-white p-6">
              <label className="flex items-start gap-3 text-[15px] leading-7 text-slate">
                <input type="checkbox" className="mt-1.5 h-4 w-4 shrink-0 accent-amber-500" />
                <span>
                  I consent to receive SMS text messages and phone calls from Metro Associates
                  regarding employment opportunities, recruiting updates, interview scheduling,
                  staffing services, and related communications.
                </span>
              </label>
              <p className="mt-4 text-xs leading-6 text-slate-500">
                Message frequency may vary. Message and data rates may apply. Reply{" "}
                <strong>STOP</strong> to opt out or <strong>HELP</strong> for assistance. Consent is
                not a condition of employment.
              </p>
              <p className="mt-3 text-xs leading-6 text-slate-500">
                By submitting your information, you acknowledge that you have read and agree to our{" "}
                <Link href="/privacy" className="text-brand-500 underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/terms" className="text-brand-500 underline">
                  Terms &amp; Conditions
                </Link>
                .
              </p>
            </div>

            <Rule />

            <H2>7. Third-Party Service Providers</H2>
            <P>
              Metro Associates may use trusted third-party vendors and service providers to support
              recruiting, communications, website operations, analytics, hosting, customer
              relationship management, and business operations.
            </P>
            <P>These providers may include:</P>
            <UL
              items={[
                "HubSpot",
                "Microsoft 365",
                "SendGrid",
                "LinkedIn",
                "Top Echelon / Big Biller",
                "Website hosting providers",
                "Cloud communication providers",
                "CRM and ATS systems",
              ]}
            />
            <P>
              Information is shared only as reasonably necessary for legitimate business operations,
              recruiting services, communications, website functionality, and legal compliance.
            </P>

            <Rule />

            <H2>8. Data Retention</H2>
            <P>We retain personal information only as long as reasonably necessary for:</P>
            <UL
              items={[
                "Recruiting and staffing operations",
                "Business communications",
                "Legal and regulatory compliance",
                "Recordkeeping and dispute resolution",
              ]}
            />
            <P>
              When information is no longer needed, it is securely deleted or anonymized where
              appropriate.
            </P>

            <Rule />

            <H2>9. Data Security</H2>
            <P>
              We implement commercially reasonable administrative, technical, and organizational
              safeguards designed to protect personal information against unauthorized access,
              disclosure, alteration, or destruction.
            </P>
            <P>
              However, no method of transmission over the Internet or electronic storage is
              completely secure, and absolute security cannot be guaranteed.
            </P>

            <Rule />

            <H2>10. Your Privacy Rights</H2>
            <P>
              Depending on your jurisdiction, you may have rights regarding your personal
              information, including:
            </P>
            <UL
              items={[
                "Requesting access to your information",
                "Requesting correction of inaccurate information",
                "Requesting deletion of certain information",
                "Opting out of certain communications",
                "Requesting information about data usage",
              ]}
            />
            <P>To submit a request, please contact us using the Contact Privacy Team button above.</P>

            <Rule />

            <H2>11. International Data Transfers</H2>
            <P>
              Metro Associates operates primarily in the United States. Information may be stored or
              processed in the United States or other jurisdictions where privacy laws may differ
              from those in your location.
            </P>
            <P>Where required, appropriate safeguards will be implemented for international data transfers.</P>

            <Rule />

            <H2>12. Children&rsquo;s Privacy</H2>
            <P>
              Our website and services are intended for adults and professional users. We do not
              knowingly collect personal information from children under the age of 13.
            </P>

            <Rule />

            <H2>13. Updates to This Privacy Policy</H2>
            <P>
              We may update this Privacy Policy periodically. Updates will be reflected by the
              revised &ldquo;Last Updated&rdquo; date at the top of this page.
            </P>
            <P>
              Continued use of our website or services after updates constitutes acceptance of the
              revised policy.
            </P>

            <Rule />

            <H2>14. Company Contact Information</H2>
            <p className="text-[15px] font-bold text-navy-950">Metro Associates, LLC</p>
            <p className="text-[15px] leading-7 text-slate">1317 Edgewater Drive</p>
            <p className="text-[15px] leading-7 text-slate">#4452</p>
            <p className="text-[15px] leading-7 text-slate">Orlando, FL 32804</p>
            <p className="mb-4 text-[15px] leading-7 text-slate">United States</p>
            <p className="text-[15px] leading-7 text-slate">
              Email:{" "}
              <a href="mailto:privacy@metroassoc.com" className="text-brand-500 underline">
                privacy@metroassoc.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
