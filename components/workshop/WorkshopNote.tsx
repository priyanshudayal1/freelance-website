import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A recurring margin note from the workshop. Authentic, never decorative —
 * only write these when there is something true to say.
 */
export function WorkshopNote({
  number,
  children,
  className,
  rotate = -1.5,
}: {
  number: string;
  children: ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <aside
      className={cn("max-w-60", className)}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fog">
        Workshop note #{number}
      </p>
      <p className="mt-1.5 font-hand text-[1.45rem] leading-snug text-graphite">
        “{children}”
      </p>
    </aside>
  );
}
