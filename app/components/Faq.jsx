"use client";

import { useState } from "react";
import useReveal from "./useReveal";
import { PlusIcon } from "./icons";

const FAQS = [
  {
    q: "How much does a new roof cost in Dallas?",
    a: "Most asphalt shingle replacements in Dallas run between $9,500 and $18,000 depending on roof size, pitch, material and the condition of the decking. Every home is different, which is why we give you a free, written, line-by-line estimate before any work begins.",
  },
  {
    q: "Will you help with my insurance claim after a hailstorm?",
    a: "Yes. We document all storm damage with dated photos, meet your insurance adjuster on-site, and handle the paperwork so your claim is approved correctly the first time. Most homeowners only pay their deductible.",
  },
  {
    q: "How do I know if I need a repair or a full replacement?",
    a: "Our free 21-point inspection answers that honestly. Localized damage usually needs a repair; widespread curling, granule loss, soft decking or a roof past its service life usually needs replacement. We never sell a roof you don't need.",
  },
  {
    q: "How long does a roof replacement take?",
    a: "Most Dallas-area homes are completed in a single day. Larger or more complex roofs may take two to three days. We protect your landscaping, magnet-sweep the property for nails, and haul away all debris.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Dallas Roofing is fully licensed and carries general liability coverage plus workers' compensation on every crew. Certificates are provided with every estimate.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Dallas and roughly a 40-mile radius across North Texas, including Plano, Richardson, Garland, Mesquite, Irving, Arlington, McKinney, Frisco and Fort Worth.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  const [ref, inView] = useReveal(0.15);

  return (
    <section id="faq" className={`sec ${inView ? "in" : ""}`} ref={ref}>
      <div className="secInner">
        <div style={{ textAlign: "center" }}>
          <span className="eyebrow reveal" style={{ justifyContent: "center" }}>
            FAQ
          </span>
          <h2 className="h2 reveal" style={{ transitionDelay: "0.1s" }}>
            Straight answers, before you ask.
          </h2>
        </div>

        <div className="faqWrap">
          {FAQS.map((f, i) => (
            <div
              className={`faqItem reveal ${open === i ? "open" : ""}`}
              style={{ transitionDelay: inView ? `${0.1 + i * 0.07}s` : "0s" }}
              key={f.q}
            >
              <button
                className="faqQ"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                {f.q}
                <span className="faqPlus">
                  <PlusIcon size={15} sw={2} />
                </span>
              </button>
              <div className="faqA">
                <div>
                  <p>{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
