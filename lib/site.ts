export const CALENDLY_URL = "https://calendly.com/vycl/30min";

export const RYAN_HEADSHOT_URL = "/ryan-headshot.jpg";

/** Inline embed — fewer chrome elements so the widget fits the page better. */
export const CALENDLY_EMBED_URL = `${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1`;

export const CONTACT_PATH = "/contact";

export type PrimaryNavItem = {
  href: string;
  label: string;
};

export type FeaturedNavItem = {
  href?: string;
  label: string;
  description: string;
  comingSoon?: boolean;
};

/** Top-level navbar links — always visible on desktop. */
export const PRIMARY_NAV: PrimaryNavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/programs", label: "Programs" },
  { href: CONTACT_PATH, label: "Contact" },
];

/** Audience pages and related links — shown in the “Who We Serve” mega-menu card. */
export const FEATURED_NAV: FeaturedNavItem[] = [
  {
    href: "/dealer-groups",
    label: "Dealer Groups",
    description:
      "Launch subscription on your rooftops without rebuilding operations.",
  },
  {
    href: "/lenders",
    label: "Lenders",
    description:
      "Structure fleet-based subscription lending with collateral and cash-flow modeling.",
  },
  {
    href: "/platforms",
    label: "SaaS Platforms",
    description:
      "Bring your platform to US dealer networks with onboarding and GTM execution.",
  },
  {
    href: "/fleet-operators",
    label: "Fleet Operators",
    description:
      "Design branded or captive subscription programs from fleet to subscriber experience.",
  },
];
