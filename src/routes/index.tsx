import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/marketing/CtaBand";
import { CustomerLogos } from "@/components/marketing/CustomerLogos";
import { MonitorWall } from "@/components/marketing/MonitorWall";
import { ProductShot } from "@/components/marketing/ProductShot";
import { StackStrip } from "@/components/marketing/StackStrip";
import { Button } from "@/components/ui/button";
import { jobs, proof } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink text-inverse">
        <img
          src="/media/hero-monitors.jpg"
          alt=""
          className="pointer-events-none absolute inset-0 size-full object-cover object-[center_30%] opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
        <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20">
          <p className="text-xs font-bold tracking-[0.22em] text-teal uppercase">
            Intelligent video surveillance
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl text-inverse sm:text-5xl lg:text-6xl">
            Process while you record.
          </h1>
          <p className="mt-4 max-w-xl text-base text-inverse/80 sm:text-lg">
            Recording without processing is dark data. Realwave keeps inference
            alive at the moment the yard is busy, the refund is ringing, the
            door is forced — then operates the instance so it does not fall back
            to a recorder.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/contact">Request a demo</Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link to="/download">Download Vue</Link>
            </Button>
          </div>
          <p className="mt-8 text-[11px] font-bold tracking-[0.18em] text-teal uppercase">
            Operator glass — 27″
          </p>
          <div className="mt-3 pb-14 sm:pb-16">
            <MonitorWall />
          </div>
        </div>
        <div className="absolute right-0 bottom-0 left-0 h-1 eplus-gradient" />
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
            Three jobs
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl sm:text-4xl">
            Security, operations, and flow — not six identical industry pages.
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {jobs.map((job) => (
              <Link
                key={job.href}
                to={job.href}
                className="group overflow-hidden rounded-lg bg-surface shadow-[var(--shadow-border)] transition-shadow hover:shadow-[var(--shadow-border-hover)]"
              >
                <img
                  src={job.image}
                  alt=""
                  className="media h-44 w-full object-cover object-center"
                />
                <div className="p-6">
                  <p className="text-xs font-bold tracking-[0.18em] text-navy uppercase">
                    {job.kicker}
                  </p>
                  <h3 className="mt-2 flex items-center gap-2 text-2xl">
                    {job.name}
                    <ArrowRight className="size-4 text-teal opacity-0 transition group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2 text-sm text-muted">{job.lede}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
            The stack
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl sm:text-4xl">
            Process. Unify. Engineer. Operate.
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Vue can run video-only — most systems start there. Intelligence is a
            separate layer we engineer per site, so you are not stuck with a
            detector pack frozen in the camera.
          </p>
          <div className="mt-10">
            <StackStrip />
          </div>
        </div>
      </section>

      <ProductShot
        src="/media/vue-flex.jpg"
        alt="Vue Flex GRID across a live convenience-store site"
        caption="Vue — the operator glass. Start video-only. Add Intelligence when the workflow is defined."
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold tracking-[0.22em] text-navy uppercase">
                Open, not one-size-fits-all
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl">
                Keep the cameras. Change what happens to the stream.
              </h2>
              <ul className="mt-6 space-y-4 text-slate">
                <li>
                  <strong className="text-ink">Open vs closed.</strong> ONVIF,
                  existing NVRs, no rip-and-replace mandate.
                </li>
                <li>
                  <strong className="text-ink">Context vs pixels.</strong> POS,
                  access, and alarms fused with video — not another motion box.
                </li>
                <li>
                  <strong className="text-ink">Process while recording.</strong>{" "}
                  Inference sized for peak, not idle-hour averages.
                </li>
                <li>
                  <strong className="text-ink">Tailored vs one-size-fits-all.</strong>{" "}
                  Workflows engineered into the deployment, not a firmware pack.
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {proof.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg bg-surface p-5 shadow-[var(--shadow-border)]"
                >
                  <p className="text-3xl font-black text-navy">{item.value}</p>
                  <p className="mt-1 text-sm text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-xs text-muted">
            * 5 million cameras is a Network Optix platform figure, not a Realwave
            installed-base claim.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <CustomerLogos kicker="Trusted in production" />
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
