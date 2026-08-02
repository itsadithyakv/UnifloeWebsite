"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { buildEmailPayload, interestOptions, isLikelyBot, validateContactForm } from "../lib/contact-form.mjs";

type ContactValues = {
  schoolName: string;
  contactName: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  studentStrength: string;
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
    role: "",
    email: "",
    phone: "",
    location: "",
    studentStrength: "",
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
      setSubmission({ type: "success", message: "Thank you. Your enquiry has been sent to the Unifloe team." });
    } catch {
      setSubmission({ type: "error", message: "We could not send your enquiry just now. Please check your connection and try again." });
    }
  }

  const fieldError = (field: keyof ContactValues) => errors[field] ? <span className="field-error" id={`${field}-error`}>{errors[field]}</span> : null;

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate data-reveal>
      <div className="form-heading"><h2>Start a useful conversation.</h2><p>A few details make the demo relevant.</p></div>
      <div className="form-grid">
        <label><span>School name</span><input name="schoolName" value={values.schoolName} onChange={(event) => updateField("schoolName", event.target.value)} aria-invalid={Boolean(errors.schoolName)} aria-describedby={errors.schoolName ? "schoolName-error" : undefined} autoComplete="organization" />{fieldError("schoolName")}</label>
        <label><span>Your name</span><input name="contactName" value={values.contactName} onChange={(event) => updateField("contactName", event.target.value)} aria-invalid={Boolean(errors.contactName)} aria-describedby={errors.contactName ? "contactName-error" : undefined} autoComplete="name" />{fieldError("contactName")}</label>
        <label><span>Your role</span><select name="role" value={values.role} onChange={(event) => updateField("role", event.target.value)} aria-invalid={Boolean(errors.role)} aria-describedby={errors.role ? "role-error" : undefined}><option value="">Select a role</option><option>School owner / trustee</option><option>Principal / school leader</option><option>Administrator</option><option>IT / operations</option><option>Teacher</option><option>Other</option></select>{fieldError("role")}</label>
        <label><span>Work email</span><input type="email" name="email" value={values.email} onChange={(event) => updateField("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} autoComplete="email" inputMode="email" />{fieldError("email")}</label>
        <label><span>Phone</span><input type="tel" name="phone" value={values.phone} onChange={(event) => updateField("phone", event.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} autoComplete="tel" inputMode="tel" placeholder="+91" />{fieldError("phone")}</label>
        <label><span>City and state</span><input name="location" value={values.location} onChange={(event) => updateField("location", event.target.value)} aria-invalid={Boolean(errors.location)} aria-describedby={errors.location ? "location-error" : undefined} autoComplete="address-level2" />{fieldError("location")}</label>
        <label><span>Student strength</span><select name="studentStrength" value={values.studentStrength} onChange={(event) => updateField("studentStrength", event.target.value)} aria-invalid={Boolean(errors.studentStrength)} aria-describedby={errors.studentStrength ? "studentStrength-error" : undefined}><option value="">Select a range</option><option>Up to 100</option><option>101–700</option><option>701–1,700</option><option>1,701–2,500</option><option>2,501–3,500</option><option>More than 3,500</option></select>{fieldError("studentStrength")}</label>
        <label><span>I’m interested in</span><select name="interest" value={values.interest} onChange={(event) => updateField("interest", event.target.value)} aria-invalid={Boolean(errors.interest)} aria-describedby={errors.interest ? "interest-error" : undefined}><option value="pilot-free">Free pilot · one grade / 100 students</option><option value="pilot-starter">₹8,000 Pilot Starter</option><option value="starter">₹30,000 Starter</option><option value="growth">₹80,000 Growth</option><option value="enterprise">Enterprise</option><option value="general-demo">A general product demo</option></select>{fieldError("interest")}</label>
        <label className="full-field"><span>What would you like to improve?</span><textarea name="message" rows={5} value={values.message} onChange={(event) => updateField("message", event.target.value)} placeholder="Share your priorities, current challenges, or the workflows you want to see." /></label>
        <label className="honeypot" aria-hidden="true"><span>Website</span><input name="website" value={values.website} onChange={(event) => updateField("website", event.target.value)} tabIndex={-1} autoComplete="off" /></label>
        <label className="consent-field full-field"><input type="checkbox" checked={values.consent} onChange={(event) => updateField("consent", event.target.checked)} aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "consent-error" : "privacy-note"} /><span>I agree that Unifloe may use these details to respond to my enquiry and arrange a product conversation.</span></label>
        {fieldError("consent")}
      </div>
      <div className="form-submit-row"><button className="button" type="submit" disabled={submission.type === "loading"}>{submission.type === "loading" ? <LoaderCircle className="spin" aria-hidden="true" /> : null}{submission.type === "loading" ? "Sending…" : "Send enquiry"}<ArrowRight aria-hidden="true" /></button><p id="privacy-note">Your details are sent only to the configured Unifloe business inbox through EmailJS.</p></div>
      <div className={`form-status ${submission.type}`} role="status" aria-live="polite">{submission.type === "success" ? <CheckCircle2 aria-hidden="true" /> : null}{submission.message}</div>
    </form>
  );
}
