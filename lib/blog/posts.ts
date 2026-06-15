import {
  CircleDollarSign,
  Rocket,
  SearchCheck,
  type LucideIcon,
} from "lucide-react";

export type BlogCategory = "Guides" | "Lending" | "Strategy";

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | {
      type: "callout";
      title: string;
      text: string;
    }
  | {
      type: "stats";
      items: { label: string; value: string }[];
    };

export type BlogSection = {
  id: string;
  heading: string;
  blocks: BlogContentBlock[];
};

export type BlogPost = {
  slug: string;
  path: string;
  category: BlogCategory;
  icon: LucideIcon;
  title: string;
  excerpt: string;
  author: string;
  readTimeMinutes: number;
  publishedDate: string;
  updatedYear: number;
  intro: string;
  keyTakeaways: string[];
  relatedService: {
    label: string;
    href: string;
    description: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  sections: BlogSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "dealer-subscription-launch",
    path: "/blog/dealer-subscription-launch",
    category: "Guides",
    icon: Rocket,
    title:
      "How Dealer Groups Launch Vehicle Subscription Without Adding Headcount",
    excerpt:
      "From partner selection to subscriber onboarding   a dealer-first playbook built on FlexRide by King and the VYCL Six Pillars.",
    author: "VYCL Team",
    readTimeMinutes: 8,
    publishedDate: "March 2026",
    updatedYear: 2026,
    intro:
      "Dealer groups do not fail at subscription because the model is wrong. They fail because launch requires six disciplines at once   lending, inventory, marketing, insurance, technology, and operations   and most rooftops are built to sell cars, not run recurring mobility programs.",
    keyTakeaways: [
      "Start with one rooftop and a defined vehicle mix before scaling across the group.",
      "All Six Pillars must be planned together   technology alone is not a launch.",
      "FlexRide by King reached live status in 45 days by running parallel workstreams, not by skipping steps.",
      "Second and third rooftops launch faster once the playbook, partners, and lender docs exist.",
    ],
    relatedService: {
      label: "Implementation",
      href: "/services",
      description:
        "Hands-on buildout from concept to launch across all Six Pillars   built for dealer groups launching their first or second rooftop.",
    },
    seo: {
      title:
        "Dealer Subscription Launch Guide   Vehicle Subscription for Dealer Groups | VYCL",
      description:
        "How dealer groups launch vehicle subscription programs without adding headcount. VYCL covers the Six Pillars, partner stack, and go-live playbook.",
      keywords: [
        "car subscription program for dealers",
        "dealer subscription program launch",
        "vehicle subscription platform implementation",
        "multi-rooftop subscription program",
        "dealer group subscription consulting",
      ],
    },
    sections: [
      {
        id: "why-dealers-launch",
        heading: "Why dealer groups are adding subscription now",
        blocks: [
          {
            type: "paragraph",
            text: "Vehicle subscription turns idle inventory into recurring revenue. Instead of waiting for a traditional sale, dealers earn monthly subscription income on units that would otherwise accumulate carrying cost on the lot.",
          },
          {
            type: "paragraph",
            text: "Subscription also opens a distinct customer segment: drivers who want flexibility without a 36-month finance contract or large down payment. That audience is growing, especially in markets where insurance, registration, and maintenance bundled into one monthly payment simplify the decision.",
          },
          {
            type: "callout",
            title: "Proof point",
            text: "FlexRide by King   Hawaii's active vehicle subscription program across King Auto Group rooftops   now operates 105+ active subscriptions with $80,924 in monthly recurring revenue. VYCL built and operates that program end to end.",
          },
        ],
      },
      {
        id: "six-pillars",
        heading: "What has to be in place before you go live",
        blocks: [
          {
            type: "paragraph",
            text: "VYCL structures every launch around the Six Pillars: Lending, Inventory Management, Marketing, Insurance, Technology, and Operations. Each pillar has named partners and documented workflows   not generic industry advice.",
          },
          {
            type: "list",
            items: [
              "Lending   Westlake Financial / CULA facility structure with KEYVO underwriting data",
              "Technology   JRNY platform configuration (VYCL is the exclusive US licensing partner for Tomorrow's Journey)",
              "Insurance   Axle verification integrated into subscriber onboarding",
              "Inventory   AVIS/Budget wholesale pipeline plus PLUG EV sourcing where relevant",
              "Marketing   MiaVita Solutions digital launch and local conversion campaigns",
              "Operations   staffing model, workflow design, and subscriber lifecycle management",
            ],
          },
          {
            type: "paragraph",
            text: "You do not need every partner contracted on day one, but you do need a single coherent plan. Gaps in any pillar surface at launch as delays, compliance risk, or subscriber churn.",
          },
        ],
      },
      {
        id: "launch-phases",
        heading: "The four phases of a dealer launch",
        blocks: [
          {
            type: "stats",
            items: [
              { label: "Phase 1   Discovery", value: "Week 1–2" },
              { label: "Phase 2   Partner alignment", value: "Week 2–4" },
              { label: "Phase 3   Build & configure", value: "Week 3–6" },
              { label: "Phase 4   Go live", value: "Week 6–8" },
            ],
          },
          {
            type: "paragraph",
            text: "Phase 1 defines scope: which rooftop, which vehicle tiers, target subscriber profile, and internal owner for day-to-day operations. Phase 2 aligns lenders, insurance verification, and platform access in parallel.",
          },
          {
            type: "paragraph",
            text: "Phase 3 configures JRNY, loads inventory rules, builds marketing assets, and trains staff on subscriber intake. Phase 4 is soft launch with measured volume   enough to validate workflow before scaling ad spend or fleet size.",
          },
          {
            type: "callout",
            title: "FlexRide timeline",
            text: "King Auto Group moved from idea to live program in 45 days. That speed came from dedicated project management across pillars, not from cutting lender or compliance steps.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Mistakes that slow dealer launches",
        blocks: [
          {
            type: "list",
            items: [
              "Launching with a platform demo but no lender-ready facility",
              "Treating subscription marketing like traditional lease advertising",
              "Assigning subscription ops to an already overloaded F&I desk with no workflow design",
              "Scaling to a second rooftop before the first rooftop's metrics are stable",
              "Skipping insurance verification integration and handling compliance manually",
            ],
          },
          {
            type: "paragraph",
            text: "VYCL Implementation exists specifically to prevent these gaps. The engagement is hands-on buildout   not a slide deck and not a software license alone.",
          },
        ],
      },
      {
        id: "next-step",
        heading: "Where to start on your rooftop",
        blocks: [
          {
            type: "paragraph",
            text: "Pick one rooftop. Define 15–30 units for an initial subscription fleet. Confirm who owns subscriber onboarding, insurance verification, and monthly billing questions. Map that against the Six Pillars and identify what you can self-deliver versus what requires a partner.",
          },
          {
            type: "paragraph",
            text: "If leadership wants a neutral assessment before committing implementation budget, start with VYCL Advisory. You will receive market fit analysis, partner identification, and a documented go/no-go recommendation. If the answer is go, Implementation picks up from that foundation.",
          },
        ],
      },
    ],
  },
  {
    slug: "subscription-lending-facilities",
    path: "/blog/subscription-lending-facilities",
    category: "Lending",
    icon: CircleDollarSign,
    title:
      "Structuring Lending Facilities for Fleet-Based Subscription Portfolios",
    excerpt:
      "How institutional lenders underwrite subscription fleets   collateral models, cash-flow stress tests, and documentation that credit committees approve.",
    author: "VYCL Team",
    readTimeMinutes: 7,
    publishedDate: "March 2026",
    updatedYear: 2026,
    intro:
      "Subscription lending is not floorplan finance with a different label. Lenders underwrite recurring cash flow over a holding period, subscriber quality, recovery paths, and portfolio performance   not just vehicle collateral at point of sale.",
    keyTakeaways: [
      "Floorplan assumes a sale window; subscription assumes recurring revenue and defined remarketing.",
      "KEYVO delivers underwriting-grade subscriber approval data lenders expect at facility review.",
      "Stress-test occupancy, early termination, and residual assumptions before the credit committee.",
      "VYCL has structured facilities with Westlake Financial and CULA for active dealer programs.",
    ],
    relatedService: {
      label: "Lenders",
      href: "/lenders",
      description:
        "Structure lending facilities for fleet-based subscription portfolios with collateral modeling and lender-ready documentation.",
    },
    seo: {
      title:
        "Subscription Lending Facilities   Fleet Financing for Vehicle Subscription | VYCL",
      description:
        "How to structure lending facilities for fleet-based vehicle subscription portfolios. Collateral modeling, cash-flow analysis, and lender-ready documentation from VYCL.",
      keywords: [
        "subscription fleet financing",
        "subscription lending facility agreement",
        "subscription loan cash flow modeling",
        "vehicle subscription underwriting platform",
        "fleet vehicle ROI subscription",
      ],
    },
    sections: [
      {
        id: "why-lending-differs",
        heading: "Why subscription lending is not traditional floorplan",
        blocks: [
          {
            type: "paragraph",
            text: "Floorplan lines assume inventory turns within a predictable window. Subscription finance assumes a vehicle generates monthly revenue for months or years, then exits through remarketing, subscriber purchase, or fleet rotation.",
          },
          {
            type: "paragraph",
            text: "That shift changes what credit committees review. Collateral value still matters, but cash-flow coverage, subscriber default rates, and early termination recovery dominate the analysis.",
          },
          {
            type: "callout",
            title: "FlexRide portfolio context",
            text: "FlexRide by King operates across tiered price bands with documented monthly recurring revenue, unit counts, and blended ROI   the kind of live portfolio data that moves lender conversations from theory to term sheet.",
          },
        ],
      },
      {
        id: "collateral-model",
        heading: "Building a collateral and cash-flow model lenders trust",
        blocks: [
          {
            type: "paragraph",
            text: "A lender-ready model maps acquisition cost per unit against expected subscription revenue, insurance, maintenance reserves, depreciation, and remarketing proceeds. It should show break-even occupancy and sensitivity at 70%, 85%, and 95% fleet utilization.",
          },
          {
            type: "list",
            items: [
              "Monthly revenue by tier (entry, mid, premium) with historical or projected mix",
              "Subscriber acquisition cost and payback period per tier",
              "Early termination frequency and average recovery per event",
              "Residual assumptions aligned to remarketing channel (auction, retail, trade-in)",
              "Operating expense load: insurance verification, platform fees, marketing, reconditioning",
            ],
          },
          {
            type: "paragraph",
            text: "KEYVO provides subscriber approval and portfolio performance data at a standard institutional lenders expect. Pairing KEYVO output with a documented facility structure is what VYCL uses to advance conversations with partners including Westlake Financial and CULA.",
          },
        ],
      },
      {
        id: "documentation",
        heading: "Documentation that gets facilities approved",
        blocks: [
          {
            type: "paragraph",
            text: "Credit committees reject subscription packages that read like repurposed retail finance templates. Lender-ready documentation is purpose-built for fleet subscription.",
          },
          {
            type: "list",
            items: [
              "Fleet composition and tier pricing schedule",
              "Subscriber qualification rules and approval workflow",
              "Insurance verification process (Axle integration or equivalent)",
              "Servicing responsibilities: who handles default, repossession, and remarketing",
              "Reporting cadence: portfolio performance, delinquency, and unit-level economics",
              "Covenant structure tied to occupancy and cash-flow coverage ratios",
            ],
          },
          {
            type: "callout",
            title: "Operator tip",
            text: "Build documentation for the lender's credit committee, not for your internal ops team. VYCL translates operator reality into lender language   that translation is often the difference between approval and a six-month delay.",
          },
        ],
      },
      {
        id: "facility-structure",
        heading: "Common facility structures for dealer operators",
        blocks: [
          {
            type: "stats",
            items: [
              { label: "Revolver-style line", value: "Fleet acquisition" },
              { label: "Term facility", value: "Defined portfolio" },
              { label: "Blended ROI target", value: "8–12% range" },
              { label: "Reporting", value: "Monthly portfolio" },
            ],
          },
          {
            type: "paragraph",
            text: "Dealer operators typically start with a defined portfolio facility sized to 15–50 units on a single rooftop. Revolver structures follow once performance data supports expansion. FlexRide's blended ROI sits in the 9.3% range   a benchmark lenders use when evaluating similar dealer-led programs.",
          },
          {
            type: "paragraph",
            text: "Lenders exploring subscription as a new asset class benefit from Advisory engagements that cover market assessment and portfolio design before operators arrive with incomplete packages.",
          },
        ],
      },
      {
        id: "working-with-vycl",
        heading: "How VYCL supports lenders and operators",
        blocks: [
          {
            type: "paragraph",
            text: "For lenders, VYCL Advisory covers subscription market assessment, portfolio design standards, and partnership evaluation. For dealer operators seeking capital, Implementation includes lender engagement and facility structuring aligned to rooftop rollout plans.",
          },
          {
            type: "paragraph",
            text: "Ongoing Partnership supports performance review and lender relationship management as portfolios scale beyond a single market or rooftop. The goal is durable facilities   not one-time approvals that fail at first covenant review.",
          },
        ],
      },
    ],
  },
  {
    slug: "evaluating-vehicle-subscription",
    path: "/blog/evaluating-vehicle-subscription",
    category: "Strategy",
    icon: SearchCheck,
    title:
      "Should Your Business Launch Vehicle Subscription? A Practical Evaluation Framework",
    excerpt:
      "A structured go/no-go framework for OEMs, lenders, platforms, and dealer groups   market fit, pillar readiness, and executive decision criteria.",
    author: "VYCL Team",
    readTimeMinutes: 6,
    publishedDate: "March 2026",
    updatedYear: 2026,
    intro:
      "Vehicle subscription is not a universal fit. The organizations that succeed treat evaluation as a disciplined process   not a reaction to a competitor's press release or a single vendor demo.",
    keyTakeaways: [
      "Evaluation questions overlap across dealer groups, lenders, platforms, and OEMs even though priorities differ.",
      "Technology without lending, insurance, and operations is a demo   not a program.",
      "A documented no-go is as valuable as a go when timing or capital is wrong.",
      "VYCL Advisory delivers market assessment, partner mapping, and a clear recommendation.",
    ],
    relatedService: {
      label: "Advisory",
      href: "/services",
      description:
        "Strategic guidance for organizations at the evaluation stage   market assessment, program design, and go/no-go recommendation.",
    },
    seo: {
      title:
        "Evaluate Vehicle Subscription Fit   Strategy Guide for Automotive Leaders | VYCL",
      description:
        "A practical framework to evaluate whether vehicle subscription fits your business. Market assessment, partner readiness, and go/no-go criteria from VYCL Advisory.",
      keywords: [
        "vehicle subscription strategy consultant",
        "how to launch a vehicle subscription program",
        "car subscription business model consultant",
        "automotive consulting engagement models",
        "vehicle subscription advisory",
      ],
    },
    sections: [
      {
        id: "who-should-evaluate",
        heading: "Who this framework is for",
        blocks: [
          {
            type: "paragraph",
            text: "Dealer groups ask whether subscription fits their rooftops and inventory mix. Lenders ask whether subscription belongs in their asset portfolio. SaaS platforms ask whether US dealer networks are ready for their product. OEMs and fleet operators ask whether a branded subscription program strengthens retention and fleet utilization.",
          },
          {
            type: "paragraph",
            text: "The questions differ by audience, but the evaluation structure is the same: market fit, pillar readiness, leadership commitment, and capital allocation.",
          },
          {
            type: "callout",
            title: "VYCL Advisory scope",
            text: "Advisory is built for organizations with genuine interest and budget for analysis   not yet ready to commit full Implementation spend. Output is a documented recommendation leadership can act on.",
          },
        ],
      },
      {
        id: "market-fit",
        heading: "Three questions on market fit",
        blocks: [
          {
            type: "list",
            items: [
              "Is there demonstrated demand in your market for flexible mobility without ownership?",
              "Does your inventory or fleet mix support subscription tiers customers will actually choose?",
              "Can you compete on subscriber experience   onboarding speed, insurance clarity, vehicle quality   not just monthly price?",
            ],
          },
          {
            type: "paragraph",
            text: "Unclear answers are not stop signs. They define the scope of advisory work. VYCL validates demand signals, benchmarks comparable programs, and identifies whether your market supports a pilot or requires more preparation.",
          },
          {
            type: "stats",
            items: [
              { label: "VYCL proof   vehicles subscribed", value: "800+" },
              { label: "Idea to live (FlexRide)", value: "45 days" },
              { label: "Industry experience", value: "10+ years" },
              { label: "Engagement tiers", value: "3 models" },
            ],
          },
        ],
      },
      {
        id: "partner-readiness",
        heading: "Assessing partner and platform readiness",
        blocks: [
          {
            type: "paragraph",
            text: "Technology without lending is a demo. Lending without insurance verification is a compliance risk. Marketing without operations creates churn. Advisory reviews your position across every pillar before recommending a path forward.",
          },
          {
            type: "list",
            items: [
              "JRNY platform readiness and dealer onboarding capacity",
              "KEYVO underwriting access for subscriber approval",
              "Axle or equivalent insurance verification integration",
              "Inventory sourcing: captive fleet, wholesale channels, or partner programs",
              "Marketing capability: in-house, agency, or MiaVita-led launch",
              "Operational capacity: who owns subscriber lifecycle after sale",
            ],
          },
          {
            type: "paragraph",
            text: "The deliverable is a prioritized partner map with gaps flagged   not a generic industry landscape report.",
          },
        ],
      },
      {
        id: "decision-criteria",
        heading: "Go/no-go decision criteria",
        blocks: [
          {
            type: "paragraph",
            text: "A strong go decision includes executive sponsorship beyond the innovation team, a scoped first market or rooftop, and budget for Implementation across pillars you cannot self-deliver.",
          },
          {
            type: "callout",
            title: "Go signals",
            text: "Named executive owner, defined pilot scope, lender or capital path identified, platform and insurance workflow mapped, and realistic 6–8 week launch horizon for a first rooftop.",
          },
          {
            type: "callout",
            title: "No-go signals",
            text: "No operational owner, unwillingness to integrate insurance verification, expectation that subscription runs as a side project without marketing budget, or capital structure that cannot support 15+ unit initial fleet.",
          },
          {
            type: "paragraph",
            text: "A documented no-go protects leadership from sunk cost. VYCL delivers both outcomes with equal clarity so decisions rest on evidence, not momentum.",
          },
        ],
      },
      {
        id: "next-steps",
        heading: "Recommended next steps after evaluation",
        blocks: [
          {
            type: "paragraph",
            text: "If the recommendation is go, transition to Implementation with a single-rooftop scope, defined vehicle tiers, and parallel lender and platform workstreams. If the recommendation is wait, Advisory outlines specific conditions to revisit   market data, capital, or partner availability.",
          },
          {
            type: "paragraph",
            text: "Schedule a 30-minute conversation with VYCL to map where you are against this framework. No pitch deck required   just an honest assessment of fit.",
          },
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}

export function getRelatedPosts(currentSlug: string, limit = 2): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.slug !== currentSlug).slice(0, limit);
}
