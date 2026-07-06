import { MeterBar } from "@/components/animations/MeterBar";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DecisionTree } from "@/components/workshop/DecisionTree";
import { Doc } from "@/components/workshop/Doc";
import { DraftCheck } from "@/components/workshop/icons";
import { Stamp } from "@/components/workshop/Stamp";
import { WorkshopNote } from "@/components/workshop/WorkshopNote";

// Real working notes — decisions with their reasons, including one we undid.
const decisions = [
  { text: "postgres over mongo — the data is relational; pretending otherwise costs later.", struck: false },
  { text: "no microservices — one service, clear modules. it’s a four-person product.", struck: false },
  { text: "redis session cache", struck: true, remark: "removed — premature." },
  { text: "server-rendered pages — less js shipped, faster on cheap phones.", struck: false },
];

const budgets = [
  { label: "Performance", target: "≥ 95", value: 95 },
  { label: "Accessibility", target: "100", value: 100 },
  { label: "Best practices", target: "100", value: 100 },
  { label: "Layout shift", target: "0", value: 100 },
];

const checklist = [
  "Security review",
  "Accessibility pass",
  "Performance budget met",
  "Documentation written",
  "Rollback plan ready",
];

export function Evidence() {
  return (
    <section id="evidence" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading index="05" label="Evidence" note="Measured, not promised" sheet="05/08" />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <h2 className="font-display text-4xl leading-[1.12] tracking-tight text-balance md:text-5xl">
              Evidence over claims.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-graphite">
              Anyone can write “scalable” and “secure” on a landing page.
              These are working documents from the bench — thinking included.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          {/* The thinking — a decision, drawn */}
          <Reveal className="lg:col-span-3">
            <div className="relative h-full">
              <Doc
                name="thinking — do we need a queue.md"
                status="Draft 3"
                className="h-full"
              >
                <div className="cursor-crosshair p-5 sm:p-7">
                  <DecisionTree />
                </div>
              </Doc>
              <Stamp className="absolute -right-2 top-10 bg-paper/80">
                Approved · Rev 04
              </Stamp>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4 lg:col-span-2">
            {/* Decision log */}
            <Reveal delay={0.1}>
              <Doc name="notes.txt" status="Working copy" fold>
                <ul className="space-y-3 p-5 font-mono text-[12px] leading-relaxed text-graphite">
                  {decisions.map((decision) => (
                    <li key={decision.text} className="flex gap-2">
                      <span aria-hidden="true" className="text-fog">
                        —
                      </span>
                      <span>
                        <span className={decision.struck ? "line-through decoration-copper/60" : undefined}>
                          {decision.text}
                        </span>
                        {decision.remark && (
                          <span className="text-fog"> {decision.remark}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </Doc>
            </Reveal>

            {/* Performance budget */}
            <Reveal delay={0.18}>
              <Doc name="budget.log" status="Enforced">
                <div className="p-5">
                  <ul className="space-y-4">
                    {budgets.map((budget, i) => (
                      <li key={budget.label}>
                        <div className="flex items-baseline justify-between text-sm">
                          <span className="text-graphite">{budget.label}</span>
                          <span className="font-mono text-xs text-ink">
                            {budget.target}
                          </span>
                        </div>
                        <div className="mt-2">
                          <MeterBar value={budget.value} delay={0.2 + i * 0.12} />
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-fog">
                    Tested on mid-range phones · 4G
                  </p>
                </div>
              </Doc>
            </Reveal>

            {/* Ship gate */}
            <Reveal delay={0.26}>
              <Doc name="pre-ship.txt" status="5 / 5">
                <ul className="space-y-2.5 p-5">
                  {checklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-graphite"
                    >
                      <DraftCheck className="shrink-0 text-copper" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Doc>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.25} className="mt-12 flex justify-end">
          <WorkshopNote number="021" rotate={1.5}>
            Good software is usually the result of removing things.
          </WorkshopNote>
        </Reveal>
      </div>
    </section>
  );
}
