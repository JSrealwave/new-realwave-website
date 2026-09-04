import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { stack } from "@/lib/site";

export function StackStrip() {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg bg-line shadow-[var(--shadow-border)] sm:grid-cols-2 lg:grid-cols-4">
      {stack.map((layer, i) => (
        <Link
          key={layer.key}
          to={layer.href}
          className="group flex flex-col bg-surface p-6 hover:bg-cool"
        >
          <span className="text-xs font-bold tracking-[0.18em] text-navy uppercase">
            {layer.kicker}
          </span>
          <span className="mt-2 flex items-center gap-2 text-2xl font-bold text-ink">
            {layer.name}
            {i < stack.length - 1 ? (
              <ArrowRight className="size-4 text-teal opacity-0 transition group-hover:opacity-100" />
            ) : null}
          </span>
          <span className="mt-3 text-sm text-muted">{layer.line}</span>
        </Link>
      ))}
    </div>
  );
}
