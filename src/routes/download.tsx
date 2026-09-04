import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/marketing/LeadForm";
import { PageHero, Section } from "@/components/layout/PageHero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/download")({ component: DownloadPage });

function DownloadPage() {
  return (
    <main>
      <PageHero
        kicker="Vue trial"
        title="Thirty days on your cameras."
        lede="Windows, macOS, Linux desktop. Connect existing ONVIF cameras. Intelligence is optional — start video-only."
        compact
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl">Leave an email. We will send the bits.</h2>
            <p className="mt-3 text-slate">
              The Cloud portal at{" "}
              <a href={SITE.cloudUrl} className="font-bold text-navy">
                vue.realwave.io
              </a>{" "}
              is where users, sites, and downloads already live. This form tells
              us who started a trial so Operate can follow up.
            </p>
            <div className="mt-8">
              <LeadForm defaultInterest="trial" compact />
            </div>
          </div>
          <aside className="rounded-lg bg-cool p-8">
            <h3 className="text-xl">What you get</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate">
              <li>Desktop client for Windows, macOS, Ubuntu</li>
              <li>Media server for on-site or ARM/edge</li>
              <li>Mobile iOS and Android</li>
              <li>Cloud user and site management</li>
              <li>No Intelligence required to see video</li>
            </ul>
          </aside>
        </div>
      </Section>
    </main>
  );
}
