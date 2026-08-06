const explorer = { url: "/images/halo-explorer.jpg" };
const med = { url: "/images/halo-med.jpg" };
const logo = { url: "/images/halo-logo.jpg" };

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
    subtitle: "Full length saloon",
    image: med.url,
    capacity: "4 private guests (short-handed setup)",
    weight: "7,270 kg deployed",
    cruise: "5.0 kts infinite solar cruise",
    tender: "True Kit 400 + ePropulsion Spirit 2.0",
    summary:
      "Prioritises internal volume, maximum all-weather protection and an expansive full length main cabin for liveaboards, high-latitude explorers and extended-cruising couples.",
    features: [
      "Full length main saloon with panoramic glazing",

      "Single offshore-safe front access door",
      "Integrated indented handrails on the aluminium roof top",
      "Optimised for liveaboard and blue water passage-making",
    ],
  },
  {
    id: "model-b",
    code: "Model B",
    name: "Coastal Edition",
    subtitle: "Forward recessed cockpit",
    image: explorer.url,
    capacity: "8 charter guests + 2 professional crew",
    weight: "8,335 kg deployed",
    cruise: "4.5 kts infinite solar cruise",
    tender: "True Kit 400 + ePropulsion Spirit 2.0",

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

export const MODEL_COMPARISON = [
  {
    metric: "Primary target market",
    explorer: "Private couples & blue-water cruisers",
    coastal: "Luxury charter operations & vacation fleets",
  },
  {
    metric: "Standard passenger capacity",
    explorer: "4 private guests (short-handed setup)",
    coastal: "8 charter guests + 2 professional crew",
  },
  {
    metric: "Base configuration deployed weight",
    explorer: "7,270 kg (ultra-lightweight footprint)",
    coastal: "8,335 kg (full payload outfitting)",
  },
  {
    metric: "Standard energy storage",
    explorer: "47.0 kWh (2 × 23.5 kWh, one block per hull)",
    coastal: "47.0 kWh (2 × 23.5 kWh, one block per hull)",
  },
  {
    metric: "Long-range battery upgrade",
    explorer: "67.4 kWh via +2 × 10.2 kWh (Off-Grid Endurance Pack)",
    coastal: "67.4 kWh via +2 × 10.2 kWh (equipment pack option)",
  },
  {
    metric: "Long-range option weight impact",
    explorer: "7,470 kg operational mass",
    coastal: "8,535 kg operational mass",
  },
  {
    metric: "Base infinite solar cruise speed",
    explorer: "5.0 kts (pure daylight equilibrium)",
    coastal: "4.5 kts (pure daylight equilibrium)",
  },
  {
    metric: "Upgraded infinite solar cruise speed",
    explorer: "4.9 kts (minor extra mass)",
    coastal: "4.4 kts (minor extra mass)",
  },
  {
    metric: "Overnight safe speed (battery only)",
    explorer: "3.8 kts sustained for 12 hours",
    coastal: "3.5 kts sustained for 12 hours",
  },
  {
    metric: "Overnight safe speed (kite assisted)",
    explorer: "4.5+ kts with net battery generation",
    coastal: "4.4+ kts with net battery generation",
  },
  {
    metric: "Fresh water utility tankage",
    explorer: "400 L symmetrical (2 × 200 L tanks)",
    coastal: "400 L symmetrical (2 × 200 L tanks)",
  },
  {
    metric: "Included toys & tender platform",
    explorer: "True Kit 400 + ePropulsion Spirit 2.0",
    coastal: "True Kit 400 + ePropulsion Spirit 2.0",
  },
];

export const SHARED_SPECS = [
  { label: "LOA (length overall)", value: "13.5 m" },
  { label: "Beam overall", value: "6.6 m" },
  { label: "Hull form", value: "Slender semi-displacement multihull, ≥ 11:1 L/B per hull" },
  { label: "Keels", value: "Foam-filled structural mini-keels — kite tracking & tidal beaching" },
  { label: "Bridge-deck clearance", value: "800 mm static" },
  { label: "Deployed weight — Explorer", value: "7,270 kg base configuration (7,470 kg with the long-range battery)" },
  { label: "Deployed weight — Coastal", value: "8,335 kg base configuration (8,535 kg with the long-range battery)" },
  { label: "Construction", value: "CNC-cut marine-grade aluminium (Sealium / 5083-H111)" },
  { label: "Insulation", value: "Spray-cork thermal & acoustic lining" },
  { label: "Fresh water capacity", value: "400 L symmetrical — 2 × 200 L integral structural lower-hull tanks (both models)" },
  { label: "Tender & toys", value: "True Kit 400 with ePropulsion Spirit 2.0 outboard" },
  { label: "Certification", value: "CE Category A — Ocean" },
];

export const PROPULSION_SPECS = [
  { label: "Engines", value: "Twin ePropulsion high-voltage pods, fixed under-hull" },
  { label: "Steering", value: "Independent mechanical transom-hung rudders" },
  { label: "Energy reservoir", value: "ePropulsion 96 V lithium — 47.0 kWh standard (2 × 23.5 kWh, one block per hull)" },
  { label: "Long-range battery option", value: "+2 × 10.2 kWh, one per hull = 67.4 kWh total (via equipment pack)" },
  { label: "Power conversion", value: "DC-DC step-down to isolated 24 V and 12 V circuits" },
  { label: "Solar array", value: "~38 m² Maxeon all-black rigid glass modules, rail-mounted on the hardtop with airflow beneath" },
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

export const CRUISE_DEMAND = {
  speed: "5.0 kts",
  draw: "~2.6 kW",
  note: "Twin ePropulsion pods, benign conditions — flat water, no adverse current, ~1.3 kW per pod.",
  hotel: "~0.4 kW",
};

export const SOLAR_VS_DEMAND = [
  { condition: "Clear summer midday", input: "~6.0 – 6.8 kW", verdict: "Cruise + hotel load covered, surplus charges the bank" },
  { condition: "Light / high cloud", input: "~3.5 – 4.5 kW", verdict: "Cruise + hotel load covered, modest surplus" },
  { condition: "Broken cloud", input: "~2.5 – 3.2 kW", verdict: "Break-even to slight surplus at 5 kts" },
  { condition: "Heavy overcast", input: "~0.8 – 1.5 kW", verdict: "Shortfall drawn from the 47 kWh bank" },
];

// Hydro-regeneration under kite power. Per-pod values follow the ePropulsion
// 20 kW pod regeneration curve; twin figures are the two pods combined.
export const REGEN_PROFILE = [
  { speed: 3.0, perPod: 0.15, twin: 0.3 },
  { speed: 4.0, perPod: 0.35, twin: 0.7 },
  { speed: 5.0, perPod: 0.6, twin: 1.2 },
  { speed: 6.5, perPod: 1.2, twin: 2.4 },
];


export const PACKS = [
  {
    id: "off-grid-endurance",
    model: "Model A",
    name: "Off-Grid Endurance Pack",
    price: 32500,
    items: [
      "Long-range battery upgrade +20.4 kWh (2 × 10.2 kWh, one per hull) — 67.4 kWh total",
      "High-efficiency 24 V DC marine watermaker — ~50 – 100 L/hour from the 24 V step-down architecture",
      "Marine climate control (A/C & heating)",
    ],
    note: "Watermaker included: essential for high-latitude, off-grid liveaboards on extended passages where shore water is unavailable.",
  },
  {
    id: "blue-water-expedition",
    model: "Model A",
    name: "Blue-Water Expedition Pack",
    price: 35000,
    items: [
      "Advanced offshore navigation & comms suite — dual MFD chartplotters, radar, AIS transponder, satellite comms terminal",
      "Upgraded fast-charging shore power infrastructure (Victron MultiPlus)",
    ],
    note: "",
  },
  {
    id: "med-comfort-power",
    model: "Model B",
    name: "Mediterranean Comfort & Power Pack",
    price: 35000,
    items: [
      "Marine climate control (A/C & heating)",
      "Long-range battery upgrade +20.4 kWh (2 × 10.2 kWh, one per hull) — 67.4 kWh total",
      "Upgraded fast-charging shore power infrastructure",
    ],
    note: "No watermaker by design: charter and vacation cruising is port-to-port with frequent marina stopovers, so desalinator servicing and winterisation are deliberately kept off the boat. The 400 L standard tank covers the itinerary.",
  },
  {
    id: "charter-entertainment",
    model: "Model B",
    name: "Charter & Entertainment Navigation Pack",
    price: 32500,
    items: [
      "Advanced offshore navigation & comms suite",
      "Premium deck & cockpit lounging amenities",
      "Upgraded auxiliary systems",
    ],
    note: "",
  },
] as const;


// Euro is the contract currency. Legacy GBP figures were converted at the
// standard rate of 1.168 and rounded to the nearest €2,500.
export const EUR_RATE = 1.168;

export const BASE_PRICE = 525000;

export const formatEur = (value: number) => `€${value.toLocaleString("en-GB")}`;

export const RUNNING_COSTS = [
  { craft: "Halo 13.5 m solar-electric", cost: "€1,950 – €2,900 / year", note: "Zero engine service, minimal energy and winterisation", highlight: true },
  { craft: "Traditional diesel sailing catamaran (13.5 m)", cost: "€6,400 – €8,750 / year", note: "Engine servicing, fuel, rig and sail maintenance", highlight: false },
  { craft: "Traditional high-power outboard power cat (13.5 m)", cost: "€16,350 – €25,700+ / year", note: "Fuel-dominated running costs and outboard servicing", highlight: false },
];

export const PARTNERS = [
  { name: "Dixon Yacht Design", role: "Naval architecture" },
  { name: "LibertyKites", role: "Auxiliary kite propulsion" },
  { name: "ePropulsion", role: "96 V electric drivetrain" },
  { name: "Maxeon", role: "All-black rigid glass solar modules" },
  { name: "CE Category A", role: "Ocean certification standard" },
];


export const BUILD_LOCATIONS = ["New Zealand", "Australia", "Germany", "Italy", "Undecided"];
