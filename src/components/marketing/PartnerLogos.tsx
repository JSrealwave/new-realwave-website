import { partnerLogos } from "@/lib/site";
import { cn } from "@/lib/utils";

function LogoCard({
  name,
  src,
  href,
  hidden,
}: {
  name: string;
  src: string;
  href: string;
  hidden?: boolean;
}) {
  return (
    <li className="w-[11.5rem] shrink-0" aria-hidden={hidden || undefined}>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        tabIndex={hidden ? -1 : undefined}
        aria-label={hidden ? undefined : name}
        className={cn(
          "flex h-20 items-center justify-center rounded-lg bg-surface px-4",
          "shadow-[var(--shadow-border)] transition-shadow hover:shadow-[var(--shadow-border-hover)]",
        )}
      >
        <img
          src={src}
          alt=""
          className="max-h-10 w-auto max-w-[9.25rem] object-contain"
        />
      </a>
    </li>
  );
}

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
      <div className="logo-marquee-wrap relative mt-4 overflow-hidden">
        <div className="logo-marquee flex w-max">
          <ul className="flex gap-3 pr-3">
            {partnerLogos.map((p) => (
              <LogoCard key={p.name} {...p} />
            ))}
          </ul>
          <ul className="flex gap-3 pr-3" aria-hidden="true">
            {partnerLogos.map((p) => (
              <LogoCard key={`${p.name}-dup`} {...p} hidden />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
