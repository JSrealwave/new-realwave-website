import { partnerLogos } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PartnerLogos({
  className,
  kicker = "Ecosystem",
}: {
  className?: string;
  kicker?: string;
}) {
  return (
    <div className={className}>
      {kicker ? (
        <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
          {kicker}
        </p>
      ) : null}
      <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {partnerLogos.map((p) => (
          <li key={p.name}>
            <a
              href={p.href}
              target="_blank"
              rel="noreferrer"
              aria-label={p.name}
              className={cn(
                "flex h-20 items-center justify-center rounded-lg bg-surface px-4",
                "shadow-[var(--shadow-border)] transition-shadow hover:shadow-[var(--shadow-border-hover)]",
              )}
            >
              <img
                src={p.src}
                alt={p.name}
                className="max-h-10 w-auto max-w-[148px] object-contain"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
