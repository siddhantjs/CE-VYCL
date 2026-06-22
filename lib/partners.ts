export type PartnerCard = {
  name: string;
  relationship: string;
  description: string;
  /** Optional path under /public when a logo asset exists */
  logoSrc?: string;
  /** Multiple logos shown side by side (e.g. dual-brand rooftops) */
  logoSrcs?: string[];
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
      "Providing regional access to the PLUG network allowing Dealers to build their subscription ready EV Fleets.",
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
    name: "Westlake + CULA",
    relationship: "Lending Partners",
    description:
      "Providing Dealers access to Subscription specific lending solutions to scale their business.",
    logoSrc: "/WESTLAKE.png",
    logoClassName: "h-10 w-36",
  },
  {
    name: "FlexRide",
    relationship: "Operating Program",
    description:
      'Flexride is a "first of its kind" marketplace built to connect the inventories of multiple rooftops into a single customer facing subscription destination.',
    logoSrc: "/flex-ride-logo.avif",
    logoClassName: "h-10 w-36",
  },
  {
    name: "King Auto Group",
    relationship: "Operating Client",
    description:
      "King Auto Group is a VYCL operating client and participating partner in the Flexride marketplace.",
    logoSrc: "/king-auto-logo.avif",
    logoClassName: "h-10 w-36",
  },
  {
    name: "King Windward Nissan",
    relationship: "Operating Client   Rooftop",
    description:
      "King Windward Nissan is a VYCL operating client and participating partner in the Flexride marketplace.",
    logoSrc: "/KING-NISSAN.avif",
    logoClassName: "h-10 w-36",
  },
  {
    name: "Infiniti of Honolulu",
    relationship: "Operating Client   Rooftop",
    description:
      "Infiniti of Honolulu is a VYCL operating client and participating partner in the Flexride marketplace.",
    logoSrc: "/INIFINITI.webp",
    logoClassName: "h-10 w-36",
  },
  {
    name: "Culver City Volvo/Mazda (CCVM)",
    relationship: "Operating Client",
    description:
      "CCVM is the inaugural Operating Client in the contiguous 48.",
    logoSrcs: ["/volvo-image.jpg", "/mazda-image.jpg"],
    logoClassName: "h-10 w-36",
  },
  {
    name: "P2P Fleet",
    relationship: "Operating Client",
    description:
      "P2P Fleet is a VYCL operating client leveraging the vehicle subscription model to scale inventory and generate recurring revenue for the Peer to Peer economy.",
    logoSrc: "/P2P.jpg",
    logoClassName: "h-10 w-36",
  },
  {
    name: "Turo",
    relationship: "Referral Partner",
    description:
      "VYCL works with Turo and its hosts to build their inventories through vehicle subscription.",
    logoSrc: "/TURO.svg",
    logoClassName: "h-9 w-28",
  },
  {
    name: "Rivian",
    relationship: "Fleet Access",
    description:
      "Providing Regional access RIVIAN at the fleet level.",
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
