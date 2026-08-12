import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ProjectPhoto from "@/components/ui/ProjectPhoto";
import { PhoneIcon } from "@/components/ui/Icons";
import { siteConfig, telHref } from "@/lib/site-config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-tan-light bg-cream-dark texture-weave">
      <Container className="grid grid-cols-1 items-center gap-10 py-14 md:py-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-4 inline-block rounded-sm border border-brass/50 bg-paper px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brass-dark md:text-sm">
            Serving St. Catharines &amp; the Niagara Region
          </p>
          <h1 className="text-4xl font-semibold leading-[1.1] text-charcoal md:text-6xl">
            Give Your Furniture a{" "}
            <span className="text-brown italic">Second Chance.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-charcoal-soft md:text-xl">
            Professional furniture upholstery, repair and reupholstery in St. Catharines,
            Ontario. Restore the furniture you love instead of replacing it.
          </p>
          <p className="mt-3 max-w-xl text-base font-medium text-brown">
            Repair. Restore. Reupholster. Renew.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/free-estimate" size="lg" variant="primary">
              Get a Free Estimate
            </Button>
            <Button href={telHref} size="lg" variant="call" icon={<PhoneIcon />}>
              Call {siteConfig.ownerName}: {siteConfig.phoneDisplay}
            </Button>
          </div>
          <p className="mt-4 text-sm text-ink-muted">
            No obligation. Send a few photos and get a preliminary estimate from M.S.
            directly.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <ProjectPhoto
            src="/images/gallery/dining-chair-carved-wood-leather.jpg"
            alt="Ornate carved wood dining chair reupholstered in brown leather-look vinyl"
            tag="Completed"
            aspect="aspect-[3/4]"
            className="translate-y-4"
            priority
          />
          <ProjectPhoto
            src="/images/gallery/workshop-vinyl-cushion-detail.jpg"
            alt="Finished tan vinyl seat cushion with channel stitching on the workshop bench"
            aspect="aspect-[3/4]"
            priority
          />
          <ProjectPhoto
            src="/images/gallery/restaurant-booth-black-vinyl-stripe.jpg"
            alt="Restaurant booth seat reupholstered in black vinyl with a striped fabric backrest panel"
            aspect="aspect-[3/4]"
          />
          <ProjectPhoto
            src="/images/gallery/restaurant-bench-green-orange-vinyl.jpg"
            alt="Completed restaurant bench with a green vinyl backrest and rust-orange vinyl seat"
            tag="Completed"
            aspect="aspect-[3/4]"
            className="translate-y-4"
          />
        </div>
      </Container>
    </section>
  );
}
