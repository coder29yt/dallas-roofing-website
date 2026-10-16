import { Playfair_Display, Archivo, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-playfair",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-archivo",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport = {
  themeColor: "#1150ef",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL("https://www.dallasroofing.org"),
  title: {
    default:
      "Dallas Roofing | Roof Replacement, Repair & Storm Damage Experts in Dallas, TX",
    template: "%s | Dallas Roofing",
  },
  description:
    "Licensed & insured Dallas roofing contractors. Free 21-point inspections, insurance-claim help, single-day roof replacement and a 10-year workmanship warranty. Call (214) 205-8979.",
  keywords: [
    "roofing contractor dallas tx",
    "roof replacement dallas",
    "roof repair dallas",
    "storm damage roof dallas",
    "hail damage roof repair",
    "roof inspection dallas",
    "dallas roofer",
    "commercial roofing dallas",
  ],
  applicationName: "Dallas Roofing",
  authors: [{ name: "Dallas Roofing" }],
  creator: "Dallas Roofing",
  publisher: "Dallas Roofing",
  formatDetection: { telephone: true, address: true, email: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.dallasroofing.org",
    siteName: "Dallas Roofing",
    title: "Dallas Roofing | Trusted Roofing Experts in Dallas, TX",
    description:
      "Free inspections. Single-day replacements. Insurance-claim specialists. Dallas' trusted roofing contractor — call (214) 205-8979.",
    locale: "en_US",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Dallas Roofing — trusted roofing experts in Dallas, TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dallas Roofing | Trusted Roofing Experts in Dallas, TX",
    description:
      "Free inspections. Single-day replacements. Insurance-claim specialists. Call (214) 205-8979.",
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Home & Construction",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.dallasroofing.org/#business",
  name: "Dallas Roofing",
  alternateName: "Dallas Roofing — Roofing Contractor",
  url: "https://www.dallasroofing.org",
  image: "https://www.dallasroofing.org/images/og.jpg",
  logo: "https://www.dallasroofing.org/images/og.jpg",
  description:
    "Licensed and insured roofing contractor in Dallas, TX specializing in roof replacement, roof repair, storm and hail damage restoration, inspections, gutters and commercial roofing.",
  telephone: "+1-214-205-8979",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dallas",
    addressRegion: "TX",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 32.7767, longitude: -96.797 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: ["https://www.instagram.com/dallasroofing_org/"],
  areaServed: [
    "Dallas TX",
    "Plano TX",
    "Richardson TX",
    "Garland TX",
    "Mesquite TX",
    "Irving TX",
    "Arlington TX",
    "McKinney TX",
    "Frisco TX",
    "Fort Worth TX",
  ].map((n) => ({ "@type": "City", name: n.replace(" TX", "") })),
  makesOffer: [
    "Roof Replacement",
    "Roof Repair",
    "Storm & Hail Damage Restoration",
    "Roof Inspection",
    "Gutter Installation",
    "Commercial Roofing",
  ].map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s },
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.dallasroofing.org/#website",
  url: "https://www.dallasroofing.org",
  name: "Dallas Roofing",
  publisher: { "@id": "https://www.dallasroofing.org/#business" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a new roof cost in Dallas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most asphalt shingle replacements in Dallas run between $9,500 and $18,000 depending on roof size, pitch, material and the condition of the decking. Every home is different, which is why we give you a free, written, line-by-line estimate before any work begins.",
      },
    },
    {
      "@type": "Question",
      name: "Will you help with my insurance claim after a hailstorm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We document all storm damage with dated photos, meet your insurance adjuster on-site, and handle the paperwork so your claim is approved correctly the first time. Most homeowners only pay their deductible.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if I need a roof repair or a full replacement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our free 21-point inspection answers that honestly. Localized damage usually needs a repair; widespread curling, granule loss, soft decking or a roof past its service life usually needs replacement. We never sell a roof you don't need.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a roof replacement take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Dallas-area homes are completed in a single day. Larger or more complex roofs may take two to three days. We protect your landscaping, magnet-sweep the property for nails, and haul away all debris.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dallas Roofing is fully licensed and carries general liability coverage plus workers' compensation on every crew. Certificates are provided with every estimate.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Dallas and roughly a 40-mile radius across North Texas, including Plano, Richardson, Garland, Mesquite, Irving, Arlington, McKinney, Frisco and Fort Worth.",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${archivo.variable} ${manrope.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
