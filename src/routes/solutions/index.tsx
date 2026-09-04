import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero, Section } from "@/components/layout/PageHero";
import { jobs, verticals } from "@/lib/site";

export const Route = createFileRoute("/solutions/")({
  component: SolutionsIndex,
});

function SolutionsIndex() {
  return (
    <main>
      <PageHero
        kicker="Solutions"
        title="Three jobs. Verticals are proof."
        lede="CSOs buy proactive GSOC. Loss-prevention and plant ops buy OT exceptions. Facilities and yards buy flow. Industry pages that all say the same ten bullets are not a strategy."
      />
      <Section>
        <div className="grid gap-5 lg:grid-cols-3">
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
                <p className="mt-2 text-sm text-muted">{job.lede}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12">
          <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
            Also where we work
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {verticals.map((v) => (
              <span
                key={v}
                className="rounded-full bg-cool px-4 py-2 text-sm font-bold text-navy"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </Section>
      <CtaBand />
    </main>
  );
}
