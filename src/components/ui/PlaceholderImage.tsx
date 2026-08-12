import type { ReactNode } from "react";
import { CameraIcon } from "./Icons";

/**
 * PLACEHOLDER IMAGE SLOT
 * ------------------------------------------------------------------
 * No genuine project photography has been supplied yet, and this
 * build deliberately does NOT use generic stock photography in its
 * place — stock photos of furniture presented next to real business
 * copy would misleadingly imply they are M.S.'s own work.
 *
 * This component renders a clearly-labelled placeholder (a soft
 * woven-texture panel with an icon and caption) so every image slot
 * on the site is honest about its status while still looking
 * intentional and on-brand.
 *
 * TO REPLACE WITH REAL PHOTOS:
 * 1. Add the image file to /public/images/... (see /public/images/README.md)
 * 2. Swap this component for next/image:
 *      <Image src="/images/gallery/dining-chair-after-01.jpg" alt="…" fill className="object-cover" />
 * 3. Keep the same wrapping aspect-ratio container so layout doesn't shift.
 */
export default function PlaceholderImage({
  label,
  tag,
  icon,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  tag?: string;
  icon?: ReactNode;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-md border border-tan-light bg-gradient-to-br from-tan-light via-cream-dark to-tan/40 texture-weave ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <span className="text-2xl text-brown-light/70" aria-hidden>
          {icon ?? <CameraIcon />}
        </span>
        <span className="text-xs font-medium uppercase tracking-wide text-brown-light/80 md:text-sm">
          {label}
        </span>
        <span className="text-[11px] text-ink-muted">Photo coming soon</span>
      </div>
      {tag ? (
        <span className="absolute left-2 top-2 rounded-sm bg-brown px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-cream">
          {tag}
        </span>
      ) : null}
    </div>
  );
}
