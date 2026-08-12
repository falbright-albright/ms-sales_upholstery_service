import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: "Terms governing estimate requests, project work and use of this website.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout title="Terms of Service">
      <p className="callout">
        <strong>Before publishing:</strong> sections below marked with{" "}
        <em>[owner to confirm]</em> contain placeholders (deposit amounts, cancellation
        terms, warranty terms) that must be filled in by the business owner — no specific
        figures or policies have been invented. Review with legal counsel if you plan to
        rely on the liability provisions below.
      </p>

      <h2>1. Agreement to these terms</h2>
      <p>
        These terms govern your use of this website and any furniture upholstery, repair,
        reupholstery or restoration services requested from {siteConfig.businessDisplayName},
        a sole proprietorship operating in Ontario, Canada. By submitting a form on this
        website or engaging our services, you agree to these terms.
      </p>

      <h2>2. Estimates vs. final quotes</h2>
      <p>
        Estimates provided through this website's free estimate form, by phone, or from
        photographs are preliminary and non-binding. They are based on the information
        and images you provide and are not a final quote. Final pricing is confirmed
        after an in-person inspection of the furniture, taking into account its actual
        condition, the materials selected, labour required, and the full scope of work.
        We will confirm final pricing with you before work begins.
      </p>

      <h2>3. Scope of work and customer approval</h2>
      <p>
        Work will be carried out according to a scope agreed upon between you and M.S..
        We will not perform work materially beyond that scope without discussing it with
        you first. If, during the course of work, we identify additional issues (see
        Section 6), we will contact you before proceeding with anything outside the
        original scope.
      </p>

      <h2>4. Materials</h2>
      <p>
        Fabric and vinyl availability can change without notice, and colour reproduction
        on a screen, in a sample book, or under different lighting may vary from the
        finished product. We will do our best to help you select a suitable material, but
        we cannot guarantee that a specific material will remain available throughout a
        project.
      </p>

      <h2>5. Customer-supplied materials</h2>
      <p>
        If you supply your own fabric or other material, you are responsible for ensuring
        it is suitable and sufficient in quantity for the project. We will advise you if
        we believe a customer-supplied material is unsuitable, but we are not responsible
        for defects in materials we did not supply, or for project delays caused by
        insufficient customer-supplied material.
      </p>

      <h2>6. Furniture condition, pre-existing and hidden damage</h2>
      <p>
        Furniture may have pre-existing damage or structural issues that are not visible
        until upholstery is removed. If we discover hidden damage during the course of
        work, we will contact you to discuss options before continuing. We are not
        responsible for damage or defects that existed before the furniture was brought
        to us, or for issues inherent to the age, construction or prior repair history of
        a piece.
      </p>

      <h2>7. Deposits and payment terms <em>[owner to confirm]</em></h2>
      <p>
        Whether a deposit is required, the deposit amount, accepted payment methods, and
        payment timing (e.g., on completion, in instalments) will be confirmed with you
        directly for your project. <em>[This section should be updated with the
        business's actual deposit and payment policy before publication.]</em>
      </p>

      <h2>8. Changes to scope and delays</h2>
      <p>
        Changes you request after work has begun may affect price and timing. We will let
        you know if a requested change affects either. Turnaround time depends on the
        size and complexity of the project and on material availability, and we will
        communicate with you if we expect a delay.
      </p>

      <h2>9. Wear, tear and material variation</h2>
      <p>
        Natural materials (including fabric, leather and vinyl) can vary in texture, grain
        and colour between samples and finished pieces, and are subject to normal wear
        over time depending on use. This is a normal characteristic of upholstery
        materials and not a defect.
      </p>

      <h2>10. Customer property, pickup and delivery <em>[owner to confirm]</em></h2>
      <p>
        Whether pickup and delivery are offered, and on what terms, will be confirmed
        directly with you for your project. While your furniture is in our care, we take
        reasonable precautions to protect it, but we recommend discussing any items of
        unusual value with us before work begins.
      </p>

      <h2>11. Cancellation <em>[owner to confirm]</em></h2>
      <p>
        Cancellation terms (including whether any deposit is refundable, and by what
        deadline) will be confirmed with you at the time you approve a project. <em>[This
        section should be updated with the business's actual cancellation policy before
        publication.]</em>
      </p>

      <h2>12. Abandoned property <em>[owner to confirm]</em></h2>
      <p>
        If completed furniture is not collected within a reasonable period after we
        notify you it is ready, and we are unable to reach you after reasonable attempts,
        we may treat the property as abandoned in accordance with applicable Ontario law
        and our policy at the time. <em>[Specific timeframes should be added here once
        set by the business owner.]</em>
      </p>

      <h2>13. Workmanship <em>[owner to confirm]</em></h2>
      <p>
        Any warranty on workmanship — including what is covered, for how long, and what
        is excluded — will be described to you at the time you approve a project. No
        specific warranty period or coverage is promised on this website unless and until
        the business owner defines one here.
      </p>

      <h2>14. Limitation of liability</h2>
      <p>
        To the extent permitted by law, our liability for any claim arising from services
        provided is limited to the amount you paid for the specific project giving rise
        to the claim. We are not liable for indirect, incidental or consequential
        damages. Nothing in these terms limits liability that cannot be excluded under
        Ontario or Canadian law, including in respect of gross negligence or wilful
        misconduct.
      </p>

      <h2>15. Dispute handling</h2>
      <p>
        We'd rather resolve a concern directly — if something about your project isn't
        right, contact M.S. and we will work with you to address it. If a dispute
        cannot be resolved directly, these terms are governed by the laws of the Province
        of Ontario and the federal laws of Canada applicable in Ontario, and any legal
        proceedings will take place in Ontario.
      </p>

      <h2>16. Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The terms in effect at the time you
        approve a project will govern that project.
      </p>
    </LegalPageLayout>
  );
}
