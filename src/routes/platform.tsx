import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PartnerLogos } from "@/components/marketing/PartnerLogos";
import { StackStrip } from "@/components/marketing/StackStrip";
import { PageHero, Section } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/platform")({ component: PlatformPage });

function PlatformPage() {
  return (
    <main>
      <PageHero
        kicker="Platform"
        title="Four layers. One operating model."
        lede="Edge is where compute sits. Vue is the glass. Intelligence is engineered per site. Operate is how the instance stays alive."
      >
        <Button asChild size="lg">
          <Link to="/contact">Request a demo</Link>
        </Button>
        <Button asChild size="lg" variant="ghost">
          <Link to="/vue">See Vue</Link>
        </Button>
      </PageHero>

      <Section>
        <h2 className="max-w-2xl text-3xl sm:text-4xl">How it works</h2>
        <p className="mt-4 max-w-2xl text-muted">
          Most of today’s installs are video only. That is the land. Vue is a
          complete VMS without Intelligence. When the workflow is defined — POS
          exceptions, plate-to-manifest, GSOC verify — we engineer Intelligence
          onto the same glass and Operate the instance.
        </p>
        <div className="mt-10">
          <StackStrip />
        </div>
        <div className="mt-14">
          <PartnerLogos kicker="Open stack" />
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
              Why Intelligence is a layer
            </p>
            <h2 className="mt-2 text-3xl">Not a camera firmware. Not a VMS checkbox.</h2>
            <p className="mt-4 text-slate">
              Detectors that ship frozen in the camera, or as a pack on the server,
              are convenient, and they are one-size-fits-all. Vue can show those
              events. Realwave Intelligence is the layer we design with you:
              which models, which POS and access joins, which rules, and who
              updates them. Same operator screen. A lifecycle you can change.
            </p>
          </div>
          <div className="rounded-lg bg-cool p-8">
            <p className="text-xs font-bold tracking-[0.18em] text-navy uppercase">
              On deck
            </p>
            <ul className="mt-4 space-y-4 text-slate">
              <li>
                <strong className="text-ink">Edge harness.</strong> The best
                model for this camera, this scene, and this processor — without
                replacing the camera.
              </li>
              <li>
                <strong className="text-ink">Natural-language investigation.</strong>{" "}
                Ask across cameras and time. In beta. Not something we sell as finished.
              </li>
              <li>
                <strong className="text-ink">Native operator clients.</strong>{" "}
                Desktop and mobile first for walls and PTZ; web for admin.
              </li>
            </ul>
            <p className="mt-6 text-sm text-muted">
              Coming. What you can buy today is Edge, Vue, Intelligence, and Operate.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand />
    </main>
  );
}
