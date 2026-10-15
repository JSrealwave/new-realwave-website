import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero, Section } from "@/components/layout/PageHero";
import { jobs, verticalLenses, verticals } from "@/lib/site";

export const Route = createFileRoute("/solutions/")({
  component: SolutionsIndex,
});

function SolutionsIndex() {
  const [vertical, setVertical] = useState<string | null>(null);
  const lens = verticalLenses.find((item) => item.name === vertical);

  return (
    <main>
      <PageHero
        kicker="Solutions"
        title="Three ways to use cameras."
        lede="Security runs a GSOC: video, access, and alarms, for one site or many. Loss prevention and operations review exceptions — the events that should not have happened. Stores, yards, and facilities watch flow: counts, queues, and how long things wait."
      />
      <Section>
        <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
          Where this shows up
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {verticals.map((name) => {
            const ready = verticalLenses.some((item) => item.name === name);
            const selected = vertical === name;
            if (!ready) {
              return (
                <span
                  key={name}
                  className="rounded-full bg-cool px-4 py-2 text-sm font-bold text-navy"
                >
                  {name}
                </span>
              );
            }
            return (
              <button
                key={name}
                type="button"
                aria-pressed={selected}
                onClick={() => setVertical(selected ? null : name)}
                className={
                  selected
                    ? "rounded-full bg-navy px-4 py-2 text-sm font-bold text-white"
                    : "rounded-full bg-cool px-4 py-2 text-sm font-bold text-navy hover:bg-navy hover:text-white"
                }
              >
                {name}
              </button>
            );
          })}
        </div>

        {lens ? (
          <figure className="mt-8 overflow-hidden rounded-lg bg-ink shadow-[var(--shadow-border)]">
            <img
              src={lens.image}
              alt={lens.imageAlt}
              className="media h-64 w-full object-cover object-center"
            />
            <figcaption className="px-4 py-3 text-sm text-inverse/80">
              {lens.proof ? (
                <span className="font-bold tracking-[0.18em] text-teal uppercase">
                  {lens.proof}
                </span>
              ) : (
                lens.scene
              )}
            </figcaption>
          </figure>
        ) : null}

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {jobs.map((job) => (
            <Link
              key={job.href}
              to={job.href}
              className="group overflow-hidden rounded-lg bg-surface shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]"
            >
              <img
                src={job.image}
                alt=""
                className="media h-48 w-full object-cover object-center"
              />
              <div className="p-6">
                <p className="text-xs font-bold tracking-[0.18em] text-navy uppercase">
                  {job.kicker}
                </p>
                <h2 className="mt-2 flex items-center gap-2 text-2xl">
                  {job.name}
                  <ArrowRight className="size-4 text-teal opacity-0 transition group-hover:opacity-100" />
                </h2>
                <p className="mt-2 text-sm text-muted">
                  {lens?.lines[job.href] ?? job.lede}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <CtaBand />
    </main>
  );
}
