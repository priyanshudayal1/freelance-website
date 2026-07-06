import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { Crosshair } from "@/components/workshop/Crosshair";
import { DraftArrowRight } from "@/components/workshop/icons";

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-line">
      <Crosshair className="absolute left-16 top-8 hidden lg:block" />
      <Crosshair className="absolute bottom-8 right-6 hidden lg:block" />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center md:py-40">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
            <span className="text-copper">08</span> — Invitation · S.08/08
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-8 max-w-3xl font-display text-5xl leading-[1.06] tracking-tight text-balance md:text-6xl">
            Let’s build something properly.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-md text-base leading-7 text-graphite">
            Tell us what you’re trying to build — or fix. You’ll hear back
            within a day, and you’ll be talking to an engineer, not a
            salesperson.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col items-center gap-6">
            <Button
              href="mailto:hello@clarixit.in?subject=Let%27s%20build%20something"
              size="lg"
            >
              Start a project <DraftArrowRight />
            </Button>
            <a
              href="mailto:hello@clarixit.in"
              className="font-display text-2xl tracking-tight underline decoration-line decoration-1 underline-offset-8 transition-colors duration-200 hover:decoration-copper md:text-3xl"
            >
              hello@clarixit.in
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
