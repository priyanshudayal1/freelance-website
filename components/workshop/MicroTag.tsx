import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Tiny engineering evidence: build numbers, revision markers, stamps. */
export function MicroTag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-fog",
        className,
      )}
    >
      {children}
    </span>
  );
}
