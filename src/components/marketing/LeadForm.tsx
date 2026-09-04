import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";
import { SITE } from "@/lib/site";

const INTEREST = [
  { value: "demo", label: "Request a demo" },
  { value: "trial", label: "Vue 30-day trial" },
  { value: "partner", label: "Become a partner" },
  { value: "operate", label: "Managed instance" },
] as const;

export function LeadForm({
  defaultInterest = "demo",
  compact,
}: {
  defaultInterest?: (typeof INTEREST)[number]["value"];
  compact?: boolean;
}) {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    const leads = JSON.parse(localStorage.getItem("rw-leads") || "[]") as unknown[];
    leads.push({ ...payload, at: new Date().toISOString() });
    localStorage.setItem("rw-leads", JSON.stringify(leads));
    const subject = encodeURIComponent(`Realwave — ${payload.interest}`);
    const body = encodeURIComponent(
      `Name: ${payload.name}\nEmail: ${payload.email}\nCompany: ${payload.company}\nInterest: ${payload.interest}\n\n${payload.message}`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-lg bg-cool p-6">
        <p className="text-lg font-bold text-navy">Received.</p>
        <p className="mt-2 text-sm text-slate">
          If your mail client did not open, write {SITE.email} directly. We reply from the
          same thread.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div>
          <Label htmlFor="email">Work email</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div>
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" required autoComplete="organization" />
      </div>
      <div>
        <Label htmlFor="interest">I want to</Label>
        <select
          id="interest"
          name="interest"
          defaultValue={defaultInterest}
          className="h-11 w-full rounded-md bg-surface px-3 text-sm shadow-[inset_0_0_0_1px_var(--color-line)] outline-none focus:shadow-[inset_0_0_0_2px_var(--color-navy)]"
        >
          {INTEREST.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="message">What should we know?</Label>
        <Textarea id="message" name="message" rows={4} />
      </div>
      <Button type="submit" variant="navy" className="justify-self-start">
        Send
      </Button>
      <p className="text-xs text-muted">POC inbox: {SITE.email}. No marketing list.</p>
    </form>
  );
}
