import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero, Section } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/solutions/gsoc")({
  head: () => ({
    meta: [{ title: "GSOC | Realwave" }],
  }),
  component: GsocPage,
});

const cases = [
  {
    title: "Perimeter and intrusion",
    body: "Track plus LiDAR for 3D, anonymous detection; video verify so the GSOC is not drowning in fence alarms.",
  },
  {
    title: "Access on the same glass",
    body: "Forced door, denied card, tailgate — IMRON events open Vue cameras. Face where policy allows.",
  },
  {
    title: "Aggression, loitering, weapons",
    body: "Behavior on the person or vehicle already being tracked. It does not create a new identity. Face stays off unless policy allows it.",
  },
  {
    title: "Remote verify",
    body: "Outbound cloud, mobile, talk-down. The officer is not driving to a site to look at a recorder.",
  },
  {
    title: "Forensics",
    body: "Smart motion, bookmarks, metadata search, export that is actually usable in a case file.",
  },
];

function GsocPage() {
  return (
    <main>
      <PageHero
        kicker="GSOC"
        title="Video, access, and alarms on one screen."
        lede="A GSOC watches one site or many. AI video analytics flags what is worth opening. The operator verifies it on the same screen, instead of driving out to a recorder to find out what happened."
        shot={{
          src: "/media/gsoc.jpg",
          alt: "Operators at a video wall in a monitoring room",
        }}
      >
        <Button asChild size="lg">
          <Link to="/contact">GSOC briefing</Link>
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
          Campus, healthcare, financial branches, transit, and public safety. One site or many.
        </p>
      </Section>
      <CtaBand />
    </main>
  );
}
