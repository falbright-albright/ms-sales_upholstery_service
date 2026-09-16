"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { TextField, TextAreaField, RadioGroupField } from "./fields";
import PhotoUpload from "./PhotoUpload";
import SubmitButton from "@/components/ui/SubmitButton";

/**
 * FREE ESTIMATE / QUOTE FORM — Netlify Forms integration.
 * ------------------------------------------------------------------
 * How this connects to Netlify:
 * 1. This project uses @netlify/plugin-nextjs v5 (the OpenNext-based
 *    Next.js runtime). That runtime doesn't emit the kind of plain,
 *    crawlable HTML Netlify's deploy-time form scanner needs, so form
 *    detection instead comes from /public/__forms.html — a static
 *    snapshot listing this form's name and every field. The `<form>`
 *    below is NOT scanned directly (its `name` here is just for
 *    React/accessibility) — see __forms.html for the source of truth
 *    Netlify actually reads, and https://opennext.js.org/netlify/forms
 *    for why.
 * 2. The hidden `bot-field` input is a honeypot: real visitors never
 *    fill it in (hidden via CSS, not `display:none`, so it's still
 *    reachable by naive bots), and Netlify's spam filter — configured
 *    via `data-netlify-honeypot` on the form in __forms.html — rejects
 *    submissions where it's filled. We also check it client-side below
 *    as a first pass.
 * 3. Submission happens via fetch() to `/__forms.html` (not this page)
 *    so Netlify's static-asset path actually catches it, while still
 *    showing an in-page confirmation instead of a full reload.
 * 4. File inputs are submitted as multipart/form-data so Netlify
 *    captures photo attachments with the submission.
 */
export default function QuoteForm() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function validate(data: FormData): Record<string, string> {
    const errors: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const description = String(data.get("description") || "").trim();
    const projectType = String(data.get("project-type") || "").trim();

    if (!name) errors.name = "Please enter your name.";
    if (!phone && !email) {
      errors.phone = "Enter a phone number or email so we can reach you.";
      errors.email = "Enter a phone number or email so we can reach you.";
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "That email address doesn't look right.";
    }
    if (!description) errors.description = "Tell us briefly what you need done.";
    if (!projectType) errors["project-type"] = "Select residential or commercial.";

    return errors;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);

    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);

    // Honeypot: if a bot filled this hidden field, silently succeed
    // without submitting — indistinguishable to the bot, invisible to
    // real visitors.
    if (String(data.get("bot-field") || "").length > 0) {
      router.push("/free-estimate/success");
      return;
    }

    const errors = validate(data);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      const firstKey = Object.keys(errors)[0];
      document.getElementById(firstKey)?.focus();
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        body: data,
      });
      if (!res.ok) throw new Error(`Submission failed with status ${res.status}`);
      router.push("/free-estimate/success");
    } catch {
      setFormError(
        "Something went wrong sending your request. Please try again, or call M.S. directly at (519) 242-5757."
      );
      setSubmitting(false);
    }
  }

  return (
    <form
      ref={formRef}
      name="quote-request"
      method="POST"
      encType="multipart/form-data"
      action="/__forms.html"
      onSubmit={handleSubmit}
      className="space-y-6"
      noValidate
    >
      {/* Must match the form-name declared in public/__forms.html */}
      <input type="hidden" name="form-name" value="quote-request" />
      {/* Honeypot field — hidden from real visitors via CSS, left in the tab order for none */}
      <p className="hidden">
        <label>
          Leave this field blank
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField
          label="Name"
          name="name"
          type="text"
          autoComplete="name"
          required
          error={fieldErrors.name}
        />
        <TextField
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          error={fieldErrors.phone}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          error={fieldErrors.email}
        />
        <RadioGroupField
          label="Preferred contact method"
          name="contact-method"
          options={[
            { value: "phone", label: "Phone" },
            { value: "email", label: "Email" },
            { value: "text", label: "Text message" },
          ]}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <RadioGroupField
          label="Residential or commercial?"
          name="project-type"
          required
          options={[
            { value: "residential", label: "Residential" },
            { value: "commercial", label: "Commercial" },
          ]}
          error={fieldErrors["project-type"]}
        />
        <TextField
          label="Number of pieces"
          name="piece-count"
          type="number"
          min={1}
          inputMode="numeric"
        />
      </div>

      <TextField
        label="Type of furniture"
        name="furniture-type"
        type="text"
        placeholder="e.g. 4 dining chairs, one armchair, restaurant booth…"
      />

      <TextAreaField
        label="Description of work required"
        name="description"
        required
        rows={5}
        placeholder="What's wrong with the piece, and what would you like done?"
        error={fieldErrors.description}
      />

      <RadioGroupField
        label="Preferred material"
        name="material-preference"
        options={[
          { value: "fabric", label: "Fabric" },
          { value: "vinyl", label: "Vinyl" },
          { value: "unsure", label: "Unsure — need advice" },
        ]}
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <TextField label="City" name="city" type="text" autoComplete="address-level2" />
        <TextField
          label="Postal code"
          name="postal-code"
          type="text"
          autoComplete="postal-code"
        />
      </div>

      <PhotoUpload error={fieldErrors.photos} />

      <TextAreaField
        label="Additional information"
        name="additional-info"
        rows={3}
        placeholder="Anything else that would help us understand your project"
      />

      <div className="rounded-md border border-tan-light bg-cream-dark/50 p-4 text-sm text-charcoal-soft">
        <p>
          By submitting this form you agree that M.S. may contact you about this
          estimate request by phone, email or text.
        </p>
        <label className="mt-3 flex items-start gap-2">
          <input type="checkbox" name="marketing-consent" value="yes" className="mt-1 accent-brown" />
          <span>
            I would also like to receive occasional promotional updates and offers by
            phone, email or text. You can unsubscribe at any time.
          </span>
        </label>
        <p className="mt-3 text-xs text-ink-muted">
          Final pricing may depend on an in-person inspection, furniture condition,
          materials selected, labour required, and the scope of repairs. Submitting this
          form does not create a binding quote. See our{" "}
          <Link href="/privacy-policy" className="underline hover:text-brown">
            Privacy Policy
          </Link>{" "}
          for how your information is used.
        </p>
      </div>

      {formError ? (
        <p role="alert" className="rounded-md border border-error/40 bg-error/5 p-4 text-sm font-medium text-error">
          {formError}
        </p>
      ) : null}

      <SubmitButton
        variant="primary"
        size="lg"
        disabled={submitting}
        aria-busy={submitting}
        className="w-full sm:w-auto"
      >
        {submitting ? "Sending your request…" : "Send My Free Estimate Request"}
      </SubmitButton>
    </form>
  );
}
