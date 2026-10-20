import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AudioLines,
  Banknote,
  Bell,
  CarFront,
  DoorOpen,
  Megaphone,
  PersonStanding,
  Receipt,
  Scale,
  ScanFace,
  ScanSearch,
  SquareParking,
  Vault,
  type LucideIcon,
} from "lucide-react";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero, Section } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { posNames } from "@/lib/site";

export const Route = createFileRoute("/intelligence")({
  head: () => ({
    meta: [{ title: "AI video analytics | Realwave" }],
  }),
  component: IntelligencePage,
});

const skillsets: { icon: LucideIcon; label: string }[] = [
  { icon: ScanSearch, label: "Track" },
  { icon: ScanFace, label: "Face" },
  { icon: CarFront, label: "Plate" },
  { icon: PersonStanding, label: "Action" },
];

const integrations: { icon: LucideIcon; label: string }[] = [
  { icon: Receipt, label: "POS" },
  { icon: DoorOpen, label: "Access" },
  { icon: Bell, label: "Alarms" },
  { icon: Banknote, label: "ATMs" },
  { icon: SquareParking, label: "Parking gates" },
  { icon: Scale, label: "Scales" },
  { icon: Vault, label: "Safes" },
  { icon: Megaphone, label: "Mass notification" },
  { icon: AudioLines, label: "2-way audio" },
];

const proofs = [
  {
    src: "/media/intel-track-lot.jpg",
    kicker: "Track",
    caption:
      "People, vehicles, loitering, bags, and direction. Zones, dwell, and which way they move.",
    alt: "Night parking lot with person and vehicle tracks and a walkway zone",
  },
  {
    src: "/media/intel-face.jpg",
    kicker: "Face",
    caption:
      "Watchlists and identity where policy allows. Attributes on the Vue glass, not a camera that decides for you.",
    alt: "Vue live view with a presence zone and face matches in the sidebar",
  },
  {
    src: "/media/intel-plate.jpg",
    kicker: "Plate",
    caption:
      "LPR, trailer, and container IDs against the record. Trailer ID at 95%, plate and container at 99% in production use.",
    alt: "Container ID read FCIU 9644848 with OCR confidence on the Intelligence console",
  },
  {
    src: "/media/intel-pos.jpg",
    kicker: "POS",
    caption: `Registers fused with the cameras. 167+ systems. Named today: ${posNames.join(", ")}.`,
    alt: "BlackBox POS cloud with two live register cameras and scrolling receipts",
  },
] as const;

const also = [
  {
    kicker: "Action",
    caption:
      "Behavior on the track — pose, not a new identity. Face stays off unless policy turns it on.",
  },
  {
    kicker: "Access",
    caption:
      "IMRON with Mercury and dormakaba panels. Door events land on the same timeline as video.",
  },
  {
    kicker: "Alarms",
    caption:
      "Exception workflows that bookmark, notify, and escalate when the event is worth opening.",
  },
] as const;

function IntelligencePage() {
  return (
    <main>
      <PageHero
        kicker="Intelligence"
        title="AI video analytics, engineered per site."
        lede="AI video analytics is the category. Intelligence is the layer we design with you: models, POS and access fusion, rules that match this operation. Vue can run video-only — most systems start there. Detectors in a camera or a server are where most vendors stop."
        shot={{
          src: "/media/vue-pos.jpg",
          alt: "Live POS cameras synchronized with scrolling register receipts",
        }}
      >
        <Button asChild size="lg">
          <Link to="/contact">Scope a workflow</Link>
        </Button>
        <Button asChild size="lg" variant="ghost">
          <Link to="/operate">How we run it</Link>
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-lg bg-surface p-8 shadow-[var(--shadow-border)]">
            <p className="text-xs font-bold tracking-[0.18em] text-navy uppercase">
              Skillsets
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {skillsets.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex flex-col items-center text-center">
                    <Icon aria-hidden className="size-8 text-navy" />
                    <span className="mt-2 text-sm font-bold text-ink">{item.label}</span>
                  </li>
                );
              })}
            </ul>
          </article>
          <article className="rounded-lg bg-surface p-8 shadow-[var(--shadow-border)]">
            <p className="text-xs font-bold tracking-[0.18em] text-navy uppercase">
              Integrations
            </p>
            <ul className="mt-6 grid grid-cols-3 gap-6">
              {integrations.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex flex-col items-center text-center">
                    <Icon aria-hidden className="size-8 text-navy" />
                    <span className="mt-2 text-sm font-bold text-ink">{item.label}</span>
                  </li>
                );
              })}
            </ul>
          </article>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {proofs.map((p) => (
            <li key={p.src}>
              <figure className="overflow-hidden rounded-lg bg-ink shadow-[var(--shadow-border)]">
                <img
                  src={p.src}
                  alt={p.alt}
                  width={1920}
                  height={1080}
                  className="aspect-video w-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="px-4 py-3">
                  <p className="text-[11px] font-bold tracking-[0.18em] text-teal uppercase">
                    {p.kicker}
                  </p>
                  <p className="mt-1 text-sm text-inverse/80">{p.caption}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <ul className="mt-5 grid gap-5 md:grid-cols-3">
          {also.map((item) => (
            <li
              key={item.kicker}
              className="rounded-lg bg-surface p-5 shadow-[var(--shadow-border)]"
            >
              <p className="text-[11px] font-bold tracking-[0.18em] text-navy uppercase">
                {item.kicker}
              </p>
              <p className="mt-1 text-sm text-muted">{item.caption}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
              Track
            </p>
            <h2 className="mt-2 text-3xl">Search objects, not hours of tape.</h2>
            <p className="mt-4 text-slate">
              Person, vehicle, color, time, camera. Preview the clip, then push
              it onto a Vue layout. This is the Intelligence layer Vue already
              consumes — not a firmware pack frozen in the camera.
            </p>
          </div>
          <img
            src="/media/vue-events.jpg"
            alt="Object search results for people across exterior cameras"
            className="media w-full rounded-lg"
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
              Tailored, not one-size-fits-all
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl">
              A firmware pack cannot be your loss-prevention program.
            </h2>
            <p className="mt-4 text-slate">
              One-size-fits-all analytics ship the same detector to every door.
              The refund that matters at this store is not the detector’s
              problem. A tailored workflow starts from that exception — an unpaid
              refund, a trailer that does not match the manifest, a forced door
              at 2 a.m. — and joins the camera to the system that already has
              the transaction. The result is a case, not another clip to scrub.
            </p>
            <blockquote className="mt-8 border-l-2 border-teal pl-5 text-lg text-ink">
              “No human on refund” has caught 60%+ of cashier shrink in a
              production site we can discuss in a demo. It is a result, not a
              guarantee.
            </blockquote>
          </div>
          <img
            src="/media/exception-story.png"
            alt="Exception report linking repeated refunds to the register camera and a resolved case"
            className="w-full rounded-lg"
          />
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
              Beta
            </p>
            <h2 className="mt-2 text-3xl">Natural language across cameras</h2>
            <p className="mt-4 text-slate">
              You can ask across cameras. It is in beta, and it is not something
              we sell as finished. It uses the same events as Track, Face, Plate,
              and Action.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
              Model partners
            </p>
            <p className="mt-4 text-slate">
              VCA, CVEDIA, Vaxtor, and NVIDIA plug into the pipeline. They do not
              replace the workflow we engineer with you. The processors — Intel,
              NVIDIA, Hailo, and ARM — are where that pipeline runs.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand title="Bring the exception. We will engineer the workflow." />
    </main>
  );
}
