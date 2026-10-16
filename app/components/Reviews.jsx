"use client";

import useReveal from "./useReveal";
import { StarIcon, InstagramIcon } from "./icons";

const REVIEWS = [
  {
    quote:
      "After the March hailstorm, three companies knocked on our door. Dallas Roofing was the only one that showed me photos of my actual roof and explained my options without pressure. New roof in one day — flawless.",
    name: "Melissa R.",
    area: "Lake Highlands, Dallas",
  },
  {
    quote:
      "They handled everything with my insurance company. I made one phone call, paid my deductible, and got a brand-new roof. I honestly didn't think it could be this easy.",
    name: "Marcus T.",
    area: "Plano, TX",
  },
  {
    quote:
      "A leak at 9pm during a storm. They answered, tarped my roof that night, and had it repaired two days later. Customers for life.",
    name: "Angela S.",
    area: "Bishop Arts, Dallas",
  },
];

export default function Reviews() {
  const [ref, inView] = useReveal(0.12);

  return (
    <section id="reviews" className={`sec mist ${inView ? "in" : ""}`} ref={ref}>
      <div className="secInner">
        <span className="eyebrow reveal">Reviews</span>
        <h2 className="h2 reveal" style={{ transitionDelay: "0.1s" }}>
          Neighbors don&apos;t lie.
        </h2>
        <p className="secSub reveal" style={{ transitionDelay: "0.18s" }}>
          The strongest roof we install is our reputation. Here&apos;s what
          Dallas homeowners say after the crew drives away.
        </p>

        <div className="reviewGrid">
          {REVIEWS.map((r, i) => (
            <figure
              className="reviewCard reveal"
              style={{ transitionDelay: inView ? `${0.15 + i * 0.12}s` : "0s", margin: 0 }}
              key={r.name}
            >
              <span className="stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, k) => (
                  <StarIcon key={k} />
                ))}
              </span>
              <blockquote>“{r.quote}”</blockquote>
              <figcaption className="reviewer">
                <span className="avatar" aria-hidden="true">
                  {r.name[0]}
                </span>
                <span>
                  <b>{r.name}</b>
                  <span>{r.area}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="badgeRow">
          <a
            className="trustChip reveal"
            style={{ color: "#22293a", borderColor: "rgba(13,30,70,.15)", background: "#fff", transitionDelay: inView ? "0.45s" : "0s" }}
            href="https://www.instagram.com/dallasroofing_org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={16} />
            Follow @dallasroofing_org — daily project photos
          </a>
          <span
            className="trustChip reveal"
            style={{ color: "#22293a", borderColor: "rgba(13,30,70,.15)", background: "#fff", transitionDelay: inView ? "0.53s" : "0s" }}
          >
            <StarIcon size={15} /> 4.9 average rating
          </span>
          <span
            className="trustChip reveal"
            style={{ color: "#22293a", borderColor: "rgba(13,30,70,.15)", background: "#fff", transitionDelay: inView ? "0.61s" : "0s" }}
          >
            A+ BBB standard
          </span>
        </div>
      </div>
    </section>
  );
}
