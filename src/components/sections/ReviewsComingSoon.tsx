import Container from "@/components/ui/Container";

/**
 * Testimonials section — intentionally empty of content. No genuine
 * customer reviews have been supplied, and this site does not
 * fabricate names, star ratings or quotations. Once real reviews
 * exist (e.g. via Google Business Profile — see
 * /docs/GOOGLE-BUSINESS-PROFILE-CHECKLIST.md), replace this
 * component with a real testimonials grid using the same layout
 * conventions as BeforeAfterPreview.
 */
export default function ReviewsComingSoon() {
  return (
    <section className="border-y border-tan-light bg-paper py-10" aria-label="Customer reviews">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brass-dark">
          Customer Reviews
        </p>
        <p className="mt-2 text-lg text-charcoal-soft">Customer reviews coming soon.</p>
      </Container>
    </section>
  );
}
