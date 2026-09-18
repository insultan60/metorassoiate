import { ENGAGEMENT_MODELS, type EngagementSegment } from "../lib/serviceModels";
import { IconTarget, IconCompass, IconLayers } from "./Icons";

const ICONS = [IconTarget, IconCompass, IconLayers];

/**
 * The three ways a firm engages this desk, on a discipline hub.
 *
 * The component is shared; the words are not. Every set lives in
 * lib/serviceModels with its own heading, intro and three models, for the
 * reason set out at the top of that file: eight pages carrying the same
 * paragraph is the pattern that already cost this site its city pages.
 *
 * Placed directly after the expertise block on each hub, which puts the
 * commercial vocabulary (staffing, headhunting, placement, contract) above
 * the city directory rather than below a hundred links.
 */
export default function ServiceModels({ segment }: { segment: EngagementSegment }) {
  const set = ENGAGEMENT_MODELS[segment];
  if (!set) return null;

  return (
    <section className="relative border-t border-navy-950/10 bg-paper py-24 sm:py-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="mono-label text-amber-500">{"//"} How firms engage us</span>
          <h2 className="display mt-5 text-4xl text-navy-950 sm:text-5xl text-balance">
            {set.heading}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate text-pretty">{set.intro}</p>
        </div>

        <div className="reveal-children mt-14 grid gap-px overflow-hidden border border-navy-950/10 bg-navy-950/10 lg:grid-cols-3">
          {set.models.map((m, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <article key={m.title} className="group flex flex-col bg-white p-8 transition-colors hover:bg-mist">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-navy-950/12 text-brand-500 transition-colors group-hover:border-amber-500 group-hover:text-amber-500">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="mono-label text-[10px] text-brand-500/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-navy-950">{m.title}</h3>
                <p className="mt-2.5 text-[15px] leading-7 text-slate-500 text-pretty">{m.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
