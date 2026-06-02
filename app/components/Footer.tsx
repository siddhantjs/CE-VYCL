import Image from "next/image";
import Link from "next/link";
import { FOOTER_SITEMAP } from "@/lib/site";
import { Newsletter } from "./Newsletter";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-vycl-dark text-white">
      <Newsletter />
      <div className="border-t border-white/10 px-5 py-12 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <nav
            aria-label="Sitemap"
            className="flex flex-col gap-16 sm:gap-32 sm:flex-row"
          >
            {FOOTER_SITEMAP.map((section) => (
              <div key={section.title}>
                <h2 className="text-sm font-semibold text-white">
                  {section.title}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/65 transition-colors hover:text-vycl-lime"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/LOGO-light.svg"
              alt="VYCL"
              width={28}
              height={28}
              className="h-16 w-16 md:h-22 md:w-22"
            />
          </Link>
          <p className="text-center text-sm text-white/60">
            © {new Date().getFullYear()} VYCL LLC · vycl.ai · All rights
            reserved.
            <span className="mt-1 block text-xs">
              Hawaii-based. Operating nationally.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
