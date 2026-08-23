import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro } from "@/components/page-intro";
import { Reveal, RevealImage } from "@/components/motion-primitives";
import safety from "@/assets/safety.jpg";

export const Route = createFileRoute("/quality-safety")({
  head: () => ({
    meta: [
      { title: "Quality & Safety — ISO 9001:2015 Certified | Mira Group" },
      {
        name: "description",
        content:
          "Mira Group is ISO 9001:2015 certified. Safety first approach with experienced personnel for hazardous chemical handling, SS tanks only for quality maintenance, and 24/7 live vehicle tracking.",
      },
      { property: "og:title", content: "Quality & Safety — Mira Group" },
      {
        property: "og:description",
        content:
          "Operational safety and ISO 9001:2015 quality standards for specialized industrial operations.",
      },
    ],
  }),
  component: QualitySafetyPage,
});

const qualityPoints = [
  {
    num: "01",
    title: "Experienced Hazardous Chemical Personnel",
    desc: "Our operations are managed by experienced personnel trained specifically for handling hazardous chemicals and complex liquid dispatches.",
  },
  {
    num: "02",
    title: "SS Tanks Only for Quality Maintenance",
    desc: "For strict quality maintenance, zero cargo contamination, and chemical purity, we utilize Stainless Steel (SS) tanks only.",
  },
  {
    num: "03",
    title: "24/7 Live Vehicle Tracking",
    desc: "For maximum safety, route compliance, and peace of mind, we have dedicated round-the-clock personnel monitoring live GPS tracking of all vehicles 24/7.",
  },
  {
    num: "04",
    title: "In-House Fleet Maintenance & Washing",
    desc: "Proactive servicing at our in-house workshop and high-pressure decontamination at our in-house washing center prior to every loading.",
  },
  {
    num: "05",
    title: "Punctual & Disciplined Execution",
    desc: "Timely dispatching, transparent communication, and disciplined turnaround times for industrial site operations.",
  },
  {
    num: "06",
    title: "ISO 9001:2015 Certified Management",
    desc: "Structured operational procedures, continuous improvement, and full compliance with industrial safety regulations.",
  },
];

function QualitySafetyPage() {
  return (
    <>
      <PageIntro
        label="Quality & Safety"
        title="Quality Is Not an Option. It Is Our Standard."
      >
        <p>
          Mira Group believes that quality and safety are fundamental to every business operation.
        </p>
        <p>
          From specialized tanker transportation to industrial water supply and raw salt operations,
          our teams follow strict operational practices focused on safety compliance, quality maintenance, and customer satisfaction.
        </p>
      </PageIntro>

      {/* ISO Certification Badge & Statement */}
      <section className="border-b border-border bg-ink text-ink-foreground">
        <div className="shell grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <Reveal className="lg:col-span-4">
            <span className="inline-block border border-primary px-4 py-2 label-tech text-primary">
              ISO Certified Standard
            </span>
            <h2 className="display-lg mt-6">ISO 9001:2015</h2>
            <p className="mt-2 label-tech text-ink-foreground/50">Certified Quality Management</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <p className="font-display text-2xl leading-relaxed text-ink-foreground/90">
              Our ISO 9001:2015 certification reflects our commitment to structured management processes, continuous operational improvement, and dependable service delivery across all verticals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Quality Focus Grid */}
      <section className="border-b border-border">
        <div className="shell grid gap-12 py-24 lg:grid-cols-12 lg:py-32">
          <Reveal className="lg:col-span-4">
            <p className="label-tech border-t border-foreground/20 pt-4 text-primary">
              Our Quality Focus
            </p>
            <h2 className="display-lg mt-8">Disciplined Standards in Action</h2>
          </Reveal>

          <div className="grid gap-x-12 gap-y-10 lg:col-span-7 lg:col-start-6 lg:grid-cols-2">
            {qualityPoints.map((q, idx) => (
              <Reveal key={q.num} delay={(idx % 2) * 0.08} className="border-t border-border pt-5">
                <p className="label-tech text-primary">{q.num}</p>
                <h3 className="mt-4 font-display text-xl">{q.title}</h3>
                <p className="mt-3 text-muted-foreground">{q.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Visual Banner */}
      <RevealImage
        src={safety}
        alt="Mira Group safety operations and industrial tanker inspection"
        className="h-[60vh] w-full"
      />

      {/* Safety First Deep-Dive */}
      <section className="border-b border-border">
        <div className="shell grid gap-12 py-24 lg:grid-cols-12 lg:py-32">
          <Reveal className="lg:col-span-5">
            <p className="label-tech text-primary">Safety First</p>
            <h2 className="display-lg mt-8">Zero Compromise on Liquid & Heavy Cargo Safety</h2>
          </Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p>
                Specialized chemical and liquid cargo transportation demands a high level of operational discipline. We employ experienced personnel specifically trained for handling hazardous chemicals in full compliance with industrial safety protocols.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                For quality maintenance, we use SS (Stainless Steel) tanks only for specialized chemical liquid transportation, ensuring maximum purity and protection against contamination. Additionally, our dedicated round-the-clock personnel monitor live GPS vehicle tracking 24/7 to guarantee route safety and real-time transit updates.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-ink-foreground">
        <div className="shell grid gap-10 py-24 lg:grid-cols-12 lg:py-32">
          <Reveal className="lg:col-span-7">
            <h2 className="display-lg">Partner with a Quality & Safety Committed Group</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-ink-foreground/60">
              Need specialized liquid transport or site solutions with verified quality processes and 24/7 live tracking? Talk to our safety & operations team today.
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
