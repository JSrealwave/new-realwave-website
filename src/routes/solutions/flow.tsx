import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero, Section } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/solutions/flow")({ component: FlowPage });

const cases = [
  {
    title: "Queues and dwell",
    body: "Time-to-service in stores, ER waiting rooms, and ticket halls. Staffing from the stream, not a clipboard.",
  },
  {
    title: "Yard and dock",
    body: "Trucks, wait time, occupancy. Plate and trailer ID against the manifest so the yard is not a rumor.",
  },
  {
    title: "Occupancy and crowd",
    body: "Campus, terminal, store capacity. LiDAR when privacy-first counting is the requirement.",
  },
  {
    title: "Traffic and vehicles",
    body: "Approaches, wrong-way, parking enforcement. Flow is a job, not a ‘smart city’ poster.",
  },
];

function FlowPage() {
  return (
    <main>
      <PageHero
        kicker="Flow management"
        title="People and vehicles, counted."
        lede="Queues, yards, occupancy, traffic. Track and Plate and maps — processed while the site is busy, not overnight in a report."
        shot={{
          src: "/media/intel-track-highway.jpg",
          alt: "Highway lanes with vehicle tracks and southbound and northbound zones",
        }}
      >
        <Button asChild size="lg">
          <Link to="/contact">Walk a yard or a floor</Link>
        </Button>
      </PageHero>
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
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
        <p className="mt-8 text-sm text-muted">
          Proof verticals: retail, logistics, transit, campus. Traffic lives here,
          not as its own product.
        </p>
      </Section>
      <CtaBand />
    </main>
  );
}
