import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, Section, PageHero } from "@/components/site/SiteShell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TITLE = "FAQ — Buying, Safety & Sustainability | Halo Yachts";
const DESCRIPTION =
  "Answers on buying a Halo yacht — escrow-protected stage payments, single-point warranty and standardised specification — plus CE Category A safety engineering and solar-electric autonomy.";

type Faq = { q: string; a: string };

const BUYING: Faq[] = [
  {
    q: "How does purchasing a Halo yacht work?",
    a: "You contract directly with Halo Yachts under a single, comprehensive purchase agreement for €525,000 + VAT. Halo manages the entire manufacturing process, quality control, independent surveys, and CE Category A certification, delivering a complete, turnkey vessel to you.",
  },
  {
    q: "Who is my point of contact during the build?",
    a: "Halo Yachts is your single point of contact. You are assigned a dedicated Halo Program Manager who handles your build from deposit to handover. You deal directly with us — we manage the shipyard, suppliers, and sub-contractors on your behalf.",
  },
  {
    q: "How is my money protected during construction?",
    a: "Your stage payments sit in a dedicated escrow account. Funds are only released to the shipyard at key build milestones once a Halo-appointed independent marine surveyor inspects the vessel on-site and issues a formal completion certificate.",
  },
  {
    q: "Can I choose the interior finishes and colours?",
    a: "Yes. While structural layouts and electrical systems are 100% standardised for safety and performance, you can select from our Curated Interior Palettes — upholstery fabrics, galley surfaces and cork trims — when placing your order.",
  },
  {
    q: "Why does Halo use standardised specifications?",
    a: "Standardising our structural CAD engineering and system specifications allows us to guarantee strict CE Category A (Ocean) certification, a 24-week delivery timeline, and maximum fleet uptime for charter operators.",
  },
  {
    q: "What warranty comes with my Halo yacht?",
    a: "Halo provides single-point warranty support. If an issue arises, you contact Halo directly. We coordinate all repairs, backed by global manufacturer warranties on ePropulsion drivetrains, Victron power electronics, and structural yard guarantees.",
  },
];

const SAFETY: Faq[] = [

  {
    q: "What offshore category is the Halo 13.5 certified for?",
    a: "The platform is engineered to CE Category A ocean standards for self-sufficient passage-making in extreme offshore conditions.",
  },
  {
    q: "Why aluminium rather than composite construction?",
    a: "Marine-grade Sealium aluminium absorbs impact rather than shattering, is repairable in any working boatyard worldwide, and gives predictable behaviour after grounding or collision.",
  },
  {
    q: "How is the hull structure protected against flooding?",
    a: "Each hull is divided into watertight structural compartments, with the 400 L fresh water tanks integrated into the lower hull volumes for a low centre of gravity.",
  },
  {
    q: "What is the 800 mm bridge-deck clearance for?",
    a: "It keeps the bridge deck clear of wave slamming in a seaway, protecting crew comfort, structural fatigue life and safe motion offshore.",
  },
  {
    q: "Is the yacht safe to handle without engine noise or vibration cues?",
    a: "Silent running improves situational awareness: crew hear traffic, weather and rigging, while pod thrust and battery state are displayed continuously on CAN-bus instrumentation.",
  },
  {
    q: "What happens if one propulsion pod fails?",
    a: "The twin ePropulsion pods are fully independent; the yacht manoeuvres and makes way on a single pod, with the LibertyKite available as an auxiliary downwind drive.",
  },
  {
    q: "How is the 96 V lithium bank protected?",
    a: "The battery system uses managed ePropulsion packs with integrated BMS protection for over-current, over-temperature and cell imbalance, isolated from the 24 V domestic architecture.",
  },
  {
    q: "Can the yacht get home if solar output is lost for days?",
    a: "The 47 kWh standard bank — 67.4 kWh with the long-range upgrade — holds a full reserve for motoring, and the kite plus hydro-regeneration can rebuild charge overnight without any fuel aboard.",
  },
  {
    q: "What safety equipment is fitted as standard?",
    a: "ISO/CE-compliant offshore safety equipment is specified throughout, including liferaft stowage, jackline anchor points, guarded side decks and offshore-grade ground tackle.",
  },
  {
    q: "Is there a fire risk from carrying no diesel?",
    a: "Removing diesel, gas and engine rooms eliminates the most common sources of yacht fires; remaining electrical risk is contained by fused, monitored DC distribution.",
  },
];

const SUSTAINABILITY: Faq[] = [
  {
    q: "How does the vessel achieve completely silent, zero-emission cruising?",
    a: "Propulsion relies entirely on dual electric pod motors powered by a large solar array.",
  },
  {
    q: "What is the real-world output of the cabin roof solar energy gathering system?",
    a: "The high-efficiency glass array captures a steady 5.0 to 5.5 kW of peak daytime solar power.",
  },
  {
    q: "What is the continuous daytime speed threshold for infinite solar cruising?",
    a: "The catamaran maintains an infinite solar equilibrium cruise speed right at 4.5 to 5.0 knots.",
  },
  {
    q: "How does the solar array achieve infinite range during daylight hours?",
    a: "Daytime solar generation perfectly matches motor draw, leaving the battery banks untouched.",
  },
  {
    q: "How does the vessel store energy for overnight anchoring and off-grid passages?",
    a: "High-capacity ePropulsion lithium battery banks bank clean power to run the ship all night.",
  },
  {
    q: "How does the ship harvest clean electricity passively while sailing downwind?",
    a: "The LibertyKite pulls the boat at 4.5+ knots, forcing the pod propellers to spin backward.",
  },
  {
    q: "What is hydrogeneration and how does it turn propellers into clean power plants?",
    a: "Water flow spins the props backward to feed clean regenerative DC electricity into batteries.",
  },
  {
    q: "How much net battery power can you generate during an overnight kite passage?",
    a: "The twin pods generate a net profit of up to 5.4 kWh of clean energy before sunrise.",
  },
  {
    q: "How do you manage the massive electrical solar surplus on bright, sunny days?",
    a: "An automated Energy Management System diverts excess power to dedicated dump loads.",
  },
  {
    q: "What are the primary household dump loads that absorb this excess solar energy?",
    a: "Surplus power is routed sequentially to domestic water heating and water desalination.",
  },
  {
    q: "How does the water heating layout eliminate the energy waste of traditional boats?",
    a: "Symmetrical 20 L hot water cylinders sit directly inside each hull to stop long pipe runs.",
  },
  {
    q: "How does localising the hot water tanks prevent precious fresh water waste?",
    a: "Shorter plumbing lines deliver near-instant hot water without bleeding out cold pipes.",
  },
  {
    q: "How does the desalination watermaker integrate into the clean solar loop?",
    a: "The watermaker runs automatically on solar surplus once the main batteries hit 85% full.",
  },
  {
    q: "Why is the interior outfitting considered a major sustainability asset?",
    a: "Replacing heavy timber with ultra-lightweight honeycomb panels slashes hull resistance.",
  },
  {
    q: "How does the structural spray cork insulation protect the interior eco-footprint?",
    a: "Natural spray cork provides thermal protection without using toxic chemical foam liners.",
  },
  {
    q: "Can the vessel maintain full luxury guest amenities without a diesel generator?",
    a: "Dual 4 kW parallel smart inverters easily run premium appliances using pure battery power.",
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [...BUYING, ...SAFETY, ...SUSTAINABILITY].map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(JSON_LD) }],
  }),
  component: FaqPage,
});

function FaqList({ items, idPrefix }: { items: Faq[]; idPrefix: string }) {
  return (
    <Accordion type="single" collapsible className="mt-10 w-full">
      {items.map((f, i) => (
        <AccordionItem key={f.q} value={`${idPrefix}-${i}`}>
          <AccordionTrigger className="text-left text-base font-medium">{f.q}</AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function FaqPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Frequently asked questions"
        title="Buying, owning and using a Halo, answered directly."
        intro="Short, clear answers to the questions owners, charter operators and partner yards ask most often about buying a Halo, living with one day to day, and where its ocean capability fits in."
      />


      <Section id="buying" eyebrow="Buying & build" title="The buying & build model">
        <FaqList items={BUYING} idPrefix="buying" />
      </Section>

      <Section id="safety" eyebrow="Safety" title="Offshore safety & structural engineering" className="border-t border-border">

        <FaqList items={SAFETY} idPrefix="safety" />
      </Section>

      <Section
        id="sustainability"
        eyebrow="Sustainability"
        title="Eco-credentials & energy autonomy"
        className="border-t border-border"
      >
        <FaqList items={SUSTAINABILITY} idPrefix="sustainability" />
      </Section>
    </SiteShell>
  );
}
