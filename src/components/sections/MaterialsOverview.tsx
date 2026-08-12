import Section, { SectionHeading } from "@/components/ui/Section";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import ProjectPhoto from "@/components/ui/ProjectPhoto";
import Button from "@/components/ui/Button";
import { ThreadIcon, ScissorsIcon } from "@/components/ui/Icons";

interface Swatch {
  label: string;
  src?: string;
  alt?: string;
}

const swatches: Swatch[] = [
  { label: "Neutral tones" },
  {
    label: "Warm fabric texture",
    src: "/images/gallery/residential-chaise-tan-fabric.jpg",
    alt: "Tan upholstery fabric on a residential chaise",
  },
  {
    label: "Bold pattern",
    src: "/images/gallery/restaurant-booth-blue-vinyl-pattern.jpg",
    alt: "Multicolour patterned fabric on a restaurant booth backrest",
  },
  {
    label: "Solid vinyl",
    src: "/images/gallery/workshop-vinyl-cushion-detail.jpg",
    alt: "Solid tan vinyl seat cushion with channel stitching",
  },
  { label: "Textured vinyl" },
];

export default function MaterialsOverview() {
  return (
    <Section tone="cream" aria-labelledby="materials-heading">
      <SectionHeading
        id="materials-heading"
        eyebrow="Materials"
        title="Fabric & vinyl options"
        lede="Once we understand your project, we'll go over fabric and vinyl options together — balancing look, feel, budget and how the piece will actually be used."
      />
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-md border border-tan-light bg-paper p-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tan-light text-xl text-brown">
            <ThreadIcon />
          </span>
          <h3 className="mt-4 text-xl font-semibold">Fabric</h3>
          <p className="mt-2 text-charcoal-soft">
            A wide range of upholstery fabrics can be sourced, subject to availability and
            suitability for your piece. If you have a fabric in mind — or one you'd like to
            supply yourself — bring it up when we discuss your project.
          </p>
        </div>
        <div className="rounded-md border border-tan-light bg-paper p-6">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tan-light text-xl text-brown">
            <ScissorsIcon />
          </span>
          <h3 className="mt-4 text-xl font-semibold">Vinyl</h3>
          <p className="mt-2 text-charcoal-soft">
            A common choice for restaurant seating, commercial furniture and other high-use,
            easy-clean environments where durability and simple maintenance matter most.
          </p>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4 sm:grid-cols-5">
        {swatches.map((s) =>
          s.src ? (
            <ProjectPhoto key={s.label} src={s.src} alt={s.alt ?? s.label} aspect="aspect-square" />
          ) : (
            <PlaceholderImage key={s.label} label={s.label} aspect="aspect-square" />
          )
        )}
      </div>
      <div className="mt-8">
        <Button href="/services" variant="ghost">
          More about material selection →
        </Button>
      </div>
    </Section>
  );
}
