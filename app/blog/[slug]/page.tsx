import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostArticle } from "@/app/components/blog/BlogPostArticle";
import { EngagementCta } from "@/app/components/engagement/EngagementCta";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import {
  getAllBlogSlugs,
  getBlogPost,
} from "@/lib/blog/posts";
import { createPageMetadata } from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return createPageMetadata({ path: "/blog" });
  }

  return createPageMetadata({
    title: post.seo.title,
    description: post.seo.description,
    path: post.path,
    keywords: post.seo.keywords,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <section className="px-5 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16">
          <BlogPostArticle post={post} />
        </section>
        <EngagementCta />
      </main>
      <Footer />
    </>
  );
}
