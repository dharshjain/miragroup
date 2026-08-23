import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { Reveal, RevealImage } from "@/components/motion-primitives";
import { Truck } from "lucide-react";
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
    title: "Heavy Excavator Equipment",
    tag: "EARTHMOVING & SITE OPERATIONS",
    desc: "Heavy excavators supporting earthmoving, land clearing, salt field development, and heavy industrial project requirements.",
    image: equipment,
    specs: ["Heavy Excavators", "Earthmoving Excavators", "Site Excavator Operations"],
  },
  {
    index: "03",
    title: "In-House Maintenance Facilities",
    tag: "FLEET UPTIME & HYGIENE",
    desc: "In-house technical workshop and dedicated tanker washing center ensuring fleet reliability, zero breakdown risk, and clean cargo handling.",
    image: infra,
    specs: ["In-House Workshop", "Tanker Washing Center", "Preventive Servicing", "Zero Contamination"],
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
    desc: "Kutch-based salt manufacturing and processing operations producing raw salt from dedicated seawater salt pans.",
    image: salt,
    specs: ["Dedicated Salt Pans", "Seawater Evaporation", "Bulk Industrial Supply"],
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
          Mira Group's capabilities are supported by its own fleet of more than 100 vehicles, specialized tanker
          infrastructure, heavy excavators, in-house workshop, and dedicated tanker washing facilities.
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

      {/* In-House Operational Facilities Feature Section */}
      <section className="border-b border-border bg-card/40">
        <div className="shell grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-5">
            <span className="label-tech text-primary">In-House Operational Support</span>
            <h2 className="display-lg mt-6">Maintaining High Reliability & Uptime</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
              To minimize transit delays and ensure pristine cargo hygiene, we maintain our own specialized facility infrastructure in Kutch.
            </p>
          </Reveal>

          <div className="grid gap-6 lg:col-span-7 sm:grid-cols-2">
            <Reveal delay={0.08} className="border border-border bg-background p-8">
              <span className="label-tech text-primary">01. Fleet Maintenance</span>
              <h3 className="font-display text-2xl mt-3 text-foreground">In-House Workshop</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                We maintain an in-house technical workshop to better maintain our fleet, execute routine preventive maintenance, and minimize breakdowns on transit routes.
              </p>
            </Reveal>

            <Reveal delay={0.14} className="border border-border bg-background p-8">
              <span className="label-tech text-primary">02. Cargo Hygiene</span>
              <h3 className="font-display text-2xl mt-3 text-foreground">Tanker Washing Center</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                Equipped with an in-house tanker washing center for thorough decontamination and high-pressure washing between dispatches, guaranteeing better reliability and customer satisfaction.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

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
              { label: "Own Fleet Vehicles", value: "100+", highlight: true },
              { label: "Core Verticals Supported", value: "5", highlight: false },
              { label: "Regional Hub", value: "Kandla — Mundra", isText: true },
              { label: "Transportation Reach", value: "Pan-India", isText: true },
            ].map((stat, idx) => (
              <Reveal
                key={stat.label}
                delay={idx * 0.08}
                className="border-t border-ink-border pt-6"
              >
                {stat.isText ? (
                  <p className="font-display text-2xl lg:text-3xl font-semibold text-ink-foreground tracking-tight leading-snug">
                    {stat.value}
                  </p>
                ) : (
                  <p className={`numeral ${stat.highlight ? "text-primary" : "text-ink-foreground"}`}>
                    {stat.value}
                  </p>
                )}
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
