"use client";

import { motion, useReducedMotion } from "motion/react";
import { sketchDiamond, sketchRect } from "@/lib/sketch";

/**
 * A real decision, drawn the way it was actually made:
 * "do we need a queue?" — the answer is usually no, and
 * the sketch shows why. Thinking, left visible.
 */
export function DecisionTree() {
  const reduce = useReducedMotion();

  const draw = (order: number) => ({
    initial: reduce ? { opacity: 0 } : ({ pathLength: 0 } as const),
    whileInView: reduce ? { opacity: 1 } : ({ pathLength: 1 } as const),
    viewport: { once: true },
    transition: {
      duration: reduce ? 0.4 : 0.8,
      delay: 0.2 + order * 0.2,
      ease: "easeInOut" as const,
    },
  });

  const fade = (delay: number, to = 1) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: to },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  });

  const mono = {
    fontFamily: "var(--font-geist-mono)",
  };

  return (
    <svg
      viewBox="0 0 520 330"
      fill="none"
      role="img"
      aria-label="Decision tree: do we need a queue? If writes don’t spike, Postgres alone is simpler. If ordering doesn’t matter, Postgres LISTEN/NOTIFY works. Only with spiking writes and strict ordering does a real queue earn its place."
      className="h-auto w-full"
    >
      {/* Decision 1 */}
      <motion.path
        d={sketchDiamond(120, 60, 150, 74)}
        stroke="var(--ink)"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.75"
        {...draw(0)}
      />
      <motion.text x="120" y="64" textAnchor="middle" fill="var(--ink)" fontSize="10" letterSpacing="1" style={mono} {...fade(0.7)}>
        burst writes?
      </motion.text>

      {/* no → postgres alone */}
      <motion.path d="M197 60h100" stroke="var(--graphite)" strokeWidth="1.1" strokeLinecap="round" {...draw(1)} />
      <motion.path d="M290 55l9 5-9 5" stroke="var(--graphite)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" {...fade(1.1, 0.9)} />
      <motion.text x="240" y="52" textAnchor="middle" fill="var(--fog)" fontSize="8.5" letterSpacing="1.5" style={mono} {...fade(1.1)}>
        no
      </motion.text>
      <motion.path
        d={sketchRect(305, 38, 170, 44)}
        stroke="var(--ink)"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.75"
        {...draw(2)}
      />
      <motion.g {...fade(1.3)}>
        <text x="390" y="57" textAnchor="middle" fill="var(--ink)" fontSize="9.5" letterSpacing="1" style={mono}>
          postgres alone ✓
        </text>
        <text x="390" y="71" textAnchor="middle" fill="var(--fog)" fontSize="7.5" letterSpacing="1" style={mono}>
          simpler · fewer parts
        </text>
      </motion.g>

      {/* yes ↓ */}
      <motion.path d="M120 99v54" stroke="var(--graphite)" strokeWidth="1.1" strokeLinecap="round" {...draw(3)} />
      <motion.path d="M115 146l5 9 5-9" stroke="var(--graphite)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" {...fade(1.5, 0.9)} />
      <motion.text x="132" y="130" fill="var(--fog)" fontSize="8.5" letterSpacing="1.5" style={mono} {...fade(1.5)}>
        yes
      </motion.text>

      {/* Decision 2 */}
      <motion.path
        d={sketchDiamond(120, 195, 150, 74)}
        stroke="var(--ink)"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.75"
        {...draw(4)}
      />
      <motion.text x="120" y="199" textAnchor="middle" fill="var(--ink)" fontSize="10" letterSpacing="1" style={mono} {...fade(1.8)}>
        strict ordering?
      </motion.text>

      {/* no → listen/notify */}
      <motion.path d="M197 195h100" stroke="var(--graphite)" strokeWidth="1.1" strokeLinecap="round" {...draw(5)} />
      <motion.path d="M290 190l9 5-9 5" stroke="var(--graphite)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" {...fade(2.1, 0.9)} />
      <motion.text x="240" y="187" textAnchor="middle" fill="var(--fog)" fontSize="8.5" letterSpacing="1.5" style={mono} {...fade(2.1)}>
        no
      </motion.text>
      <motion.path
        d={sketchRect(305, 173, 170, 44)}
        stroke="var(--ink)"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.75"
        {...draw(6)}
      />
      <motion.g {...fade(2.3)}>
        <text x="390" y="192" textAnchor="middle" fill="var(--ink)" fontSize="9.5" letterSpacing="1" style={mono}>
          pg listen/notify
        </text>
        <text x="390" y="206" textAnchor="middle" fill="var(--fog)" fontSize="7.5" letterSpacing="1" style={mono}>
          a queue without a queue
        </text>
      </motion.g>

      {/* yes ↓ a real queue */}
      <motion.path d="M120 234v34" stroke="var(--graphite)" strokeWidth="1.1" strokeLinecap="round" {...draw(7)} />
      <motion.path d="M115 261l5 9 5-9" stroke="var(--graphite)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" {...fade(2.5, 0.9)} />
      <motion.text x="132" y="256" fill="var(--fog)" fontSize="8.5" letterSpacing="1.5" style={mono} {...fade(2.5)}>
        yes
      </motion.text>
      <motion.path
        d={sketchRect(45, 272, 150, 42)}
        stroke="var(--copper)"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.8"
        {...draw(8)}
      />
      <motion.g {...fade(2.7)}>
        <text x="120" y="290" textAnchor="middle" fill="var(--copper-deep)" fontSize="9.5" letterSpacing="1" style={mono}>
          a real queue
        </text>
        <text x="120" y="304" textAnchor="middle" fill="var(--fog)" fontSize="7.5" letterSpacing="1" style={mono}>
          now it earns its place
        </text>
      </motion.g>

      {/* Margin remark */}
      <motion.text x="514" y="322" textAnchor="end" fill="var(--fog)" fontSize="8" letterSpacing="1.5" style={mono} {...fade(3, 0.9)}>
        SKETCHED IN 20 MIN · ARGUED FOR TWO DAYS
      </motion.text>
    </svg>
  );
}
