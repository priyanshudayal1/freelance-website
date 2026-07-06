"use client";

import { motion, useReducedMotion } from "motion/react";
import { sketchRect } from "@/lib/sketch";

/**
 * The cover drawing: a real system, drawn the way we actually plan one.
 * Client → API → services → data, with a cache that only exists if it
 * earns its place. Not decoration — this is how projects start here.
 */

const BOX_W = 150;
const BOX_H = 52;
const BOX_X = 60;
const CX = BOX_X + BOX_W / 2; // 135

const boxes = [
  { y: 30, title: "CLIENT", sub: "web · mobile" },
  { y: 132, title: "API", sub: "auth · rate-limit" },
  { y: 234, title: "SERVICES", sub: "the actual work" },
  { y: 336, title: "DATA", sub: "postgres · backups" },
];

const flows = [
  { from: 86, label: "https" },
  { from: 188, label: "validated" },
  { from: 290, label: "sql" },
];

export function BlueprintDiagram() {
  const reduce = useReducedMotion();

  // Solid outlines draw themselves, in build order.
  const draw = (order: number) => ({
    initial: reduce ? { opacity: 0 } : ({ pathLength: 0 } as const),
    animate: reduce ? { opacity: 1 } : ({ pathLength: 1 } as const),
    transition: {
      duration: reduce ? 0.4 : 0.9,
      delay: 0.3 + order * 0.18,
      ease: "easeInOut" as const,
    },
  });

  // Construction details fade in (pathLength would break dashed strokes).
  const fade = (delay: number, to = 1) => ({
    initial: { opacity: 0 },
    animate: { opacity: to },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  });

  return (
    <svg
      viewBox="0 0 460 470"
      fill="none"
      role="img"
      aria-label="System blueprint: client, API, services, and data layers connected by request flow, with a cache marked ‘only if needed’, drawn on a titled engineering sheet"
      className="h-auto w-full"
    >
      {/* Sheet frame with grid references — a real drawing sheet */}
      <motion.rect
        x="8"
        y="8"
        width="444"
        height="454"
        stroke="var(--fog)"
        strokeWidth="1"
        opacity="0.5"
        {...fade(0.1, 0.5)}
      />
      <motion.g
        fill="var(--fog)"
        fontSize="7"
        letterSpacing="1"
        fontFamily="var(--font-geist-mono)"
        {...fade(0.2, 0.6)}
      >
        <text x="63" y="22">
          1
        </text>
        <text x="174" y="22">
          2
        </text>
        <text x="285" y="22">
          3
        </text>
        <text x="396" y="22">
          4
        </text>
        <text x="16" y="76">
          A
        </text>
        <text x="16" y="187">
          B
        </text>
        <text x="16" y="298">
          C
        </text>
        <text x="16" y="409">
          D
        </text>
      </motion.g>
      {/* The four layers of the system */}
      {boxes.map((box, i) => (
        <g key={box.title}>
          <motion.path
            d={sketchRect(BOX_X, box.y, BOX_W, BOX_H)}
            stroke="var(--ink)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.75"
            {...draw(i)}
          />
          <motion.text
            x={CX}
            y={box.y + 25}
            textAnchor="middle"
            fill="var(--ink)"
            fontSize="11"
            letterSpacing="2"
            fontFamily="var(--font-geist-mono)"
            {...fade(0.8 + i * 0.18)}
          >
            {box.title}
          </motion.text>
          <motion.text
            x={CX}
            y={box.y + 40}
            textAnchor="middle"
            fill="var(--fog)"
            fontSize="7.5"
            letterSpacing="1"
            fontFamily="var(--font-geist-mono)"
            {...fade(0.95 + i * 0.18)}
          >
            {box.sub}
          </motion.text>
        </g>
      ))}

      {/* Request flow between layers */}
      {flows.map((flow, i) => (
        <g key={flow.label}>
          <motion.path
            d={`M${CX} ${flow.from}v34`}
            stroke="var(--graphite)"
            strokeWidth="1.2"
            strokeLinecap="round"
            {...draw(4 + i)}
          />
          <motion.path
            d={`M${CX - 5} ${flow.from + 27}l5 8 5-8`}
            stroke="var(--graphite)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...fade(1.5 + i * 0.15, 0.9)}
          />
          <motion.text
            x={CX + 14}
            y={flow.from + 21}
            fill="var(--fog)"
            fontSize="8"
            letterSpacing="1.5"
            fontFamily="var(--font-geist-mono)"
            {...fade(1.6 + i * 0.15)}
          >
            {flow.label}
          </motion.text>
        </g>
      ))}

      {/* The cache — pencilled in, not committed to */}
      <g className="transition-opacity duration-500">
        <motion.path
          d={sketchRect(280, 240, 110, 40)}
          stroke="var(--graphite)"
          strokeWidth="1.2"
          strokeDasharray="5 4"
          strokeLinecap="round"
          {...fade(2, 0.8)}
        />
        <motion.text
          x="335"
          y="258"
          textAnchor="middle"
          fill="var(--graphite)"
          fontSize="10"
          letterSpacing="2"
          fontFamily="var(--font-geist-mono)"
          {...fade(2.1)}
        >
          CACHE
        </motion.text>
        <motion.text
          x="335"
          y="271"
          textAnchor="middle"
          fill="var(--fog)"
          fontSize="7.5"
          letterSpacing="1"
          fontFamily="var(--font-geist-mono)"
          {...fade(2.2)}
        >
          only if needed
        </motion.text>
        <motion.path
          d="M212 260h64"
          stroke="var(--fog)"
          strokeWidth="1"
          strokeDasharray="3 5"
          {...fade(2.15, 0.8)}
        />
        <motion.text
          x="244"
          y="252"
          textAnchor="middle"
          fill="var(--fog)"
          fontSize="7.5"
          letterSpacing="1"
          fontFamily="var(--font-geist-mono)"
          {...fade(2.25)}
        >
          hot reads
        </motion.text>
      </g>

      {/* Dimension rule — with an honest note instead of a measurement */}
      <motion.g stroke="var(--fog)" strokeWidth="1" {...fade(1.9, 0.8)}>
        <path d="M36 30v358" />
        <path d="M30 30h12" />
        <path d="M30 388h12" />
      </motion.g>
      <motion.text
        x="26"
        y="209"
        transform="rotate(-90 26 209)"
        textAnchor="middle"
        fill="var(--fog)"
        fontSize="8"
        letterSpacing="2"
        fontFamily="var(--font-geist-mono)"
        {...fade(2.1)}
      >
        NO MAGIC — JUST PARTS
      </motion.text>

      {/* Registration mark */}
      <motion.g stroke="var(--fog)" strokeWidth="1" {...fade(2.3, 0.6)}>
        <circle cx="408" cy="30" r="4.5" fill="none" />
        <path d="M408 22v16M400 30h16" />
      </motion.g>

      {/* Detail callout — evidence of care where nobody looks */}
      <motion.path
        d="M186 368a22 22 0 1 0 44 0a22 22 0 1 0 -44 0"
        stroke="var(--fog)"
        strokeWidth="1"
        strokeDasharray="4 4"
        {...fade(2.45, 0.8)}
      />
      <motion.path
        d="M228 358l34 -14"
        stroke="var(--fog)"
        strokeWidth="1"
        {...fade(2.5, 0.8)}
      />
      <motion.text
        x="266"
        y="346"
        fill="var(--fog)"
        fontSize="7.5"
        letterSpacing="1.5"
        fontFamily="var(--font-geist-mono)"
        {...fade(2.55, 0.9)}
      >
        DETAIL A — BACKUPS: TESTED, NOT HOPED
      </motion.text>

      {/* Title block — flush with the sheet corner, like a real drawing */}
      <motion.g {...fade(2.6, 0.9)}>
        <rect x="252" y="398" width="200" height="64" stroke="var(--fog)" strokeWidth="1" opacity="0.8" />
        <path d="M252 420h200M252 441h200" stroke="var(--fog)" strokeWidth="0.75" opacity="0.6" />
        <g fontFamily="var(--font-geist-mono)" letterSpacing="1.5">
          <text x="260" y="413" fill="var(--ink)" fontSize="8" opacity="0.8">
            CLARIX — THE WORKSHOP
          </text>
          <text x="260" y="434" fill="var(--fog)" fontSize="7">
            DWG 001 · SYSTEM OVERVIEW · SHEET 00
          </text>
          <text x="260" y="455" fill="var(--fog)" fontSize="7">
            SCALE 1:1 · REV 28 · DRAWN BEFORE BUILT
          </text>
        </g>
      </motion.g>
    </svg>
  );
}
