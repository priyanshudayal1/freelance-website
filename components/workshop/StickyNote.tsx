import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** A sticky note left on the bench. Use at most one per page. */
export function StickyNote({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-44 rotate-2 bg-[#f5eeda] p-4 pb-5 shadow-[3px_4px_0_rgba(33,31,26,0.06)]",
        className,
      )}
    >
      <p className="font-hand text-xl leading-snug text-graphite">{children}</p>
    </div>
  );
}
