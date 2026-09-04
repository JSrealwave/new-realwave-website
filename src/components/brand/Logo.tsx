import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  inverse = false,
  compact = false,
}: {
  inverse?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      to="/"
      className="flex items-center"
      aria-label="Realwave home"
    >
      <img
        src="/assets/logo-wordmark.png"
        alt="Realwave"
        className={cn(
          "w-auto",
          compact ? "h-7" : "h-8 sm:h-9",
          inverse && "invert",
        )}
      />
    </Link>
  );
}
