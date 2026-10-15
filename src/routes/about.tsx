import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/marketing/CtaBand";
import { CustomerLogos } from "@/components/marketing/CustomerLogos";
import { PageHero, Section } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="About"
        title="Realwave is a product of ePlus."
        lede="Intelligent video, sold and operated by an Elite 150 firm on the CRN 2026 MSP 500 — not a camera startup asking you to rip out the last decade."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl">What we are</h2>
            <p className="mt-4 text-slate">
              Realwave is the intelligent video platform: Edge, Vue, Intelligence,
              Operate. Vue is built on Network Optix. Intelligence is the
              engineered layer — Track, Face, Plate, Action, POS, access — not a
              one-size pack. Operate is how ePlus runs private instances.
            </p>
            <p className="mt-4 text-slate">
              ePlus brings a thousand customer-facing engineers and a bench in
              NVIDIA, Nutanix, NetApp, Cisco, Palo Alto. The cameras were never
              the moat. Keeping inference alive, and the instance current, is.
            </p>
            <Button asChild variant="navy" className="mt-6">
              <Link to="/contact">Talk to us</Link>
            </Button>
          </div>
          <CustomerLogos kicker="Public references" compact />
        </div>
      </Section>
      <CtaBand />
    </main>
  );
}