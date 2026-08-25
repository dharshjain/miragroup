import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { Reveal, RevealImage } from "@/components/motion-primitives";
import { verticals } from "@/data/businesses";

export const Route = createFileRoute("/businesses/")({
  head: () => ({
    meta: [
      { title: "Our Businesses — Mira Group Verticals" },
      {
        name: "description",
        content:
          "Water solutions, chemical and specialized tankers, heavy vehicles and equipment, oil transportation and raw salt — the five verticals of Mira Group.",
      },
      { property: "og:title", content: "Our Businesses — Mira Group" },
      {
        property: "og:description",
        content: "Five industrial verticals under one experienced business group in Kutch.",
      },
    ],
  }),
  component: BusinessesIndex,
});

function BusinessesIndex() {
  return (
    <>
      <PageIntro label="Our Businesses" title="One Group. Multiple Industrial Capabilities.">
        <p>
          Instead of coordinating multiple vendors for different requirements, customers can access
          several industrial support services through one experienced business group.
        </p>
      </PageIntro>

      <section>
        {verticals.map((v) => (
          <Link
            key={v.slug}
            to={v.to}
            className="group block border-b border-border transition-colors hover:bg-secondary/60"
          >
            <div className="shell grid items-center gap-8 py-10 lg:grid-cols-12 lg:py-14">
              <span className="numeral text-foreground/12 lg:col-span-2">{v.index}</span>
              <div className="lg:col-span-5">
                <p className="label-tech text-primary">{v.entity}</p>
                <h2 className="mt-3 font-display text-3xl lg:text-[2.4rem]">{v.name}</h2>
                <p className="mt-3 max-w-lg text-muted-foreground">{v.headline}</p>
              </div>
              <div className="lg:col-span-4">
                <RevealImage
                  src={v.image}
                  alt={v.name}
                  className="aspect-video w-full"
                  parallax={false}
                  imgClassName="transition-all duration-700"
                />
              </div>
              <span className="label-tech text-primary lg:col-span-1 lg:text-right">→</span>
            </div>
          </Link>
        ))}
      </section>

      {/* MIRA LOGISTICS INTEGRATED SECTION */}
      <section className="border-t border-border bg-card/60">
        <div className="shell grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-5">
            <span className="label-tech text-primary">Mira Logistics</span>
            <h2 className="display-lg mt-6">Industrial Transportation & Logistics</h2>
            <p className="mt-4 font-display text-xl text-foreground/80">Moving Cargo With Precision & Reliability</p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Mira Logistics provides transportation solutions for industrial and commercial cargo, with particular experience in liquid cargo and specialized transportation requirements. Operating an own fleet of more than 100 vehicles and tankers across local and Pan-India routes.
            </p>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <p className="label-tech text-primary border-t border-border pt-4">Core Logistics Capabilities</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Industrial Transportation",
                  "Chemical Transportation",
                  "Liquid Cargo Transportation",
                  "ISO Tank Movement",
                  "Local Transportation (Kutch Hub)",
                  "Pan-India Transportation Reach",
                ].map((cap) => (
                  <div key={cap} className="border border-border p-4 bg-background">
                    <p className="font-display text-base text-foreground font-medium">{cap}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="shell grid gap-10 py-24 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="label-tech text-primary">Why Partner With Mira?</p>
            <h2 className="display-lg mt-8">More Than a Service Provider</h2>
          </Reveal>
          <div className="grid gap-10 lg:col-span-6 lg:col-start-7 lg:grid-cols-2">
            {[
              {
                t: "One Group. Multiple Solutions.",
                d: "Instead of coordinating multiple vendors for different requirements, customers can access several industrial support services through one experienced business group.",
              },
              {
                t: "Local Expertise. Wider Reach.",
                d: "With a strong base in Kutch and transportation capabilities extending across India, Mira understands the operational requirements of the region while supporting wider destinations.",
              },
              {
                t: "Experience That Matters.",
                d: "Years of experience across transportation, water, salt and industrial services have helped us understand the importance of reliability, safety and consistency.",
              },
              {
                t: "Relationships That Last.",
                d: "Our objective is to create long-term partnerships through dependable service and transparent business practices.",
              },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 0.06} className="border-t border-ink-border pt-5">
                <h3 className="font-display text-xl">{x.t}</h3>
                <p className="mt-3 text-ink-foreground/60">{x.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
