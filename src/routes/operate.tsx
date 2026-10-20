import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero, Section } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/operate")({ component: OperatePage });

function OperatePage() {
  return (
    <main>
      <PageHero
        kicker="Operate"
        title="Your instance. Watched."
        lede="Not a shared cloud and not a stack of extra services hours. Private Realwave instances, hybrid placement, health, workflows, and 24/7 with a bench of customer-facing engineers."
        shot={{
          src: "/media/operate-dashboard.jpg",
          alt: "Program dashboard of sales, loyalty, and item mix for an east region",
        }}
      >
        <Button asChild size="lg">
          <Link to="/contact">Talk Operate</Link>
        </Button>
        <Button asChild size="lg" variant="ghost">
          <Link to="/partners">Become a partner</Link>
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              title: "Private instances",
              body: "Dedicated, not a system you share with every other customer. Isolation for finance, healthcare, campus, and anyone who will not put video on a one-size-fits-all public cloud.",
            },
            {
              title: "Hybrid placement",
              body: "Edge, your data center, or cloud — designed per workflow. Some detections stay on the camera. Some correlation is campus-local. Some reporting bursts to cloud. You do not buy a single shape.",
            },
            {
              title: "Health, notify, archive",
              body: "Pipeline lag, dropped inference, storage saturation, model drift. Alerts to the people who own the exception. Archive that still processes, not a cold tape.",
            },
            {
              title: "Dashboards",
              body: "Boards for the program you actually run — sales, loyalty, exceptions, occupancy. Built for that program, not a generic board for every site.",
            },
          ].map((c) => (
            <article
              key={c.title}
              className="rounded-lg bg-surface p-6 shadow-[var(--shadow-border)]"
            >
              <h3 className="text-xl">{c.title}</h3>
              <p className="mt-2 text-sm text-muted">{c.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
          Pricing model
        </p>
        <h2 className="mt-2 text-3xl">Per channel. Not per seat theater.</h2>
        <p className="mt-4 max-w-2xl text-slate">
          Monthly, annual, or three-year. Reseller program. Software and Operate
          for every site; Edge iron when you want it. Quotes are scoped — no
          public rate card that pretends every GSOC is a convenience store.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {["Monthly", "Annual", "3-year"].map((t) => (
            <div
              key={t}
              className="rounded-lg bg-cool px-5 py-6 text-center font-bold text-navy"
            >
              {t}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
              Modern stack
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl">
              Agents will need infrastructure that recorders never did.
            </h2>
            <p className="mt-4 text-slate">
              Process while you record, plus investigation across cameras, is a
              different load than a recorder on spinning disk. GPU, all-flash,
              and a network that can take the queries belong next to this
              platform — NVIDIA, Nutanix, NetApp, Cisco, and the rest of the
              ePlus bench. We size that with you. We do not publish a benchmark
              that pretends every site is the same.
            </p>
            <p className="mt-4 text-sm text-muted">
              A thousand customer-facing engineers, Elite 150 on the CRN 2026 MSP
              500, is who runs Operate. The cameras were never the advantage.
            </p>
          </div>
          <img
            src="/media/ucs.png"
            alt="Cisco UCS chassis"
            className="w-full"
          />
        </div>
      </Section>

      <CtaBand title="If it only records, we did not Operate it." />
    </main>
  );
}
