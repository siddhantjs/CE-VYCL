import {
  Car,
  CircleDollarSign,
  Clock,
  UserCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type CaseStudyAccent = "dark" | "lime";

export type FlexRideSidebarHighlight = {
  icon: LucideIcon;
  stat: string | null;
  label: string;
};

export type FlexRideMetric = {
  value: string;
  label: string;
  accent: CaseStudyAccent;
};

export type FlexRideTierRow = {
  priceRange: string;
  units: string;
  moRevenue: string;
  annualRev: string;
  avgUnit: string;
};

export type FlexRideStrategyBox = {
  title: string;
  accent: CaseStudyAccent;
  body: string;
};

export const FLEXRIDE_BY_KING_CASE_STUDY = {
  slug: "flexride-by-king",
  path: "/case-study/flexride-by-king",
  seo: {
    title: "FlexRide by King Case Study   King Windward Nissan | VYCL",
    description:
      "How FlexRide became King Windward Nissan's newest profit center   105 active subscriptions, $80,924 monthly recurring revenue, and 9.3% blended ROI.",
    keywords: [
      "FlexRide by King case study",
      "vehicle subscription Hawaii",
      "King Windward Nissan subscription",
      "dealer subscription ROI",
    ],
  },
  logo: {
    src: "/KING_FLEX_RIDE_LIGHT.png",
    alt: "FlexRide by King",
  },
  location: "King Windward Nissan · Kane'ohe, HI",
  sidebarNote: "Modeled after FlexRide at King Windward Nissan",
  eyebrow: "Nissan dealer subscription program   from aged inventory to recurring revenue",
  headline:
    "How FlexRide became King Windward Nissan's newest profit center   without disrupting a single department.",
  sidebarHighlights: [
    {
      icon: Clock,
      stat: "<45",
      label: "Live dealer launch in under 45 days",
    },
    {
      icon: Users,
      stat: "60+",
      label: "Subscribed in the first 60 days",
    },
    {
      icon: UserCheck,
      stat: null,
      label: "No incremental headcount required",
    },
    {
      icon: Car,
      stat: null,
      label: "Aged & off-cycle inventory converted into recurring revenue",
    },
    {
      icon: CircleDollarSign,
      stat: null,
      label:
        "Subscription deployed as a new profit channel alongside retail & leasing",
    },
  ] satisfies FlexRideSidebarHighlight[],
  topMetrics: [
    { value: "105", label: "Active Subscriptions", accent: "dark" },
    {
      value: "$80,924",
      label: "Monthly Recurring Revenue",
      accent: "lime",
    },
    {
      value: "$971K",
      label: "Annual Revenue Run Rate",
      accent: "dark",
    },
    {
      value: "$277,995",
      label: "Depreciation Recovered",
      accent: "lime",
    },
  ] satisfies FlexRideMetric[],
  tierRows: [
    {
      priceRange: "Up to $750 / mo.",
      units: "54",
      moRevenue: "$36,070",
      annualRev: "$432,835",
      avgUnit: "$668",
    },
    {
      priceRange: "Up to $850 / mo.",
      units: "33",
      moRevenue: "$26,775",
      annualRev: "$321,300",
      avgUnit: "$811",
    },
    {
      priceRange: "Up to $950 / mo.",
      units: "4",
      moRevenue: "$3,574",
      annualRev: "$42,888",
      avgUnit: "$894",
    },
    {
      priceRange: "Up to $1,250 / mo.",
      units: "14",
      moRevenue: "$14,505",
      annualRev: "$174,060",
      avgUnit: "$1,036",
    },
  ] satisfies FlexRideTierRow[],
  tierTotal: {
    units: "105",
    moRevenue: "$80,924",
    annualRev: "$971,083",
    avgUnit: "$771 avg",
  },
  roi: {
    label: "Blended ROI",
    subtitle: "Blended portfolio ROI",
    value: "9.3",
    suffix: "%",
    footnote:
      "Net of depreciation, processing fees & $100/mo/vehicle expense*",
  },
  strategyBoxes: [
    {
      title: "Inventory Strategy",
      accent: "dark",
      body: "Aged, off-cycle, and loaner fleet vehicles   previously a carrying cost   redeployed as revenue-generating subscription assets in this Nissan dealer subscription program, producing $80,924/mo in recurring income.",
    },
    {
      title: "Recurring Revenue",
      accent: "lime",
      body: "Subscription converts one-time inventory disposals into a predictable monthly income stream, building long-term enterprise value alongside retail and lease.",
    },
    {
      title: "Zero Disruption",
      accent: "dark",
      body: "Launched within 45 days using the JRNY platform   no new staff, no operational changes, and no impact to existing sales or service departments.",
    },
  ] satisfies FlexRideStrategyBox[],
  disclaimer:
    "* ROI calculations include a $100/mo per-vehicle operating expense applied across all 105 units ($10,500/mo / $126,000/yr). Revenue figures are gross and unaffected.",
  creditLine:
    "Powered by JRNY - Tomorrow's Journey | Data as of April 28, 2023 | King Windward Nissan - FlexRide Vehicle Subscription",
} as const;
