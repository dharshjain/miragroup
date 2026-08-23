import { createFileRoute } from "@tanstack/react-router";
import { DetailList, StrengthBand, VerticalCta, VerticalHero } from "@/components/vertical-page";
import water from "@/assets/water.jpg";

export const Route = createFileRoute("/businesses/water")({
  head: () => ({
    meta: [
      { title: "Water Solutions — Mira Enterprises, Kutch" },
      {
        name: "description",
        content:
          "Raw Water, RO Water, DM Water and Bulk Water Supply for industrial, commercial, construction, and infrastructure requirements across Kutch.",
      },
      { property: "og:title", content: "Water Solutions — Mira Enterprises" },
      {
        property: "og:description",
        content: "Complete water supply solutions for industrial, commercial, and construction requirements.",
      },
    ],
  }),
  component: WaterPage,
});

function WaterPage() {
  return (
    <>
      <VerticalHero
        index="01"
        entity="Mira Enterprises"
        title="Complete Water Supply Solutions"
        image={water}
      >
        <p>
          Mira Enterprises provides water supply solutions for industrial and commercial
          requirements, including Raw Water, RO Water, DM Water and Bulk Water Supply.
        </p>
        <p>
          Our focus is on dependable supply, consistent service and solutions suited to the specific
          application of each customer.
        </p>
      </VerticalHero>

      <DetailList
        label="Our Water Solutions"
        items={[
          {
            t: "Raw Water",
            d: "Raw water supplied for a wide range of industrial, commercial and operational requirements. It is suitable for applications such as process operations, utility systems, construction activities, cleaning and other uses where treated or purified water is not required. Our focus is on dependable availability, timely delivery and supply volumes aligned with customer requirements.",
          },
          {
            t: "RO Water",
            d: "Reverse Osmosis (RO) water is purified through a membrane-based treatment process that reduces dissolved salts, impurities and other contaminants. It is suitable for industrial processes, manufacturing operations, equipment use and applications where improved water quality is required. We provide RO water with a focus on consistent quality and reliable supply.",
          },
          {
            t: "DM Water",
            d: "Demineralized (DM) water is treated to remove dissolved mineral ions, making it suitable for industrial applications where low-mineral water is important. It can be used in boilers, cooling systems, manufacturing processes, laboratories and other technical applications where mineral deposits or conductivity need to be controlled. Supply can be planned according to the customer's operational requirements.",
          },
          {
            t: "Bulk Water Supply (Tanker Load)",
            d: "Bulk water supply provides a convenient and dependable solution for customers requiring large quantities of water at their site. Water is delivered through tanker loads for industrial, commercial, construction, infrastructure and other operational requirements. Our tanker-based supply model helps customers manage high-volume water needs with scheduled deliveries, flexible quantities and reliable service based on their location and consumption requirements.",
          },
        ]}
      />

      <StrengthBand
        label="Why Choose Mira Enterprises?"
        items={[
          "Reliable supply",
          "Multiple water categories",
          "Industrial-focused service",
          "Customer-specific requirements",
          "Experienced operational team",
        ]}
      />

      <VerticalCta />
    </>
  );
}
