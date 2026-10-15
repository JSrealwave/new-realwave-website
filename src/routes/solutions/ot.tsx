import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero, Section } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { posNames } from "@/lib/site";

export const Route = createFileRoute("/solutions/ot")({
  head: () => ({
    meta: [{ title: "Exception-based monitoring | Realwave" }],
  }),
  component: OtPage,
});

const cases = [
  {
    title: "Refund and sweethearting",
    body: "POS line plus video plus face. The exception is the unpaid or the friendly — not a motion box on the register.",
  },
  {
    title: "Self-checkout mismatch",
    body: "What was scanned versus what was in the bag. Track attributes, not a guess.",
  },
  {
    title: "PPE and process",
    body: "Plant and hospital rules that are actually checked, not a poster in the break room.",
  },
  {
    title: "Pharmacy and high-value",
    body: "Access plus Face plus zone rules around controlled inventory.",
  },
];

function OtPage() {
  return (
    <main>
      <PageHero
        kicker="Exceptions"
        title="Exception-based monitoring."
        lede="These are the events that should not have happened: a refund with no customer, a missed safety check, a door that should have stayed shut. The clip is attached to the event, so you review the exception instead of the whole shift."
        shot={{
          src: "/media/intel-pos.jpg",
          alt: "BlackBox POS cloud with live register cameras and receipts",
        }}
      >
        <Button asChild size="lg">
          <Link to="/contact">Map a POS workflow</Link>
        </Button>
      </PageHero>
      <Section>
        <p className="text-sm text-muted">
          Named POS today: {posNames.join(" · ")}. 167+ in the library.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {cases.map((c) => (
            <article
              key={c.title}
              className="rounded-lg bg-surface p-6 shadow-[var(--shadow-border)]"
            >
              <h2 className="text-xl">{c.title}</h2>
              <p className="mt-2 text-sm text-muted">{c.body}</p>
            </article>
          ))}
        </div>
        <blockquote className="mt-10 max-w-2xl border-l-2 border-teal pl-5 text-lg">
          At one site, catching refunds with no customer present accounted for more
          than 60% of cashier shrink. We will walk through that workflow in a
          demo. It is that site’s result, not a promise for yours.
        </blockquote>
      </Section>
      <CtaBand />
    </main>
  );
}
