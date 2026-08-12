import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site-config";

/**
 * Wraps content that is a placeholder needing the business owner's
 * input before launch (hours, address, bio, testimonials, etc).
 *
 * In production this renders ONLY the neutral customer-safe
 * `fallback` copy — never a raw "TODO" string in front of a real
 * visitor. When NEXT_PUBLIC_SHOW_PLACEHOLDER_NOTICES=true (intended
 * for local/staging review by the owner or developer), it also shows
 * a small dashed-border note so it's obvious what still needs to be
 * filled in before launch. See /docs/BUSINESS-LAUNCH-CHECKLIST.md.
 */
export default function AdminNote({
  note,
  fallback,
}: {
  note: string;
  fallback: ReactNode;
}) {
  if (!siteConfig.showAdminPlaceholderNotices) {
    return <>{fallback}</>;
  }

  return (
    <span className="inline-block rounded border border-dashed border-error/60 bg-error/5 px-2 py-1 text-error">
      {fallback}
      <span className="mt-1 block text-[11px] font-semibold uppercase tracking-wide">
        ⚠ Needs owner input: {note}
      </span>
    </span>
  );
}
