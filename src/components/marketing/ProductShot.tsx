import { cn } from "@/lib/utils";

export function ProductShot({
  src,
  alt,
  caption,
  dark,
}: {
  src: string;
  alt: string;
  caption?: string;
  dark?: boolean;
}) {
  return (
    <figure className={cn(dark ? "bg-ink" : "bg-paper")}>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
        <img
          src={src}
          alt={alt}
          className="media w-full rounded-lg bg-ink shadow-[var(--shadow-border)]"
        />
        {caption ? (
          <figcaption
            className={cn("mt-3 max-w-3xl text-sm", dark ? "text-inverse/65" : "text-muted")}
          >
            {caption}
          </figcaption>
        ) : null}
      </div>
    </figure>
  );
}
