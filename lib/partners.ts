export type PartnerCard = {
  name: string;
  relationship: string;
  description: string;
  /** Optional path under /public when a logo asset exists */
  logoSrc?: string;
  /** Tailwind classes for the logo container (default: h-10 w-36) */
  logoClassName?: string;
};

export const KEYVO_BLOCK = {
  label: "FOUNDED BY RYAN YAMAUCHI",
  title: "The vehicle subscription underwriting platform",
  body: "KEYVO is KEYVO subscription underwriting software and the vehicle subscription underwriting platform purpose-built for vehicle subscription underwriting   usable by both dealers and lenders. As co-founder, Ryan brings VYCL clients direct access to infrastructure that no other consultancy in this space can offer: a live, production-grade underwriting system that de-risks subscriber approval and gives lenders the structured data they need to fund subscription portfolios with confidence.",
  ctaLabel: "Learn more about KEYVO",
  /** Set when KEYVO marketing site URL is available */
  ctaHref: undefined as string | undefined,
};

export const ECOSYSTEM_PARTNERS: PartnerCard[] = [
  {
    name: "Tomorrow's Journey / JRNY",
    relationship: "Exclusive US Licensing Partner",
    description:
      "VYCL is the automotive SaaS licensing partner US for Tomorrow's Journey and their JRNY subscription platform US   the operating backbone of UK automotive SaaS US expansion and active dealer onboarding subscription software deployments across our network.",
    logoSrc: "/TOMMORROW-JRNY.svg",
    logoClassName: "h-10 w-40",
  },
  {
    name: "Axle",
    relationship: "Insurance Verification Partner",
    description:
      "Axle insurance verification automotive for VYCL dealer and lender partners   real-time insurance verification API automotive compliance tracking and bulk subscriber onboarding across multi-rooftop operations.",
    logoSrc: "/AXLE.svg",
    logoClassName: "h-7 w-24",
  },
  {
    name: "PLUG",
    relationship: "EV Inventory & Referral Partner",
    description:
      "VYCL actively deploys the PLUG EV platform dealer inventory pipeline for pre-owned EV fleet subscription   sourcing electric vehicle subscription dealer inventory that is fleet-ready from day one.",
    logoSrc: "/PLUG.svg",
    logoClassName: "h-10 w-36",
  },
  {
    name: "AVIS / Budget",
    relationship: "Wholesale Inventory Partner",
    description:
      "VYCL has direct access to the AVIS/Budget wholesale channel   AVIS Budget wholesale channel subscription and rental car fleet subscription program inventory at scale for subscription program buildout.",
    logoSrc: "/AVIS.svg",
    logoClassName: "h-8 w-36",
  },
  {
    name: "MiaVita Solutions",
    relationship: "Digital Marketing Partner",
    description:
      "VYCL's referral partner for digital marketing   MiaVita brings deep experience in automotive and car subscription marketing strategy, delivering targeted campaigns and subscriber acquisition.",
    logoSrc: "/MIAVITA.avif",
    logoClassName: "h-10 w-36",
  },
  {
    name: "NYP, LLC",
    relationship: "Founding Operating Entity",
    description:
      "NYP, LLC (Niethammer Yamauchi Platform) is the founding operating entity co-created by Ryan Yamauchi and Mike Niethammer of King Auto Group   the structure that powers FlexRide by King.",
  },
  {
    name: "Westlake Financial",
    relationship: "Institutional Lending Partner",
    description:
      "VYCL has structured and closed a fleet lending facility with Westlake Financial   the Westlake Financial dealer program backing the FlexRide by King subscription program in Hawaii.",
    logoSrc: "/WESTLAKE.png",
    logoClassName: "h-10 w-36",
  },
  {
    name: "CULA",
    relationship: "Credit Union Lending Partner",
    description:
      "CULA (Credit Union Leasing of America) is the credit union-side lending partner on the Westlake facility   CULA vehicle subscription and credit union auto subscription lending that expands lender optionality for subscription portfolios.",
    logoSrc: "/CULA.png",
    logoClassName: "h-10 w-28",
  },
  {
    name: "FlexRide by King",
    relationship: "Operating Program",
    description:
      "FlexRide by King is Hawaii's most active vehicle subscription program   the live proof-of-concept built and operated by VYCL across King Auto Group rooftops.",
    logoSrc: "/flexride-logo.svg",
    logoClassName: "h-10 w-36",
  },
  {
    name: "King Auto Group",
    relationship: "Operating Client",
    description:
      "King Auto Group is a VYCL operating client and the dealer group behind the FlexRide by King subscription program, operated through NYP, LLC across their Hawaii rooftops.",
    logoSrc: "/KING.png",
    logoClassName: "h-10 w-32",
  },
  {
    name: "King Windward Nissan",
    relationship: "Operating Client   Rooftop",
    description:
      "King Windward Nissan is an active VYCL operating client rooftop   one of the King Auto Group dealerships running FlexRide by King in Hawaii.",
    logoSrc: "/KING-NISSAN.avif",
    logoClassName: "h-10 w-36",
  },
  {
    name: "Infiniti of Honolulu",
    relationship: "Operating Client   Rooftop",
    description:
      "Infiniti of Honolulu is an active VYCL operating client rooftop   a King Auto Group dealership running the FlexRide by King subscription program in Hawaii.",
      logoSrc: "/INIFINITI.webp",
      logoClassName: "h-10 w-36",
  },
  {
    name: "P2P Fleet",
    relationship: "Operating Client",
    description:
      "P2P Fleet is a VYCL operating client running a P2P fleet subscription program   leveraging the vehicle subscription model to scale inventory and generate recurring revenue through the subscription economy.",
    logoSrc: "/P2P.jpg",
    logoClassName: "h-10 w-36",
  },
  {
    name: "Turo",
    relationship: "Referral Partner",
    description:
      "VYCL works with Turo hosts and fleet operators looking for a Turo host vehicle subscription alternative   transitioning from peer-to-peer rental into structured vehicle subscription programs.",
    logoSrc: "/TURO.svg",
    logoClassName: "h-9 w-28",
  },
  {
    name: "Rivian",
    relationship: "Operating Client   EV Fleet",
    description:
      "VYCL developed the EV fleet subscription program and Rivian fleet subscription program structure for a 20-unit Rivian fleet in Hawaii   a fleet-scale proof point for branded electric vehicle subscription.",
    logoSrc: "/RIVIAN.svg",
    logoClassName: "h-8 w-32",
  },
  {
    name: "KEYVO",
    relationship: "The subscription industry's only underwriting platform",
    description:
      "KEYVO subscription underwriting software and the vehicle subscription underwriting platform purpose-built for vehicle subscription underwriting usable by both dealers and lenders. As co-founder, Ryan brings VYCL clients direct access to infrastructure that no other consultancy in this space can offer: a live, production-grade underwriting system that de-risks subscriber approval and gives lenders the structured data they need to fund subscription portfolios with confidence.",
    logoSrc: "/Logo_Mark_Black.png",
    logoClassName: "h-10 w-32",
  },
];
