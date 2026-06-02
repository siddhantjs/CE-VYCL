export const CALENDLY_URL = "https://calendly.com/vycl/30min";

/** Canonical site origin for absolute URLs (sitemap, robots, Open Graph). */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  const vercel = process.env.VERCEL_URL?.replace(/\/$/, "");
  if (vercel) return `https://${vercel}`;

  return "https://www.vycl.com";
}

export const RYAN_HEADSHOT_URL = "/ryan-headshot.jpg";

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

/** Top-level navbar links   always visible on desktop. */
export const PRIMARY_NAV: PrimaryNavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/programs", label: "Programs" },
  { href: CONTACT_PATH, label: "Contact" },
];

/** Audience pages and related links   shown in the “Who We Serve” mega-menu card. */
export const FEATURED_NAV: FeaturedNavItem[] = [
  {
    href: "/dealer-groups",
    label: "Dealer Groups",
    description: "Subscription on rooftops no ops rebuild.",
  },
  {
    href: "/lenders",
    label: "Lenders",
    description: "Fleet lending with collateral modeling.",
  },
  {
    href: "/platforms",
    label: "SaaS Platforms",
    description: "Launch across US dealer networks.",
  },
  {
    href: "/fleet-operators",
    label: "Fleet Operators",
    description: "Subscription from fleet to subscriber.",
  },
];

export type SitemapSection = {
  title: string;
  links: { href: string; label: string }[];
};

/** Footer sitemap columns   grouped site navigation. */
export const FOOTER_SITEMAP: SitemapSection[] = [
  {
    title: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: CONTACT_PATH, label: "Contact" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/sitemap.xml", label: "Sitemap" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services", label: "Services" },
      { href: "/programs", label: "Programs" },
      { href: "/#pillars", label: "Six Pillars" },
    ],
  },
  {
    title: "Who We Serve",
    links: FEATURED_NAV.filter(
      (item): item is FeaturedNavItem & { href: string } => Boolean(item.href),
    ).map((item) => ({ href: item.href, label: item.label })),
  },
];

const LEGAL_PATHS = ["/privacy", "/terms"] as const;

export type SitemapEntry = {
  path: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
};

function getSitemapMeta(path: string): Pick<SitemapEntry, "changeFrequency" | "priority"> {
  if (path === "/") {
    return { changeFrequency: "weekly", priority: 1 };
  }

  if ((LEGAL_PATHS as readonly string[]).includes(path)) {
    return { changeFrequency: "yearly", priority: 0.3 };
  }

  if (path === CONTACT_PATH) {
    return { changeFrequency: "monthly", priority: 0.9 };
  }

  if (PRIMARY_NAV.some((item) => item.href === path)) {
    return { changeFrequency: "monthly", priority: 0.9 };
  }

  return { changeFrequency: "monthly", priority: 0.8 };
}

/** Indexable marketing routes for SEO sitemap generation. */
export function getSitemapEntries(): SitemapEntry[] {
  const paths = [
    ...PRIMARY_NAV.map((item) => item.href),
    ...FEATURED_NAV.filter(
      (item): item is FeaturedNavItem & { href: string } => Boolean(item.href),
    ).map((item) => item.href),
    ...LEGAL_PATHS,
  ];

  return [...new Set(paths)].map((path) => ({
    path,
    ...getSitemapMeta(path),
  }));
}
