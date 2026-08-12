import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = pageMetadata({
  title: "Legal Disclaimer",
  description: "General limitations on the information provided on this website.",
  path: "/legal-disclaimer",
});

export default function LegalDisclaimerPage() {
  return (
    <LegalPageLayout title="Legal Disclaimer">
      <h2>General information only</h2>
      <p>
        The content on this website — including descriptions of services, the process
        page, FAQ answers and any general pricing guidance — is provided for general
        informational purposes about our furniture upholstery, repair, reupholstery and
        restoration services. It does not constitute a guarantee of specific outcomes,
        pricing, or timelines for any individual project.
      </p>

      <h2>Estimates are not final quotes</h2>
      <p>
        Any estimate given through this website, by phone, or based on photographs is
        preliminary. Furniture condition can only be fully evaluated in person, and final
        pricing may differ from a preliminary estimate once the piece has been properly
        assessed.
      </p>

      <h2>Photographs may not reveal every issue</h2>
      <p>
        Photographs are useful for an initial assessment but may not reveal hidden
        structural damage, prior repairs, or issues concealed by existing upholstery.
        Work is subject to a fuller assessment and mutual agreement before proceeding.
      </p>

      <h2>Results depend on the furniture itself</h2>
      <p>
        Outcomes depend on the condition of the furniture, the materials selected, and
        the agreed scope of work. We do not guarantee that every piece of furniture can
        be successfully restored, and we will tell you plainly if we believe a piece is
        not a good candidate for repair or reupholstery.
      </p>

      <h2>Material availability and colour reproduction</h2>
      <p>
        Fabric and vinyl availability can change without notice. Colours and textures
        shown on this website, in photographs, or on a screen may differ from the
        physical material due to screen calibration, lighting, and normal manufacturing
        variation between production runs.
      </p>

      <h2>Not professional, legal or financial advice</h2>
      <p>
        Nothing on this website constitutes legal, financial, insurance or other
        professional advice. If you require advice specific to your situation — including
        the legal pages on this website — you should consult an appropriately qualified
        professional.
      </p>

      <h2>Third-party links</h2>
      <p>
        This website may link to third-party websites or services (for example, Google
        Business Profile or Google Maps once integrated) for your convenience. We are not
        responsible for the content, accuracy or practices of third-party websites.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this disclaimer can be directed to M.S. using the contact
        details on our <a href="/contact">Contact page</a>.
      </p>
    </LegalPageLayout>
  );
}
