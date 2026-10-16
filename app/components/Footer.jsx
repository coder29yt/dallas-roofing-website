"use client";

import { useLang } from "./Lang";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
  InstagramIcon,
  FacebookIcon,
} from "./icons";

const PHONE_DISPLAY = "(214) 205-8979";

const AREAS = [
  "Dallas",
  "Plano",
  "Richardson",
  "Garland",
  "Mesquite",
  "Irving",
  "Arlington",
  "McKinney",
  "Frisco",
  "Fort Worth",
];

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      <div className="footerGrid">
        <div>
          <span className="brand">
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
          </span>
          <p className="footerBlurb">
            A licensed and insured roofing contractor serving Dallas and North
            Texas with honest inspections, manufacturer-spec installation, and
            warranties that actually mean something.
          </p>
          <div className="socialRow">
            <a
              className="socialDot"
              href="https://www.instagram.com/dallasroofing_org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dallas Roofing on Instagram"
            >
              <InstagramIcon size={17} />
            </a>
            <a
              className="socialDot"
              href="https://www.instagram.com/dallasroofing_org/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dallas Roofing on Facebook"
            >
              <FacebookIcon size={17} />
            </a>
          </div>
        </div>

        <nav aria-label="Footer">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Roof Replacement</a></li>
            <li><a href="#services">Roof Repair</a></li>
            <li><a href="#services">Storm & Hail Damage</a></li>
            <li><a href="#services">Free Roof Inspections</a></li>
            <li><a href="#services">Gutters & Flashing</a></li>
            <li><a href="#services">Commercial Roofing</a></li>
          </ul>
        </nav>

        <div>
          <h4>Service areas</h4>
          <ul>
            {AREAS.map((a) => (
              <li key={a}>{a}, TX</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a className="contactLine" href="tel:+12142058979">
                <PhoneIcon size={15} />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a className="contactLine" href="mailto:info@dallasroofing.org">
                <MailIcon size={15} />
                info@dallasroofing.org
              </a>
            </li>
            <li>
              <span className="contactLine">
                <PinIcon size={15} />
                Serving all of Dallas &amp; North Texas
              </span>
            </li>
            <li>
              <span className="contactLine">
                <ClockIcon size={15} />
                Mon – Sat · 9:00 AM – 7:00 PM
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footerBottom">
        <span>
          © {new Date().getFullYear()} Dallas Roofing. All rights reserved.
        </span>
        <nav aria-label="Legal">
          <a href="#home">Privacy Policy</a>
          <a href="#home">Terms of Service</a>
          <a href="#estimate">Free Estimate</a>
        </nav>
      </div>
    </footer>
  );
}
