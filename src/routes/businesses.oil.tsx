import { createFileRoute } from "@tanstack/react-router";
import { StrengthBand, VerticalCta, VerticalHero } from "@/components/vertical-page";

export const Route = createFileRoute("/businesses/oil")({
  head: () => ({
    meta: [
      { title: "Oil Transportation — Mira Edible Oil Transport" },
      {
        name: "description",
        content:
          "Dedicated tanker transportation for edible and non-edible oils with safe handling, product integrity and timely delivery.",
      },
      { property: "og:title", content: "Dedicated Liquid Oil Transportation — Mira Group" },
      {
        property: "og:description",
        content: "Reliable transportation for edible and non-edible oils.",
      },
    ],
  }),
  component: OilPage,
});

function OilPage() {
  return (
    <>
      <VerticalHero
        index="04"
        entity="Mira Edible Oil Transport"
        title="Reliable Transportation for Edible & Non-Edible Oils"
        image="/Fleet and tanker/DSC00282.JPG"
      >
        <p>
          Mira Group provides specialized transportation services for edible and non-edible oils
          using dedicated and contracted tanker capacity.
        </p>
        <p>
          Our operations are designed around safe handling, timely transportation and maintaining
          the integrity of liquid cargo throughout the movement.
        </p>
      </VerticalHero>

      <StrengthBand
        label="Our Strengths"
        items={[
          "Dedicated tanker capacity (~20 own & ~30 contracted tankers)",
          "Tanker capacity up to 24,000 litres",
          "Experienced operational team",
          "Reliable scheduling & route discipline",
          "Safe cargo handling & food-grade integrity",
          "Customer-focused transportation",
        ]}
      />

      <section className="border-b border-border">
        <div className="shell grid gap-10 py-20 lg:grid-cols-12">
          <p className="label-tech border-t border-foreground/20 pt-4 text-primary lg:col-span-4">
            Fleet Specifications
          </p>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
            <p>
              Mira Group operates a dedicated fleet of approximately 20 own specialized tankers and around 30 contracted tankers dedicated to liquid oil transportation.
            </p>
            <p>
              With tanker capacities benchmarked at 24,000 litres, our operations ensure optimum volume efficiency, temperature stability, and hygienic cargo containment for both edible food-grade oils and non-edible industrial oils.
            </p>
          </div>
        </div>
      </section>

      <VerticalCta />
    </>
  );
}
