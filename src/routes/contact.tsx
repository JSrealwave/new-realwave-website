import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/marketing/LeadForm";
import { PageHero, Section } from "@/components/layout/PageHero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  return (
    <main>
      <PageHero
        kicker="Contact"
        title="Request a demo."
        lede="Tell us the job — GSOC, OT exception, or flow — and how many cameras you already have."
        compact
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <LeadForm defaultInterest="demo" />
          <div>
            <h2 className="text-2xl">Direct</h2>
            <p className="mt-3 text-slate">
              <a href={`mailto:${SITE.email}`} className="font-bold text-navy">
                {SITE.email}
              </a>
            </p>
            <p className="mt-4 text-sm text-muted">
              Cloud portal and downloads live at{" "}
              <a href={SITE.cloudUrl} className="text-navy">
                vue.realwave.io
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
