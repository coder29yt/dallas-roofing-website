"use client";

import useReveal from "./useReveal";
import { ShieldIcon, BadgeIcon, LayersIcon } from "./icons";
import { FileCheck } from "./TrustIcons";

const STATS = [
  { num: "15+", label: "Years of experience" },
  { num: "2,400+", label: "Roofs completed" },
  { num: "4.9", label: "Average customer rating", star: true },
  { num: "1", label: "Day — most replacements" },
];

const CHIPS = [
  { icon: ShieldIcon, label: "Licensed & fully insured" },
  { icon: BadgeIcon, label: "GAF-certified installers" },
  { icon: LayersIcon, label: "10-year workmanship warranty" },
  { icon: FileCheck, label: "Insurance claim specialists" },
];

export default function WhyUs() {
  const [ref, inView] = useReveal(0.15);

  return (
    <section className={`sec dark ${inView ? "in" : ""}`} ref={ref}>
      <div className="secInner">
        <span className="eyebrow reveal">Why Dallas trusts us</span>
        <h2 className="h2 reveal" style={{ transitionDelay: "0.1s" }}>
          A roof is a promise.
          <br />
          We keep ours in writing.
        </h2>
        <p className="secSub reveal" style={{ transitionDelay: "0.18s" }}>
          Most roofing companies sell shingles. We sell certainty — documented
          inspections, written warranties, and the kind of workmanship that
          still looks right ten summers from now.
        </p>

        <div className="statsRow">
          {STATS.map((s, i) => (
            <div
              className="stat reveal"
              style={{ transitionDelay: inView ? `${0.15 + i * 0.1}s` : "0s" }}
              key={s.label}
            >
              <div className="statNum">
                {s.num}
                {s.star && <em>★</em>}
              </div>
              <div className="statLabel">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="trustRow">
          {CHIPS.map((c, i) => (
            <span
              className="trustChip reveal"
              style={{ transitionDelay: inView ? `${0.4 + i * 0.08}s` : "0s" }}
              key={c.label}
            >
              <c.icon size={16} />
              {c.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
