import type { Metadata } from "next";
import { getSiteUrl, RYAN_HEADSHOT_URL } from "@/lib/site";

export const SITE_NAME = "VYCL";
export const DEFAULT_TITLE =
  "VYCL   Vehicle Subscription Consultancy | Ryan Yamauchi";
export const DEFAULT_DESCRIPTION =
  "VYCL is the only consultancy purpose-built for the vehicle subscription economy. Serving dealer groups, lenders, OEMs, and SaaS platforms across the US.";

export const OG_IMAGE_PATH = RYAN_HEADSHOT_URL;

export function absoluteUrl(path: string = "/"): string {
  const base = getSiteUrl();
  if (path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageMetadataInput = {
  title?: string;
  description?: string;
  path: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataInput): Metadata {
  const pageTitle = title ?? DEFAULT_TITLE;
  const pageDescription = description ?? DEFAULT_DESCRIPTION;
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(OG_IMAGE_PATH);

  return {
    title: pageTitle,
    description: pageDescription,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "VYCL   vehicle subscription consultancy for dealer groups, lenders, and SaaS platforms",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VYCL LLC",
  description: DEFAULT_DESCRIPTION,
  url: absoluteUrl("/"),
  image: absoluteUrl(OG_IMAGE_PATH),
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "HI",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "Ryan Yamauchi",
  },
  knowsAbout: [
    "Vehicle subscription",
    "Automotive consulting",
    "Dealer subscription programs",
    "Fleet lending",
  ],
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ryan Yamauchi",
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "VYCL LLC",
  },
  url: absoluteUrl("/about"),
  image: absoluteUrl(OG_IMAGE_PATH),
  knowsAbout: [
    "Vehicle subscription",
    "Automotive SaaS",
    "Underwriting platforms",
    "Dealer group operations",
  ],
  sameAs: [absoluteUrl("/about")],
};
