/* The job-seeker trust statement, for the candidate CTA block on the hub and
 * city pages.
 *
 * Two facts decide whether a candidate reads on: whether this will cost them,
 * and whether it is their field. Both are answered in the hero, but a visitor
 * who lands on "Bridge & Structural Recruiter" from a search never sees the
 * homepage - and the discipline pages are where most organic traffic arrives.
 * So it sits with the Search Jobs button, at the moment the question is being
 * asked.
 *
 * The hero keeps its own larger, two-line treatment rather than importing this
 * one: it was specified at particular sizes against the photographic
 * background, and this is the quieter secondary version for a block that
 * already has a heading and a paragraph above it.
 *
 * Plain text on purpose - no panel, border or badge. Repeated across pages, a
 * boxed version would read as an advert slot rather than as a statement the
 * site stands behind.
 *
 * The client's wording arrived as three lines; the second and third are two
 * sentences of the same thought, so they are set as one paragraph rather than
 * broken where a line break would only look like a list.
 */
export function CandidateTrust() {
  return (
    <div className="mt-8 max-w-2xl">
      <p className="text-[19px] font-bold leading-[1.35] text-amber-400 sm:text-xl">
        Always 100% Free for Job Seekers
      </p>
      <p className="mt-1.5 text-[16px] font-medium leading-[1.4] text-white text-pretty sm:text-[17px]">
        Metro Associates focuses exclusively on{" "}
        <strong className="font-bold">
          engineering, architecture, and construction
        </strong>{" "}
        careers. We specialize in connecting qualified professionals with
        opportunities nationwide.
      </p>
    </div>
  );
}
