import { customerLogos } from "@/lib/site";
import { cn } from "@/lib/utils";

export function CustomerLogos({
  className,
  kicker = "Selected customers",
  compact,
}: {
  className?: string;
  kicker?: string;
  compact?: boolean;
}) {
  return (
    <div className={className}>
      {kicker ? (
        <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
          {kicker}
        </p>
      ) : null}
      <ul
        className={cn(
          "mt-4 grid gap-3",
          compact ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4",
        )}
      >
        {customerLogos.map((c) => (
          <li key={c.name}>
            <div
              className={cn(
                "flex h-24 items-center justify-center rounded-lg bg-paper px-4",
                "shadow-[var(--shadow-border)]",
              )}
            >
              <img
                src={c.src}
                alt={c.name}
                className="max-h-14 w-auto max-w-[150px] object-contain"
              />
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-muted">
        Additional sites available in a briefing.
      </p>
    </div>
  );
}