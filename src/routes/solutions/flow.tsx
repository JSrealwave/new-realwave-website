import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero, Section } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/solutions/flow")({
  head: () => ({
    meta: [{ title: "People counting, queues, and occupancy | Realwave" }],
  }),
  component: FlowPage,
});

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
    body: "Approaches, wrong-way, and parking. The count is live, and you can alert when a threshold breaks.",
  },
];

function FlowPage() {
  return (
    <main>
      <PageHero
        kicker="Flow"
        title="People counting, queues, and occupancy."
        lede="Flow is the status of the site: how many people or vehicles, which way they moved, and how long they waited. You see it while the floor, yard, or platform is busy — not in tomorrow’s report."
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
          Stores, yards, transit halls, and campuses.
        </p>
      </Section>
      <CtaBand />
    </main>
  );
}
