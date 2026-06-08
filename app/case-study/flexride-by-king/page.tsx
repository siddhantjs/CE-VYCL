import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { FLEXRIDE_BY_KING_CASE_STUDY } from "@/lib/case-studies/flexride-by-king";
import { createPageMetadata } from "@/lib/seo";

const {
  seo,
  logo,
  location,
  sidebarNote,
  eyebrow,
  headline,
  sidebarHighlights,
  topMetrics,
  tierRows,
  tierTotal,
  roi,
  strategyBoxes,
  disclaimer,
  creditLine,
} = FLEXRIDE_BY_KING_CASE_STUDY;

export const metadata: Metadata = createPageMetadata({
  title: seo.title,
  description: seo.description,
  path: FLEXRIDE_BY_KING_CASE_STUDY.path,
  keywords: [
    ...seo.keywords,
    "car subscription program ROI for dealers",
    "vehicle subscription program Hawaii",
    "FlexRide King Windward Nissan",
    "Nissan dealer subscription program",
  ],
});

export default function FlexRideByKingCaseStudyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-vycl-cream px-5 pt-16 pb-8 sm:px-8 sm:pt-20 sm:pb-10 ">
          <div className="mx-auto max-w-6xl">
            <article className="rounded-2xl border border-vycl-border bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-vycl-dark">
                {eyebrow}
              </p>
              <h1 className="mt-2 max-w-4xl text-2xl font-extrabold leading-tight tracking-tight text-vycl-dark sm:text-3xl lg:text-4xl">
                {headline}
              </h1>
            </article>
          </div>
        </section>

        <section className="bg-vycl-cream px-5 pb-16 sm:px-8 sm:pb-24 mt-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start lg:gap-10">
              <aside className="rounded-3xl bg-vycl-dark-card p-6 sm:p-8 lg:sticky lg:top-8">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={45}
                  className="h-auto w-40 sm:w-44 brightness-0 invert"
                />
                <p className="mt-4 text-sm font-medium text-white/80">
                  {location}
                </p>

                <ul className="mt-8 space-y-5">
                  {sidebarHighlights.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center gap-3"
                    > 
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-vycl-lime">
                        {item.stat ? (
                          <span className="text-xs font-bold leading-none sm:text-sm">
                            {item.stat}
                          </span>
                        ) : (
                          <item.icon className="h-4 w-4 shrink-0" aria-hidden />
                        )}
                      </span>
                      <p className="min-w-0 flex-1 text-xs leading-snug text-white/90 sm:text-sm">
                        {item.label}
                      </p>
                    </li>
                  ))}
                </ul>

                <p className="mt-8 text-xs italic text-white/50 sm:mt-10">
                  {sidebarNote}
                </p>
              </aside>

              <div className="flex min-w-0 flex-col gap-8 sm:gap-10">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {topMetrics.map((metric) => (
                    <article
                      key={metric.label}
                      className={`rounded-2xl border border-vycl-border bg-white p-5 shadow-sm ${
                        metric.accent === "lime"
                          ? "border-t-4 border-t-vycl-lime"
                          : "border-t-4 border-t-vycl-dark-card"
                      }`}
                    >
                      <p className="text-2xl font-extrabold tracking-tight text-vycl-dark sm:text-3xl">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-sm leading-snug text-vycl-text-muted">
                        {metric.label}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="grid gap-6 lg:grid-cols-[1fr_220px] lg:items-start">
                  <div className="min-w-0">
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-vycl-text-muted">
                      Active subscription performance by tier
                    </h2>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      {tierRows.map((row, index) => (
                        <article
                          key={row.priceRange}
                          className={`rounded-2xl border border-vycl-border bg-white p-5 shadow-sm ${
                            index % 2 === 0
                              ? "border-t-4 border-t-vycl-dark-card"
                              : "border-t-4 border-t-vycl-lime"
                          }`}
                        >
                          <h3 className="text-xs font-semibold uppercase tracking-widest text-vycl-dark">
                            {row.priceRange}
                          </h3>
                          <p className="mt-3 text-2xl font-extrabold tracking-tight text-vycl-dark sm:text-3xl">
                            {row.moRevenue}
                          </p>
                          <p className="mt-1 text-sm text-vycl-text-muted">
                            Monthly revenue
                          </p>
                          <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-vycl-border pt-4">
                            <div>
                              <dt className="text-xs text-vycl-text-muted">
                                Units
                              </dt>
                              <dd className="mt-0.5 text-sm font-bold text-vycl-dark">
                                {row.units}
                              </dd>
                            </div>
                            <div>
                              <dt className="text-xs text-vycl-text-muted">
                                Annual
                              </dt>
                              <dd className="mt-0.5 text-sm font-bold text-vycl-dark">
                                {row.annualRev}
                              </dd>
                            </div>
                            <div>
                              <dt className="text-xs text-vycl-text-muted">
                                Avg / unit
                              </dt>
                              <dd className="mt-0.5 text-sm font-bold text-vycl-dark">
                                {row.avgUnit}
                              </dd>
                            </div>
                          </dl>
                        </article>
                      ))}
                      <article className="rounded-2xl border border-vycl-border bg-vycl-lime p-5 shadow-sm sm:col-span-2">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-vycl-dark">
                          Total portfolio
                        </h3>
                        <p className="mt-3 text-2xl font-extrabold tracking-tight text-vycl-dark sm:text-3xl">
                          {tierTotal.moRevenue}
                        </p>
                        <p className="mt-1 text-sm text-vycl-dark/70">
                          Monthly recurring revenue
                        </p>
                        <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-vycl-dark/15 pt-4">
                          <div>
                            <dt className="text-xs text-vycl-dark/70">Units</dt>
                            <dd className="mt-0.5 text-sm font-bold text-vycl-dark">
                              {tierTotal.units}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-xs text-vycl-dark/70">
                              Annual
                            </dt>
                            <dd className="mt-0.5 text-sm font-bold text-vycl-dark">
                              {tierTotal.annualRev}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-xs text-vycl-dark/70">
                              Avg / unit
                            </dt>
                            <dd className="mt-0.5 text-sm font-bold text-vycl-dark">
                              {tierTotal.avgUnit}
                            </dd>
                          </div>
                        </dl>
                      </article>
                    </div>
                  </div>

                  <aside className="flex flex-col rounded-2xl bg-vycl-dark-card p-6 text-white lg:sticky lg:top-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-vycl-lime">
                      {roi.label}
                    </p>
                    <p className="mt-4 text-xs uppercase tracking-wide text-white/60">
                      {roi.subtitle}
                    </p>
                    <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
                      {roi.value}
                      <span className="text-vycl-lime">{roi.suffix}</span>
                    </p>
                    <p className="mt-4 text-xs italic leading-relaxed text-white/60">
                      {roi.footnote}
                    </p>
                  </aside>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {strategyBoxes.map((box) => (
                    <article
                      key={box.title}
                      className={`rounded-2xl border border-vycl-border bg-white p-5 shadow-sm sm:p-6 ${
                        box.accent === "lime"
                          ? "border-l-4 border-l-vycl-lime"
                          : "border-l-4 border-l-vycl-dark-card"
                      }`}
                    >
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-vycl-dark">
                        {box.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-vycl-text-muted">
                        {box.body}
                      </p>
                    </article>
                  ))}
                </div>

                <div>
                  <p className="text-xs leading-relaxed text-vycl-text-muted">
                    {disclaimer}
                  </p>
                  <p className="mt-4 text-left text-xs text-vycl-text-muted sm:text-right">
                    {creditLine}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
