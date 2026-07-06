import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";

type ProjectPlannerSuccessProps = {
  confirmationRef: string;
};

const nextSteps = [
  "We receive your request and review the details you shared.",
  "Our team evaluates your project scope and requirements.",
  "We contact you if any additional information is needed.",
  "We prepare your estimate and follow up to discuss next steps.",
];

export default function ProjectPlannerSuccess({
  confirmationRef,
}: ProjectPlannerSuccessProps) {
  return (
    <div className="space-y-10">
      <div className="bg-[#F5F2EE] border border-[#EDE9E3] p-10 lg:p-14 text-center rounded-nx-md">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 border border-[#B8975A]/40 rounded-nx-sm flex items-center justify-center">
            <CheckCircle2 size={32} className="text-[#B8975A]" />
          </div>
        </div>

        <h2 className="font-display text-[#2C2B29] text-3xl md:text-4xl font-light mb-4">
          Thank You for Your
          <br />
          <em className="italic text-[#B8975A]">Submission</em>
        </h2>

        <p className="font-sans-body text-[#7A7774] text-sm leading-relaxed font-light max-w-md mx-auto mb-6">
          Your project request has been received. Our team will personally review
          everything you shared.
        </p>

        <div className="inline-block bg-[#FAFAF8] border border-[#EDE9E3] px-6 py-3 rounded-nx-sm">
          <span className="font-sans-body text-[#7A7774] text-[10px] tracking-[0.3em] uppercase">
            Reference Number
          </span>
          <div className="font-sans-body text-[#2C2B29] text-lg tracking-wide mt-1">
            {confirmationRef}
          </div>
        </div>
      </div>

      <div className="bg-[#2C2B29] p-8 lg:p-10 rounded-nx-md">
        <h3 className="font-display text-white text-2xl font-light mb-6">
          What Happens Next
        </h3>
        <ol className="space-y-5">
          {nextSteps.map((step, index) => (
            <li key={step} className="flex gap-4">
              <span className="font-sans-body text-[#B8975A] text-xs tracking-widest shrink-0 pt-0.5">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-sans-body text-white/70 text-sm leading-relaxed font-light">
                {step}
              </p>
            </li>
          ))}
        </ol>
        <p className="font-sans-body text-white/40 text-xs font-light mt-8 pt-6 border-t border-white/10">
          We appreciate you helping us test this new experience. If you have
          feedback about the planner, we would love to hear from you when we
          connect.
        </p>
      </div>

      <div className="text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans-body text-[#7A7774] hover:text-[#B8975A] text-xs tracking-[0.2em] uppercase transition-colors duration-300"
        >
          <ArrowLeft size={14} />
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
