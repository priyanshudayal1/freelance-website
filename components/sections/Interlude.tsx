import { Reveal } from "@/components/animations/Reveal";

/**
 * An unnumbered page in the notebook. One thought, plenty of air.
 * The emotional pause between the proof and the people.
 */
export function Interlude() {
  return (
    <section aria-label="Why we build" className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center md:py-40">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
            Interlude — why we build
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-3xl font-display text-4xl leading-[1.1] tracking-tight text-balance md:text-6xl">
            The best technology{" "}
            <em className="text-copper">disappears</em>.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-md text-base leading-7 text-graphite">
            It lets people focus on their work instead of the software
            itself. That’s the standard we build toward — technology quiet
            enough to be forgotten.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
