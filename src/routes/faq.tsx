import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, Section, PageHero } from "@/components/site/SiteShell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TITLE = "FAQ — Buying, Build Network, Warranty & Safety | Halo Yachts";
const DESCRIPTION =
  "Answers on buying a Halo yacht — escrow-protected stage payments, how our accredited yard network is governed, warranty and single-point service — plus CE Category A safety engineering and solar-electric autonomy.";

type Faq = { q: string; a: string };

const BUYING: Faq[] = [
  {
    q: "How does purchasing a Halo yacht work?",
    a: "You contract directly with Halo Yachts under a single, comprehensive purchase agreement for €525,000 + VAT. Halo acts as your prime contractor and single point of accountability from initial deposit through to final handover. We supply the design IP, CNC kit, electric drivetrain and solar architecture, while subcontracting the physical assembly to our certified regional shipyard partners under strict technical supervision.",
  },
  {
    q: "Who is my point of contact during the build?",
    a: "Halo Yachts is your single point of contact. You are assigned a dedicated Halo Program Manager who provides weekly progress updates, milestone photos and video walk-throughs. You deal exclusively with Halo — we manage the shipyard, component suppliers and sub-contractors on your behalf.",
  },
  {
    q: "How are my funds protected during construction?",
    a: "Your stage payments are held safely in a dedicated escrow account. Funds are only released to fund the next build stage after a Halo-appointed independent marine surveyor inspects the vessel on-site and issues a formal Stage Completion Certificate.",
  },
  {
    q: "Can I select the interior finishes and colours?",
    a: "Yes. While structural CAD engineering and electrical systems are 100% standardised for safety and blue-water performance, you select from our Curated Interior Palettes — upholstery fabrics, galley surfaces and cork trims — when placing your order.",
  },
  {
    q: "Why does Halo use standardised specifications?",
    a: "Standardising our structural engineering and production systems allows us to guarantee CE Category A (Ocean) certification, a 24-week delivery timeline and maximum fleet reliability for charter operators and private owners alike.",
  },
  {
    q: "What warranty comes with my Halo yacht?",
    a: "Halo provides single-point warranty support. If any component or finish requires attention, you contact Halo directly. We coordinate all remedial work, backed by global manufacturer warranties on ePropulsion drivetrains, Victron power electronics and structural shipyard guarantees.",
  },
];

const NETWORK_FAQ: Faq[] = [
  {
    q: "Why doesn't Halo own its own shipyard?",
    a: "Halo owns the part that determines the yacht: the naval architecture, the master CNC files, the Tier-1 systems, the specification and the CE Category A certification file. Physical fabrication is contracted to accredited aluminium yards. Capital that would otherwise sit in a shed and a fixed workforce sits instead in engineering and in the boat itself.",
  },
  {
    q: "Who am I actually buying from?",
    a: "Halo Yachts. You sign one purchase agreement with Halo, who acts as prime contractor. The building yard is Halo's subcontractor and is never your counterparty — your contract, your escrow account, your specification and your warranty all sit with Halo from deposit to handover.",
  },
  {
    q: "How do I know the yard building my boat is any good?",
    a: "Every partner yard is accredited against fixed criteria: certified aluminium welding qualifications, documented marine QA and traceability records, and proven capacity for a build of this size. During the build, work passes the Halo Quality & Conformity Gate, a Halo representative or appointed marine surveyor inspects weekly, and stage payments are released from escrow only against a signed Stage Completion Certificate.",
  },
  {
    q: "Will two Halos built at different yards be the same boat?",
    a: "Yes. Every hull is cut from the same master DXF files, fitted with the same centrally sourced Tier-1 systems, inspected under the same regime and certified to the same approved design definition. The yard supplies fabrication labour and workshop capability, not design decisions.",
  },
  {
    q: "Does building near my home port actually benefit me?",
    a: "It shortens the delivery leg, reduces freight cost and import exposure, and means commissioning, sea trials and handover happen in the waters you will actually use. It also keeps you close to the build if you want to visit during construction.",
  },
  {
    q: "What happens if a yard fails to perform mid-build?",
    a: "Problems surface weekly rather than at handover, because inspection is continuous and payment is staged. In practice most issues are rectification at the yard, at the yard's cost, before the next stage is certified. Your money is the primary protection: an uncertified stage releases no funds, so you never pay ahead of verified work. Relocating a build is only realistic early on, while it is still effectively a cut kit — at that point Halo can re-allocate the slot to another accredited yard. Later in the programme the remedy is Halo taking direct control of completion: supervision stepped up, additional labour or a replacement subcontractor brought in, and if necessary a different yard completing fit-out and commissioning. We do not claim a schedule can never be disrupted; we do commit that your contract, escrow balance, specification and warranty remain with Halo throughout.",
  },
];

const WARRANTY_SERVICE: Faq[] = [
  {
    q: "How does the warranty coverage work on my Halo 13.5?",
    a: "Halo Yachts acts as your single point of contact for all warranty needs. We provide a limited assembly and workmanship warranty covering the hull structure, interior joinery, and systems integration. Integrated Tier-1 components (such as ePropulsion powertrains, Victron energy systems, and Maxeon solar arrays) carry their respective 2-to-5-year manufacturer warranties, which Halo manages on your behalf.",
  },
  {
    q: "How do I log a service or warranty claim when away from a hub?",
    a: "All claims are submitted directly through the Halo Owner Portal. Our client experience team immediately reviews your request, analyzes real-time telemetry from your onboard Victron Cerbo GX system, and coordinates the necessary repair plan or parts dispatch.",
  },
  {
    q: "What happens if I experience an equipment issue in a remote cruising location?",
    a: "Our remote diagnostic tools allow us to pinpoint component or software issues anywhere with satellite/cellular connection. If physical replacement is required, Halo coordinates advance replacement unit shipments and dispatches authorized mobile marine technicians to your nearest port or marina.",
  },
  {
    q: "Who covers the electric propulsion and battery storage systems?",
    a: "Your electric motors, inverter networks, and lithium battery banks are covered under direct pass-through warranties from our Tier-1 partners (ePropulsion and Victron). Halo manages the diagnostic triage, warranty filing, and parts replacement so you never have to deal with component manufacturers directly.",
  },
  {
    q: "What is the scope of the Shipyard Workmanship Warranty?",
    a: "The assembly shipyard provides a comprehensive 12-to-24-month back-to-back warranty on structural integrity, aluminum welds, plumbing systems, electrical looms, and interior installation.",
  },
  {
    q: "Are hauling, slipway, or vessel transport fees covered under warranty?",
    a: "Warranty coverage includes diagnostic triage, replacement parts, and repair labor. Scheduled repairs take place at designated regional service hubs or via mobile technician dispatch. Hauling, dockage, or vessel relocation expenses outside baseline service locations remain the responsibility of the vessel owner.",
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
  mainEntity: [...BUYING, ...NETWORK_FAQ, ...WARRANTY_SERVICE, ...SAFETY, ...SUSTAINABILITY].map((f) => ({
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
        title="Buying, owning, warranty and using a Halo, answered directly."
        intro="Short, clear answers to the questions owners, charter operators and partner yards ask most often about buying a Halo, warranty and service support, living with one day to day, and where its ocean capability fits in."
      />


      <Section id="buying" eyebrow="Buying & build" title="The buying & build model">
        <FaqList items={BUYING} idPrefix="buying" />
      </Section>

      <Section id="network" eyebrow="Our build network" title="How Halo's yard network works for you" className="border-t border-border">
        <FaqList items={NETWORK_FAQ} idPrefix="network" />
      </Section>

      <Section id="warranty" eyebrow="Warranty & service" title="Ownership support & warranty coverage" className="border-t border-border">
        <FaqList items={WARRANTY_SERVICE} idPrefix="warranty" />
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
