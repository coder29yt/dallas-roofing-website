"use client";

import { useEffect, useState } from "react";
import { PhoneIcon, ArrowUpRight } from "./icons";

export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`stickyCta ${show ? "show" : ""}`}>
      <a className="scCall" href="tel:+12142058979">
        <PhoneIcon size={16} />
        Call now
      </a>
      <a className="scQuote" href="#estimate">
        Free estimate
        <ArrowUpRight size={16} />
      </a>
    </div>
  );
}
