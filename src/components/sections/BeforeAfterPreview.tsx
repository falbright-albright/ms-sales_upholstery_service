import Section, { SectionHeading } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ProjectPhoto from "@/components/ui/ProjectPhoto";

const previews = [
  {
    src: "/images/gallery/dining-chair-carved-wood-leather.jpg",
    alt: "Ornate carved wood dining chair reupholstered in brown leather-look vinyl",
    label: "Dining chair restoration",
  },
  {
    src: "/images/gallery/pub-booth-and-chairs.jpg",
    alt: "Wooden dining armchairs with black nailhead-trim vinyl seats beside restaurant booth seating",
    label: "Dining armchairs",
  },
  {
    src: "/images/gallery/residential-chaise-tan-fabric.jpg",
    alt: "Residential armchair and chaise reupholstered in tan fabric",
    label: "Residential chaise",
  },
  {
    src: "/images/gallery/restaurant-booth-blue-vinyl-pattern.jpg",
    alt: "Restaurant booth bench with a blue vinyl seat and patterned fabric backrest",
    label: "Restaurant seating",
  },
];

export default function BeforeAfterPreview() {
  return (
    <Section tone="cream" aria-labelledby="gallery-preview-heading">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <SectionHeading
          id="gallery-preview-heading"
          eyebrow="Real projects"
          title="See what restoration can look like"
          lede="A few real projects from the gallery. We're adding more as new work is completed and photographed."
        />
        <Button href="/gallery" variant="secondary" className="whitespace-nowrap">
          View Gallery
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {previews.map((p) => (
          <figure key={p.label}>
            <ProjectPhoto src={p.src} alt={p.alt} />
            <figcaption className="mt-2 text-center text-xs font-medium text-charcoal-soft">
              {p.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
