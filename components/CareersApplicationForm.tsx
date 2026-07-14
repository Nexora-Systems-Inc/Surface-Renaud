"use client";

import { useState } from "react";
import {
  EXPERIENCE_OPTIONS,
  TRADE_OPTIONS,
} from "@/lib/careers/constants";
import type {
  ExperienceOption,
  TradeOption,
} from "@/lib/careers/types";
import CareersSuccess from "@/components/CareersSuccess";
import ResumeUpload from "@/components/ResumeUpload";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  trade: TradeOption | "";
  experience: ExperienceOption | "";
  message: string;
  resume: File | null;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  trade: "",
  experience: "",
  message: "",
  resume: null,
};

const fieldClassName =
  "w-full bg-[#FAFAF8] border border-[#EDE9E3] rounded-nx-sm px-4 py-3.5 font-sans-body text-[#2C2B29] text-sm font-light placeholder:text-[#7A7774]/50 focus:outline-none focus:border-[#B8975A] transition-colors duration-200 disabled:opacity-60";

const labelClassName =
  "font-sans-body text-[#7A7774] text-[11px] tracking-[0.2em] uppercase block mb-2";

export default function CareersApplicationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [referenceId, setReferenceId] = useState<string | null>(null);
  const [submittedName, setSubmittedName] = useState<string>("");

  const updateField = <K extends keyof FormState>(
    key: K,
    value: FormState[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
    setFormError(null);
  };

  const validateClient = (): boolean => {
    const errors: Partial<Record<keyof FormState, string>> = {};

    if (!form.fullName.trim()) {
      errors.fullName = "Full name is required.";
    }
    if (!form.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
    if (!form.trade) {
      errors.trade = "Please select a trade or position.";
    }
    if (!form.experience) {
      errors.experience = "Please select years of experience.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);

    if (!validateClient()) return;

    setIsSubmitting(true);

    try {
      const body = new FormData();
      body.append("fullName", form.fullName.trim());
      body.append("email", form.email.trim());
      if (form.phone.trim()) body.append("phone", form.phone.trim());
      if (form.city.trim()) body.append("city", form.city.trim());
      body.append("trade", form.trade);
      body.append("experience", form.experience);
      if (form.message.trim()) body.append("message", form.message.trim());
      if (form.resume) body.append("resume", form.resume);

      const response = await fetch("/api/careers/apply", {
        method: "POST",
        body,
      });

      const data = (await response.json()) as {
        referenceId?: string;
        confirmationRef?: string;
        error?: string;
      };

      const nextReferenceId = data.referenceId || data.confirmationRef;
      if (!response.ok || !nextReferenceId) {
        throw new Error(
          data.error || "Unable to submit your application. Please try again.",
        );
      }

      setSubmittedName(form.fullName.trim());
      setReferenceId(nextReferenceId);
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Unable to submit your application. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (referenceId) {
    return (
      <CareersSuccess
        referenceId={referenceId}
        applicantName={submittedName}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className={labelClassName}>
            Full Name <span className="text-[#B8975A]">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            disabled={isSubmitting}
            value={form.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            className={fieldClassName}
            aria-invalid={Boolean(fieldErrors.fullName)}
            aria-describedby={
              fieldErrors.fullName ? "fullName-error" : undefined
            }
          />
          {fieldErrors.fullName ? (
            <p
              id="fullName-error"
              role="alert"
              className="font-sans-body text-red-600/80 text-xs font-light mt-2"
            >
              {fieldErrors.fullName}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className={labelClassName}>
            Email Address <span className="text-[#B8975A]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={isSubmitting}
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={fieldClassName}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          {fieldErrors.email ? (
            <p
              id="email-error"
              role="alert"
              className="font-sans-body text-red-600/80 text-xs font-light mt-2"
            >
              {fieldErrors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className={labelClassName}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            disabled={isSubmitting}
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={fieldClassName}
          />
        </div>

        <div>
          <label htmlFor="city" className={labelClassName}>
            City / Region
          </label>
          <input
            id="city"
            name="city"
            type="text"
            autoComplete="address-level2"
            disabled={isSubmitting}
            value={form.city}
            onChange={(e) => updateField("city", e.target.value)}
            className={fieldClassName}
          />
        </div>

        <div>
          <label htmlFor="trade" className={labelClassName}>
            Trade / Position <span className="text-[#B8975A]">*</span>
          </label>
          <select
            id="trade"
            name="trade"
            required
            disabled={isSubmitting}
            value={form.trade}
            onChange={(e) =>
              updateField("trade", e.target.value as TradeOption | "")
            }
            className={`${fieldClassName} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20fill%3D%22%237A7774%22%20d%3D%22M1%201l5%205%205-5%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] pr-10`}
            aria-invalid={Boolean(fieldErrors.trade)}
            aria-describedby={fieldErrors.trade ? "trade-error" : undefined}
          >
            <option value="" disabled>
              Select a trade
            </option>
            {TRADE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {fieldErrors.trade ? (
            <p
              id="trade-error"
              role="alert"
              className="font-sans-body text-red-600/80 text-xs font-light mt-2"
            >
              {fieldErrors.trade}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="experience" className={labelClassName}>
            Years of Experience <span className="text-[#B8975A]">*</span>
          </label>
          <select
            id="experience"
            name="experience"
            required
            disabled={isSubmitting}
            value={form.experience}
            onChange={(e) =>
              updateField(
                "experience",
                e.target.value as ExperienceOption | "",
              )
            }
            className={`${fieldClassName} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20fill%3D%22%237A7774%22%20d%3D%22M1%201l5%205%205-5%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] pr-10`}
            aria-invalid={Boolean(fieldErrors.experience)}
            aria-describedby={
              fieldErrors.experience ? "experience-error" : undefined
            }
          >
            <option value="" disabled>
              Select experience
            </option>
            {EXPERIENCE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {fieldErrors.experience ? (
            <p
              id="experience-error"
              role="alert"
              className="font-sans-body text-red-600/80 text-xs font-light mt-2"
            >
              {fieldErrors.experience}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClassName}>
          Tell us about yourself
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          disabled={isSubmitting}
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder="Share a brief overview of your background, skills, and what you're looking for."
          className={`${fieldClassName} resize-y min-h-[140px]`}
        />
      </div>

      <ResumeUpload
        file={form.resume}
        disabled={isSubmitting}
        onChange={(file) => updateField("resume", file)}
      />

      {formError ? (
        <div
          role="alert"
          className="bg-red-50 border border-red-200/80 text-red-700/90 rounded-nx-sm px-5 py-4 font-sans-body text-sm font-light"
        >
          {formError}
        </div>
      ) : null}

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center bg-[#B8975A] hover:bg-[#9A7D48] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-[#B8975A] text-white px-8 py-4 rounded-nx-sm font-sans-body text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-[0_10px_25px_rgb(184_151_90_/_0.25)]"
        >
          {isSubmitting ? "Submitting…" : "Submit Application"}
        </button>
        <p className="font-sans-body text-[#7A7774] text-xs font-light text-center mt-4">
          Required fields are marked with{" "}
          <span className="text-[#B8975A]">*</span>
        </p>
      </div>
    </form>
  );
}
