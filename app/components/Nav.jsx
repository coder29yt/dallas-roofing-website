"use client";

import { useState } from "react";
import { useLang } from "./Lang";
import { HouseIcon, MenuIcon, XIcon } from "./icons";

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      {/* left — logo */}
      <a
        href="#home"
        className="brand fadeDown"
        style={{ animationDelay: ".1s" }}
        aria-label="Dallas Roofing — home"
      >
        <svg
          className="brandMark"
          viewBox="0 0 40 30"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 17 20 4l17 13" />
          <path d="M7.5 15.5V27h25V15.5" />
          <path d="M16 27v-7h8v7" />
        </svg>
        <span className="brandText">
          <b>Dallas Roofing</b>
          <span>Dallas · TX</span>
        </span>
      </a>

      {/* center — pill nav (desktop) */}
      <nav className="pillNav" aria-label="Primary">
        {t.nav.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            className={`pill fadeDown ${i === 0 ? "active" : ""}`}
            style={{ animationDelay: `${0.2 + i * 0.08}s` }}
          >
            {item.icon && <HouseIcon size={15} sw={1.8} />}
            {item.label}
          </a>
        ))}
      </nav>

      {/* right — language + CTA (desktop) / hamburger (mobile) */}
      <div className="navRight">
        <div className="langSwitch fadeDown" style={{ animationDelay: ".52s" }} role="group" aria-label="Language">
          <button
            className={`langBtn ${lang === "en" ? "on" : ""}`}
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
          <button
            className={`langBtn ${lang === "es" ? "on" : ""}`}
            onClick={() => setLang("es")}
            aria-pressed={lang === "es"}
          >
            ES
          </button>
        </div>

        <a
          href="#estimate"
          className="ctaPill fadeDown"
          style={{ animationDelay: ".6s" }}
        >
          {t.cta}
        </a>

        <button
          className="burger fadeDown"
          style={{ animationDelay: ".65s" }}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <XIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>

      {open && (
        <div className="mobileMenu" onClick={() => setOpen(false)}>
          {t.nav.map((item, i) => (
            <a key={item.label} href={item.href} className={i === 0 ? "active" : ""}>
              {item.icon && <HouseIcon size={15} sw={1.8} />}
              {item.label}
            </a>
          ))}
          <a href="#estimate">{t.cta}</a>
        </div>
      )}
    </header>
  );
}
