import Image from "next/image";

/**
 * Real project photo, styled to match <PlaceholderImage /> so the two
 * can sit side by side without an obvious seam. Use this once a real
 * photo exists for a slot; use PlaceholderImage until one does.
 */
export default function ProjectPhoto({
  src,
  alt,
  tag,
  aspect = "aspect-[4/3]",
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 33vw, 50vw",
}: {
  src: string;
  alt: string;
  tag?: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-md border border-tan-light ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
      {tag ? (
        <span className="absolute left-2 top-2 rounded-sm bg-brown px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-cream">
          {tag}
        </span>
      ) : null}
    </div>
  );
}
