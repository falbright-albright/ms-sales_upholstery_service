"use client";

import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { TextField, TextAreaField, RadioGroupField } from "./fields";
import SubmitButton from "@/components/ui/SubmitButton";

/**
 * General contact form (separate Netlify Forms endpoint, name="contact")
 * for visitors who want to ask a question rather than submit a full
 * project quote request. See QuoteForm.tsx for detailed notes on how
 * the Netlify Forms wiring works.
 */
export default function ContactForm() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const errors: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name) errors.name = "Please enter your name.";
    if (!phone && !email) {
      errors.phone = "Enter a phone number or email so we can reach you.";
      errors.email = "Enter a phone number or email so we can reach you.";
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "That email address doesn't look right.";
    }
    if (!message) errors.message = "Let us know what you need.";
    return errors;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);
    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);

    if (String(data.get("bot-field") || "").length > 0) {
      router.push("/free-estimate/success");
      return;
    }

    const errors = validate(data);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      document.getElementById(Object.keys(errors)[0])?.focus();
      return;
    }

    setSubmitting(true);
    try {
      const plainEntries = Object.fromEntries(
        Array.from(data.entries()).map(([key, value]) => [key, String(value)])
      );
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(plainEntries).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      router.push("/free-estimate/success");
    } catch {
      setFormError(
        "Something went wrong sending your message. Please try again, or call M.S. directly at (519) 242-5757."
      );
      setSubmitting(false);
    }
  }

  return (
    <form
      ref={formRef}
      name="contact"
      method="POST"
      action="/free-estimate/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5"
      noValidate
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Leave this field blank
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <TextField label="Name" name="name" type="text" autoComplete="name" required error={fieldErrors.name} />
        <TextField label="Phone" name="phone" type="tel" autoComplete="tel" error={fieldErrors.phone} />
      </div>
      <TextField label="Email" name="email" type="email" autoComplete="email" error={fieldErrors.email} />
      <RadioGroupField
        label="I'm contacting you as a"
        name="inquiry-type"
        options={[
          { value: "residential", label: "Homeowner" },
          { value: "commercial", label: "Business" },
          { value: "other", label: "Other / not sure" },
        ]}
      />
      <TextAreaField
        label="Message"
        name="message"
        required
        rows={5}
        placeholder="How can we help?"
        error={fieldErrors.message}
      />

      <label className="flex items-start gap-2 text-sm text-charcoal-soft">
        <input type="checkbox" name="marketing-consent" value="yes" className="mt-1 accent-brown" />
        <span>
          I would also like to receive occasional promotional updates and offers by phone,
          email or text. You can unsubscribe at any time.
        </span>
      </label>

      {formError ? (
        <p role="alert" className="rounded-md border border-error/40 bg-error/5 p-4 text-sm font-medium text-error">
          {formError}
        </p>
      ) : null}

      <SubmitButton variant="primary" size="lg" disabled={submitting} aria-busy={submitting}>
        {submitting ? "Sending…" : "Send Message"}
      </SubmitButton>
    </form>
  );
}
