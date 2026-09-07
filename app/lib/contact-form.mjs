export const interestOptions = [
  "free",
  "junior",
  "standard",
  "growth",
  "general-demo",
];

export function validateContactForm(values) {
  const errors = {};
  const required = {
    schoolName: "Enter your school name.",
    contactName: "Enter your name.",
    phone: "Enter a phone number.",
    interest: "Select a plan or a demo.",
  };

  for (const [field, message] of Object.entries(required)) {
    if (!String(values[field] ?? "").trim()) errors[field] = message;
  }

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  const phoneDigits = String(values.phone ?? "").replace(/\D/g, "");
  if (values.phone && (phoneDigits.length < 10 || phoneDigits.length > 13)) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!values.consent) errors.consent = "Consent is required before sending your enquiry.";
  return errors;
}

export function isLikelyBot(values) {
  return Boolean(String(values.website ?? "").trim());
}

export function buildEmailPayload(values, pageUrl, submittedAt) {
  return {
    school_name: values.schoolName.trim(),
    contact_name: values.contactName.trim(),
    role: String(values.role ?? "").trim() || "Not given",
    reply_to: String(values.email ?? "").trim() || "Not given",
    phone: values.phone.trim(),
    location: String(values.location ?? "").trim() || "Not given",
    student_strength: String(values.studentStrength ?? "").trim() || "Not given",
    plan_interest: values.interest,
    message: String(values.message ?? "").trim() || "No additional message provided.",
    consent_timestamp: submittedAt,
    page_url: pageUrl,
  };
}
