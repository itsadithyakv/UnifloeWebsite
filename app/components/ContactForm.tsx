"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { buildEmailPayload, interestOptions, isLikelyBot, validateContactForm } from "../lib/contact-form.mjs";

type ContactValues = {
  schoolName: string;
  contactName: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
  consent: boolean;
  website: string;
};

type FieldErrors = Partial<Record<keyof ContactValues, string>>;
type SubmissionState = { type: "idle" | "loading" | "success" | "error"; message: string };

const emailServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim() ?? "";
const emailTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim() ?? "";
const emailPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim() ?? "";
const emailDeliveryConfigured = Boolean(emailServiceId && emailTemplateId && emailPublicKey);
const submissionCooldownMs = 60_000;

function emptyValues(initialInterest: string): ContactValues {
  return {
    schoolName: "",
    contactName: "",
    phone: "",
    email: "",
    interest: interestOptions.includes(initialInterest) ? initialInterest : "general-demo",
    message: "",
    consent: false,
    website: "",
  };
}

export function ContactForm({ initialInterest = "general-demo" }: { initialInterest?: string }) {
  const [values, setValues] = useState<ContactValues>(() => emptyValues(initialInterest));
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submission, setSubmission] = useState<SubmissionState>({ type: "idle", message: "" });
  const lastSubmittedAt = useRef(0);

  useEffect(() => {
    // The site is exported statically, so the plan a visitor clicked arrives
    // only in the browser's own URL. Read it here so "Request free setup"
    // lands on the Free option rather than the default.
    const requested = new URLSearchParams(window.location.search).get("interest") ?? "";
    if (!interestOptions.includes(requested)) return;
    const timer = window.setTimeout(() => setValues((current) => ({ ...current, interest: requested })), 0);
    return () => window.clearTimeout(timer);
  }, []);

  function updateField(field: keyof ContactValues, value: string | boolean) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContactForm(values) as FieldErrors;
    setErrors(nextErrors);
    setSubmission({ type: "idle", message: "" });
    if (Object.keys(nextErrors).length > 0) return;

    if (isLikelyBot(values)) {
      setSubmission({ type: "success", message: "Thank you. Your enquiry has been received." });
      return;
    }

    if (Date.now() - lastSubmittedAt.current < submissionCooldownMs) {
      setSubmission({ type: "error", message: "Your enquiry was just sent. Please wait a moment before trying again." });
      return;
    }

    if (!emailDeliveryConfigured) {
      setSubmission({ type: "error", message: "Enquiry delivery is not connected in this private preview yet. The EmailJS service ID, template ID, and public key are required before sending." });
      return;
    }

    setSubmission({ type: "loading", message: "Sending your enquiry…" });
    try {
      const emailjs = await import("@emailjs/browser");
      const submittedAt = new Date().toISOString();
      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        buildEmailPayload(values, window.location.href, submittedAt),
        { publicKey: emailPublicKey },
      );
      lastSubmittedAt.current = Date.now();
      setValues(emptyValues(initialInterest));
      setSubmission({ type: "success", message: "Thank you. We will call you back within a working day." });
    } catch {
      setSubmission({ type: "error", message: "We could not send your enquiry just now. Please check your connection and try again, or send us a WhatsApp message." });
    }
  }

  const fieldError = (field: keyof ContactValues) => errors[field] ? <span className="field-error" id={`${field}-error`}>{errors[field]}</span> : null;

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-heading"><h2>Tell us about your school.</h2><p>Four fields. Nothing here is a commitment.</p></div>
      <div className="form-grid">
        <label><span>School name</span><input name="schoolName" value={values.schoolName} onChange={(event) => updateField("schoolName", event.target.value)} aria-invalid={Boolean(errors.schoolName)} aria-describedby={errors.schoolName ? "schoolName-error" : undefined} autoComplete="organization" placeholder="Demo Public School" />{fieldError("schoolName")}</label>
        <label><span>Your name</span><input name="contactName" value={values.contactName} onChange={(event) => updateField("contactName", event.target.value)} aria-invalid={Boolean(errors.contactName)} aria-describedby={errors.contactName ? "contactName-error" : undefined} autoComplete="name" placeholder="Ananya Sharma" />{fieldError("contactName")}</label>
        <label><span>Phone</span><input type="tel" name="phone" value={values.phone} onChange={(event) => updateField("phone", event.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} autoComplete="tel" inputMode="tel" placeholder="+91 98765 43210" />{fieldError("phone")}</label>
        <label><span>I’m interested in</span><select name="interest" value={values.interest} onChange={(event) => updateField("interest", event.target.value)} aria-invalid={Boolean(errors.interest)} aria-describedby={errors.interest ? "interest-error" : undefined}><option value="free">Free, one class up to 100 users</option><option value="junior">Junior, ₹999 a month for up to 250 students</option><option value="standard">Standard, ₹1,999 a month for up to 700 students</option><option value="growth">Growth, ₹5,999 a month for up to 2,100 students</option><option value="general-demo">A guided walk through first</option></select>{fieldError("interest")}</label>
        <label className="full-field"><span>Email, if you prefer it to a call</span><input type="email" name="email" value={values.email} onChange={(event) => updateField("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} autoComplete="email" inputMode="email" placeholder="ananya@demopublicschool.example" />{fieldError("email")}</label>
        <label className="full-field"><span>Anything we should know? Optional.</span><textarea name="message" rows={3} value={values.message} onChange={(event) => updateField("message", event.target.value)} placeholder="For example: attendance, fee collection, report cards, or parent communication." /></label>
        <label className="honeypot" aria-hidden="true"><span>Website</span><input name="website" value={values.website} onChange={(event) => updateField("website", event.target.value)} tabIndex={-1} autoComplete="off" /></label>
        <label className="consent-field full-field"><input type="checkbox" checked={values.consent} onChange={(event) => updateField("consent", event.target.checked)} aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "consent-error" : "privacy-note"} /><span>Unifloe may use these details to call or write back about my enquiry.</span></label>
        {fieldError("consent")}
      </div>
      <div className="form-submit-row"><button className="button" type="submit" disabled={submission.type === "loading"}>{submission.type === "loading" ? <LoaderCircle className="spin" aria-hidden="true" /> : null}{submission.type === "loading" ? "Sending…" : "Send enquiry"}<ArrowRight aria-hidden="true" /></button><p id="privacy-note">Sent only to the Unifloe inbox. Never student data.</p></div>
      <div className={`form-status ${submission.type}`} role="status" aria-live="polite">{submission.type === "success" ? <CheckCircle2 aria-hidden="true" /> : null}{submission.message}</div>
    </form>
  );
}
