"use client";

import { useRef, useState } from "react";
import { SendIcon } from "./icons";

export default function QuoteForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [showMsg, setShowMsg] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const v = (id: string) =>
      (form.elements.namedItem(id) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null)?.value.trim() ??
      "";

    if (!v("name") || !v("email") || !v("phone") || !v("enquiry")) {
      form.reportValidity();
      return;
    }

    const lines = [
      "Name: " + v("name"),
      "Company: " + (v("company") || "—"),
      "Email: " + v("email"),
      "Telephone: " + v("phone"),
      "Site postcode: " + (v("postcode") || "—"),
      "Type of work: " + (v("service") || "—"),
      "",
      "Enquiry:",
      v("enquiry"),
    ].join("\n");

    const subject =
      "Quote request - " + v("name") + (v("company") ? " (" + v("company") + ")" : "");

    window.location.href =
      "mailto:info@nafl.co.uk?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(lines);

    setShowMsg(true);
  };

  return (
    <div className="quote-form reveal">
      <h3>Tell us about your project</h3>
      <p className="fsub">
        Fields marked <span style={{ color: "var(--blue)" }}>*</span> are
        required. We aim to respond the same working day.
      </p>
      <div className={`form-msg${showMsg ? " show" : ""}`} id="formMsg">
        Thanks — your email app should now be open with your enquiry ready to
        send. If it didn&apos;t open, please call us on 01482 483950.
      </div>
      <form ref={formRef} id="quoteForm" noValidate onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="field">
            <label htmlFor="name">
              Name <span className="req">*</span>
            </label>
            <input type="text" id="name" name="name" placeholder="Your full name" required />
          </div>
          <div className="field">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" placeholder="Company name" />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="email">
              Email <span className="req">*</span>
            </label>
            <input type="email" id="email" name="email" placeholder="you@example.com" required />
          </div>
          <div className="field">
            <label htmlFor="phone">
              Telephone <span className="req">*</span>
            </label>
            <input type="tel" id="phone" name="phone" placeholder="Phone number" required />
          </div>
        </div>
        <div className="form-row">
          <div className="field">
            <label htmlFor="postcode">Site postcode</label>
            <input type="text" id="postcode" name="postcode" placeholder="e.g. HU9 5LW" />
          </div>
          <div className="field">
            <label htmlFor="service">Type of work</label>
            <select id="service" name="service" defaultValue="">
              <option value="">Please select…</option>
              <option>New raised access flooring</option>
              <option>Data centre / server room floor</option>
              <option>Removal or replacement</option>
              <option>Strengthening works</option>
              <option>Alterations / floor boxes</option>
              <option>Ramps, steps &amp; handrails</option>
              <option>Other / not sure</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label htmlFor="enquiry">
            Your enquiry <span className="req">*</span>
          </label>
          <textarea
            id="enquiry"
            name="enquiry"
            placeholder="Tell us about the project — approximate floor area, location, timescales and anything else that helps us quote."
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send Enquiry
          <SendIcon />
        </button>
        <p className="form-note">
          Prefer to talk? Call{" "}
          <a href="tel:01482483950" style={{ color: "var(--blue)", fontWeight: 700 }}>
            01482 483950
          </a>{" "}
          and speak to the team.
        </p>
      </form>
    </div>
  );
}
