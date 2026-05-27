import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import {
  createPageMetadata,
  localBusinessJsonLd,
  personJsonLd,
} from "@/lib/seo";
import { getSiteUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  ...createPageMetadata({ path: "/" }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "scroll-smooth",
        jakarta.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <head>
        <JsonLd data={[localBusinessJsonLd, personJsonLd]} />
      </head>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
