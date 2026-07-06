import {
  CheckCircle2,
  Clock,
  MessageSquare,
  Sparkles,
  ClipboardCheck,
  Search,
  PhoneCall,
  FileText,
} from "lucide-react";

const checklistItems = [
  "Contact information",
  "Approximate room measurements",
  "Description of the work you would like completed",
  "Project address (if available)",
];

const processSteps = [
  {
    icon: ClipboardCheck,
    title: "We receive your request",
    description:
      "Your submission arrives directly with our team, along with all the details you shared.",
  },
  {
    icon: Search,
    title: "We review the project",
    description:
      "We take the time to understand your scope, spaces, and goals before moving forward.",
  },
  {
    icon: PhoneCall,
    title: "We contact you if needed",
    description:
      "If anything needs clarification, we will reach out — no guesswork on our end.",
  },
  {
    icon: FileText,
    title: "We prepare your estimate",
    description:
      "Once we have a clear picture, we put together an estimate tailored to your project.",
  },
];

export function ProjectPlannerFormDivider() {
  return (
    <div className="pt-4 border-t border-[#EDE9E3]">
      <div className="flex items-center gap-4 mb-3">
        <div className="h-px w-10 bg-[#B8975A]" />
        <span className="font-sans-body text-[#B8975A] text-[11px] tracking-[0.4em] uppercase">
          Your Project Details
        </span>
      </div>
      <p className="font-sans-body text-[#7A7774] text-sm font-light max-w-xl">
        Complete the form below when you are ready. All fields marked with an
        asterisk are required.
      </p>
    </div>
  );
}

export default function ProjectPlannerIntro() {
  return (
    <div className="space-y-12 lg:space-y-16">
      {/* Introduction */}
      <div className="max-w-2xl">
        <p className="font-sans-body text-[#7A7774] text-base leading-relaxed font-light">
          Our Online Project Planner is a simple way to tell us about your
          renovation before we prepare an estimate. Share what you know today —
          measurements, scope, and contact details — and our team will take it
          from there.
        </p>
        <div className="flex flex-wrap items-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <Clock size={15} className="text-[#B8975A] shrink-0" />
            <span className="font-sans-body text-[#7A7774] text-sm font-light">
              Takes about 10 minutes
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare size={15} className="text-[#B8975A] shrink-0" />
            <span className="font-sans-body text-[#7A7774] text-sm font-light">
              Every submission is personally reviewed
            </span>
          </div>
        </div>
      </div>

      {/* Beta notice — unchanged */}
      <div className="bg-[#2C2B29] p-8 lg:p-10 relative overflow-hidden rounded-nx-md">
        <div
          className="absolute right-0 top-0 w-1/2 h-full opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 80% 50%, #B8975A 0%, transparent 60%)`,
          }}
        />
        <div className="relative flex gap-5">
          <div className="w-10 h-10 border border-[#B8975A]/40 rounded-nx-sm flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles size={18} className="text-[#B8975A]" />
          </div>
          <div>
            <div className="font-sans-body text-[#B8975A] text-[10px] tracking-[0.3em] uppercase mb-2">
              Beta Release
            </div>
            <p className="font-sans-body text-white/80 text-sm leading-relaxed font-light">
              You are among the first to try our new digital planning experience.
              This is an early release, and every submission is still personally
              reviewed by our team. Your feedback helps us refine the process —
              thank you for being part of it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectPlannerInfoSection() {
  return (
    <section className="relative left-1/2 -translate-x-1/2 w-screen bg-[#F5F2EE] py-16 lg:py-20 mt-12 lg:mt-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Checklist */}
          <div className="bg-[#FAFAF8] border border-[#EDE9E3] p-8 lg:p-10 rounded-nx-md">
            <h2 className="font-display text-[#2C2B29] text-2xl font-light mb-2">
              Before You Begin
            </h2>
            <p className="font-sans-body text-[#7A7774] text-xs font-light mb-6">
              Have the following ready — photos can be added in a future update.
            </p>
            <ul className="space-y-4">
              {checklistItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-[#B8975A] shrink-0 mt-0.5"
                  />
                  <span className="font-sans-body text-[#2C2B29] text-sm font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* After submission process */}
          <div className="bg-[#FAFAF8] border border-[#EDE9E3] p-8 lg:p-10 rounded-nx-md">
            <h2 className="font-display text-[#2C2B29] text-2xl font-light mb-2">
              What Happens Next
            </h2>
            <p className="font-sans-body text-[#7A7774] text-xs font-light mb-6">
              After you submit, here is what you can expect from our team.
            </p>
            <ol className="space-y-5">
              {processSteps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-8 h-8 border border-[#B8975A]/40 rounded-nx-sm flex items-center justify-center">
                      <step.icon size={14} className="text-[#B8975A]" />
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="w-px flex-1 bg-[#EDE9E3] mt-2 min-h-[12px]" />
                    )}
                  </div>
                  <div className="pb-1">
                    <div className="font-sans-body text-[#2C2B29] text-sm mb-0.5">
                      {step.title}
                    </div>
                    <p className="font-sans-body text-[#7A7774] text-xs leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
