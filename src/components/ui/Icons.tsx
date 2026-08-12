import type { SVGProps } from "react";

/**
 * Minimal hand-rolled icon set (no icon-library dependency). Each icon
 * is `aria-hidden` — icons here are always paired with visible text,
 * so they carry no independent accessible name.
 */

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...common} {...props}>
      <path d="M4.5 4h3.5l1.5 5-2.3 1.5a11 11 0 0 0 6.3 6.3L15 14l5 1.5V19a2 2 0 0 1-2 2C10.4 21 3 13.6 3 5a2 2 0 0 1 1.5-1Z" />
    </svg>
  );
}

export function CameraIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...common} {...props}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13" r="3.25" />
    </svg>
  );
}

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...common} {...props}>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.25" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...common} {...props}>
      <path d="M4 12.5 9.5 18 20 6" />
    </svg>
  );
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...common} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...common} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...common} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function ScissorsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...common} {...props}>
      <circle cx="6" cy="6" r="2.25" />
      <circle cx="6" cy="18" r="2.25" />
      <path d="M8 7.5 20 19M8 16.5 20 5M9.5 12 8 13.5" />
    </svg>
  );
}

export function SofaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...common} {...props}>
      <path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" />
      <path d="M3 12a1.5 1.5 0 0 1 1.5-1.5h15A1.5 1.5 0 0 1 21 12v3.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
      <path d="M4.5 16.5V19M19.5 16.5V19" />
    </svg>
  );
}

export function ChairIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...common} {...props}>
      <path d="M6 4h12M7 4v9h10V4M7 13H5.5A1.5 1.5 0 0 0 4 14.5V20M17 13h1.5A1.5 1.5 0 0 1 20 14.5V20" />
      <path d="M6.5 17.5h11" />
    </svg>
  );
}

export function ThreadIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...common} {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M8 12c1-2 3-2 4 0s3 2 4 0M8 9c1-2 3-2 4 0s3 2 4 0M8 15c1-2 3-2 4 0s3 2 4 0" />
    </svg>
  );
}

export function BuildingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...common} {...props}>
      <path d="M5 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16M13 21v-9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v9" />
      <path d="M8 7.5h.01M11 7.5h.01M8 11h.01M11 11h.01M8 14.5h.01M11 14.5h.01M16.5 13.5h.01M19 13.5h.01M16.5 17h.01M19 17h.01" />
    </svg>
  );
}

export function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...common} fill="currentColor" stroke="none" {...props}>
      <path d="M8 5.5v13a1 1 0 0 0 1.53.85l10.5-6.5a1 1 0 0 0 0-1.7l-10.5-6.5A1 1 0 0 0 8 5.5Z" />
    </svg>
  );
}

export function HandshakeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...common} {...props}>
      <path d="M2 12l4-3 3 2 3-2 2 1.5" />
      <path d="M6 9l5 4 2-1.5L18 15l3-2-5-5-3 1-3-2-4 2Z" />
      <path d="M9 13l-2.5 2a1.4 1.4 0 0 0 2 2L11 15" />
    </svg>
  );
}
