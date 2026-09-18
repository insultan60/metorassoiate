import {
  IconUsers,
  IconTarget,
  IconGlobe,
  IconSpark,
  IconLayers,
  IconBolt,
} from "./Icons";

/* The six cards used to be capability adjectives: "Top Talent",
 * "Innovation", "Valuable Extension". Three of the six were about diversity
 * and inclusion and none of them named a service, so the only block on this
 * site headed "services" could not match a search for permanent placement,
 * executive search or contract staffing.
 *
 * The first three now name what a buyer is actually shopping for. The client's
 * own claims are kept rather than cut: no fee unless the candidate is hired,
 * diversity and inclusion, responsiveness, the extension-of-your-team line.
 * They have been consolidated into the last three cards instead of being
 * spread thinly across all six.
 */
const SERVICES = [
  {
    icon: IconUsers,
    title: "Direct Hire & Permanent Placement",
    body: "Permanent engineering hires onto your own payroll, from EIT designers to licensed PEs and project managers. There is absolutely no fee unless the candidate is hired.",
  },
  {
    icon: IconTarget,
    title: "Executive Search & Headhunting",
    body: "Confidential approaches to practice leaders, chief engineers and public works directors: the people who run the work and are not applying anywhere.",
  },
  {
    icon: IconLayers,
    title: "Contract & Project Staffing",
    body: "Inspection and construction-phase teams staffed for the length of a program, qualified against the agency's own approved list before anyone reaches you.",
  },
  {
    icon: IconSpark,
    title: "Experienced Recruiting Team",
    body: "Rely on the expertise of our experienced team of recruitment professionals, who reach senior technical talent your competitors are trying to keep.",
  },
  {
    icon: IconGlobe,
    title: "Diversity & Inclusion",
    body: "Elevating the importance of diversity and inclusion in the workplace, and harnessing the differences of your people with the ones that will excel.",
  },
  {
    icon: IconBolt,
    title: "Responsive Service",
    body: "Quick, responsive service and priority attention whenever you need us. We work as a valuable extension of your team rather than a vendor at arm's length.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden blueprint-shade border-t border-white/10 py-24 sm:py-28"
    >
      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mono-label text-amber-500">{"//"} 02 / Capabilities</span>
            <h2 className="display mt-5 text-4xl text-white sm:text-5xl">
              Quality services, engineered
            </h2>
          </div>
          <p className="max-w-md text-ink-300 text-pretty">
            From Professional Engineers to specialized technical talent, we
            deliver dependable staffing across every engineering discipline,
            supporting safety, regulatory standards, and project delivery for
            public and private employers alike.
          </p>
        </div>

        <div className="reveal-children mt-14 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, body }, i) => (
            <article
              key={title}
              className="group relative flex flex-col bg-navy-900 p-8 transition-colors duration-300 hover:bg-navy-850"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center border border-white/12 text-brand-400 transition-colors group-hover:border-amber-500 group-hover:text-amber-500">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="mono-label text-2xl font-bold text-white/10 transition-colors group-hover:text-amber-500/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
              <p className="mt-2.5 text-[15px] leading-7 text-ink-400">{body}</p>
              <span className="mt-6 h-0.5 w-8 bg-amber-500 transition-all duration-300 group-hover:w-16" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
