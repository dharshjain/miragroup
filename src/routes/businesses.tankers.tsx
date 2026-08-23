import { createFileRoute } from "@tanstack/react-router";
import { DetailList, StrengthBand, VerticalCta, VerticalHero } from "@/components/vertical-page";
import tankers from "@/assets/tankers.jpg";

export const Route = createFileRoute("/businesses/tankers")({
  head: () => ({
    meta: [
      { title: "Chemical & Specialized Tankers — Mira Transport Co." },
      {
        name: "description",
        content:
          "Specialized tanker transportation for acids, chemicals and liquid cargo with ACN, SS, rubber-lined and ISO tank capabilities.",
      },
      { property: "og:title", content: "Acid & Chemical Tanker Transportation — Mira Transport" },
      {
        property: "og:description",
        content: "Safe movement of specialized liquid cargo with a dedicated tanker fleet.",
      },
    ],
  }),
  component: TankerPage,
});

function TankerPage() {
  return (
    <>
      <VerticalHero
        index="02"
        entity="Mira Transport Co."
        title="Safe Movement of Specialized Liquid Cargo"
        image={tankers}
      >
        <p>
          Transportation of acids and chemicals requires specialized vehicles, trained personnel and
          disciplined operating procedures.
        </p>
        <p>
          Mira Transport Co. provides specialized tanker transportation solutions for industrial
          liquid cargo, with capabilities covering different tanker constructions and applications.
        </p>
      </VerticalHero>

      <StrengthBand
        label="Our Fleet Includes"
        items={[
          "ACN Tankers",
          "SS Tankers",
          "Rubber-Lined / Coated Tankers",
          "ISO Tank Transportation",
        ]}
      />

      <DetailList
        label="Tanker Types"
        items={[
          {
            t: "ACN Tankers",
            d: "Acrylonitrile (ACN) Tankers are specialized tankers designed for the safe and reliable transportation of Acrylonitrile (ACN) in accordance with applicable handling and transportation requirements. These tankers are configured with suitable tank materials, fittings, safety features and operational specifications to support the secure movement of ACN between production facilities, storage terminals and industrial destinations.",
          },
          {
            t: "SS Tankers",
            d: "Stainless Steel (SS) tankers are designed for liquid cargo applications where greater corrosion resistance, hygiene and product compatibility are required. Their stainless-steel construction makes them suitable for selected chemicals, food-grade liquids and other sensitive liquid products, depending on the specific cargo and grade of stainless steel required.",
          },
          {
            t: "Rubber-Lined / Coated Tankers",
            d: "Specialized tankers equipped with rubber lining or protective chemical coatings engineered specifically for highly reactive acids and aggressive liquid chemicals, ensuring vessel longevity and zero cargo contamination.",
          },
          {
            t: "ISO Tank Transportation",
            d: "Intermodal ISO container tank transport solutions enabling seamless, compliant movement of liquid chemical cargo across road, rail, and port logistics channels nationwide.",
          },
        ]}
      />

      <section className="border-b border-border">
        <div className="shell grid gap-12 py-20 lg:grid-cols-12">
          <p className="label-tech border-t border-foreground/20 pt-4 text-primary lg:col-span-4">
            Our Commitment
          </p>
          <div className="grid gap-10 lg:col-span-7 lg:col-start-6 lg:grid-cols-2">
            {[
              {
                t: "Safety First",
                d: "Operational safety remains central to specialized cargo movement.",
              },
              {
                t: "Reliable Delivery",
                d: "We focus on timely movement and dependable service.",
              },
              {
                t: "Specialized Fleet",
                d: "Different tanker configurations allow us to address diverse cargo requirements.",
              },
              {
                t: "Experienced Team",
                d: "Our drivers, supervisors and operational staff bring practical industry experience.",
              },
            ].map((x) => (
              <div key={x.t} className="border-t border-border pt-5">
                <h2 className="font-display text-xl">{x.t}</h2>
                <p className="mt-3 text-muted-foreground">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="shell grid gap-10 py-16 lg:grid-cols-12">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground lg:col-span-7 lg:col-start-6">
            Our experienced drivers and supervisors are trained to understand industrial safety
            practices, customer requirements and the operational discipline required for specialized
            cargo movement.
          </p>
        </div>
      </section>

      <VerticalCta />
    </>
  );
}
