import { Footer } from "../Footer";
import { Header } from "../Header";

type LegalLayoutProps = {
  title: string;
  children: React.ReactNode;
  footer: string;
};

export function LegalLayout({ title, children, footer }: LegalLayoutProps) {
  return (
    <>
      <Header />
      <main className="px-5 py-16 sm:px-8 sm:py-20">
        <article className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-vycl-dark sm:text-5xl">
            {title}
          </h1>
          <div className="mt-10 space-y-8 text-base leading-relaxed text-vycl-text-muted">
            {children}
          </div>
          <p className="mt-12 border-t border-vycl-border pt-6 text-sm text-vycl-text-muted">
            {footer}
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-vycl-dark">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
