import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

export type Variant = "primary" | "secondary" | "call" | "ghost";
export type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-semibold tracking-wide transition-colors duration-150 focus-visible:outline-3 focus-visible:outline-brass disabled:opacity-50 text-center";

const variants: Record<Variant, string> = {
  primary:
    "bg-brown text-cream hover:bg-brown-dark active:bg-brown-dark border border-brown",
  secondary:
    "bg-transparent text-brown border border-brown hover:bg-brown hover:text-cream",
  // bg-brass-light + text-charcoal keeps AA contrast (~6:1); the plain
  // bg-brass token reads well for decorative fills/icons but is too
  // light-on-dark-text-adjacent to safely pair with charcoal text.
  call: "bg-brass-light text-charcoal hover:bg-brass-hover border border-brass-dark/40",
  ghost: "bg-transparent text-charcoal underline underline-offset-4 hover:text-brown",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-sm md:text-base min-h-11",
  lg: "px-7 py-4 text-base md:text-lg min-h-13",
};

/** Shared class builder so <Button> (a link) and <SubmitButton> (a real
 * <button>, used inside forms) stay visually identical. */
export function buttonClasses(variant: Variant = "primary", size: Size = "md", className = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  children: ReactNode;
}

/**
 * A link styled as a button. We deliberately never render a CTA as a
 * plain <button> with no destination — every primary/secondary CTA on
 * this site either calls, navigates to the estimate form, or submits
 * a form (handled separately in QuoteForm/ContactForm).
 */
export default function Button({
  href,
  variant = "primary",
  size = "md",
  icon,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = buttonClasses(variant, size, className);
  const isExternalOrProtocol = /^(tel:|sms:|mailto:|https?:\/\/)/.test(href);

  if (isExternalOrProtocol) {
    return (
      <a href={href} className={classes} {...rest}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {icon}
      {children}
    </Link>
  );
}
