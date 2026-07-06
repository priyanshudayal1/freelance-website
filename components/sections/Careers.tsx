import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HoverUnderline } from "@/components/workshop/HoverUnderline";

export function Careers() {
  return (
    <section id="careers" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading index="07" label="People" note="The workshop" sheet="07/08" />

        <div className="mt-14 max-w-2xl">
          <Reveal>
            <h2 className="font-display text-4xl leading-[1.12] tracking-tight text-balance md:text-5xl">
              Join the <HoverUnderline>workshop</HoverUnderline>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-7 text-graphite md:text-lg md:leading-8">
              We hire for curiosity, not just résumés. If you’re a student or
              a young engineer who builds things for the joy of it — websites,
              tools, small robots, anything — we want to see what you’ve made.
              The rest is teachable.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button
                href="mailto:hello@clarixit.in?subject=Joining%20the%20workshop"
                variant="secondary"
                size="lg"
              >
                Introduce yourself
              </Button>
              <p className="-rotate-2 font-hand text-2xl text-graphite/80">
                bring your side projects!
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
