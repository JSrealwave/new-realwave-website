import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero, Section } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/edge")({ component: EdgePage });

const items = [
  {
    title: "AI cameras",
    body: "4K, on-device detection when the WAN is thin. Serverless camera-to-cloud is a placement, not a mandate. Realwave-branded, NDAA-conscious options — or bring the cameras you already have.",
  },
  {
    title: "Servers and GPU",
    body: "REX and GPU-ready appliances for sites that need recording and inference on the same box. Sized for peak, not the idle hour. Spec sheets land as SKUs; architecture first on this page.",
  },
  {
    title: "LiDAR",
    body: "Privacy-first 3D detection for perimeters and occupancy. Used with video verify to cut false alarms — up to 80% in LiDAR-plus-video deployments, not as a generic “less scrubbing” claim.",
  },
  {
    title: "Camera-to-cloud",
    body: "Outbound-only path, no port-forward hobby. Small sites can skip the local server. Large campuses keep local record and process, and send what Operate needs.",
  },
];

export function EdgePage() {
  return (
    <main>
      <PageHero
        kicker="Edge"
        title="Where the stream becomes a decision."
        lede="Edge is sensors and compute — not the brains and not the glass. Models run here. Intelligence decides which ones, and Vue is where operators see the result."
        shot={{
          src: "/media/edge-kit.jpg",
          alt: "Realwave NVIDIA appliance, REX-Mini, cameras, and Quanergy LiDAR",
        }}
      >
        <Button asChild size="lg">
          <Link to="/contact">Talk hardware</Link>
        </Button>
        <Button asChild size="lg" variant="ghost">
          <Link to="/intelligence">How Intelligence uses Edge</Link>
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <img
            src="/media/edge-site.jpg"
            alt="Perimeter cameras and access control at an industrial site"
            className="media w-full rounded-lg object-cover"
          />
          <div>
            <h2 className="text-3xl">Hardware is optional. Placement is not.</h2>
            <p className="mt-4 text-slate">
              Bring your own ONVIF cameras. Add Realwave cameras and GPU servers
              when the use case needs them. Software and Operate sell to every
              site; Edge SKUs show up when we are also the iron.
            </p>
            <p className="mt-4 text-slate">
              The design rule: size for the minute inference is needed most. An
              architecture that is fine on average and collapses under a shift
              change is still dark data.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-lg bg-surface p-6 shadow-[var(--shadow-border)]"
            >
              <h3 className="text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand title="Need a camera, a GPU, or neither?" lede="Tell us the workflow. We will place compute where it belongs." />
    </main>
  );
}
