import { sketchRect } from "@/lib/sketch";
import { cn } from "@/lib/utils";

/**
 * A faint planning sheet for the Method section: a wireframe frame,
 * coordinate labels, a dimension rule, and a section marker. Drawn in
 * pencil-weight lines at low opacity — it gives the left column visual
 * weight without ever competing with the sticky note in front of it.
 */
export function MethodSketch({ className }: { className?: string }) {
  const mono = { fontFamily: "var(--font-geist-mono)" } as const;

  return (
    <svg
      viewBox="0 0 300 340"
      fill="none"
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    >
      {/* Coordinate frame */}
      <g stroke="var(--fog)" strokeWidth="1">
        <path d="M26 14v300" />
        <path d="M26 300h250" />
        <path d="M22 66h8M22 146h8M22 226h8" />
        <path d="M104 296v8M196 296v8" />
      </g>
      <g fill="var(--fog)" fontSize="8" letterSpacing="1.5" style={mono}>
        <text x="34" y="26">X:03 · Y:18</text>
        <text x="214" y="316">SEC 03 — METHOD</text>
      </g>

      {/* Wireframe box */}
      <path
        d={sketchRect(78, 74, 150, 96)}
        stroke="var(--graphite)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path d="M78 96h150" stroke="var(--graphite)" strokeWidth="1" />
      <circle cx="89" cy="85" r="2.5" stroke="var(--fog)" strokeWidth="1" />
      <g stroke="var(--fog)" strokeWidth="1">
        <path d="M92 120h122" />
        <path d="M92 136h96" />
        <path d="M92 152h122" />
      </g>

      {/* Dimension rule */}
      <g stroke="var(--fog)" strokeWidth="1">
        <path d="M78 190h150" />
        <path d="M78 186v8M228 186v8" />
      </g>
      <text
        x="140"
        y="206"
        textAnchor="middle"
        fill="var(--fog)"
        fontSize="8"
        letterSpacing="2"
        style={mono}
      >
        1 : 1
      </text>

      {/* Construction crosshair */}
      <g stroke="var(--fog)" strokeWidth="1">
        <circle cx="250" cy="66" r="5" />
        <path d="M250 57v18M241 66h18" />
      </g>
    </svg>
  );
}
