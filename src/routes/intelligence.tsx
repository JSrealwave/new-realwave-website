import { createFileRoute, Link } from "@tanstack/react-router";
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

const proofs = [
  {
    src: "/media/intel-track-lot.jpg",
    kicker: "Track",
    caption: "People and vehicles on the stream — zones, dwell, direction.",
    alt: "Night parking lot with person and vehicle tracks and a walkway zone",
  },
  {
    src: "/media/intel-face.jpg",
    kicker: "Face",
    caption: "Watchlists and attributes on the Vue glass — where policy allows.",
    alt: "Vue live view with a presence zone and face matches in the sidebar",
  },
  {
    src: "/media/intel-plate.jpg",
    kicker: "Plate",
    caption: "Container, trailer, and plate IDs against the record — 99% in production use.",
    alt: "Container ID read FCIU 9644848 with OCR confidence on the Intelligence console",
  },
  {
    src: "/media/intel-pos.jpg",
    kicker: "POS",
    caption: "Registers fused with the cameras. 167+ systems in the library.",
    alt: "BlackBox POS cloud with two live register cameras and scrolling receipts",
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
              Skillsets · now
            </p>
            <ul className="mt-4 space-y-3 text-slate">
              <li>
                <strong className="text-ink">Track.</strong> People, vehicles,
                loitering, bags, direction — the GSOC and flow workhorse.
              </li>
              <li>
                <strong className="text-ink">Face.</strong> Watchlists and
                identity where policy allows. Demographics fused with POS in
                retail, carefully.
              </li>
              <li>
                <strong className="text-ink">Plate.</strong> LPR, trailer, and
                container IDs. Trailer ID at 95%, plate and container at 99% in
                production use.
              </li>
              <li>
                <strong className="text-ink">Action.</strong> Behavior on the
                track — pose, not a new identity. Face stays off unless policy
                turns it on.
              </li>
            </ul>
          </article>
          <article className="rounded-lg bg-surface p-8 shadow-[var(--shadow-border)]">
            <p className="text-xs font-bold tracking-[0.18em] text-navy uppercase">
              OT fusion · now
            </p>
            <ul className="mt-4 space-y-3 text-slate">
              <li>
                <strong className="text-ink">POS.</strong> 167+ systems. Named
                today: {posNames.join(", ")}.
              </li>
              <li>
                <strong className="text-ink">Access.</strong> IMRON with Mercury
                and dormakaba panels — door events on the same timeline as video.
              </li>
              <li>
                <strong className="text-ink">Rules.</strong> Exception workflows
                that bookmark, notify, and escalate — not a detector demo.
              </li>
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
        <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
          Tailored, not one-size
        </p>
        <h2 className="mt-2 max-w-2xl text-3xl sm:text-4xl">
          A firmware pack cannot be your loss-prevention program.
        </h2>
        <p className="mt-4 max-w-2xl text-slate">
          One-size analytics ship the same detector pack to every door. Tailored
          workflows start from the exception you actually care about — an unpaid
          refund, a trailer that does not match the manifest, a forced door at
          2 a.m. — and assemble models, joins, and rules until that exception is
          reliable. That is why Intelligence is not inside Vue and not inside
          the camera.
        </p>
        <blockquote className="mt-8 max-w-2xl border-l-2 border-teal pl-5 text-lg text-ink">
          “No human on refund” has caught 60%+ of cashier shrink in a production
          site we can discuss in a demo. It is a result, not a guarantee.
        </blockquote>
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
              Beta
            </p>
            <h2 className="mt-2 text-3xl">Natural language across cameras</h2>
            <p className="mt-4 text-slate">
              VLM / NLP investigation is in beta. You can ask, we will not sell
              it as a finished SKU. It sits on the same event fabric as Track,
              Face, Plate, and Action — the path to the harness and agent cluster, not
              a rebrand of DIVE.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
              Model partners
            </p>
            <p className="mt-4 text-slate">
              VCA, CVEDIA, Vaxtor, NVIDIA — proof that Intelligence is a pipeline,
              not a single frozen model. Edge silicon from Intel, NVIDIA, Hailo,
              and ARM is placement. Partners do not replace the layer.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand title="Bring the exception. We will engineer the workflow." />
    </main>
  );
}
