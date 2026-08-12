import Link from "next/link";
import { siteConfig, telHref } from "@/lib/site-config";
import { footerNav, legalNav } from "@/lib/nav";
import { PhoneIcon } from "@/components/ui/Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-tan-light bg-brown text-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-serif text-2xl font-semibold">
              {siteConfig.tagline}
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.14em] text-tan-light">
              Furniture Upholstery • Repair • Reupholstery • Restoration
            </p>
            <p className="mt-4 text-cream/90">
              {siteConfig.primaryCity}, {siteConfig.primaryRegion}
              <br />
              {siteConfig.serviceAreaNote}
            </p>
            <a
              href={telHref}
              className="mt-5 inline-flex items-center gap-2 text-lg font-semibold text-brass-light hover:text-cream"
            >
              <PhoneIcon aria-hidden />
              Call {siteConfig.ownerName}: {siteConfig.phoneDisplay}
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-tan-light">
              Explore
            </p>
            <ul className="space-y-2 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-cream/90 hover:text-brass-light">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-tan-light">
              Legal
            </p>
            <ul className="space-y-2 text-sm">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-cream/90 hover:text-brass-light">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-cream/15 pt-6 text-xs text-cream/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.businessDisplayName}. Sole proprietorship serving St.
            Catharines, Ontario.
          </p>
          <p>
            Website content is provided for general information and does not guarantee
            specific outcomes. See our{" "}
            <Link href="/legal-disclaimer" className="underline hover:text-brass-light">
              legal disclaimer
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
