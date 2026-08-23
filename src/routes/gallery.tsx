import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useHeaderVisible } from "@/hooks/use-header-visible";
import { PageIntro } from "@/components/page-intro";
import { Reveal, RevealImage } from "@/components/motion-primitives";
import hero from "@/assets/hero-fleet.jpg";
import tankers from "@/assets/tankers.jpg";
import equipment from "@/assets/equipment.jpg";
import water from "@/assets/water.jpg";
import salt from "@/assets/salt.jpg";
import infra from "@/assets/infrastructure.jpg";
import safety from "@/assets/safety.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Our Operations in Action | Mira Group" },
      {
        name: "description",
        content:
          "Visual showcase of Mira Group's fleet, chemical tankers, heavy equipment, water supply activities, salt fields, and industrial infrastructure in Kutch.",
      },
      { property: "og:title", content: "Gallery — Mira Group Operations" },
      {
        property: "og:description",
        content:
          "Explore photographs of Mira Group's specialized fleet, heavy machinery, water plants, and salt manufacturing in Kutch.",
      },
    ],
  }),
  component: GalleryPage,
});

type GalleryItem = {
  id: string;
  title: string;
  category: "Fleet & Tankers" | "Heavy Equipment" | "Water Supply" | "Salt Operations" | "Team & Operations" | "Industrial Activities";
  location: string;
  image: string;
  caption: string;
};

const galleryData: GalleryItem[] = [
  {
    id: "g1",
    title: "Specialized Tanker Fleet Yard",
    category: "Fleet & Tankers",
    location: "Gandhidham — Kutch",
    image: hero,
    caption: "Mira Logistics specialized acid & chemical tankers parked at the central logistics terminal.",
  },
  {
    id: "g2",
    title: "Stainless Steel Chemical Tanker",
    category: "Fleet & Tankers",
    location: "Kandla Port Industrial Corridor",
    image: tankers,
    caption: "High-grade SS tanker for corrosive chemical and liquid cargo movement across Pan-India routes.",
  },
  {
    id: "g3",
    title: "Heavy Loaders & Container Handlers",
    category: "Heavy Equipment",
    location: "Mundra Port Logistics Hub",
    image: equipment,
    caption: "Mira Heavy Vehicles equipment supporting container movement and heavy cargo handling.",
  },
  {
    id: "g4",
    title: "Industrial RO & Water Supply Units",
    category: "Water Supply",
    location: "Gandhidham Water Facility",
    image: water,
    caption: "Mira Enterprises purification and bulk tanker loading bays for Raw, RO, and DM water.",
  },
  {
    id: "g5",
    title: "Raw & Refined Salt Operations",
    category: "Salt Operations",
    location: "Adesar / Rapar — Kutch",
    image: salt,
    caption: "Mira Salt Works sea salt harvesting and processing fields in the salt capital of Kutch.",
  },
  {
    id: "g6",
    title: "Port Logistics Infrastructure",
    category: "Industrial Activities",
    location: "Kandla — Mundra Hub",
    image: infra,
    caption: "Integrated logistical infrastructure handling multi-modal industrial cargo and liquid transport.",
  },
  {
    id: "g7",
    title: "Operational Safety Inspection",
    category: "Team & Operations",
    location: "Terminal Inspection Bay",
    image: safety,
    caption: "Trained supervisors verifying tanker seal integrity, pressure fittings, and safety compliance.",
  },
];

const categories = [
  "All",
  "Fleet & Tankers",
  "Heavy Equipment",
  "Water Supply",
  "Salt Operations",
  "Team & Operations",
  "Industrial Activities",
] as const;

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
  const headerVisible = useHeaderVisible();

  const filteredItems = activeCategory === "All" 
    ? galleryData 
    : galleryData.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageIntro
        label="Gallery"
        title="Our Operations in Action"
      >
        <p>
          Explore Mira Group's fleet, infrastructure, equipment, tanker operations, water supply activities and salt operations.
        </p>
        <p>
          Decades of operational experience captured across key industrial hubs in Kandla, Mundra, Gandhidham, and Adesar.
        </p>
      </PageIntro>

      {/* Category Navigation Bar */}
      <section
        className={`sticky z-40 border-y border-border bg-background transition-all duration-300 ease-in-out ${
          headerVisible ? "top-20" : "top-0"
        }`}
      >
        <div className="shell flex items-center overflow-x-auto py-4 scrollbar-none gap-3 sm:gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 border px-4 py-2 text-xs label-tech transition-all duration-300 ${
                activeCategory === cat
                  ? "border-primary bg-primary text-primary-foreground font-semibold"
                  : "border-border text-foreground/70 hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Editorial Showcase Grid */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="shell">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.06}>
                <div
                  onClick={() => setActiveImage(item)}
                  className="group cursor-pointer border border-border bg-card transition-all duration-500 hover:border-primary"
                >
                  <div className="relative overflow-hidden aspect-4/3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 border border-ink-border bg-ink/80 px-3 py-1 text-[0.65rem] label-tech text-ink-foreground backdrop-blur-sm">
                      {item.category}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-md"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl border border-ink-border bg-ink text-ink-foreground p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 text-ink-foreground/60 hover:text-primary label-tech text-xs"
            >
              CLOSE [ESC]
            </button>
            <div className="aspect-video w-full overflow-hidden border border-ink-border">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-t border-ink-border pt-4">
              <div>
                <span className="label-tech text-primary">{activeImage.category} — {activeImage.location}</span>
                <h3 className="mt-1 font-display text-2xl">{activeImage.title}</h3>
                <p className="mt-2 text-sm text-ink-foreground/70">{activeImage.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="bg-ink text-ink-foreground">
        <div className="shell grid gap-10 py-24 lg:grid-cols-12 lg:py-32">
          <Reveal className="lg:col-span-7">
            <h2 className="display-lg">Require Infrastructure Details or Fleet Specs?</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <p className="text-ink-foreground/60">
              Our teams can provide custom technical specifications, tanker capacities, and operational availability for your cargo.
            </p>
            <Link to="/contact" className="mt-10 inline-block label-tech rule-link text-primary">
              Contact Operations →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
