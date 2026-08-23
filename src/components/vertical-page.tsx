import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Reveal, RevealImage } from "@/components/motion-primitives";

export function VerticalHero({
  index,
  entity,
  title,
  image,
  children,
}: {
  index: string;
  entity: string;
  title: string;
  image: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="border-b border-border">
        <div className="shell grid gap-10 py-20 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-4">
            <span className="numeral text-foreground/12">{index}</span>
            <p className="mt-6 label-tech text-primary">{entity}</p>
          </Reveal>
          <div className="lg:col-span-8">
            <Reveal>
              <h1 className="display-lg max-w-4xl">{title}</h1>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
                {children}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <RevealImage src={image} alt={title} className="h-[60vh] w-full" priority />
    </>
  );
}

export function DetailList({
  label,
  title,
  items,
}: {
  label: string;
  title?: string;
  items: { t: string; d?: string }[];
}) {
  return (
    <section className="border-b border-border bg-card/20">
      <div className="shell grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-5">
          <div className="sticky top-28">
            <Reveal>
              <span className="label-tech text-primary border-t border-primary/40 pt-3 inline-block">
                {label}
              </span>
              <h2 className="display-lg mt-6 text-foreground">
                {title || `Specialized ${label}`}
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-md">
                Designed for high operational standards, safety compliance, and consistent industrial performance.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 hidden sm:flex flex-wrap gap-2 border-t border-border/60 pt-6">
                {items.map((it, i) => (
                  <span
                    key={it.t}
                    className="label-tech text-[0.7rem] px-3 py-1.5 border border-border bg-background/60 text-muted-foreground"
                  >
                    {String(i + 1).padStart(2, "0")}. {it.t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-7">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.06}>
              <div className="group relative overflow-hidden border border-border bg-background p-7 sm:p-9 transition-all duration-300 hover:border-primary/60 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <span className="label-tech text-primary font-mono text-xs font-semibold px-2.5 py-1 bg-primary/10 border border-primary/20 shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-foreground font-medium group-hover:text-primary transition-colors">
                      {it.t}
                    </h3>
                    {it.d && (
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        {it.d}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StrengthBand({ label, title, items }: { label: string; title?: string; items: string[] }) {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="shell grid gap-10 py-20 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="label-tech text-primary">{label}</p>
          {title && <h2 className="display-lg mt-6">{title}</h2>}
        </Reveal>
        <ul className="grid gap-x-12 lg:col-span-7 lg:col-start-6 lg:grid-cols-2">
          {items.map((x, i) => (
            <Reveal key={x} delay={i * 0.05}>
              <li className="border-t border-ink-border py-4 text-ink-foreground/70">{x}</li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function VerticalCta() {
  return (
    <section className="border-b border-border">
      <div className="shell flex flex-col justify-between gap-8 py-20 lg:flex-row lg:items-end">
        <Reveal>
          <h2 className="display-lg max-w-2xl">Let's Discuss Your Requirement</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/contact" className="label-tech rule-link text-primary">
            Get in Touch →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
