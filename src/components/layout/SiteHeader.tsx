import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { nav, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const onDark = pathname === "/" || pathname === "/platform";

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur-md",
        onDark
          ? "border-inverse/10 bg-ink/80 text-inverse"
          : "border-line bg-surface/90 text-ink",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Logo inverse={onDark} />
        <nav className="ml-4 hidden flex-1 items-center gap-0.5 lg:flex" aria-label="Primary">
          {nav.map((item) =>
            "children" in item && item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  to={item.href}
                  className={cn(
                    "flex h-10 items-center gap-1 px-3 text-sm font-bold",
                    pathname.startsWith("/solutions")
                      ? onDark
                        ? "text-teal"
                        : "text-navy"
                      : onDark
                        ? "text-inverse/80 hover:text-inverse"
                        : "text-slate hover:text-navy",
                  )}
                >
                  {item.label}
                  <ChevronDown className="size-3.5 opacity-70" />
                </Link>
                <div className="invisible absolute top-full left-0 min-w-72 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="rounded-md bg-surface p-2 text-ink shadow-[var(--shadow-border)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block rounded-sm px-3 py-2.5 hover:bg-cool"
                      >
                        <div className="text-sm font-bold text-navy">{child.label}</div>
                        <div className="text-xs text-muted">{child.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex h-10 items-center px-3 text-sm font-bold",
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? onDark
                      ? "text-teal"
                      : "text-navy"
                    : onDark
                      ? "text-inverse/80 hover:text-inverse"
                      : "text-slate hover:text-navy",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <a
            href={SITE.resourcesUrl}
            className={cn(
              "flex h-10 items-center px-3 text-sm font-bold",
              onDark ? "text-inverse/80 hover:text-inverse" : "text-slate hover:text-navy",
            )}
          >
            Resources
          </a>
          <Button asChild variant={onDark ? "ghost" : "outline"} size="sm">
            <Link to="/download">Download Vue</Link>
          </Button>
          <Button asChild size="sm" variant={onDark ? "primary" : "navy"}>
            <Link to="/contact">Request a demo</Link>
          </Button>
        </div>
        <button
          type="button"
          className="ml-auto flex size-11 items-center justify-center rounded-md lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-line bg-surface text-ink lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3" aria-label="Mobile">
            {nav.map((item) => (
              <div key={item.href} className="border-b border-cool">
                <Link
                  to={item.href}
                  className="flex min-h-11 items-center py-2 text-sm font-bold"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {"children" in item && item.children
                  ? item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="flex min-h-11 items-center py-1 pl-4 text-sm text-muted"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))
                  : null}
              </div>
            ))}
            <a
              href={SITE.resourcesUrl}
              className="flex min-h-11 items-center border-b border-cool py-2 text-sm font-bold"
              onClick={() => setOpen(false)}
            >
              Resources
            </a>
            <div className="mt-3 flex flex-col gap-2">
              <Button asChild variant="outline">
                <Link to="/download" onClick={() => setOpen(false)}>
                  Download Vue
                </Link>
              </Button>
              <Button asChild variant="navy">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Request a demo
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
