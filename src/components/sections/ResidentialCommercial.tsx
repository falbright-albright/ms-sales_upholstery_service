import Section, { Eyebrow } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ProjectPhoto from "@/components/ui/ProjectPhoto";

export function ResidentialTeaser() {
  return (
    <Section tone="paper" aria-labelledby="residential-heading">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <Eyebrow>For homeowners</Eyebrow>
          <h2 id="residential-heading" className="text-3xl font-semibold md:text-4xl">
            Furniture upholstery & repair for St. Catharines homes
          </h2>
          <p className="mt-4 text-lg text-charcoal-soft">
            Torn fabric, worn cushions, dated dining chairs, a favourite armchair that's
            structurally fine but looking tired — these are the everyday reasons homeowners
            call. We'll give you a straightforward read on whether repair or reupholstery
            makes sense for your piece.
          </p>
          <ul className="mt-5 space-y-2 text-charcoal-soft">
            <li>• Torn, worn or stained upholstery</li>
            <li>• Sagging cushions and seating</li>
            <li>• Outdated fabric you'd like to update</li>
            <li>• Furniture that's structurally sound but cosmetically worn</li>
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/residential" variant="primary">
              Residential Upholstery
            </Button>
            <Button href="/free-estimate" variant="secondary">
              Send Photos for a Free Estimate
            </Button>
          </div>
        </div>
        <ProjectPhoto
          src="/images/gallery/residential-chaise-tan-fabric.jpg"
          alt="Residential armchair and chaise reupholstered in tan fabric"
          aspect="aspect-[4/3]"
        />
      </div>
    </Section>
  );
}

export function CommercialTeaser() {
  return (
    <Section tone="tan-light" aria-labelledby="commercial-heading">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <ProjectPhoto
          src="/images/gallery/pub-booth-and-chairs.jpg"
          alt="Green vinyl booth seating alongside wooden dining armchairs with black nailhead-trim vinyl seats"
          aspect="aspect-[4/3]"
          className="order-2 lg:order-1"
        />
        <div className="order-1 lg:order-2">
          <Eyebrow>For businesses</Eyebrow>
          <h2 id="commercial-heading" className="text-3xl font-semibold md:text-4xl">
            Commercial upholstery & restaurant seating
          </h2>
          <p className="mt-4 text-lg text-charcoal-soft">
            Restaurants, cafés, bars, hotels, offices and clinics rely on seating that looks
            good and holds up to daily use. We work with you to keep customer-facing furniture
            presentable and to coordinate projects around your business hours where practical.
          </p>
          <ul className="mt-5 space-y-2 text-charcoal-soft">
            <li>• Restaurant chairs, booths and benches</li>
            <li>• Waiting-room and office seating</li>
            <li>• Vinyl options for high-use, easy-clean environments</li>
            <li>• Project coordination for multi-piece jobs</li>
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/commercial" variant="primary">
              Commercial Upholstery
            </Button>
            <Button href="/free-estimate" variant="secondary">
              Request a Commercial Quote
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
