import { cn } from "@/lib/utils";

/**
 * Drafting-sheet section label: index, title, rule line, optional
 * margin note and sheet number. Every page of the notebook gets one.
 */
export function SectionHeading({
  index,
  label,
  note,
  sheet,
  className,
}: {
  index: string;
  label: string;
  note?: string;
  sheet?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-fog",
        className,
      )}
    >
      <span className="text-copper">{index}</span>
      <span>{label}</span>
      <span aria-hidden="true" className="h-px flex-1 bg-line" />
      {note && <span className="hidden text-[10px] sm:block">{note}</span>}
      {sheet && (
        <span className="hidden text-[10px] text-fog/70 md:block">
          S.{sheet}
        </span>
      )}
    </div>
  );
}
