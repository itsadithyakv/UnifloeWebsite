export const interestOptions = [
  "pilot-free",
  "pilot-starter",
  "starter",
  "growth",
  "enterprise",
  "general-demo",
];

export function validateContactForm(values) {
  const errors = {};
  const required = {
    schoolName: "Enter your school name.",
    contactName: "Enter your name.",
    role: "Select your role.",
    email: "Enter your work email.",
    phone: "Enter a phone number.",
    location: "Enter your city and state.",
    studentStrength: "Select your student strength.",
    interest: "Select what you are interested in.",
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
    role: values.role,
    reply_to: values.email.trim(),
    phone: values.phone.trim(),
    location: values.location.trim(),
    student_strength: values.studentStrength,
    plan_interest: values.interest,
    message: values.message.trim() || "No additional message provided.",
    consent_timestamp: submittedAt,
    page_url: pageUrl,
  };
}
