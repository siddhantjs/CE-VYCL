import type { Metadata } from "next";
import { BlogCardGrid } from "../components/blog/BlogCardGrid";
import { BlogHero } from "../components/blog/BlogHero";
import { EngagementCta } from "../components/engagement/EngagementCta";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BLOG_PAGE } from "@/lib/blog/config";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: BLOG_PAGE.seo.title,
  description: BLOG_PAGE.seo.description,
  path: BLOG_PAGE.seo.path,
  keywords: [...BLOG_PAGE.seo.keywords],
});

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <BlogHero />
        <BlogCardGrid />
        <EngagementCta />
      </main>
      <Footer />
    </>
  );
}
