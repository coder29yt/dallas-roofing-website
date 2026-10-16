"use client";

import { useState } from "react";
import useReveal from "./useReveal";
import { CheckIcon, PhoneIcon, ShieldIcon, ClockIcon, MailIcon } from "./icons";

const PHONE_DISPLAY = "(214) 205-8979";
const PHONE_TEL = "tel:+12142058979";
const EMAIL = "info@dallasroofing.org";

export default function Estimate() {
  const [ref, inView] = useReveal(0.12);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
    company: "", // honeypot — humans never see this
  });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (form.company) return; // bot trap

    const errs = {};
    if (!form.name.trim()) errs.name = "Please tell us your name.";
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 10) errs.phone = "Enter a valid phone number.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email.";

    setErrors(errs);
    if (Object.keys(errs).length) return;

    // v1 handoff: open a pre-filled email to the office + show confirmation.
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`
    );
    const subject = encodeURIComponent(`Free inspection request — ${form.name}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="estimate" className={`sec ${inView ? "in" : ""}`} ref={ref}>
      <div className="secInner">
        <div className="ctaBand">
          <div>
            <span className="eyebrow" style={{ color: "#b9cffd" }}>
              Free inspection
            </span>
            <h2>
              Your roof won&apos;t wait.
              <br />
              Neither should you.
            </h2>
            <ul className="ctaPoints">
              <li>
                <ClockIcon size={17} /> A real roofer answers the phone — usually within the hour.
              </li>
              <li>
                <ShieldIcon size={17} /> No-pressure written estimates. The price we quote is the price you pay.
              </li>
              <li>
                <CheckIcon size={17} /> Storm damage? We handle the insurance paperwork for you.
              </li>
            </ul>
            <div className="ctaActions">
              <a className="btnWhite" href={PHONE_TEL}>
                <PhoneIcon size={17} />
                Call {PHONE_DISPLAY}
              </a>
              <a className="btnGhost" href={`mailto:${EMAIL}`}>
                <MailIcon size={17} />
                Email us
              </a>
            </div>
          </div>

          <div className="formCard">
            {sent ? (
              <div className="success">
                <span className="successIcon">
                  <CheckIcon size={28} sw={2.2} />
                </span>
                <h3>Request received!</h3>
                <p>
                  Thanks, {form.name.split(" ")[0] || "neighbor"} — your email
                  draft is opening now. Prefer to skip the inbox? Call us and a
                  real roofer picks up.
                </p>
                <a className="btnGhost2" href={PHONE_TEL}>
                  <PhoneIcon size={16} />
                  {PHONE_DISPLAY}
                </a>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <h3>Book your free inspection</h3>
                <p className="formSub">
                  60-second form. We respond within one business day — usually
                  much faster.
                </p>

                <div className="fieldRow">
                  <div className="field">
                    <label htmlFor="f-name">Name *</label>
                    <input
                      id="f-name"
                      className={errors.name ? "err" : ""}
                      value={form.name}
                      onChange={set("name")}
                      placeholder="John Carter"
                      autoComplete="name"
                    />
                    {errors.name && <span className="errMsg">{errors.name}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="f-phone">Phone *</label>
                    <input
                      id="f-phone"
                      type="tel"
                      className={errors.phone ? "err" : ""}
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="(214) 555-0134"
                      autoComplete="tel"
                    />
                    {errors.phone && <span className="errMsg">{errors.phone}</span>}
                  </div>
                </div>

                <div className="fieldRow">
                  <div className="field">
                    <label htmlFor="f-email">Email</label>
                    <input
                      id="f-email"
                      type="email"
                      className={errors.email ? "err" : ""}
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@email.com"
                      autoComplete="email"
                    />
                    {errors.email && <span className="errMsg">{errors.email}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="f-service">Service needed</label>
                    <select id="f-service" value={form.service} onChange={set("service")}>
                      <option value="">Select…</option>
                      <option>Roof Replacement</option>
                      <option>Roof Repair</option>
                      <option>Storm / Hail Damage</option>
                      <option>Free Roof Inspection</option>
                      <option>Gutters & Flashing</option>
                      <option>Commercial Roofing</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="f-msg">Tell us about your roof</label>
                  <textarea
                    id="f-msg"
                    value={form.message}
                    onChange={set("message")}
                    placeholder="e.g. Ceiling stain after last week's storm…"
                  />
                </div>

                {/* honeypot */}
                <input
                  className="hp"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={set("company")}
                  aria-hidden="true"
                />

                <button type="submit" className="submitBtn">
                  Get my free inspection
                </button>
                <p className="formNote">
                  No spam, no robo-calls — your details stay with us.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
