import Link from "next/link";
import { siteConfig, telHref } from "@/lib/site-config";
import { PhoneIcon, CameraIcon } from "@/components/ui/Icons";

/**
 * Persistent mobile conversion bar. Hidden on large screens, where the
 * header CTAs are always visible instead. Fixed to the viewport bottom
 * so "call" and "get an estimate" are one thumb-tap away on any page.
 */
export default function MobileStickyCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-tan-light bg-paper shadow-[0_-4px_12px_rgba(42,36,32,0.12)] md:hidden"
      role="region"
      aria-label="Quick actions"
    >
      <a
        href={telHref}
        className="flex min-h-14 items-center justify-center gap-2 border-r border-tan-light bg-brass-light text-sm font-semibold text-charcoal"
      >
        <PhoneIcon aria-hidden />
        Call {siteConfig.ownerName}
      </a>
      <Link
        href="/free-estimate"
        className="flex min-h-14 items-center justify-center gap-2 bg-brown text-sm font-semibold text-cream"
      >
        <CameraIcon aria-hidden />
        Free Estimate
      </Link>
    </div>
  );
}
