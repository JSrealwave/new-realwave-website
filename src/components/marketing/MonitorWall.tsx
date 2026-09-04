import { cn } from "@/lib/utils";

const screens = [
  {
    src: "/media/vue-wall.jpg",
    kicker: "Live",
    label: "Wall + analytics",
    alt: "Vue live wall with analytic overlays on a multi-camera layout",
  },
  {
    src: "/media/vue-search.jpg",
    kicker: "Search",
    label: "Objects and Appearance",
    alt: "Vue advanced object search across cars, trucks, and vans",
  },
  {
    src: "/media/vue-verify.jpg",
    kicker: "Verify",
    label: "Zone and Events",
    alt: "Vue live view with a presence zone and truck object on the stream",
  },
] as const;

export function MonitorWall({ className }: { className?: string }) {
  return (
    <div className={cn("lg:[perspective:1400px]", className)}>
      <ul className="flex gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible lg:pb-0">
        {screens.map((s, i) => (
          <li
            key={s.src}
            className={cn(
              "min-w-[82%] sm:min-w-[60%] lg:min-w-0",
              i === 1 && "lg:z-10 lg:scale-[1.04]",
              i === 0 && "lg:origin-right lg:[transform:rotateY(7deg)]",
              i === 2 && "lg:origin-left lg:[transform:rotateY(-7deg)]",
            )}
          >
            <figure>
              <div className="rounded-[12px] bg-[#07090c] p-[7px] pb-3.5 shadow-[0_24px_60px_rgba(0,0,0,0.55)] ring-1 ring-white/10">
                <div className="overflow-hidden rounded-[3px] bg-black">
                  <img
                    src={s.src}
                    alt={s.alt}
                    width={1920}
                    height={1034}
                    className="aspect-video w-full object-cover object-top"
                    loading={i === 1 ? "eager" : "lazy"}
                    fetchPriority={i === 1 ? "high" : "low"}
                    decoding="async"
                  />
                </div>
                <div className="mt-2.5 flex justify-center">
                  <span className="size-1.5 rounded-full bg-teal shadow-[0_0_8px_var(--color-teal)]" />
                </div>
              </div>
              <figcaption className="mt-3 px-1">
                <p className="text-[11px] font-bold tracking-[0.18em] text-teal uppercase">
                  {s.kicker}
                </p>
                <p className="text-sm text-inverse/80">{s.label}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
