"use client";

import { createContext, useContext, useMemo, useState } from "react";

/* ------------------------------------------------------------
   Bilingual copy (EN default / ES toggle) — nav + hero + labels.
   Long-form sections stay English in v1; a full /es page with
   hreflang is the documented next step for Hispanic SEO reach.
   ------------------------------------------------------------ */

export const STRINGS = {
  en: {
    nav: [
      { label: "HOME", href: "#home", icon: true },
      { label: "SERVICES", href: "#services" },
      { label: "PROJECTS", href: "#projects" },
      { label: "REVIEWS", href: "#reviews" },
    ],
    cta: "FREE ESTIMATE",
    h1: ["DALLAS", "ROOFING", "EXPERTS"],
    h1Delays: [550, 750, 950],
    tagline: [
      ["TRUSTED", "ROOFING"],
      ["EXPERTS", "FOR", "A", "STRONGER,", "WORRY-FREE"],
      ["DALLAS", "HOME."],
    ],
    taglineStart: 1150,
    taglineStep: 60,
    explore: "EXPLORE ROOFING SERVICES",
    caption: [["A", "roof", "built", "to"], ["protect", "what", "matters"]],
    captionStart: 2150,
    captionStep: 60,
    housesHeading: ["OUR", "LATEST", "Projects"],
    housesSub:
      "Recent roof replacements across Dallas — real homes, real craftsmanship, zero shortcuts. Drag through our latest work.",
    videoAria: "Dallas Roofing crew at work — photo reel",
  },

  es: {
    nav: [
      { label: "INICIO", href: "#home", icon: true },
      { label: "SERVICIOS", href: "#services" },
      { label: "PROYECTOS", href: "#projects" },
      { label: "RESEÑAS", href: "#reviews" },
    ],
    cta: "COTIZACIÓN GRATIS",
    h1: ["EXPERTOS", "TECHOS", "DALLAS"],
    h1Delays: [550, 750, 950],
    tagline: [
      ["EXPERTOS", "EN", "TECHOS"],
      ["DE", "CONFIANZA", "PARA", "UN", "HOGAR"],
      ["MÁS", "SEGURO."],
    ],
    taglineStart: 1150,
    taglineStep: 60,
    explore: "EXPLORA NUESTROS SERVICIOS",
    caption: [
      ["Un", "techo", "hecho", "para"],
      ["proteger", "lo", "que", "amas"],
    ],
    captionStart: 2150,
    captionStep: 60,
    housesHeading: ["NUESTROS", "ÚLTIMOS", "Proyectos"],
    housesSub:
      "Reemplazos de techo recientes en Dallas — hogares reales, verdadera artesanía, cero atajos.",
    videoAria: "Equipo de Dallas Roofing en acción — galería",
  },
};

const LangCtx = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en");
  const value = useMemo(
    () => ({ lang, setLang, t: STRINGS[lang] }),
    [lang]
  );
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
