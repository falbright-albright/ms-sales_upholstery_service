"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import {
  galleryCategories,
  galleryItems,
  categoryNotes,
  type GalleryCategory,
} from "@/lib/gallery-data";
import { ChairIcon, SofaIcon, BuildingIcon, ThreadIcon, ScissorsIcon } from "@/components/ui/Icons";

const categoryIcons: Record<GalleryCategory, React.ReactNode> = {
  Chairs: <ChairIcon />,
  "Dining Chairs": <ChairIcon />,
  Sofas: <SofaIcon />,
  Armchairs: <ChairIcon />,
  "Restaurant Seating": <BuildingIcon />,
  Vinyl: <ScissorsIcon />,
  Fabric: <ThreadIcon />,
  Repairs: <ScissorsIcon />,
  Restoration: <ThreadIcon />,
  "Other Projects": <ScissorsIcon />,
};

export default function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory | "All">("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? galleryItems
        : galleryItems.filter((i) => i.categories.includes(active)),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery by category">
        <FilterButton label="All" active={active === "All"} onClick={() => setActive("All")} />
        {galleryCategories.map((cat) => (
          <FilterButton key={cat} label={cat} active={active === cat} onClick={() => setActive(cat)} />
        ))}
      </div>

      <p className="mt-4 text-sm text-ink-muted" aria-live="polite">
        Showing {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        {active !== "All" ? ` in ${active}` : ""}.{" "}
        {active === "All" || !categoryNotes[active]
          ? "Real project photography replaces placeholders as work is completed and shared."
          : categoryNotes[active]}
      </p>

      <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item) => (
          <li key={item.id}>
            {item.image ? (
              <figure className="group relative overflow-hidden rounded-md border border-tan-light bg-cream-dark">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.alt ?? item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <figcaption className="border-t border-tan-light bg-paper px-3 py-2 text-xs font-medium text-charcoal-soft">
                  {item.title}
                </figcaption>
              </figure>
            ) : (
              <PlaceholderImage
                label={item.title}
                icon={categoryIcons[item.categories[0]]}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`min-h-10 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "border-brown bg-brown text-cream"
          : "border-tan-dark/40 bg-paper text-charcoal-soft hover:border-brown"
      }`}
    >
      {label}
    </button>
  );
}
