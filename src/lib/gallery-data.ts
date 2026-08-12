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
  {
    id: "workshop-vinyl-cushion-detail",
    title: "Custom-fit seat cushion — vinyl",
    categories: ["Vinyl", "Repairs"],
    image: "/images/gallery/workshop-vinyl-cushion-detail.jpg",
    alt: "Close-up of a finished tan vinyl seat cushion with channel stitching, on the workshop bench",
  },
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
  // Categories/piece types not yet backed by a real photo — kept as
  // clearly-labelled placeholders rather than dropped, so the filter
  // list still reflects the range of residential work we take on.
  { id: "single-dining-chair", title: "Single dining chair", categories: ["Dining Chairs"] },
  { id: "accent-chair", title: "Accent chair", categories: ["Armchairs", "Chairs"] },
  { id: "sectional-sofa", title: "Sectional sofa", categories: ["Sofas"] },
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
