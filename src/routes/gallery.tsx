import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useHeaderVisible } from "@/hooks/use-header-visible";
import { PageIntro } from "@/components/page-intro";
import { Reveal } from "@/components/motion-primitives";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Our Operations in Action | Mira Group" },
      {
        name: "description",
        content:
          "Visual showcase of Mira Group's fleet, chemical tankers, heavy vehicles, bulk water supply activities, and salt fields in Kutch.",
      },
      { property: "og:title", content: "Gallery — Mira Group Operations" },
      {
        property: "og:description",
        content:
          "Explore authentic photographs of Mira Group's specialized fleet, heavy machinery, bulk water plant, and salt manufacturing in Kutch.",
      },
    ],
  }),
  component: GalleryPage,
});

type GalleryCategory =
  | "Fleet & Tankers"
  | "Heavy Vehicles"
  | "Bulk Water Supply"
  | "Salt Operations";

type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  location: string;
  image: string;
  caption: string;
};

const galleryData: GalleryItem[] = [
  // Fleet & Tankers (8 items from /public/Fleet and tanker/)
  {
    id: "ft-1",
    title: "Specialized Acid & Chemical Tankers",
    category: "Fleet & Tankers",
    location: "Gandhidham Logistics Hub — Kutch",
    image: "/Fleet and tanker/DSC00082.JPG",
    caption: "Mira Logistics central fleet of specialized acid and liquid chemical tankers staged for Pan-India transit.",
  },
  {
    id: "ft-2",
    title: "High-Capacity Cargo Tankers",
    category: "Fleet & Tankers",
    location: "Kandla Port Industrial Corridor",
    image: "/Fleet and tanker/DSC00086.JPG",
    caption: "High-volume chemical payload tankers compliant with national hazardous cargo transport standards.",
  },
  {
    id: "ft-3",
    title: "Stainless Steel Chemical Tanker",
    category: "Fleet & Tankers",
    location: "Gandhidham Operational Terminal",
    image: "/Fleet and tanker/DSC00096.JPG",
    caption: "High-grade SS tanker specifically engineered for corrosive chemical and industrial liquid cargo.",
  },
  {
    id: "ft-4",
    title: "Multi-Axle Specialized Fleet",
    category: "Fleet & Tankers",
    location: "Mundra Port Logistics Corridor",
    image: "/Fleet and tanker/DSC00186.JPG",
    caption: "Heavy-duty multi-axle tankers ensuring load distribution, road safety, and continuous long-haul transit.",
  },
  {
    id: "ft-5",
    title: "Chemical Logistics Staging Yard",
    category: "Fleet & Tankers",
    location: "Gandhidham Terminal",
    image: "/Fleet and tanker/DSC00282.JPG",
    caption: "Dedicated logistics parking and inspection terminal for liquid cargo dispatches.",
  },
  {
    id: "ft-6",
    title: "Rubber-Lined Chemical Tanker",
    category: "Fleet & Tankers",
    location: "Kutch Logistics Facility",
    image: "/Fleet and tanker/DSC_0155.JPG",
    caption: "Custom rubber-lined tanker suitable for concentrated acid and reactive liquid transportation.",
  },
  {
    id: "ft-7",
    title: "Pan-India Transport Fleet",
    category: "Fleet & Tankers",
    location: "Kandla Highway Logistics Hub",
    image: "/Fleet and tanker/DSC_0156.JPG",
    caption: "Long-haul tanker lineup dedicated to seamless industrial supply chain transport across India.",
  },
  {
    id: "ft-8",
    title: "Mira Group Logistics Convoy",
    category: "Fleet & Tankers",
    location: "Gandhidham Terminal — Kutch",
    image: "/Fleet and tanker/slid1.jpg",
    caption: "Primary fleet line of acid and chemical transportation tankers operational across industrial hubs.",
  },

  // Heavy Vehicles (4 items from /public/Heavy vehicles/)
  {
    id: "hv-1",
    title: "Heavy Tracked Excavator Operations",
    category: "Heavy Vehicles",
    location: "Industrial Project Site — Kutch",
    image: "/Heavy vehicles/20150827_125116.jpg",
    caption: "Heavy machinery executing earthmoving, land leveling, and site excavation operations.",
  },
  {
    id: "hv-2",
    title: "Site Clearing Excavator",
    category: "Heavy Vehicles",
    location: "Infrastructure Development Hub",
    image: "/Heavy vehicles/20150827_125118.jpg",
    caption: "High-capacity excavator used in major site preparation and earthmoving projects.",
  },
  {
    id: "hv-3",
    title: "Material Handling & Heavy Fleet",
    category: "Heavy Vehicles",
    location: "Gandhidham Equipment Depot",
    image: "/Heavy vehicles/IMAG0148.jpg",
    caption: "Heavy vehicles and specialized loaders deployed for site development and salt pan excavation.",
  },
  {
    id: "hv-4",
    title: "Heavy Duty Excavation Equipment",
    category: "Heavy Vehicles",
    location: "Mundra Heavy Equipment Bay",
    image: "/Heavy vehicles/IMAG0149.jpg",
    caption: "Heavy excavators supporting land development and industrial earthmoving requirements.",
  },

  // Bulk Water Supply (4 items from /public/bulk Water supply/)
  {
    id: "ws-1",
    title: "Bulk Water Purification & Tanker Loading",
    category: "Bulk Water Supply",
    location: "Gandhidham Water Terminal",
    image: "/bulk Water supply/513e5d92-238f-476d-8763-5a7157d1852b.jpg",
    caption: "High-volume bulk water supply tankers supplying purified Raw, RO, and DM water to industries.",
  },
  {
    id: "ws-2",
    title: "Industrial RO Water Delivery Fleet",
    category: "Bulk Water Supply",
    location: "Kutch Industrial Zone",
    image: "/bulk Water supply/IMG00297-20120116-1048.jpg",
    caption: "Industrial grade RO purified water delivery tankers serving manufacturing plants.",
  },
  {
    id: "ws-3",
    title: "Bulk Water Supply Dispatch Bay",
    category: "Bulk Water Supply",
    location: "Mira Water Depot — Gandhidham",
    image: "/bulk Water supply/IMG00311-20120203-1112.jpg",
    caption: "Operational loading station for continuous bulk industrial water delivery.",
  },
  {
    id: "ws-4",
    title: "Demineralized & Utility Water Logistics",
    category: "Bulk Water Supply",
    location: "Kandla Industrial Belt",
    image: "/bulk Water supply/IMG00529-20120804-1635.jpg",
    caption: "Bulk water supply infrastructure fulfilling industrial utility and process water needs.",
  },

  // Salt Operations (4 items from /public/Salt/)
  {
    id: "so-1",
    title: "Solar Salt Evaporation Ponds",
    category: "Salt Operations",
    location: "Adesar / Rapar Salt Fields — Kutch",
    image: "/Salt/20151208_095108.jpg",
    caption: "Natural seawater evaporation pans located in the premier salt manufacturing region of Kutch.",
  },
  {
    id: "so-2",
    title: "Raw Sea Salt Extraction",
    category: "Salt Operations",
    location: "Mira Salt Works — Kutch",
    image: "/Salt/20151208_095115.jpg",
    caption: "High-density brine crystallizing in solar pans prior to salt harvesting.",
  },
  {
    id: "so-3",
    title: "Industrial Salt Harvest Stockpile",
    category: "Salt Operations",
    location: "Adesar Salt Storage Works",
    image: "/Salt/20151208_101447.jpg",
    caption: "Harvested unrefined sea salt stacked for industrial washing, refining, and bulk movement.",
  },
  {
    id: "so-4",
    title: "Bulk Salt Loading & Dispatch",
    category: "Salt Operations",
    location: "Kutch Salt Depot",
    image: "/Salt/20151208_101501.jpg",
    caption: "Bulk industrial salt loading operations for chemical processing plants and export supply.",
  },
];

const categories = [
  "All",
  "Fleet & Tankers",
  "Heavy Vehicles",
  "Bulk Water Supply",
  "Salt Operations",
] as const;

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
  const headerVisible = useHeaderVisible();

  const filteredItems =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageIntro label="Gallery" title="Our Operations in Action">
        <p>
          Explore Mira Group's fleet, infrastructure, heavy equipment, water supply activities, and salt operations.
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.05}>
                <div
                  onClick={() => setActiveImage(item)}
                  className="group cursor-pointer overflow-hidden border border-border bg-card transition-all duration-500 hover:border-primary aspect-4/3 relative"
                >
                  <img
                    src={item.image}
                    alt="Gallery item"
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[0.15] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
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
            className="relative max-w-5xl w-full border border-ink-border bg-ink p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 text-ink-foreground/80 hover:text-primary label-tech text-xs cursor-pointer z-10 bg-black/60 px-3 py-1 border border-ink-border backdrop-blur-sm"
            >
              CLOSE [ESC]
            </button>
            <div className="aspect-video w-full overflow-hidden border border-ink-border bg-black/40 flex items-center justify-center">
              <img
                src={activeImage.image}
                alt="Expanded operational photo"
                className="max-h-[80vh] w-full object-contain"
              />
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

