import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/marketing/CtaBand";
import { LeadForm } from "@/components/marketing/LeadForm";
import { PartnerLogos } from "@/components/marketing/PartnerLogos";
import { PageHero, Section } from "@/components/layout/PageHero";
import { partners } from "@/lib/site";

export const Route = createFileRoute("/partners")({ component: PartnersPage });

function PillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-bold tracking-[0.18em] text-navy uppercase">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((p) => (
          <span key={p} className="rounded-full bg-cool px-3 py-1.5 text-sm font-bold text-navy">
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

function PartnersPage() {
  return (
    <main>
      <PageHero
        kicker="Partners"
        title="An open bench. Not a walled garden."
        lede="Cameras, panels, models, GPU — we integrate them. Integrators and resellers take Vue, Intelligence, and Operate to their accounts."
      />
      <Section>
        <PartnerLogos kicker="Marks on this stack" />
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <PillGroup title="Platform" items={partners.platform} />
            <PillGroup title="Cameras and servers" items={partners.cameras} />
            <PillGroup title="Sensors" items={partners.sensors} />
            <PillGroup title="Compute" items={partners.compute} />
            <PillGroup title="Analytics" items={partners.analytics} />
            <PillGroup title="Physical security" items={partners.physec} />
            <p className="text-sm text-muted">
              IMRON is access control, on the same timeline as the video. Digital
              Watchdog and Velasea are the cameras and servers when we supply the
              hardware. Quanergy is LiDAR, for detection that does not need a face.
            </p>
          </div>
          <div className="rounded-lg bg-surface p-6 shadow-[var(--shadow-border)] sm:p-8">
            <h2 className="text-2xl">Become a partner</h2>
            <p className="mt-2 text-sm text-muted">
              Reseller program, per-channel software, and Operate as a recurring service.
              Tell us how you sell.
            </p>
            <div className="mt-6">
              <LeadForm defaultInterest="partner" compact />
            </div>
          </div>
        </div>
        <p className="mt-10 text-sm">
          Already a customer?{" "}
          <Link to="/contact" className="font-bold text-navy">
            Request a demo instead
          </Link>
          .
        </p>
      </Section>
      <CtaBand title="Integrators: keep the cameras. Add the layer." />
    </main>
  );
}
