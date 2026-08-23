import water from "@/assets/water.jpg";
import tankers from "@/assets/tankers.jpg";
import equipment from "@/assets/equipment.jpg";
import oil from "@/assets/oil.jpg";
import salt from "@/assets/raw-salt-pans.jpg";

export type Vertical = {
  index: string;
  slug: string;
  to: string;
  name: string;
  entity: string;
  headline: string;
  summary: string;
  image: string;
  cta: string;
  specs: string[];
};

export const verticals: Vertical[] = [
  {
    index: "01",
    slug: "water",
    to: "/businesses/water",
    name: "Water Solutions",
    entity: "Mira Water Works",
    headline: "Reliable Water for Industrial & Commercial Needs",
    summary:
      "Raw Water, RO Water, DM Water and Distilled Water supplied with a focus on reliability, quality and timely delivery.",
    image: water,
    cta: "Explore Water Solutions",
    specs: ["Raw Water", "RO Water", "DM Water", "Distilled Water"],
  },
  {
    index: "02",
    slug: "tankers",
    to: "/businesses/tankers",
    name: "Chemical & Specialized Tankers",
    entity: "Mira Transport Co.",
    headline: "Safe Movement of Specialized Liquid Cargo",
    summary:
      "Specialized transportation for acids, chemicals and liquid cargo through ACN, SS, coated and ISO tanker capabilities, supported by experienced operations and safety-focused practices.",
    image: tankers,
    cta: "Explore Tanker Solutions",
    specs: ["ACN Tankers", "SS Tankers", "Rubber-Lined / Coated", "ISO Tanks"],
  },
  {
    index: "03",
    slug: "heavy-vehicles",
    to: "/businesses/heavy-vehicles",
    name: "Heavy Vehicles & Equipment",
    entity: "Mira Heavy Vehicles",
    headline: "Equipment That Keeps Industry Moving",
    summary:
      "Trucks, dumpers, loaders, JCBs and forklifts supporting cargo handling, salt operations, container movement and industrial requirements.",
    image: equipment,
    cta: "Explore Equipment",
    specs: ["Trucks", "Dumpers", "Loaders", "JCBs", "Forklifts"],
  },
  {
    index: "04",
    slug: "oil",
    to: "/businesses/oil",
    name: "Oil Transportation",
    entity: "Mira Edible Oil Transport",
    headline: "Dedicated Transportation for Liquid Oils",
    summary:
      "Reliable tanker transportation for edible and non-edible oils, with a focus on safe handling, product integrity and timely delivery.",
    image: oil,
    cta: "Explore Oil Transportation",
    specs: ["Edible Oils", "Non-Edible Oils", "Dedicated Tankers", "Contracted Capacity"],
  },
  {
    index: "05",
    slug: "salt",
    to: "/businesses/salt",
    name: "Raw Salt",
    entity: "Mira Salt Works",
    headline: "Natural, Unrefined Seawater Salt from Kutch",
    summary:
      "Natural, unrefined salt produced from seawater and supplied in bulk for a wide range of industrial applications from Mira's dedicated salt pans in Kutch.",
    image: salt,
    cta: "Explore Raw Salt",
    specs: ["Natural Unrefined Salt", "Seawater Salt Pans", "Bulk Industrial Quantities", "Custom Quality & Sizing"],
  },
];

