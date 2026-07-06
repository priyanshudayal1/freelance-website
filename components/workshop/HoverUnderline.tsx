import type { ReactNode } from "react";

/**
 * A pencil underline that draws itself on hover. CSS only —
 * the reward for pointing at something. Use sparingly.
 */
export function HoverUnderline({ children }: { children: ReactNode }) {
  return (
    <span className="group/hu relative inline-block">
      {children}
      <svg
        className="absolute -bottom-[0.06em] left-0 h-[0.14em] w-full overflow-visible"
        viewBox="0 0 200 12"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M3 8C40 4 70 9 110 6C145 3.5 170 8 197 5"
          pathLength={1}
          stroke="var(--copper)"
          strokeWidth="5"
          strokeLinecap="round"
          className="[stroke-dasharray:1] [stroke-dashoffset:1] transition-[stroke-dashoffset] duration-700 ease-out group-hover/hu:[stroke-dashoffset:0]"
        />
      </svg>
    </span>
  );
}
