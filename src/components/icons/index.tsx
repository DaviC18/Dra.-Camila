import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number | string };

/** Base no mesmo traço do lucide: grid 24, stroke 2, pontas redondas, sem fill. */
function Icon({ size = 24, children, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3.5 20.5 4.9 16A8.6 8.6 0 1 1 8 19.1Z" />
      <path d="M9 8.6c-.3 2.9 3.4 6.6 6.4 6.4l1-1.3-2-1.1-.9.8a5 5 0 0 1-2.4-2.4l.8-.9-1.1-2Z" />
    </Icon>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <path d="M17.5 6.5h.01" />
    </Icon>
  );
}

export function ToothIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 5.6C10.6 4.2 8.7 3.4 7 3.7 4.5 4.1 3 6.4 3.3 9.1c.3 2.3 1.4 3.8 1.9 6 .5 2.3.7 5.4 2.4 5.9 1.6.4 2.1-2.5 2.5-4.3.3-1.3 1-2.1 1.9-2.1s1.6.8 1.9 2.1c.4 1.8.9 4.7 2.5 4.3 1.7-.5 1.9-3.6 2.4-5.9.5-2.2 1.6-3.7 1.9-6 .3-2.7-1.2-5-3.7-5.4-1.7-.3-3.6.5-5 1.9Z" />
    </Icon>
  );
}

export function BracesIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="7" width="5" height="10" rx="2" />
      <rect x="9.5" y="7" width="5" height="10" rx="2" />
      <rect x="16" y="7" width="5" height="10" rx="2" />
      <path d="M2 12h20" />
    </Icon>
  );
}
