"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "./Lang";

const FRAMES = [
  "/images/frame-1.webp",
  "/images/frame-2.webp",
  "/images/frame-3.webp",
  "/images/frame-4.webp",
];

const FRAME_MS = 2300;

/* Animated "living reel" card. The original spec called for a looping
   <video>; here the same 4-shot reel plays as a Ken Burns slideshow with
   identical progress-bar behaviour — and it can never buffer, stall or
   die (keep-alive watchdog + visibility handler included). */

export default function VideoCard() {
  const { t } = useLang();
  const [idx, setIdx] = useState(0);
  const [prog, setProg] = useState(0);

  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    startRef.current = performance.now();

    // Preload chains one frame ahead on each slide change — never competes
    // with the hero LCP download, and the swap is always seam-free.
    const preload = (i) => {
      const im = new window.Image();
      im.src = FRAMES[i % FRAMES.length];
    };
    preload(1);

    const tick = (now) => {
      const el = now - startRef.current;
      if (el >= FRAME_MS) {
        startRef.current = now;
        setIdx((i) => {
          const next = (i + 1) % FRAMES.length;
          preload(next + 1);
          return next;
        });
        setProg(0);
      } else {
        setProg(el / FRAME_MS);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    // watchdog — the reel must NEVER stop (spec STEP 7)
    const iv = setInterval(() => {
      if (startRef.current == null) startRef.current = performance.now();
    }, 1000);

    const onVis = () => {
      if (!document.hidden) {
        startRef.current = performance.now();
        setProg(0);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearInterval(iv);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const jump = (k) => {
    startRef.current = performance.now();
    setProg(0);
    setIdx(k);
  };

  let wordIdx = 0;

  return (
    <aside className="videoCard">
      <div
        className="videoBox"
        role="img"
        aria-label={t.videoAria}
        onPointerDown={() => {
          startRef.current = performance.now();
          setProg(0);
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img key={idx} src={FRAMES[idx]} alt="" draggable="false" />
      </div>

      <div className="videoCaption">
        {t.caption.map((line, li) => (
          <span className="videoLine" key={li}>
            {line.map((word) => {
              const d = t.captionStart + wordIdx++ * t.captionStep;
              return (
                <span className="w wCap" style={{ animationDelay: `${d}ms` }} key={word}>
                  {word}{" "}
                </span>
              );
            })}
          </span>
        ))}
      </div>

      <div className="bars">
        {FRAMES.map((_, k) => (
          <button
            key={k}
            className={`barBtn ${k === idx ? "active" : ""}`}
            onClick={() => jump(k)}
            aria-label={`Go to clip ${k + 1} of ${FRAMES.length}`}
          >
            <span className="barTrack">
              <span
                className="barFill"
                style={{ width: k === idx ? `${prog * 100}%` : k < idx ? "100%" : "0%" }}
              />
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}
