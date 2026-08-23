import { createFileRoute } from "@tanstack/react-router";
import { StrengthBand, VerticalCta, VerticalHero } from "@/components/vertical-page";
import saltPans from "@/assets/raw-salt-pans.jpg";

export const Route = createFileRoute("/businesses/salt")({
  head: () => ({
    meta: [
      { title: "Raw Salt — Mira Salt Works, Kutch" },
      {
        name: "description",
        content:
          "Natural, unrefined salt produced from seawater and supplied in bulk for industrial applications from Mira's dedicated salt pans in Kutch.",
      },
      { property: "og:title", content: "Raw Salt — Mira Salt Works" },
      {
        property: "og:description",
        content:
          "Natural, unrefined seawater salt supplied in bulk for chemical manufacturing, chlor-alkali, water treatment, textile, leather and food processing.",
      },
    ],
  }),
  component: SaltPage,
});

function SaltPage() {
  return (
    <>
      <VerticalHero
        index="05"
        entity="Mira Salt Works"
        title="Raw Salt"
        image={saltPans}
      >
        <p>
          Natural, unrefined salt produced from seawater and supplied in bulk for a wide range of industrial applications. Mira has its own salt pans dedicated to the production of raw salt, enabling a reliable and consistent supply for large-scale industrial requirements.
        </p>
        <p>
          Raw salt is widely used across industries including chemical manufacturing, chlor-alkali processing, water treatment, textile processing, leather, food processing and various other manufacturing applications. Available in bulk quantities, it can be supplied according to required quality, particle size and application-specific requirements.
        </p>
      </VerticalHero>

      <StrengthBand
        label="Our Capabilities"
        items={[
          "Dedicated salt pans in Kutch",
          "Natural seawater solar evaporation",
          "Bulk supply for large-scale requirements",
          "Custom quality & particle size specifications",
          "Reliable & consistent industrial supply",
        ]}
      />

      <VerticalCta />
    </>
  );
}
