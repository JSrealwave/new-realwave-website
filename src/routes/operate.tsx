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
        lede="Not a shared gadget cloud and not a SOW for extra hours. Private Realwave instances, hybrid placement, health, workflows, and 24/7 with a bench of customer-facing engineers."
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
              body: "Dedicated, not a tenancy you share with every other customer. Isolation for finance, healthcare, campus, and anyone who will not put video on a one-size public cloud.",
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
              title: "Dashboards, honestly",
              body: "KPI boards exist today and we build them per program — sales, loyalty, exceptions, occupancy. The screenshot above is one of those. The out-of-box board is not the product.",
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
        <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
          Modern stack
        </p>
        <h2 className="mt-2 max-w-2xl text-3xl sm:text-4xl">
          Agents will need infrastructure that recorders never did.
        </h2>
        <p className="mt-4 max-w-2xl text-slate">
          Process-while-record plus investigation across cameras is a different
          I/O shape than a VMS on spinning disk. GPU, all-flash, and a fabric
          that can take the query load belong next to this platform — NVIDIA,
          Nutanix, NetApp and the rest of the ePlus bench. That is a design
          conversation, not a benchmark we will invent.
        </p>
        <p className="mt-4 max-w-2xl text-sm text-muted">
          A thousand customer-facing engineers, Elite 150 on the CRN 2026 MSP
          500, is the Operate story. The cameras were never the moat.
        </p>
      </Section>

      <CtaBand title="If it only records, we did not Operate it." />
    </main>
  );
}
