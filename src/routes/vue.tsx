import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/marketing/CtaBand";
import { FeatureModals } from "@/components/marketing/FeatureModals";
import { PageHero, Section } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/vue")({ component: VuePage });

function VuePage() {
  return (
    <main>
      <PageHero
        kicker="Vue"
        title="The system operators live in."
        lede="Enterprise VMS: Flex GRID, failover, hive, maps, mobile. Access control on the same glass. Complete as video-only — Intelligence is optional, not a checkbox you cannot turn off."
        shot={{
          src: "/media/vue-flex.jpg",
          alt: "Vue Flex GRID live layout with resource tree and archive timeline",
        }}
      >
        <Button asChild size="lg">
          <Link to="/download">30-day trial</Link>
        </Button>
        <Button asChild size="lg" variant="ghost">
          <Link to="/contact">Request a demo</Link>
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
              Unified management
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl">
              Video and access, one operator workflow.
            </h2>
            <p className="mt-4 text-slate">
              Vue is the Realwave OEM of Network Optix — said once, as trust.
              The rest of this page is what you actually run: layouts, archive,
              rules, health. IMRON UnityIS (Mercury, dormakaba, and the open
              panel list) lands as events on the same timeline, not a second
              client.
            </p>
            <p className="mt-4 text-slate">
              45,000+ devices from 790+ manufacturers. LDAP, video wall,
              failover, one-click updates. Native desktop and mobile; web for
              the jobs that belong in a browser.
            </p>
          </div>
          <img
            src="/media/vue-workflow.jpg"
            alt="Vue Advanced Object Search open over a live multi-camera layout, on the same glass as the resource tree"
            className="media w-full rounded-lg"
          />
        </div>
      </Section>

      <Section className="bg-surface">
        <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
          Enterprise VMS
        </p>
        <h2 className="mt-2 max-w-2xl text-3xl">Open a group. Not a spreadsheet.</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Features grouped the way operators and admins think.{" "}
          <strong className="font-bold text-teal">Click a card</strong> for the
          detail — install, live, record, review, rules, users, mobile, health,
          developers.
        </p>
        <div className="mt-10">
          <FeatureModals />
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
              Same glass
            </p>
            <h2 className="mt-2 text-3xl">Intelligence lands here. It is not a second client.</h2>
            <p className="mt-4 text-slate">
              POS receipts, object search, access events — Vue consumes them.
              The models and the joins live in Intelligence. That is why Vue can
              ship video-only, and why a tailored workflow still has one operator
              surface.
            </p>
            <Button asChild variant="navy" className="mt-6">
              <Link to="/intelligence">See Intelligence</Link>
            </Button>
          </div>
          <img
            src="/media/vue-pos.jpg"
            alt="Vue layout with live POS cameras and scrolling receipts"
            className="media w-full rounded-lg"
          />
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <article className="rounded-lg bg-surface p-6 shadow-[var(--shadow-border)]">
            <h3 className="text-xl">Maps and GIS</h3>
            <p className="mt-2 text-sm text-muted">
              Floor plans as layout backgrounds, cameras on the map, GPS where
              the site is a campus or a yard — not a camera tree pretending to
              be space.
            </p>
          </article>
          <article className="rounded-lg bg-surface p-6 shadow-[var(--shadow-border)]">
            <h3 className="text-xl">Cloud and hybrid</h3>
            <p className="mt-2 text-sm text-muted">
              Realwave Cloud connects Vue sites without port forwarding. Hybrid
              means you place record, process, and archive — not a single SaaS
              shape for every customer.
            </p>
          </article>
          <article className="rounded-lg bg-surface p-6 shadow-[var(--shadow-border)]">
            <h3 className="text-xl">AI Manager</h3>
            <p className="mt-2 text-sm text-muted">
              Cross-hardware pipeline: Intel, AMD, ARM, NVIDIA, Hailo. Vue
              consumes the events. Intelligence decides the models. That split
              is the point.
            </p>
          </article>
        </div>
      </Section>

      <CtaBand title="Run Vue for 30 days." lede="Desktop clients for Windows, macOS, and Linux. Cloud portal for users and sites." />
    </main>
  );
}
