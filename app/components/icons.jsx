/* Inline lucide-style icon set (stroke = currentColor) — no external deps. */

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Icon({ d, size = 18, sw = 1.7, children, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...base}
      strokeWidth={sw}
      aria-hidden="true"
      {...rest}
    >
      {d ? <path d={d} /> : children}
    </svg>
  );
}

export const HouseIcon = (p) => (
  <Icon {...p}>
    <path d="M3 10.8 12 3.4l9 7.4" />
    <path d="M5.4 9.6V20a.6.6 0 0 0 .6.6h12a.6.6 0 0 0 .6-.6V9.6" />
    <path d="M9.8 20.6v-5.4h4.4v5.4" />
  </Icon>
);

export const ArrowUpRight = (p) => (
  <Icon {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </Icon>
);

export const ArrowRight = (p) => (
  <Icon {...p}>
    <path d="M4.5 12h15" />
    <path d="m13.5 6 6 6-6 6" />
  </Icon>
);

export const MenuIcon = (p) => (
  <Icon {...p}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </Icon>
);

export const XIcon = (p) => (
  <Icon {...p}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </Icon>
);

export const PlusIcon = (p) => (
  <Icon {...p}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </Icon>
);

export const PhoneIcon = (p) => (
  <Icon {...p}>
    <path d="M22 16.92v2.6a1.9 1.9 0 0 1-2.08 1.9 18.9 18.9 0 0 1-8.23-2.93 18.6 18.6 0 0 1-5.72-5.72A18.9 18.9 0 0 1 3.04 4.2 1.9 1.9 0 0 1 4.94 2.1h2.6a1.9 1.9 0 0 1 1.9 1.64c.12.9.34 1.79.66 2.64a1.9 1.9 0 0 1-.43 2L8.66 9.4a15.2 15.2 0 0 0 5.72 5.72l1.01-1.01a1.9 1.9 0 0 1 2-.43c.85.32 1.74.54 2.64.66A1.9 1.9 0 0 1 22 16.92Z" />
  </Icon>
);

export const ShieldIcon = (p) => (
  <Icon {...p}>
    <path d="M20 13c0 5-3.5 7.5-7.7 8.94a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);

export const WrenchIcon = (p) => (
  <Icon {...p}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z" />
  </Icon>
);

export const CloudHailIcon = (p) => (
  <Icon {...p}>
    <path d="M4 14.9A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.24" />
    <path d="M8 15v.01" />
    <path d="M8 19v.01" />
    <path d="M12 17v.01" />
    <path d="M12 21v.01" />
    <path d="M16 15v.01" />
    <path d="M16 19v.01" />
  </Icon>
);

export const SearchIcon = (p) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="7.5" />
    <path d="m21 21-4.4-4.4" />
    <path d="m8.2 11 2 2 3.6-3.8" />
  </Icon>
);

export const DropletIcon = (p) => (
  <Icon {...p}>
    <path d="M12 2.7s6.5 6.6 6.5 11.3a6.5 6.5 0 0 1-13 0C5.5 9.3 12 2.7 12 2.7Z" />
  </Icon>
);

export const BuildingIcon = (p) => (
  <Icon {...p}>
    <path d="M6 21.5V4.3a1.8 1.8 0 0 1 1.8-1.8h8.4A1.8 1.8 0 0 1 18 4.3v17.2" />
    <path d="M3 21.5h18" />
    <path d="M9.7 7h4.6" />
    <path d="M9.7 11h4.6" />
    <path d="M9.7 15h4.6" />
  </Icon>
);

export const StarIcon = ({ size = 15, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
    <path d="M12 2.5l2.83 6.1 6.67.72-4.95 4.5 1.36 6.58L12 17l-5.91 3.4 1.36-6.58-4.95-4.5 6.67-.72L12 2.5Z" />
  </svg>
);

export const CheckIcon = (p) => (
  <Icon {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Icon>
);

export const MailIcon = (p) => (
  <Icon {...p}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Icon>
);

export const PinIcon = (p) => (
  <Icon {...p}>
    <path d="M19.5 10c0 5.25-7.5 11.5-7.5 11.5S4.5 15.25 4.5 10a7.5 7.5 0 0 1 15 0Z" />
    <circle cx="12" cy="10" r="2.8" />
  </Icon>
);

export const ClockIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.2 1.8" />
  </Icon>
);

export const InstagramIcon = (p) => (
  <Icon {...p}>
    <rect x="2.8" y="2.8" width="18.4" height="18.4" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <path d="M17.3 6.7v.01" />
  </Icon>
);

export const FacebookIcon = (p) => (
  <Icon {...p}>
    <path d="M17.5 2.5h-2.9a4.6 4.6 0 0 0-4.6 4.6v2.9H7.1v3.9H10v8.6h3.9v-8.6h2.9l.7-3.9h-3.6V7.1a.9.9 0 0 1 .9-.9h2.6Z" />
  </Icon>
);

export const LayersIcon = (p) => (
  <Icon {...p}>
    <path d="m12 2.5 9.5 5L12 12.5l-9.5-5Z" />
    <path d="m2.5 12.5 9.5 5 9.5-5" />
    <path d="m2.5 17 9.5 5 9.5-5" />
  </Icon>
);

export const BadgeIcon = (p) => (
  <Icon {...p}>
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    <path d="m9 12 2 2 4-4" />
  </Icon>
);
