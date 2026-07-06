import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const principles = [
  "Craft over hype.",
  "Technology serves people.",
  "Build to evolve.",
  "Evidence over claims.",
  "Clarity beats complexity.",
  "Partnership over projects.",
  "Young minds. Serious engineering.",
];

export function Principles() {
  return (
    <section id="principles" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading index="04" label="Workshop principles" note="Carved down from twelve" sheet="04/08" />

        <Reveal className="mt-14">
          <h2 className="font-display text-4xl leading-[1.12] tracking-tight text-balance md:text-5xl">
            What we hold ourselves to.
          </h2>
        </Reveal>

        <ol className="mt-12 border-t border-line">
          {principles.map((principle, i) => (
            <Reveal key={principle} delay={i * 0.06}>
              <li className="group flex items-baseline gap-6 border-b border-line py-6 md:gap-10 md:py-8">
                <span className="w-8 shrink-0 font-mono text-[11px] text-fog transition-colors duration-200 group-hover:text-copper">
                  0{i + 1}
                </span>
                <p className="font-display text-2xl leading-tight tracking-tight sm:text-3xl md:text-4xl">
                  {i === principles.length - 1 ? (
                    <>
                      Young minds.{" "}
                      <em className="text-copper">Serious engineering.</em>
                    </>
                  ) : (
                    principle
                  )}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
