import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero, Section } from "@/components/layout/PageHero";
import { jobs, marketSlug, verticalUseCases } from "@/lib/site";

export const Route = createFileRoute("/solutions/")({
  validateSearch: (search: Record<string, unknown>): { market?: string } => {
    if (typeof search.market !== "string" || search.market.length === 0) return {};
    return { market: search.market };
  },
  component: SolutionsIndex,
});

function marketName(slug: string | undefined) {
  return (
    verticalUseCases.find((item) => marketSlug(item.name) === slug)?.name ?? "Retail"
  );
}

function SolutionsIndex() {
  const { market } = Route.useSearch();
  const navigate = Route.useNavigate();
  const [name, setName] = useState(() => marketName(market));
  const vertical = verticalUseCases.find((item) => item.name === name) ?? verticalUseCases[0];

  useEffect(() => {
    setName(marketName(market));
  }, [market]);

  function selectMarket(next: (typeof verticalUseCases)[number]["name"]) {
    setName(next);
    navigate({
      search: { market: marketSlug(next) },
      hash: "markets",
      replace: true,
      resetScroll: false,
    });
  }

  return (
    <main>
      <PageHero
        kicker="Solutions"
        title="Three ways to use cameras."
        lede="Security runs a GSOC: video, access, and alarms, for one site or many. Loss prevention and operations review exceptions — the events that should not have happened. Stores, yards, and facilities watch flow: counts, queues, and how long things wait."
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

        <div id="markets" className="mt-14 scroll-mt-24">
          <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
            Where this shows up
          </p>
          <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="Markets">
            {verticalUseCases.map((item) => {
              const selected = item.name === vertical.name;
              return (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => selectMarket(item.name)}
                  className={
                    selected
                      ? "rounded-full bg-navy px-4 py-2 text-sm font-bold text-white"
                      : "rounded-full bg-cool px-4 py-2 text-sm font-bold text-navy hover:bg-navy hover:text-white"
                  }
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          <h2 className="mt-10 text-3xl">Six key use cases in {vertical.name}.</h2>
          <p className="mt-3 max-w-2xl text-muted">{vertical.lede}</p>

          {vertical.image ? (
            <figure className="mt-8 overflow-hidden rounded-lg bg-ink shadow-[var(--shadow-border)]">
              <div className="relative h-64">
                <img
                  src={vertical.image}
                  alt={vertical.imageAlt ?? ""}
                  className="media size-full object-cover object-center"
                />
                {vertical.name === "Logistics" ? null : (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-10 bg-navy/45 mix-blend-multiply"
                  />
                )}
              </div>
              {vertical.proof ? (
                <figcaption className="px-4 py-3 text-sm">
                  <span className="font-bold tracking-[0.18em] text-teal uppercase">
                    {vertical.proof}
                  </span>
                </figcaption>
              ) : null}
            </figure>
          ) : null}

          <div
            role="tabpanel"
            className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {vertical.cases.map((item) => (
              <article
                key={item.title}
                className="rounded-lg bg-surface p-6 shadow-[var(--shadow-border)]"
              >
                <h3 className="text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
      <CtaBand />
    </main>
  );
}
