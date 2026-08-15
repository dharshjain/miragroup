import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { Reveal, RevealImage } from "@/components/motion-primitives";
import infra from "@/assets/infrastructure.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mira Group — Diversified Industrial Group in Kutch" },
      {
        name: "description",
        content:
          "Mira Group is a diversified business group based in Gandhidham, Kutch, spanning transportation, water supply, heavy equipment, oil transport and salt manufacturing since 1997.",
      },
      { property: "og:title", content: "About Mira Group" },
      {
        property: "og:description",
        content:
          "A diversified business group built on trust and experience, based in Gandhidham, Kutch.",
      },
    ],
  }),
  component: About,
});

const journey = [
  {
    n: "1997",
    t: "The Beginning",
    d: "Mira began its journey with water supply operations in Kutch.",
  },
  {
    n: "02",
    t: "Expansion into Transportation",
    d: "As industrial activity in the region grew, Mira expanded into transportation and logistics services.",
  },
  {
    n: "03",
    t: "Specialized Tanker Operations",
    d: "The Group developed dedicated capabilities for transporting acids, chemicals and other liquid cargo using specialized tankers.",
  },
  {
    n: "04",
    t: "Diversification",
    d: "Mira expanded into heavy vehicles and equipment, edible and non-edible oil transportation and salt manufacturing.",
  },
  {
    n: "05",
    t: "Today",
    d: "Mira Group continues to strengthen its infrastructure and capabilities while serving industrial and commercial customers across Kutch and India.",
  },
];

const mission = [
  "Delivering reliable and consistent services.",
  "Maintaining high standards of quality and safety.",
  "Developing strong operational infrastructure.",
  "Understanding and responding to customer requirements.",
  "Building long-term relationships based on trust.",
  "Continuously improving our processes and capabilities.",
];

function About() {
  return (
    <>
      <PageIntro
        label="About Us"
        title="A Diversified Business Group Built on Trust & Experience"
      >
        <p>
          Mira Group is a diversified business group based in Gandhidham, Kutch, with operations
          spanning specialized transportation, logistics, water supply, heavy vehicles and
          equipment, edible and non-edible oil transportation and salt manufacturing.
        </p>
        <p>
          The Group's journey began in 1997 with water supply operations in Kutch. Over the years,
          Mira expanded its capabilities in response to the growing needs of industries in the
          region, establishing specialized transportation and industrial support businesses.
        </p>
        <p>
          Today, the Group combines operational experience, dedicated infrastructure and a
          professional team to serve customers across multiple industries.
        </p>
        <p className="text-foreground">
          Our objective is not simply to provide a service, but to become a dependable extension of
          our customers' operations.
        </p>
      </PageIntro>

      <RevealImage
        src={infra}
        alt="Industrial port infrastructure"
        className="h-[55vh] w-full"
        priority
      />

      <section className="border-b border-border">
        <div className="shell grid gap-12 py-24 lg:grid-cols-12 lg:py-32">
          <Reveal className="lg:col-span-4">
            <p className="label-tech border-t border-foreground/20 pt-4 text-primary">
              Our Journey
            </p>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            {journey.map((j, i) => (
              <Reveal key={j.t} delay={i * 0.05}>
                <div className="grid grid-cols-[auto_1fr] gap-8 border-t border-border py-8">
                  <span className="font-display text-2xl text-foreground/25">{j.n}</span>
                  <div>
                    <h3 className="font-display text-2xl">{j.t}</h3>
                    <p className="mt-3 text-muted-foreground">{j.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="shell grid gap-16 py-24 lg:grid-cols-12 lg:py-32">
          <Reveal className="lg:col-span-6">
            <p className="label-tech text-primary">Vision</p>
            <h2 className="display-lg mt-8">To Build a Trusted Industrial Services Group</h2>
            <p className="mt-8 max-w-lg text-ink-foreground/60">
              Our vision is to build a professionally managed and continuously evolving business
              group recognized for reliability, operational excellence, safety and long-term
              customer relationships.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="label-tech text-primary">Mission</p>
            <p className="mt-8 font-display text-xl">We are committed to:</p>
            <ul className="mt-6">
              {mission.map((m) => (
                <li
                  key={m}
                  className="border-t border-ink-border py-4 text-ink-foreground/70 last:border-b"
                >
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="shell grid gap-12 py-24 lg:grid-cols-12 lg:py-32">
          <Reveal className="lg:col-span-4">
            <p className="label-tech text-primary">Why Partner with Mira?</p>
            <h2 className="display-lg mt-8">More Than a Service Provider</h2>
            <p className="mt-6 text-muted-foreground">
              When you work with Mira Group, you gain access to a combination of industry experience, infrastructure and operational capabilities.
            </p>
          </Reveal>
          <div className="grid gap-x-12 gap-y-10 lg:col-span-7 lg:col-start-6 lg:grid-cols-2">
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
            ].map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08} className="border-t border-border pt-5">
                <h3 className="font-display text-xl">{p.t}</h3>
                <p className="mt-3 text-muted-foreground">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
