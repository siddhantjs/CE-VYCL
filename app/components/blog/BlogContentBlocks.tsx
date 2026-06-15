import type { BlogContentBlock } from "@/lib/blog/posts";

type BlogContentBlocksProps = {
  blocks: BlogContentBlock[];
};

export function BlogContentBlocks({ blocks }: BlogContentBlocksProps) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={`${block.type}-${index}`} className="leading-relaxed">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul
                key={`${block.type}-${index}`}
                className="space-y-2.5 pl-5"
              >
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="leading-relaxed before:mr-2 before:text-[#0F6E56] before:content-['•']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <aside
                key={`${block.type}-${index}`}
                className="rounded-2xl border border-vycl-border border-l-4 border-l-vycl-lime bg-vycl-cream-muted p-5 sm:p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-vycl-dark">
                  {block.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-vycl-text-muted sm:text-base">
                  {block.text}
                </p>
              </aside>
            );
          case "stats":
            return (
              <dl
                key={`${block.type}-${index}`}
                className="grid gap-3 sm:grid-cols-2"
              >
                {block.items.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-vycl-border bg-white p-4 shadow-sm"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wider text-vycl-text-muted">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-lg font-bold text-vycl-dark">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            );
          default:
            return null;
        }
      })}
    </>
  );
}
