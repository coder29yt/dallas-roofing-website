"use client";

import useReveal from "./useReveal";
import { useLang } from "./Lang";
import {
  WrenchIcon,
  ShieldIcon,
  CloudHailIcon,
  SearchIcon,
  DropletIcon,
  BuildingIcon,
  ArrowRight,
} from "./icons";

const SERVICES = [
  {
    icon: ShieldIcon,
    title: "Roof Replacement",
    body: "A full tear-off and rebuild with premium architectural shingles, installed to manufacturer spec and backed by strong warranty coverage.",
  },
  {
    icon: WrenchIcon,
    title: "Roof Repair",
    body: "Missing shingles, active leaks, failed flashing — we find the real source of the problem and fix it right the first time.",
  },
  {
    icon: CloudHailIcon,
    title: "Storm & Hail Damage",
    body: "North Texas hail is inevitable — a ruined roof isn't. We document every finding and walk your insurance claim with you, step by step.",
  },
  {
    icon: SearchIcon,
    title: "Free Roof Inspections",
    body: "A free 21-point inspection with photo evidence, so you know exactly what your roof needs — and exactly what it doesn't.",
  },
  {
    icon: DropletIcon,
    title: "Gutters & Flashing",
    body: "Seamless gutters, crisp flashing and ventilation details that move water safely away from your home — the details that make roofs last.",
  },
  {
    icon: BuildingIcon,
    title: "Commercial Roofing",
    body: "Flat and low-slope systems for Dallas businesses, installed with minimal disruption to your operations, your tenants and your bottom line.",
  },
];

export default function Services() {
  const [ref, inView] = useReveal(0.12);

  return (
    <section id="services" className={`sec ${inView ? "in" : ""}`} ref={ref}>
      <div className="secInner">
        <span className="eyebrow reveal">What we do</span>
        <h2 className="h2 reveal" style={{ transitionDelay: "0.1s" }}>
          Roofing services, done right the first time.
        </h2>
        <p className="secSub reveal" style={{ transitionDelay: "0.18s" }}>
          From a single missing shingle to a full storm-damage rebuild, every
          job gets the same standard: manufacturer-spec installation, honest
          advice, and a crew that treats your home like their own.
        </p>

        <div className="servicesGrid">
          {SERVICES.map((s, i) => (
            <article
              className="serviceCard reveal"
              style={{ transitionDelay: inView ? `${0.15 + i * 0.09}s` : "0s" }}
              key={s.title}
            >
              <span className="serviceIcon">
                <s.icon size={22} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <a className="serviceLink" href="#estimate">
                Get a free quote
                <ArrowRight size={15} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
