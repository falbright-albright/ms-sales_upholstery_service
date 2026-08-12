import type { ButtonHTMLAttributes } from "react";
import { buttonClasses, type Size, type Variant } from "./Button";

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

/** A real <button type="submit">, styled to match <Button>. Use inside forms. */
export default function SubmitButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: SubmitButtonProps) {
  return (
    <button type="submit" className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
