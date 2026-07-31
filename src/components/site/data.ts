import explorer from "@/assets/halo-explorer.jpg.asset.json";
import med from "@/assets/halo-med.jpg.asset.json";
import logo from "@/assets/halo-logo.jpg.asset.json";

export const IMAGES = {
  explorer: explorer.url,
  med: med.url,
  logo: logo.url,
};

export const MODELS = [
  {
    id: "model-a",
    code: "Model A",
    name: "Explorer Edition",
    subtitle: "Full-width saloon",
    image: explorer.url,
    summary:
      "Prioritises internal volume, maximum all-weather protection and an expansive full-width main cabin for liveaboards, high-latitude explorers and extended-cruising couples.",
    features: [
      "Full-width main saloon with panoramic glazing",
      "Single offshore-safe front access door",
      "Integrated indented handrails on the aluminium roof top",
      "Optimised for liveaboard and high-latitude passage-making",
    ],
  },
  {
    id: "model-b",
    code: "Model B",
    name: "Med / Vacation Edition",
    subtitle: "Forward recessed cockpit",
    image: med.url,
    summary:
      "Optimised for part-time cruising vacations and the charter market, pairing a slightly smaller main cabin with a sheltered forward recessed cockpit.",
    features: [
      "Sheltered forward recessed cockpit seating area",
      "Custom foredeck sun pads",
      "Open-air entertainment zones fore and aft",
      "Charter-ready layout and amenities",
    ],
  },
] as const;

export const SHARED_SPECS = [
  { label: "LOA (length overall)", value: "13.5 m" },
  { label: "Beam overall", value: "6.6 m" },
  { label: "Hull form", value: "Slender semi-displacement multihull, ≥ 11:1 L/B per hull" },
  { label: "Keels", value: "Foam-filled structural mini-keels — kite tracking & tidal beaching" },
  { label: "Bridge-deck clearance", value: "800 mm static" },
  { label: "Target lightcraft displacement", value: "~4,600 kg fully outfitted" },
  { label: "Construction", value: "CNC-cut marine-grade aluminium (Sealium / 5083-H111)" },
  { label: "Insulation", value: "Spray-cork thermal & acoustic lining" },
  { label: "Certification", value: "CE Category A — Ocean" },
];

export const PROPULSION_SPECS = [
  { label: "Engines", value: "Twin ePropulsion high-voltage pods, fixed under-hull" },
  { label: "Steering", value: "Independent mechanical transom-hung rudders" },
  { label: "Energy reservoir", value: "ePropulsion 96 V lithium — 2 × 30 kWh = 60 kWh" },
  { label: "Power conversion", value: "DC-DC step-down to isolated 24 V and 12 V circuits" },
  { label: "Solar array", value: "~38 m² Tier-1 rigid monocrystalline, flush hardtop" },
  { label: "Peak solar output", value: "~7.5 – 8.0 kWp (Victron SmartSolar MPPT)" },
  { label: "Auxiliary drive", value: "Standard 40 m² LibertyKite with deployment bag" },
  { label: "Deck hardware", value: "Reinforced cleats/padeyes, backing plates to bulkheads" },
  { label: "Regeneration", value: "Native ePropulsion CAN-bus hydro-regeneration under kite" },
];

export const SOLAR_YIELDS = [
  { season: "Summer peak", months: "Jun – Aug", sun: "6.5 – 8 sun hours/day", yield: "~32 – 40 kWh/day" },
  { season: "Spring / Autumn", months: "Apr – May / Sep – Oct", sun: "4 – 5 sun hours/day", yield: "~20 – 26 kWh/day" },
  { season: "Winter low", months: "Nov – Feb", sun: "2 – 3 sun hours/day", yield: "~10 – 15 kWh/day" },
];

export const REGEN_PROFILE = [
  { speed: "5.0 kts", input: "~1.2 kW continuous" },
  { speed: "6.5 kts", input: "~2.4 kW continuous" },
];

export const PACKS = [
  {
    id: "off-grid-endurance",
    model: "Model A",
    name: "Off-Grid Endurance Pack",
    price: 28000,
    items: [
      "Extended battery bank +30 kWh (90 kWh total)",
      "Solbian Maxeon high-efficiency flush solar laminate upgrade",
      "Marine climate control (A/C & heating)",
    ],
  },
  {
    id: "blue-water-expedition",
    model: "Model A",
    name: "Blue-Water Expedition Pack",
    price: 31000,
    items: [
      "Advanced offshore navigation & comms suite — dual MFD chartplotters, radar, AIS transponder, satellite comms terminal",
      "Upgraded fast-charging shore power infrastructure (Victron MultiPlus)",
    ],
  },
  {
    id: "med-comfort-power",
    model: "Model B",
    name: "Mediterranean Comfort & Power Pack",
    price: 29500,
    items: [
      "Marine climate control (A/C & heating)",
      "Solbian Maxeon solar upgrade",
      "Upgraded fast-charging shore power infrastructure",
    ],
  },
  {
    id: "charter-entertainment",
    model: "Model B",
    name: "Charter & Entertainment Navigation Pack",
    price: 27000,
    items: [
      "Advanced offshore navigation & comms suite",
      "Premium deck & cockpit lounging amenities",
      "Upgraded auxiliary systems",
    ],
  },
] as const;

export const BASE_PRICE = 450000;

export const RUNNING_COSTS = [
  { craft: "Halo 13.5 m solar-electric", cost: "£1,650 – £2,500 / year", note: "Zero engine service, minimal energy and winterisation", highlight: true },
  { craft: "Traditional diesel sailing catamaran (13.5 m)", cost: "£5,500 – £7,500 / year", note: "Engine servicing, fuel, rig and sail maintenance", highlight: false },
  { craft: "Traditional high-power outboard power cat (13.5 m)", cost: "£14,000 – £22,000+ / year", note: "Fuel-dominated running costs and outboard servicing", highlight: false },
];

export const PARTNERS = [
  { name: "Dixon Yacht Design", role: "Naval architecture" },
  { name: "LibertyKites", role: "Auxiliary kite propulsion" },
  { name: "ePropulsion", role: "96 V electric drivetrain" },
  { name: "Solbian", role: "High-efficiency solar laminates" },
  { name: "CE Category A", role: "Ocean certification standard" },
];

export const BUILD_LOCATIONS = ["New Zealand", "Australia", "Germany", "Italy", "General EU"];
