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
    body: "Action on the track — pose, not a new identity. Alarm layout in Vue, notify through Operate. Face only where policy allows.",
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
        image="/media/gsoc.jpg"
        shot={{
          src: "/media/vue-events.jpg",
          alt: "Person object search across exterior cameras with clip preview",
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
        <div className="mt-10 overflow-hidden rounded-lg bg-ink">
          <img
            src="/media/intel-track-lot.jpg"
            alt="Parking lot at night with a person track and a walkway zone"
            className="w-full object-cover object-center"
          />
        </div>
        <p className="mt-8 text-sm text-muted">
          Campus, healthcare, financial branches, transit, and public safety. One site or many.
        </p>
      </Section>
      <CtaBand />
    </main>
  );
}
