import { createFileRoute } from "@tanstack/react-router";
import { StrengthBand, VerticalCta, VerticalHero } from "@/components/vertical-page";
import equipment from "@/assets/equipment.jpg";

export const Route = createFileRoute("/businesses/heavy-vehicles")({
  head: () => ({
    meta: [
      { title: "Heavy Vehicles & Equipment — Mira Heavy Vehicles" },
      {
        name: "description",
        content:
          "Heavy excavators for earthmoving, land development, salt field operations, and industrial site requirements around Kutch.",
      },
      { property: "og:title", content: "Heavy Excavators & Equipment — Mira Group" },
      {
        property: "og:description",
        content: "Heavy excavators supporting industrial site operations, salt fields, and land development.",
      },
    ],
  }),
  component: HeavyPage,
});

function HeavyPage() {
  return (
    <>
      <VerticalHero
        index="03"
        entity="Mira Heavy Vehicles"
        title="Heavy Excavator Equipment Solutions"
        image={equipment}
      >
        <p>
          Industrial site operations require dependable heavy equipment for excavation, earthmoving, land clearing, and material movement.
        </p>
        <p>
          Mira Heavy Vehicles provides heavy excavators dedicated to earthmoving, salt field operations, site development, and heavy industrial project requirements across Kutch.
        </p>
      </VerticalHero>

      <StrengthBand
        label="Excavator Equipment Portfolio"
        items={[
          "Heavy excavators",
          "Earthmoving excavators",
          "Site development equipment",
          "Salt field excavation support",
          "Contractual excavator operations",
        ]}
      />

      <section className="border-b border-border">
        <div className="shell grid gap-10 py-20 lg:grid-cols-12">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
            Our heavy excavators are available for short-term and contractual industrial requirements, helping customers execute large-scale earthmoving and site operations with high efficiency and reliability.
          </p>
        </div>
      </section>

      <VerticalCta />
    </>
  );
}
