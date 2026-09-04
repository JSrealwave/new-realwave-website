import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function CtaBand({
  title = "See it on your cameras.",
  lede = "Start with Vue as video-only. Add Intelligence when the workflow is defined. We operate the instance.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="bg-navy text-inverse">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <h2 className="text-3xl text-inverse">{title}</h2>
          <p className="mt-2 max-w-xl text-inverse/75">{lede}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/contact">Request a demo</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link to="/download">Download Vue</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
