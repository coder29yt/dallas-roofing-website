"use client";

import { useRef } from "react";
import Image from "next/image";
import useReveal from "./useReveal";
import { useLang } from "./Lang";
import { BadgeIcon } from "./icons";

const PROJECTS = [
  {
    src: "/images/project-1.jpg",
    alt: "New charcoal architectural shingle roof installed in Lake Highlands, Dallas",
    chip: "Roof Replacement · Lake Highlands",
  },
  {
    src: "/images/project-2.jpg",
    alt: "New clay tile roof on a Mediterranean home in University Park, Dallas",
    chip: "Tile Roof · University Park",
  },
  {
    src: "/images/project-3.jpg",
    alt: "Black standing-seam metal roof on a modern farmhouse in Plano, TX",
    chip: "Metal Roof · Plano",
  },
];

export default function Houses() {
  const [ref, inView] = useReveal(0.15);
  const { t } = useLang();
  const words = t.housesHeading;

  /* --- mouse drag-to-scroll with momentum (touch devices scroll natively) --- */
  const trackRef = useRef(null);
  const drag = useRef({
    down: false,
    startX: 0,
    startScroll: 0,
    vel: 0,
    lastX: 0,
    lastT: 0,
    raf: null,
  });

  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse") return; // real touch = native swipe
    const el = trackRef.current;
    if (!el || el.scrollWidth <= el.clientWidth) return;
    const d = drag.current;
    cancelAnimationFrame(d.raf);
    d.down = true;
    d.startX = e.clientX;
    d.startScroll = el.scrollLeft;
    d.vel = 0;
    d.lastX = e.clientX;
    d.lastT = performance.now();
    el.classList.add("dragging");
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d.down) return;
    const el = trackRef.current;
    el.scrollLeft = d.startScroll - (e.clientX - d.startX);
    const now = performance.now();
    const dt = Math.max(now - d.lastT, 1);
    d.vel = (e.clientX - d.lastX) / dt; // px per ms
    d.lastX = e.clientX;
    d.lastT = now;
  };

  const endDrag = () => {
    const d = drag.current;
    if (!d.down) return;
    d.down = false;
    const el = trackRef.current;
    el.classList.remove("dragging");
    // glide, then let CSS scroll-snap settle
    const glide = () => {
      if (Math.abs(d.vel) < 0.02) return;
      el.scrollLeft -= d.vel * 14;
      d.vel *= 0.94;
      d.raf = requestAnimationFrame(glide);
    };
    d.raf = requestAnimationFrame(glide);
  };

  return (
    <section id="projects" className={`houses ${inView ? "in" : ""}`} ref={ref}>
      <div className="housesHead">
        <h2 className="housesH2">
          {words.map((word, i) => (
            <span key={word}>
              <span
                className="w2"
                style={{ transitionDelay: inView ? `${i * 0.15}s` : "0s" }}
              >
                {word}
              </span>
            </span>
          ))}
        </h2>
        <p className="housesSub">{t.housesSub}</p>
      </div>

      <div className="cardsWrap">
        <div
          className="cards"
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
        >
          {PROJECTS.map((p, i) => (
            <figure
              className="card"
              key={p.src}
              style={{ transitionDelay: inView ? `${0.2 + i * 0.15}s` : "0s", margin: 0 }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={1024}
                height={1536}
                sizes="(max-width: 860px) 74vw, 30vw"
                draggable={false}
              />
              <figcaption className="cardChip">
                <BadgeIcon size={13} />
                {p.chip}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
