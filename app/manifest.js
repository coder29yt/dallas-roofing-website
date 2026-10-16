export default function manifest() {
  return {
    name: "Dallas Roofing — Roofing Contractor in Dallas, TX",
    short_name: "Dallas Roofing",
    description:
      "Licensed & insured Dallas roofing contractors. Free inspections, single-day replacement, insurance-claim help.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1150ef",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
