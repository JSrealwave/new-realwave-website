import {
  Activity,
  Bell,
  Code,
  HardDrive,
  LayoutGrid,
  Plug,
  Search,
  Smartphone,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { vueFeatureGroups } from "@/lib/vue-features";

const groupIcons: Record<string, LucideIcon> = {
  install: Plug,
  live: LayoutGrid,
  record: HardDrive,
  review: Search,
  rules: Bell,
  users: Users,
  mobile: Smartphone,
  health: Activity,
  dev: Code,
};

export function FeatureModals() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {vueFeatureGroups.map((group) => {
        const Icon = groupIcons[group.id];
        return (
          <Dialog key={group.id}>
            <DialogTrigger asChild>
              <button
                type="button"
                className="group relative flex h-full flex-col rounded-lg bg-surface p-6 text-left shadow-[var(--shadow-border)] transition-shadow duration-150 hover:shadow-[var(--shadow-border-hover)] focus-visible:shadow-[var(--shadow-border-hover)]"
              >
                {Icon ? (
                  <Icon
                    aria-hidden
                    className="absolute top-6 right-6 size-5 text-navy"
                  />
                ) : null}
                <span className="pr-8 text-xs font-bold tracking-[0.18em] text-navy uppercase">
                  {group.kicker}
                </span>
                <span className="mt-2 pr-8 text-xl font-bold text-ink">
                  {group.title}
                </span>
                <span className="mt-2 flex-1 text-sm text-muted">{group.summary}</span>
                <span className="mt-4 text-sm font-bold text-teal opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
                  …more
                </span>
              </button>
            </DialogTrigger>
          <DialogContent>
            <p className="text-xs font-bold tracking-[0.18em] text-navy uppercase">
              {group.kicker}
            </p>
            <DialogTitle className="mt-1">{group.title}</DialogTitle>
            <DialogDescription>{group.summary}</DialogDescription>
            <ul className="mt-6 space-y-5">
              {group.features.map((f) => (
                <li key={f.title}>
                  <h3 className="font-bold text-ink">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate">{f.body}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild variant="navy">
                <a href="/download">Start a 30-day Vue trial</a>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        );
      })}
    </div>
  );
}
