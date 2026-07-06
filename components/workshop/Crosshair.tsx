import { cn } from "@/lib/utils";

/** Drafting registration mark — placed at sheet corners. */
export function Crosshair({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
      className={cn("h-3.5 w-3.5 text-fog/50", className)}
    >
      <circle cx="8" cy="8" r="4.5" />
      <path d="M8 0v16M0 8h16" />
    </svg>
  );
}
