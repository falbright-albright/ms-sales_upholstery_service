/**
 * Before & after / project gallery — CMS-friendly data structure.
 *
 * Entries with an `image` path are genuine project photography
 * (see /public/images/gallery/ and /public/images/README.md). Entries
 * without one render as a labelled placeholder via <PlaceholderImage />
 * instead of a stock photo — see src/components/ui/PlaceholderImage.tsx.
 *
 * `categories` is an array (not a single category) because a real
 * project photo often genuinely belongs under more than one filter —
 * e.g. a restaurant booth reupholstered in both vinyl and a striped
 * fabric belongs under Restaurant Seating, Vinyl, and Fabric at once.
 *
 * TO ADD A NEW REAL PROJECT PHOTO:
 * 1. Add the file to /public/images/gallery/
 * 2. Add an entry below with `image` set to that path
 */
export type GalleryCategory =
  | "Chairs"
  | "Dining Chairs"
  | "Sofas"
  | "Armchairs"
  | "Restaurant Seating"
  | "Vinyl"
  | "Fabric"
  | "Repairs"
  | "Restoration"
  | "Other Projects";

export const galleryCategories: GalleryCategory[] = [
  "Chairs",
  "Dining Chairs",
  "Sofas",
  "Armchairs",
  "Restaurant Seating",
  "Vinyl",
  "Fabric",
  "Repairs",
  "Restoration",
  "Other Projects",
];

/** Shown under the filter bar when a customer selects this category. */
export const categoryNotes: Partial<Record<GalleryCategory, string>> = {
  "Other Projects":
    "A few examples of upholstery work outside furniture — shown here for craftsmanship, not as a dedicated service line. Ask before assuming a project outside furniture upholstery is something we take on.",
};

export interface GalleryItem {
  id: string;
  title: string;
  categories: GalleryCategory[];
  image?: string;
  alt?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "restaurant-booth-black-vinyl-stripe",
    title: "Restaurant booth — black vinyl & striped fabric back",
    categories: ["Restaurant Seating", "Vinyl", "Fabric"],
    image: "/images/gallery/restaurant-booth-black-vinyl-stripe.jpg",
    alt: "Restaurant booth seat reupholstered in black vinyl with a red and gold striped fabric backrest panel",
  },
  {
    id: "restaurant-booth-tan-vinyl",
    title: "Restaurant booth seating — tan & brown vinyl",
    categories: ["Restaurant Seating", "Vinyl"],
    image: "/images/gallery/restaurant-booth-tan-vinyl.jpg",
    alt: "Restaurant booth bench reupholstered in two-tone tan and brown vinyl",
  },
  {
    id: "pub-corner-booth-brown-vinyl",
    title: "Pub corner booth seating",
    categories: ["Restaurant Seating", "Vinyl"],
    image: "/images/gallery/pub-corner-booth-brown-vinyl.jpg",
    alt: "Corner booth seating in a sports bar reupholstered in tan and dark brown vinyl",
  },
  {
    id: "restaurant-booth-blue-vinyl-pattern",
    title: "Restaurant booth — vinyl seat & patterned fabric back",
    categories: ["Restaurant Seating", "Vinyl", "Fabric"],
    image: "/images/gallery/restaurant-booth-blue-vinyl-pattern.jpg",
    alt: "Restaurant booth bench with a blue vinyl seat and a multicolour patterned fabric backrest",
  },
  {
    id: "pub-booth-and-chairs",
    title: "Pub booth seating & dining armchairs",
    categories: ["Restaurant Seating", "Chairs", "Armchairs", "Vinyl"],
    image: "/images/gallery/pub-booth-and-chairs.jpg",
    alt: "Green vinyl booth seating alongside wooden dining armchairs with black nailhead-trim vinyl seats",
  },
  {
    id: "restaurant-booth-corner-brown",
    title: "Restaurant corner booth — two-tone vinyl",
    categories: ["Restaurant Seating", "Vinyl"],
    image: "/images/gallery/restaurant-booth-corner-brown.jpg",
    alt: "Restaurant corner booth reupholstered in two-tone brown vinyl",
  },
  {
    id: "restaurant-bench-green-orange-vinyl",
    title: "Restaurant bench — custom two-tone vinyl",
    categories: ["Restaurant Seating", "Vinyl"],
    image: "/images/gallery/restaurant-bench-green-orange-vinyl.jpg",
    alt: "Completed restaurant bench with a green vinyl backrest and rust-orange vinyl seat, shown in the workshop",
  },
  {
    id: "dining-chair-carved-wood-leather",
    title: "Carved dining chair restoration",
    categories: ["Dining Chairs", "Restoration"],
    image: "/images/gallery/dining-chair-carved-wood-leather.jpg",
    alt: "Ornate carved wood dining chair reupholstered in brown leather-look vinyl",
  },
  {
    id: "residential-chaise-tan-fabric",
    title: "Residential chaise & armchair",
    categories: ["Sofas", "Fabric"],
    image: "/images/gallery/residential-chaise-tan-fabric.jpg",
    alt: "Residential armchair and chaise reupholstered in tan fabric",
  },
  // "workshop-vinyl-cushion-detail" intentionally not listed here — it's
  // already shown on the home page (Hero and MaterialsOverview) and on
  // /about, so it's dropped from the gallery to avoid a duplicate.
  {
    id: "vehicle-seat-vinyl-repair",
    title: "Other upholstery work — vehicle seat",
    categories: ["Other Projects"],
    image: "/images/gallery/vehicle-seat-vinyl-repair.jpg",
    alt: "Vehicle bench seat with a red and black upholstered seat cover",
  },
  {
    id: "marine-seating-workshop",
    title: "Other upholstery work — boat seating (workshop)",
    categories: ["Other Projects"],
    image: "/images/gallery/marine-seating-workshop.jpg",
    alt: "Pontoon boat bench seating reupholstered in cream vinyl with dark green and maroon accent stripes, shown in the workshop",
  },
  {
    id: "marine-seating-installed",
    title: "Other upholstery work — boat seating (installed)",
    categories: ["Other Projects"],
    image: "/images/gallery/marine-seating-installed.jpg",
    alt: "The same reupholstered pontoon boat seating installed on the boat",
  },
  {
    id: "restaurant-booth-blue-vinyl-pattern-corner",
    title: "Restaurant booth corner — blue vinyl & patterned fabric",
    categories: ["Restaurant Seating", "Vinyl", "Fabric"],
    image: "/images/gallery/restaurant-booth-blue-vinyl-pattern-corner.jpg",
    alt: "Corner restaurant booth with a blue vinyl seat and a multicolour patterned fabric backrest, viewed from behind",
  },
  {
    id: "restaurant-corner-booth-dark-brown",
    title: "Restaurant corner booth — dark brown vinyl",
    categories: ["Restaurant Seating", "Vinyl"],
    image: "/images/gallery/restaurant-corner-booth-dark-brown.jpg",
    alt: "Two-seat corner restaurant booth reupholstered in dark brown vinyl beside a rustic wood table",
  },
  {
    id: "workshop-dining-chair-pale-yellow-vinyl",
    title: "Dining chair — pale yellow vinyl (workshop)",
    categories: ["Dining Chairs", "Vinyl"],
    image: "/images/gallery/workshop-dining-chair-pale-yellow-vinyl.jpg",
    alt: "Armless dining chair reupholstered in pale yellow vinyl, photographed in the workshop",
  },
  {
    id: "restaurant-booth-red-tufted-vinyl",
    title: "Restaurant booth — red tufted vinyl",
    categories: ["Restaurant Seating", "Vinyl"],
    image: "/images/gallery/restaurant-booth-red-tufted-vinyl.jpg",
    alt: "Restaurant banquette booth reupholstered in red button-tufted vinyl",
  },
  {
    id: "workshop-dining-chairs-cream-vinyl",
    title: "Dining chairs — cream vinyl (workshop)",
    categories: ["Dining Chairs", "Vinyl"],
    image: "/images/gallery/workshop-dining-chairs-cream-vinyl.jpg",
    alt: "Pair of dining chairs with oval cutout backs, reupholstered in cream vinyl, photographed in the workshop",
  },
  {
    id: "workshop-recliner-armchair-cream",
    title: "Recliner armchair — cream vinyl (workshop)",
    categories: ["Armchairs", "Vinyl"],
    image: "/images/gallery/workshop-recliner-armchair-cream.jpg",
    alt: "Reclining armchair reupholstered in cream leather-look vinyl, photographed in the workshop",
  },
  {
    id: "restaurant-corner-booth-tan-brown-vinyl",
    title: "Restaurant corner booth — tan & brown vinyl",
    categories: ["Restaurant Seating", "Vinyl"],
    image: "/images/gallery/restaurant-corner-booth-tan-brown-vinyl.jpg",
    alt: "Wide corner restaurant booth reupholstered in tan and brown vinyl, shown in a bar dining area",
  },
  {
    id: "pub-green-booth-and-dining-chairs",
    title: "Pub booth seating & dining chairs",
    categories: ["Restaurant Seating", "Chairs", "Vinyl"],
    image: "/images/gallery/pub-green-booth-and-dining-chairs.jpg",
    alt: "Green vinyl booth seating along a pub wall next to wood dining chairs with nailhead-trim seats",
  },
  {
    id: "workshop-green-tufted-booth",
    title: "Restaurant booth — green channel-tufted vinyl (workshop)",
    categories: ["Restaurant Seating", "Vinyl"],
    image: "/images/gallery/workshop-green-tufted-booth.jpg",
    alt: "Completed restaurant booth bench with channel-tufted green vinyl, photographed in the workshop before installation",
  },
];

/**
 * Short project video clips. No claims are made about what each shows
 * beyond what's visible — captions stay generic until real
 * descriptions are supplied. See VideoModal.tsx for playback.
 */
export interface VideoItem {
  id: string;
  title: string;
  src: string;
  caption: string;
}

export const videoItems: VideoItem[] = [
  {
    id: "project-video-1",
    title: "Project video — clip 1",
    src: "/videos/project-video-1.mp4",
    caption: "A short clip from real project work.",
  },
  {
    id: "project-video-2",
    title: "Project video — clip 2",
    src: "/videos/project-video-2.mp4",
    caption: "A short clip from real project work.",
  },
  {
    id: "project-video-3",
    title: "Project video — clip 3",
    src: "/videos/project-video-3.mp4",
    caption: "A short clip from real project work.",
  },
  {
    id: "project-video-4",
    title: "Project video — clip 4",
    src: "/videos/project-video-4.mp4",
    caption: "A short clip from real project work.",
  },
];
