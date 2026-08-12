import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How this business collects, uses, stores and protects your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy">
      <p className="callout">
        <strong>Before publishing:</strong> this policy should be reviewed by the business
        owner and, where appropriate, by legal or privacy counsel familiar with Canadian
        privacy law before it is relied upon. It describes this website's current, actual
        data practices — it does not claim certification under, or automatic compliance
        with, any specific privacy statute.
      </p>

      <h2>1. Who this policy covers</h2>
      <p>
        This policy explains how {siteConfig.businessDisplayName} (&ldquo;we,&rdquo;
        &ldquo;us&rdquo;), a sole proprietorship operating in St. Catharines, Ontario,
        collects, uses, discloses and protects personal information gathered through this
        website and related communications (phone, text and email).
      </p>

      <h2>2. Information we collect</h2>
      <p>When you contact us or request a free estimate, we may collect:</p>
      <ul>
        <li>Your name</li>
        <li>Phone number</li>
        <li>Email address</li>
        <li>City and postal code</li>
        <li>Information about your furniture and project (type, condition, materials, scope)</li>
        <li>Photographs you upload of your furniture</li>
        <li>The content of messages you send us through our forms, phone or email</li>
        <li>Standard website analytics data (see Section 8)</li>
      </ul>

      <h2>3. How we use your information</h2>
      <p>We use the information you provide to:</p>
      <ul>
        <li>Respond to your estimate request or inquiry</li>
        <li>Assess your furniture and prepare a preliminary or final estimate</li>
        <li>Communicate with you about an active or prospective project</li>
        <li>Coordinate scheduling, pickup or delivery where applicable</li>
        <li>Maintain basic business and project records</li>
        <li>Improve this website based on aggregate, non-identifying usage patterns</li>
      </ul>
      <p>
        We do not sell your personal information. We do not use the photographs or
        project details you share for marketing or promotional purposes without your
        separate consent.
      </p>

      <h2>4. Marketing communications and consent</h2>
      <p>
        Submitting a free estimate request or contact form does not automatically enrol
        you in marketing communications. Our forms separate &ldquo;contact me about my
        request&rdquo; (necessary to respond to you) from an optional checkbox for
        promotional updates. If you opt in to promotional communications, you may
        withdraw that consent at any time by replying &ldquo;unsubscribe,&rdquo; asking
        verbally, or contacting us using the details in Section 10. This practice is
        intended to align with Canada's Anti-Spam Legislation (CASL); see also our{" "}
        <a href="/terms-of-service">Terms of Service</a>.
      </p>

      <h2>5. How your information is stored and protected</h2>
      <p>
        Form submissions, including uploaded photographs, are processed through our
        website hosting provider's form-handling service and may also be stored using
        that provider's file storage. We take reasonable steps appropriate to a small
        business to limit access to your information to M.S. and, where relevant,
        service providers who help operate this website (see Section 6). No method of
        electronic storage or transmission is completely secure, and we cannot guarantee
        absolute security.
      </p>

      <h2>6. When information may be disclosed to service providers</h2>
      <p>
        We use third-party service providers to operate this website and process form
        submissions — for example, our website hosting provider and, if enabled, website
        analytics and spam-filtering services. These providers process information on our
        behalf and are not authorized to use it for their own independent purposes. We do
        not otherwise share your personal information with third parties except:
      </p>
      <ul>
        <li>With your consent</li>
        <li>To comply with a legal obligation, court order or lawful request</li>
        <li>To protect the rights, property or safety of our business, our customers or others</li>
      </ul>

      <h2>7. Retention</h2>
      <p>
        We retain project and contact information for as long as reasonably necessary to
        respond to your inquiry, complete a project, maintain business records for tax
        and accounting purposes, and meet any applicable legal requirements. If you'd
        like your information deleted sooner, contact us using the details in Section 10
        and we will do so unless we are required or permitted to retain it.
      </p>

      <h2>8. Website analytics and cookies</h2>
      <p>
        This website may use privacy-conscious analytics tools (such as Google Analytics
        and Google Search Console) to understand overall visitor traffic and improve the
        site. These tools may use cookies or similar technologies and may collect
        information such as approximate location, device and browser type, and pages
        visited. Analytics integrations on this site are configured through environment
        variables and are not active unless and until the business owner enables them —
        see <code>/docs/ANALYTICS-TRACKING-SETUP.md</code> in the project repository.
        Where analytics or advertising cookies are active, we aim to use them only to
        understand site performance and conversions (such as phone clicks and form
        submissions), not to build individual profiles for sale to third parties.
      </p>

      <h2>9. Access and correction requests</h2>
      <p>
        You may ask us what personal information we hold about you, request a correction
        to inaccurate information, or ask us to delete information we are not required to
        retain. We will respond within a reasonable time.
      </p>

      <h2>10. Privacy inquiries and contact</h2>
      <p>
        Privacy-related questions or requests can be directed to {siteConfig.privacyContactName}:
      </p>
      <ul>
        <li>{siteConfig.privacyContactMethod}</li>
      </ul>
      <p className="callout">
        A dedicated privacy contact email address should be added here once one is set
        up, per <code>/docs/CONFIGURATION.md</code>.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We may update this policy from time to time to reflect changes in our practices
        or for legal or operational reasons. The date this policy was last updated will
        be noted at the top of this page once it is finalized for publication.
      </p>
    </LegalPageLayout>
  );
}
