import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { marketSlug, nav, SITE, verticalUseCases } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-inverse">
      <div className="h-1 eplus-gradient" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-5">
        <div>
          <Logo inverse />
          <p className="mt-4 max-w-xs text-sm text-inverse/70">
            Process while you record. Unify video and access. Engineer intelligence
            per site. Operate the instance.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-bold tracking-[0.16em] text-teal uppercase">
            Platform
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-inverse/80">
            {nav
              .filter((n) => n.label !== "Solutions")
              .map((n) => (
                <li key={n.href}>
                  <Link to={n.href} className="hover:text-inverse">
                    {n.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-bold tracking-[0.16em] text-teal uppercase">
            Solutions
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-inverse/80">
            <li>
              <Link to="/solutions/gsoc" className="hover:text-inverse">
                GSOC
              </Link>
            </li>
            <li>
              <Link to="/solutions/ot" className="hover:text-inverse">
                Exceptions
              </Link>
            </li>
            <li>
              <Link to="/solutions/flow" className="hover:text-inverse">
                Flow
              </Link>
            </li>
            <li>
              <Link to="/partners" className="hover:text-inverse">
                Become a partner
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-bold tracking-[0.16em] text-teal uppercase">
            Markets
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-inverse/80">
            {verticalUseCases.map((item) => (
              <li key={item.name}>
                <Link
                  to="/solutions"
                  search={{ market: marketSlug(item.name) }}
                  hash="markets"
                  className="hover:text-inverse"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-bold tracking-[0.16em] text-teal uppercase">
            Company
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-inverse/80">
            <li>
              <Link to="/about" className="hover:text-inverse">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-inverse">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/download" className="hover:text-inverse">
                Download Vue
              </Link>
            </li>
            <li>
              <a href={SITE.cloudUrl} className="hover:text-inverse">
                Cloud portal
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-inverse/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-inverse/55 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>Realwave is a product of ePlus. © {new Date().getFullYear()} ePlus inc.</p>
          <p>Built on Network Optix.</p>
        </div>
      </div>
    </footer>
  );
}
