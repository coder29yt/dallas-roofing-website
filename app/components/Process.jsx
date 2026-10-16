"use client";

import useReveal from "./useReveal";

const STEPS = [
  {
    num: "01",
    title: "Free inspection",
    body: "Call or book online. We inspect your roof, photograph everything, and give you a straight answer — repair or replace.",
  },
  {
    num: "02",
    title: "Clear estimate",
    body: "One page, line by line, no surprises. If insurance is involved, we meet your adjuster on-site and advocate for you.",
  },
  {
    num: "03",
    title: "Scheduled build",
    body: "Most replacements finished in a single day. We protect your landscaping, magnet-sweep for nails, and haul everything away.",
  },
  {
    num: "04",
    title: "Warranty & care",
    body: "Manufacturer coverage plus our 10-year workmanship warranty. Your project manager stays one call away — for years, not weeks.",
  },
];

export default function Process() {
  const [ref, inView] = useReveal(0.15);

  return (
    <section className={`sec ${inView ? "in" : ""}`} ref={ref}>
      <div className="secInner">
        <span className="eyebrow reveal">How it works</span>
        <h2 className="h2 reveal" style={{ transitionDelay: "0.1s" }}>
          Simple, honest, done right.
        </h2>
        <p className="secSub reveal" style={{ transitionDelay: "0.18s" }}>
          Four steps between you and a roof you never have to think about
          again. No pressure, no mystery pricing, no weeks of waiting.
        </p>

        <div className="steps">
          {STEPS.map((s, i) => (
            <div
              className="step reveal"
              style={{ transitionDelay: inView ? `${0.15 + i * 0.12}s` : "0s" }}
              key={s.num}
            >
              <div className="stepNum">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
