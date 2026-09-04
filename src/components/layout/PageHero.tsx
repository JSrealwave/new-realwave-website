import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  title,
  lede,
  children,
  image,
  compact,
  shot,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  children?: ReactNode;
  image?: string;
  compact?: boolean;
  shot?: { src: string; alt: string };
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-ink text-inverse",
        compact ? "py-14 sm:py-16" : shot ? "py-14 sm:py-16" : "py-20 sm:py-28",
      )}
    >
      {shot ? null : image ? (
        <img
          src={image}
          alt=""
          className="pointer-events-none absolute inset-0 size-full object-cover opacity-35"
        />
      ) : (
        <img
          src="/media/wave-hero.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 size-full object-cover opacity-50"
        />
      )}
      {shot ? (
        <img
          src="/media/wave-hero.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 size-full object-cover opacity-25"
        />
      ) : null}
      <div
        className={cn(
          "absolute inset-0",
          shot
            ? "bg-gradient-to-r from-ink via-ink/90 to-ink/70"
            : "bg-gradient-to-r from-ink via-ink/80 to-ink/30",
        )}
      />
      <div
        className={cn(
          "relative mx-auto max-w-7xl px-4 sm:px-6",
          shot && "grid items-center gap-10 lg:grid-cols-2",
        )}
      >
        <div>
          {kicker ? (
            <p className="text-xs font-bold tracking-[0.22em] text-teal uppercase">{kicker}</p>
          ) : null}
          <h1
            className={cn(
              "mt-3 text-4xl text-inverse sm:text-5xl",
              shot ? "lg:text-5xl" : "lg:text-6xl",
              "max-w-3xl",
            )}
          >
            {title}
          </h1>
          {lede ? (
            <p className="mt-5 max-w-2xl text-lg text-inverse/80 sm:text-xl">{lede}</p>
          ) : null}
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
        {shot ? (
          <img
            src={shot.src}
            alt={shot.alt}
            className="media relative w-full rounded-lg shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
          />
        ) : null}
      </div>
      <div className="absolute right-0 bottom-0 left-0 h-1 eplus-gradient" />
    </section>
  );
}

export function Section({
  children,
  className,
  dark,
  id,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(dark ? "bg-ink text-inverse" : "bg-paper text-ink", className)}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">{children}</div>
    </section>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">{children}</p>
  );
}
