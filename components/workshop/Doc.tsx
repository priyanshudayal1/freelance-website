import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * A working document from the workshop: filename tab, status,
 * optional folded corner. The website is built from these.
 */
export function Doc({
  name,
  status,
  fold = false,
  children,
  className,
}: {
  name: string;
  status?: string;
  fold?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative border border-line bg-paper", className)}>
      {fold && (
        <span
          aria-hidden="true"
          className="absolute right-0 top-0 z-10 h-4 w-4 bg-line/80 [clip-path:polygon(0_0,0_100%,100%_100%)]"
        />
      )}
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-fog">
        <span className="text-graphite">{name}</span>
        {status && <span className={fold ? "mr-3" : undefined}>{status}</span>}
      </div>
      {children}
    </div>
  );
}
