import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** An approval stamp — pressed slightly crooked, like a real one. */
export function Stamp({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block -rotate-6 border-2 border-copper/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-copper/70",
        className,
      )}
    >
      {children}
    </span>
  );
}
