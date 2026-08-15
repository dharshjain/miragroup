import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, RevealImage } from "@/components/motion-primitives";
import { verticals } from "@/data/businesses";
import hero from "@/assets/hero-fleet.jpg";
import infra from "@/assets/infrastructure.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mira Group — Moving Industries. Delivering Reliability." },
      {
        name: "description",
        content:
          "Integrated transportation, water supply, specialized tankers, heavy equipment and salt solutions from Kutch to across India.",
      },
      { property: "og:title", content: "Mira Group — Moving Industries. Delivering Reliability." },
      {
        property: "og:description",
        content:
          "Diversified industrial transportation, tanker logistics, water supply, heavy equipment and salt operations based in Gandhidham, Kutch.",
      },
    ],
  }),
  component: Home,
});

const reasons = [
  {
    n: "01",
    t: "Proven Experience",
    d: "Decades of experience serving industrial and commercial requirements across Kutch and India.",
  },
  {
    n: "02",
    t: "Diversified Capabilities",
    d: "Transportation, tanker logistics, water supply, heavy equipment and salt operations under one group.",
  },
  {
    n: "03",
    t: "Dedicated Infrastructure",
    d: "Own fleet, specialized tankers, heavy equipment and operational resources designed around customer requirements.",
  },
  {
    n: "04",
    t: "Safety-Focused Operations",
    d: "Trained personnel and established operational practices for specialized and sensitive cargo.",
  },
  {
    n: "05",
    t: "Customer-Centric Approach",
    d: "We believe long-term business relationships are built through consistent service and accountability.",
  },
  {
    n: "06",
    t: "Kutch-Based Industrial Advantage",
    d: "Strategically positioned in Gandhidham–Kutch, close to major industrial and port ecosystems.",
  },
];

const numbers = [
  { v: "1997", l: "Journey Began" },
  { v: "85+", l: "Own Fleet Vehicles" },
  { v: "5", l: "Core Business Verticals" },
  { v: "PAN INDIA", l: "Transportation Reach" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-[92vh] overflow-hidden bg-ink text-ink-foreground">
        <img
          src={hero}
          alt="Mira Group tanker fleet at an industrial port yard"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="shell relative flex min-h-[92vh] flex-col justify-end pb-20 pt-32">
          <Reveal>
            <p className="label-tech text-primary">Gandhidham — Kutch — India</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display-xl mt-8 max-w-5xl">
              Moving Industries.
              <br />
              Delivering Reliability.
            </h1>
          </Reveal>
          <div className="mt-12 grid gap-10 border-t border-ink-border pt-10 lg:grid-cols-12">
            <Reveal delay={0.14} className="lg:col-span-5">
              <p className="font-display text-xl leading-snug text-ink-foreground/90">
                Integrated Transportation, Water Supply & Industrial Solutions from Kutch to Across
                India.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="lg:col-span-5">
              <p className="text-ink-foreground/60">
                Mira Group is a diversified business group with a strong presence in industrial
                transportation, specialized tanker services, water supply, heavy vehicle solutions
                and salt manufacturing. With decades of experience and a commitment to quality,
                safety and dependable service, we support industries with solutions designed around
                their operational needs.
              </p>
            </Reveal>
            <Reveal delay={0.26} className="flex flex-col gap-5 lg:col-span-2">
              <Link to="/businesses" className="label-tech rule-link text-primary">
                Explore Our Businesses
              </Link>
              <Link to="/contact" className="label-tech rule-link text-ink-foreground/80">
                Get in Touch
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BUILT ON EXPERIENCE */}
      <section className="border-b border-border">
        <div className="shell grid gap-12 py-24 lg:grid-cols-12 lg:py-36">
          <Reveal className="lg:col-span-4">
            <p className="label-tech border-t border-foreground/20 pt-4 text-primary">
              Built on experience. Driven by trust.
            </p>
          </Reveal>
          <div className="space-y-8 lg:col-span-7 lg:col-start-6">
            <Reveal>
              <h2 className="display-lg">
                Since 1997, from water supply in Kutch to a diversified industrial group.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Mira Group began its journey in 1997 with a focus on water supply in Kutch and has
                  steadily expanded into multiple industrial business verticals. Today, the Group
                  brings together transportation, logistics, specialized tanker operations, heavy
                  equipment, water solutions and salt manufacturing under one business platform.
                </p>
                <p>
                  Our growth has been built on a simple philosophy — understand the customer's
                  requirement, deliver consistently and build relationships that last.
                </p>
                <p>
                  With a professional team, dedicated fleet and industry-focused infrastructure,
                  Mira Group continues to serve businesses across Kutch and destinations throughout
                  India.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VERTICALS */}
      <section className="border-b border-border">
        <div className="shell py-20">
          <Reveal>
            <p className="label-tech text-primary">Our Business Verticals</p>
          </Reveal>
        </div>
        {verticals.map((v, i) => (
          <article key={v.slug} className="border-t border-border">
            <div
              className={`shell grid items-center gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24 ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className="lg:col-span-6 lg:[direction:ltr]">
                <RevealImage
                  src={v.image}
                  alt={v.name}
                  className="aspect-4/3 w-full"
                  imgClassName="grayscale-[0.35] transition-all duration-700 hover:grayscale-0 hover:scale-[1.02]"
                />
              </div>
              <div className="lg:col-span-5 lg:[direction:ltr]">
                <Reveal>
                  <div className="flex items-baseline gap-6">
                    <span className="numeral text-foreground/12">{v.index}</span>
                    <span className="label-tech text-primary">{v.entity}</span>
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <h3 className="mt-6 font-display text-3xl leading-tight lg:text-[2.6rem]">
                    {v.name}
                  </h3>
                  <p className="mt-4 font-display text-lg text-foreground/70">{v.headline}</p>
                  <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{v.summary}</p>
                </Reveal>
                <Reveal delay={0.14}>
                  <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5">
                    {v.specs.map((s) => (
                      <li key={s} className="label-tech text-muted-foreground">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link to={v.to} className="mt-8 inline-block label-tech rule-link text-primary">
                    {v.cta} →
                  </Link>
                </Reveal>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* NUMBERS */}
      <section className="bg-ink text-ink-foreground">
        <div className="shell py-24 lg:py-32">
          <Reveal>
            <p className="label-tech text-primary">Mira Group by the Numbers</p>
          </Reveal>
          <div className="mt-14 grid gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {numbers.map((n, i) => (
              <Reveal
                key={n.l}
                delay={i * 0.08}
                className="border-t border-ink-border pt-6 lg:pr-8"
              >
                <p className="numeral text-ink-foreground">{n.v}</p>
                <p className="mt-6 label-tech text-ink-foreground/50">{n.l}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="border-b border-border">
        <div className="shell grid gap-12 py-24 lg:grid-cols-12 lg:py-32">
          <Reveal className="lg:col-span-4">
            <p className="label-tech text-primary">Why Mira Group?</p>
            <h2 className="display-lg mt-8">
              One Group.
              <br />
              Multiple Industrial Capabilities.
            </h2>
          </Reveal>
          <div className="grid gap-x-12 gap-y-10 lg:col-span-7 lg:col-start-6 lg:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.n} delay={(i % 2) * 0.08} className="border-t border-border pt-5">
                <p className="label-tech text-primary">{r.n}</p>
                <h3 className="mt-4 font-display text-xl">{r.t}</h3>
                <p className="mt-3 text-muted-foreground">{r.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="border-b border-border bg-card/40">
        <div className="shell py-24 lg:py-32">
          <Reveal>
            <p className="label-tech text-primary">Industries We Serve</p>
            <h2 className="display-lg mt-6 max-w-3xl">Supporting Diverse Industrial Requirements</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Our diversified capabilities enable us to support customers across multiple key sectors with tailored solutions.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: "01",
                title: "Chemicals & Petrochemicals",
                desc: "Specialized tanker transportation and industrial logistics for liquid acids and chemical cargo.",
              },
              {
                num: "02",
                title: "Ports & Logistics",
                desc: "Cargo movement and heavy vehicle support around major port-linked industrial areas like Kandla and Mundra.",
              },
              {
                num: "03",
                title: "Food & Edible Products",
                desc: "Edible oil transportation and food-grade salt solutions with strict hygiene standards.",
              },
              {
                num: "04",
                title: "Salt & Minerals",
                desc: "Raw and industrial salt supply and heavy equipment support from our Kutch-based operations.",
              },
              {
                num: "05",
                title: "Manufacturing Industries",
                desc: "Industrial transportation, purified water supply (RO/DM/Distilled), and liquid cargo solutions.",
              },
              {
                num: "06",
                title: "Infrastructure & Projects",
                desc: "Heavy vehicles, loaders, JCB earthmovers, forklifts, and site transportation support.",
              },
            ].map((ind, i) => (
              <Reveal key={ind.title} delay={i * 0.06} className="border-t border-border pt-6">
                <span className="label-tech text-primary">{ind.num}</span>
                <h3 className="mt-3 font-display text-xl">{ind.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="relative isolate overflow-hidden">
        <RevealImage
          src={infra}
          alt="Port infrastructure at dusk"
          className="h-[70vh] w-full"
          imgClassName="opacity-90"
          priority
        />
        <div className="absolute inset-0 flex items-end bg-ink/60">
          <div className="shell pb-16 text-ink-foreground">
            <p className="label-tech text-primary">Our Approach</p>
            <h2 className="display-lg mt-6 max-w-3xl">Understand. Plan. Execute. Deliver.</h2>
          </div>
        </div>
      </section>
      <section className="border-b border-border">
        <div className="shell grid gap-10 py-20 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Every requirement is different. Our approach is to understand the operational
                  requirement first, develop the appropriate solution and execute it with
                  discipline.
                </p>
                <p>
                  From specialized tanker transportation to industrial water supply, heavy equipment
                  and salt products, our teams work with a clear objective — deliver dependable
                  solutions that help our customers keep their operations moving.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-ink text-ink-foreground">
        <div className="shell grid gap-10 py-24 lg:grid-cols-12 lg:py-32">
          <Reveal className="lg:col-span-7">
            <h2 className="display-lg">Looking for a Reliable Industrial Partner?</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-ink-foreground/60">
              From specialized transportation and tanker logistics to water supply, heavy equipment
              and salt solutions, Mira Group brings multiple capabilities together under one trusted
              name. Let's build a reliable solution for your business.
            </p>
            <Link to="/contact" className="mt-10 inline-block label-tech rule-link text-primary">
              Get in Touch →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
