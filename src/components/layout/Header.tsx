"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/lib/nav";
import { siteConfig, telHref } from "@/lib/site-config";
import Button from "@/components/ui/Button";
import { MenuIcon, PhoneIcon, XIcon } from "@/components/ui/Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on route change. Adjusting state during render
  // (rather than in a useEffect) is the pattern React recommends for
  // "reset this state when a prop/derived value changes" — it also
  // correctly handles browser back/forward navigation, which wouldn't
  // trigger a Link's onClick.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  // Prevent background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-tan-light bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex flex-col leading-tight" aria-label={`${siteConfig.businessDisplayName} — home`}>
          <span className="font-serif text-lg font-semibold text-brown md:text-xl">
            MS &amp; Sales <span className="text-charcoal">Upholstery Services</span>
          </span>
          <span className="text-[11px] uppercase tracking-[0.16em] text-ink-muted md:text-xs">
            {siteConfig.primaryCity}, {siteConfig.primaryRegionShort}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-brown ${
                pathname === item.href ? "text-brown" : "text-charcoal-soft"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={telHref} variant="call" size="md" icon={<PhoneIcon />}>
            {siteConfig.phoneDisplay}
          </Button>
          <Button href="/free-estimate" variant="primary" size="md">
            Get a Free Estimate
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-tan-light text-2xl text-brown lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-tan-light bg-paper px-4 pb-6 pt-2 lg:hidden"
        >
          <nav className="flex flex-col" aria-label="Mobile">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b border-tan-light py-3 text-base font-medium ${
                  pathname === item.href ? "text-brown" : "text-charcoal-soft"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <Button href={telHref} variant="call" size="lg" icon={<PhoneIcon />}>
              Call {siteConfig.ownerName}: {siteConfig.phoneDisplay}
            </Button>
            <Button href="/free-estimate" variant="primary" size="lg">
              Get a Free Estimate
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
