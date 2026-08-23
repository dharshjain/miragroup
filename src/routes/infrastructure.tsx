import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { Reveal, RevealImage } from "@/components/motion-primitives";
import infra from "@/assets/infrastructure.jpg";
import tankers from "@/assets/tankers.jpg";
import equipment from "@/assets/equipment.jpg";
import water from "@/assets/water.jpg";
import salt from "@/assets/salt.jpg";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure — Built to Support Industrial Requirements | Mira Group" },
      {
        name: "description",
        content:
          "Explore Mira Group's specialized tanker fleet, heavy vehicles, material handling equipment, industrial water infrastructure, and Kutch-based salt assets.",
      },
      { property: "og:title", content: "Infrastructure — Mira Group" },
      {
        property: "og:description",
        content:
          "Dedicated infrastructure supporting industrial transportation, tanker logistics, water supply, heavy equipment and salt manufacturing.",
      },
    ],
  }),
  component: InfrastructurePage,
});

const infrastructurePillars = [
  {
    index: "01",
    title: "Specialized Tanker Fleet",
    tag: "LOGISTICS & LIQUID CARGO",
    desc: "Different tanker configurations support diverse chemical and liquid cargo requirements across India. ACN, SS, rubber-lined/coated, and ISO tanks.",
    image: tankers,
    specs: ["ACN Tankers", "SS Tankers", "Coated Tankers", "ISO Tanks"],
  },
  {
    index: "02",
    title: "Heavy Vehicle Fleet",
    tag: "COMMERCIAL TRANSPORT",
    desc: "Trucks, dumpers, and heavy vehicles supporting cargo handling, salt operations, container movement, and long-distance industrial logistics.",
    image: equipment,
    specs: ["Heavy Commercial Trucks", "Multi-Axle Dumpers", "Container Movers"],
  },
  {
    index: "03",
    title: "Material Handling Equipment",
    tag: "PORT & SITE OPERATIONS",
    desc: "Loaders, JCBs, dumpers, and forklifts deployed for heavy cargo handling and industrial operations around Kandla, Mundra, and regional hubs.",
    image: infra,
    specs: ["Loaders", "JCB Earthmovers", "Forklifts", "Site Heavy Equipment"],
  },
  {
    index: "04",
    title: "Water Supply Infrastructure",
    tag: "PURIFICATION & BULK SUPPLY",
    desc: "Dedicated processing and transport capabilities supporting four distinct categories: Raw Water, RO Water, DM Water, and Distilled Water.",
    image: water,
    specs: ["Raw Water Supply", "RO Filtration", "Demineralized Water", "Distilled Units"],
  },
  {
    index: "05",
    title: "Kutch Salt Operations",
    tag: "MANUFACTURING & REFINING",
    desc: "Kutch-based salt manufacturing and processing operations at Adesar & Rapar producing raw, industrial, refined free-flow, and iodized salt.",
    image: salt,
    specs: ["Raw Salt Fields", "Refining Plants", "Iodization Units", "Bulk & Retail Packaging"],
  },
];

function InfrastructurePage() {
  return (
    <>
      <PageIntro
        label="Infrastructure"
        title="Built to Support Industrial Requirements"
      >
        <p>
          Mira Group's capabilities are supported by its own fleet, specialized tanker
          infrastructure, heavy equipment and experienced operational teams.
        </p>
        <p>
          Positioned strategically in Gandhidham, Kutch, our infrastructure is designed to serve
          demanding industrial environments with high reliability, safety standards, and operational readiness.
        </p>
      </PageIntro>

      {/* Main Full-Width Visual Banner */}
      <RevealImage
        src={infra}
        alt="Mira Group industrial port and logistics infrastructure"
        className="h-[60vh] w-full"
        priority
      />

      {/* Infrastructure Pillars */}
      <section className="border-b border-border">
        <div className="shell py-20">
          <Reveal>
            <p className="label-tech text-primary">Core Infrastructure Assets</p>
            <h2 className="display-lg mt-6">Engineered for Reliability & Scalability</h2>
          </Reveal>
        </div>

        {infrastructurePillars.map((p, i) => (
          <article key={p.index} className="border-t border-border">
            <div
              className={`shell grid items-center gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24 ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className="lg:col-span-6 lg:[direction:ltr]">
                <RevealImage
                  src={p.image}
                  alt={p.title}
                  className="aspect-4/3 w-full"
                  imgClassName="grayscale-[0.3] transition-all duration-700 hover:grayscale-0 hover:scale-[1.02]"
                />
              </div>
              <div className="lg:col-span-5 lg:[direction:ltr]">
                <Reveal>
                  <div className="flex items-baseline gap-6">
                    <span className="numeral text-foreground/12">{p.index}</span>
                    <span className="label-tech text-primary">{p.tag}</span>
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <h3 className="mt-6 font-display text-3xl leading-tight lg:text-[2.5rem]">
                    {p.title}
                  </h3>
                  <p className="mt-5 leading-relaxed text-muted-foreground">{p.desc}</p>
                </Reveal>
                <Reveal delay={0.14}>
                  <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5">
                    {p.specs.map((s) => (
                      <li key={s} className="label-tech text-muted-foreground">
                        {s}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Numbers / Infrastructure Snapshot */}
      <section className="bg-ink text-ink-foreground">
        <div className="shell grid gap-12 py-24 lg:grid-cols-12 lg:py-32">
          <Reveal className="lg:col-span-5">
            <p className="label-tech text-primary">Strategic Advantage</p>
            <h2 className="display-lg mt-8">Positioned in the Heart of Kutch</h2>
            <p className="mt-6 text-ink-foreground/60">
              Close proximity to major ports (Kandla & Mundra) and industrial corridors gives Mira Group
              unrivaled logistical flexibility and response times.
            </p>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {[
              { label: "Own Fleet Vehicles", value: "85+" },
              { label: "Core Verticals Supported", value: "5" },
              { label: "Regional Hub", value: "Kandla — Mundra" },
              { label: "Transportation Reach", value: "Pan-India" },
            ].map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 0.08} className="border-t border-ink-border pt-6">
                <p className="numeral text-ink-foreground">{stat.value}</p>
                <p className="mt-4 label-tech text-ink-foreground/50">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="border-b border-border">
        <div className="shell flex flex-col justify-between gap-8 py-20 lg:flex-row lg:items-end">
          <Reveal>
            <h2 className="display-lg max-w-2xl">Require Infrastructure & Transport Support?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/contact" className="label-tech rule-link text-primary">
              Contact Our Operations Team →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
