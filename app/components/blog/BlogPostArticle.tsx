import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import { BLOG_PAGE } from "@/lib/blog/config";
import type { BlogPost } from "@/lib/blog/posts";
import { getRelatedPosts } from "@/lib/blog/posts";
import { BlogBreadcrumbs } from "./BlogBreadcrumbs";
import { BlogContentBlocks } from "./BlogContentBlocks";

type BlogPostArticleProps = {
  post: BlogPost;
};

export function BlogPostArticle({ post }: BlogPostArticleProps) {
  const { article, grid } = BLOG_PAGE;
  const relatedPosts = getRelatedPosts(post.slug);

  return (
    <article className="mx-auto max-w-3xl">
      <BlogBreadcrumbs postTitle={post.title} />

      <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-[#0F6E56]">
        {post.category}
      </p>
      <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-vycl-dark sm:text-4xl lg:text-5xl">
        {post.title}
      </h1>
      <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-vycl-text-muted">
        <span>
          {article.metaPrefix} · {article.metaDomain}
        </span>
        <span aria-hidden>·</span>
        <span>
          {post.publishedDate} · {article.metaUpdatedLabel} {post.updatedYear}
        </span>
        <span aria-hidden>·</span>
        <span className="inline-flex items-center gap-1">
          <Clock3 className="h-3.5 w-3.5" aria-hidden />
          {post.readTimeMinutes} min read
        </span>
      </p>

      <p className="mt-8 text-lg leading-relaxed text-vycl-dark sm:text-xl">
        {post.intro}
      </p>

      {post.keyTakeaways.length > 0 ? (
        <aside className="mt-10 rounded-2xl border border-vycl-border bg-white p-5 shadow-sm sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-vycl-dark">
            {article.keyTakeawaysTitle}
          </p>
          <ul className="mt-4 space-y-3">
            {post.keyTakeaways.map((item) => (
              <li
                key={item}
                className="text-sm leading-relaxed text-vycl-text-muted before:mr-2 before:font-bold before:text-[#0F6E56] before:content-['✓']"
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
      ) : null}

      {post.sections.length > 0 ? (
        <aside className="mt-8 rounded-2xl border border-vycl-border bg-vycl-cream-muted p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-vycl-dark">
            {article.tableOfContentsTitle}
          </p>
          <ol className="mt-4 space-y-2">
            {post.sections.map((section, index) => (
              <li key={section.id}>
                <Link
                  href={`#${section.id}`}
                  className="text-sm leading-relaxed text-vycl-text-muted underline-offset-4 transition-colors hover:text-vycl-dark hover:underline"
                >
                  {index + 1}. {section.heading}
                </Link>
              </li>
            ))}
          </ol>
        </aside>
      ) : null}

      <div className="mt-12 space-y-12">
        {post.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="text-xl font-bold text-vycl-dark sm:text-2xl">
              {section.heading}
            </h2>
            <div className="mt-5 space-y-5 text-base text-vycl-text-muted">
              <BlogContentBlocks blocks={section.blocks} />
            </div>
          </section>
        ))}
      </div>

      <aside className="mt-12 rounded-2xl border border-vycl-border bg-vycl-dark p-6 text-white sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-vycl-lime">
          {article.relatedServiceTitle}
        </p>
        <h3 className="mt-3 text-xl font-bold">{post.relatedService.label}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/75">
          {post.relatedService.description}
        </p>
        <Link
          href={post.relatedService.href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-vycl-lime transition-opacity hover:opacity-90"
        >
          Learn more
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </aside>

      {relatedPosts.length > 0 ? (
        <div className="mt-12 border-t border-vycl-border pt-10">
          <h2 className="text-lg font-bold text-vycl-dark">
            {article.relatedPostsTitle}
          </h2>
          <ul className="mt-5 space-y-4">
            {relatedPosts.map((related) => (
              <li key={related.slug}>
                <Link
                  href={related.path}
                  className="group block rounded-2xl border border-vycl-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#0F6E56]">
                    {related.category}
                  </p>
                  <p className="mt-2 font-semibold text-vycl-dark group-hover:text-[#0F6E56]">
                    {related.title}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-vycl-text-muted">
                    {grid.readMoreLabel}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
