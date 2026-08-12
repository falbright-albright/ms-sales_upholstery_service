import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig, telHref } from "@/lib/site-config";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility Statement",
  description: "Our approach to making this website accessible, and how to report a barrier.",
  path: "/accessibility-statement",
});

export default function AccessibilityStatementPage() {
  return (
    <LegalPageLayout title="Accessibility Statement">
      <h2>Our commitment</h2>
      <p>
        We want this website to be usable by as many visitors as possible, including
        people using assistive technology such as screen readers, keyboard-only
        navigation, or browser zoom and text-resizing tools. This site has been built
        with the following practices in mind, guided by the Web Content Accessibility
        Guidelines (WCAG):
      </p>
      <ul>
        <li>Semantic HTML structure with a logical heading hierarchy</li>
        <li>Keyboard-navigable menus, forms and interactive elements</li>
        <li>Visible focus indicators for keyboard users</li>
        <li>Descriptive labels on form fields and buttons</li>
        <li>Alt text on meaningful images, and decorative icons hidden from screen readers</li>
        <li>Colour contrast intended to meet WCAG AA guidance for text and interactive elements</li>
        <li>Support for reduced-motion preferences</li>
        <li>Information that is not conveyed by colour alone</li>
      </ul>

      <h2>Ontario accessibility requirements</h2>
      <p>
        As a small Ontario business, we are mindful of the Accessibility for Ontarians
        with Disabilities Act (AODA) and its Information and Communications Standard.
        This statement describes our good-faith approach to accessible design; it is not
        a certification of full conformance with any specific WCAG level, and the
        business owner should confirm which AODA obligations apply to a business of this
        size before relying on this page as a compliance record.
      </p>

      <h2>Known limitations</h2>
      <p>
        Accessibility is an ongoing effort rather than a one-time fix. If you encounter a
        barrier using this website — a form that's hard to complete, an image without
        useful alt text, or anything else — we want to know about it.
      </p>

      <h2>Reporting an accessibility issue</h2>
      <p>
        Please contact {siteConfig.ownerName} by phone at{" "}
        <a href={telHref}>{siteConfig.phoneDisplay}</a> to report an accessibility barrier
        on this website. We'll do our best to address it and to offer an alternative way
        to reach us or complete your request in the meantime.
      </p>
    </LegalPageLayout>
  );
}
