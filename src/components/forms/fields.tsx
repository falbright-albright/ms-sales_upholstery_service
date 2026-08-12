"use client";

import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

const inputClasses =
  "w-full rounded-sm border border-tan-dark/50 bg-paper px-3.5 py-2.5 text-charcoal placeholder:text-ink-muted/60 focus:border-brown focus:outline-none";

export function FieldWrap({
  label,
  htmlFor,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
}) {
  const errorId = `${htmlFor}-error`;
  const hintId = `${htmlFor}-hint`;
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-charcoal">
        {label} {required ? <span className="text-error">*</span> : <span className="font-normal text-ink-muted">(optional)</span>}
      </label>
      {hint ? (
        <p id={hintId} className="mb-1.5 text-xs text-ink-muted">
          {hint}
        </p>
      ) : null}
      {children}
      {error ? (
        <p id={errorId} role="alert" className="mt-1.5 text-sm font-medium text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  hint?: string;
}

export function TextField({ label, name, required, error, hint, ...rest }: TextFieldProps) {
  return (
    <FieldWrap label={label} htmlFor={name} required={required} error={error} hint={hint}>
      <input
        id={name}
        name={name}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : hint ? `${name}-hint` : undefined}
        className={inputClasses}
        {...rest}
      />
    </FieldWrap>
  );
}

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  hint?: string;
}

export function TextAreaField({
  label,
  name,
  required,
  error,
  hint,
  rows = 4,
  ...rest
}: TextAreaFieldProps) {
  return (
    <FieldWrap label={label} htmlFor={name} required={required} error={error} hint={hint}>
      <textarea
        id={name}
        name={name}
        required={required}
        rows={rows}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : hint ? `${name}-hint` : undefined}
        className={inputClasses}
        {...rest}
      />
    </FieldWrap>
  );
}

export function RadioGroupField({
  label,
  name,
  options,
  required,
  defaultValue,
  error,
}: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
  defaultValue?: string;
  error?: string;
}) {
  return (
    <fieldset>
      <legend className="mb-1.5 text-sm font-semibold text-charcoal">
        {label} {required ? <span className="text-error">*</span> : <span className="font-normal text-ink-muted">(optional)</span>}
      </legend>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex min-h-11 cursor-pointer items-center gap-2 rounded-sm border border-tan-dark/50 bg-paper px-3.5 py-2 text-sm has-[:checked]:border-brown has-[:checked]:bg-tan-light"
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              required={required}
              defaultChecked={defaultValue === opt.value}
              className="accent-brown"
            />
            {opt.label}
          </label>
        ))}
      </div>
      {error ? (
        <p role="alert" className="mt-1.5 text-sm font-medium text-error">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}
