"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/* Butter-smooth inertial scrolling.
   - Lerped wheel smoothing (native touch/trackpad momentum untouched)
   - Intercepts #anchor clicks for gliding section navigation
   - Disabled for prefers-reduced-motion users
   - Sticky CTA, IntersectionObserver reveals and scroll listeners keep
     working because Lenis animates the real window scroll position. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.09, // lower = floatier glide
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
      smoothWheel: true,
    });

    let rafId;
    const loop = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const hash = a.getAttribute("href");
      if (!hash || hash.length < 2) return;
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { duration: 1.4, offset: -6 });
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
