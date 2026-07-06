import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FoundationsDrawing } from "@/components/workshop/FoundationsDrawing";
import { MarginNote } from "@/components/workshop/MarginNote";
import { WorkshopNote } from "@/components/workshop/WorkshopNote";

// The foundations — English first, inspiration credited quietly.
const foundations = [
  {
    index: "01",
    title: "Craftsmanship",
    source: "inspired by shokunin · 職人",
    body: "Mastery is a direction, not a destination. Every build is practice — and practice is taken seriously.",
  },
  {
    index: "02",
    title: "Continuous improvement",
    source: "inspired by kaizen · 改善",
    body: "Small, constant refinements beat big rewrites. Software is never finished — that’s the point, not the problem.",
  },
  {
    index: "03",
    title: "Joy of building",
    source: "inspired by monozukuri · ものづくり",
    body: "We make things because making them well is deeply satisfying. You can feel that in the work — or you can’t.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading index="01" label="Philosophy" note="Why we exist" sheet="01/08" />

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-4xl leading-[1.12] tracking-tight text-balance md:text-5xl">
                Technology changes. Frameworks change.{" "}
                <em className="text-copper">Good engineering doesn’t.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-base leading-7 text-graphite md:text-lg md:leading-8">
                Clarix exists because too much software is built to be sold,
                not to be used. We build the other way around — carefully,
                transparently, for the long run — a workshop of curious young
                engineers who would rather show you our process than sell you
                a slogan.
              </p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-10 lg:col-span-4 lg:col-start-9 lg:justify-between">
            <Reveal delay={0.35}>
              <MarginNote>
                Rev 17 — simplified after removing three unnecessary
                paragraphs.
              </MarginNote>
            </Reveal>
            <Reveal delay={0.3} className="lg:self-end">
              <WorkshopNote number="012">
                We simplified this page three times.
              </WorkshopNote>
            </Reveal>
          </div>
        </div>

        {/* ── The foundations — the emotional centre of the page ── */}
        <div className="mt-24 grid gap-14 md:mt-32 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-copper">
                The foundations
              </p>
              <h3 className="mt-4 font-display text-3xl leading-[1.12] tracking-tight text-balance md:text-4xl">
                Three principles shape how we build.
              </h3>
            </Reveal>

            <div className="mt-10 space-y-9">
              {foundations.map((foundation, i) => (
                <Reveal
                  key={foundation.index}
                  delay={0.1 + i * 0.1}
                  // Deliberately staggered — the content is precise,
                  // the layout doesn't have to be symmetrical.
                  className={i === 1 ? "lg:ml-10" : undefined}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] text-fog">
                      {foundation.index}
                    </span>
                    <div>
                      <h4 className="font-display text-2xl tracking-tight">
                        {foundation.title}
                      </h4>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-fog">
                        {foundation.source}
                      </p>
                      <p className="mt-3 max-w-sm text-sm leading-6 text-graphite">
                        {foundation.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.2} className="lg:col-span-6 lg:col-start-7">
            <div className="cursor-crosshair" title="Drawing 002 — iteration 8">
              <FoundationsDrawing />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <p className="mt-14 max-w-lg font-display text-base italic leading-relaxed text-fog">
            These principles are inspired by timeless ideas of craftsmanship
            and continuous improvement found in Japanese engineering and
            making traditions. We didn’t invent them — we try to live up to
            them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
