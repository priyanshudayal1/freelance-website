import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A tiny revision note in the margin — thinking left visible.
 * Almost hidden; found by the curious.
 */
export function MarginNote({
  children,
  className,
  rotate = -1,
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
}) {
  return (
    <p
      className={cn(
        "max-w-40 font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-fog/90",
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </p>
  );
}
