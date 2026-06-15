import Link from "next/link";
import { BLOG_PAGE } from "@/lib/blog/config";

type BlogBreadcrumbsProps = {
  postTitle: string;
};

export function BlogBreadcrumbs({ postTitle }: BlogBreadcrumbsProps) {
  const { breadcrumbs } = BLOG_PAGE;

  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto max-w-3xl text-sm text-vycl-text-muted"
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link href="/" className="transition-colors hover:text-vycl-dark">
            {breadcrumbs.home}
          </Link>
        </li>
        <li aria-hidden className="text-vycl-border">
          ›
        </li>
        <li>
          <Link href="/blog" className="transition-colors hover:text-vycl-dark">
            {breadcrumbs.blog}
          </Link>
        </li>
        <li aria-hidden className="text-vycl-border">
          ›
        </li>
        <li className="font-medium text-vycl-dark">{postTitle}</li>
      </ol>
    </nav>
  );
}
