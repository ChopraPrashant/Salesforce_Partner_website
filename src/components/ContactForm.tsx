import { useState, type FormEvent } from "react";

/**
 * Frontend contact form with client-side validation.
 *
 * To make it actually send email, set a form endpoint (e.g. Formspree,
 * Web3Forms, Netlify Forms, or your own API) via the `endpoint` prop.
 * Without an endpoint the form simulates a successful submission so you
 * can see the UX during development.
 */
type Props = {
  endpoint?: string;
  variant?: "contact" | "careers";
  recipientEmail?: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm({
  endpoint,
  variant = "contact",
  recipientEmail = "contact@cubitous.com",
}: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState(
    "Your message has been received. Our team will get back to you shortly.",
  );

  const isCareers = variant === "careers";

  const validate = (data: Record<string, string>, resume?: File | null) => {
    const e: Record<string, string> = {};
    if (!data.name?.trim()) e.name = "Please enter your name.";
    if (!data.email?.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e.email = "Please enter a valid email address.";
    if (!data.message?.trim()) e.message = "Please enter a message.";
    if (isCareers) {
      if (!resume || resume.size === 0) {
        e.resume = "Please upload your resume.";
      } else {
        const allowedTypes = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];
        const allowedExtensions = /\.(pdf|doc|docx)$/i;
        if (!allowedTypes.includes(resume.type) && !allowedExtensions.test(resume.name)) {
          e.resume = "Please upload a PDF, DOC, or DOCX resume.";
        } else if (resume.size > 10 * 1024 * 1024) {
          e.resume = "Resume must be under 10 MB.";
        }
      }
    }
    return e;
  };

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const resume = isCareers ? (fd.get("resume") as File | null) : null;

    const e = validate(data, resume);
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setStatus("loading");
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: fd,
        });
        if (!res.ok) throw new Error("Request failed");
      } else if (isCareers) {
        const subject = encodeURIComponent(`Career application: ${data.position || "General"}`);
        const body = encodeURIComponent(
          [
            `Name: ${data.name}`,
            `Email: ${data.email}`,
            `Phone: ${data.phone || "-"}`,
            `Position: ${data.position || "-"}`,
            "",
            "Cover note:",
            data.message,
            "",
            `Selected resume file: ${resume?.name || "-"}`,
            "",
            "Please attach the selected resume file before sending this email.",
          ].join("\n"),
        );
        window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
        setSuccessMessage(
          `Your email draft has opened for ${recipientEmail}. Please attach your selected resume file before sending.`,
        );
      } else {
        // No endpoint configured — simulate success for local development.
        await new Promise((r) => setTimeout(r, 900));
        setSuccessMessage(
          "Your message has been received. Our team will get back to you shortly.",
        );
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white p-8 ring-1 ring-slate-100 shadow-sm text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-green-50 text-green-600">
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12l5 5 11-11" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-bold text-navy">Thank you!</h3>
        <p className="mt-2 text-slate-600">
          {successMessage}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition";
  const labelCls = "block text-sm font-semibold text-navy mb-1.5";
  const errCls = "mt-1 text-xs text-red-500";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl bg-white p-6 sm:p-8 ring-1 ring-slate-100 shadow-sm"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>Full name *</label>
          <input id="name" name="name" type="text" className={inputCls} placeholder="Your name" />
          {errors.name && <p className={errCls}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Email *</label>
          <input id="email" name="email" type="email" className={inputCls} placeholder="you@company.com" />
          {errors.email && <p className={errCls}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>Phone</label>
          <input id="phone" name="phone" type="tel" className={inputCls} placeholder="+91 ..." />
        </div>
        <div>
          <label htmlFor="company" className={labelCls}>
            {isCareers ? "Position of interest" : "Company"}
          </label>
          <input
            id="company"
            name={isCareers ? "position" : "company"}
            type="text"
            className={inputCls}
            placeholder={isCareers ? "e.g. Salesforce Developer" : "Company name"}
          />
        </div>
      </div>

      {!isCareers && (
        <div className="mt-5">
          <label htmlFor="service" className={labelCls}>Service you're interested in</label>
          <select id="service" name="service" className={inputCls} defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Salesforce CRM Implementation</option>
            <option>Sales Cloud</option>
            <option>Service Cloud</option>
            <option>Revenue Cloud Advanced (RCA)</option>
            <option>Conga CPQ</option>
            <option>Conga CLM</option>
            <option>Experience Cloud</option>
            <option>Integration & Data Migration</option>
            <option>Agentforce & Einstein AI</option>
            <option>Managed Services & Support</option>
            <option>Training & Internship</option>
            <option>Other</option>
          </select>
        </div>
      )}

      <div className="mt-5">
        <label htmlFor="message" className={labelCls}>
          {isCareers ? "Cover note *" : "Message *"}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputCls}
          placeholder={
            isCareers
              ? "Tell us about yourself, your experience, and a link to your resume / LinkedIn."
              : "Tell us about your project or question..."
          }
        ></textarea>
        {errors.message && <p className={errCls}>{errors.message}</p>}
      </div>

      {isCareers && (
        <div className="mt-5">
          <label htmlFor="resume" className={labelCls}>Upload resume *</label>
          <input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-700 file:mr-4 file:rounded-full file:border-0 file:bg-brand-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-700 hover:border-brand-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition"
          />
          <p className="mt-1.5 text-xs text-slate-500">
            Accepted formats: PDF, DOC, DOCX. Max size: 10 MB.
          </p>
          {errors.resume && <p className={errCls}>{errors.resume}</p>}
        </div>
      )}

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
      >
        {status === "loading" ? "Sending..." : isCareers ? "Submit Application" : "Send Message"}
      </button>
    </form>
  );
}
