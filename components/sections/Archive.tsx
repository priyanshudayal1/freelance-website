import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Doc } from "@/components/workshop/Doc";

// One honest entry. The archive grows as builds ship — not before.
const record = [
  ["Build", "001 — clarixit.in · the site you’re reading"],
  ["Status", "shipped · rev 28 · still refining"],
  ["Stack", "next.js · typescript · tailwind · motion"],
  ["Duration", "three weeks so far — it won’t ever be “done”"],
  ["Lessons", "simple is harder. we removed more than we added."],
];

export function Archive() {
  return (
    <section id="archive" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading index="06" label="Archive" note="Documented, not showcased" sheet="06/08" />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-4xl leading-[1.12] tracking-tight text-balance md:text-5xl">
                An archive, not a portfolio.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-base leading-7 text-graphite">
                Every build gets a record: what it is, what it taught us,
                what we’d change. No case-study theater — the first entry is
                the website you’re reading.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 -rotate-1 font-hand text-2xl text-graphite/80">
                more entries as we ship — no rush.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
            <Doc name="archive/build-001.md" status="Entry 1 of 1" fold>
              <dl className="space-y-4 p-6 sm:p-7">
                {record.map(([key, value]) => (
                  <div
                    key={key}
                    className="grid grid-cols-[90px_1fr] items-baseline gap-4"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-fog">
                      {key}
                    </dt>
                    <dd className="text-sm leading-6 text-graphite">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Doc>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
