import { cn } from "@/lib/utils";

/**
 * Clarix drafting icons — thin, open, technical-drawing strokes.
 * No icon library: these are drawn like everything else in the workshop.
 */

type IconProps = { className?: string };

export function DraftArrowRight({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-4 w-5", className)}
    >
      <path d="M1.5 8h19" />
      <path d="M15.5 2.5 21.5 8l-6 5.5" />
    </svg>
  );
}

export function DraftArrowUpRight({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <path d="M2.5 13.5 13 3" />
      <path d="M5.5 2.5h8v8" />
    </svg>
  );
}

export function DraftCheck({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-3.5 w-3.5", className)}
    >
      <path d="M1.5 8.5 6 12.5 14.5 1.5" />
    </svg>
  );
}

export function DraftMenu({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      aria-hidden="true"
      className={cn("h-4 w-5", className)}
    >
      <path d="M1 3.5h18" />
      <path d="M1 10.5h12" />
    </svg>
  );
}

export function DraftClose({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      aria-hidden="true"
      className={cn("h-4 w-4", className)}
    >
      <path d="M2.5 2.5l11 11" />
      <path d="M13.5 2.5l-11 11" />
    </svg>
  );
}
