import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ClipboardList } from "lucide-react";

export default function ProjectPlannerPromo() {
  return (
    <section className="py-28 lg:py-36 bg-[#F5F2EE] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #B8975A,
            #B8975A 1px,
            transparent 1px,
            transparent 24px
          )`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#B8975A]" />
              <span className="font-sans-body text-[#B8975A] text-[11px] tracking-[0.4em] uppercase inline-flex items-center gap-2.5">
                <span>New —</span>
                <Image
                  src="/products/crewpilot-logo.png"
                  alt=""
                  width={72}
                  height={72}
                  className="h-[28px] w-auto shrink-0"
                />
                <span>— Beta</span>
              </span>
            </div>

            <h2 className="font-display text-[#2C2B29] text-4xl md:text-5xl font-light leading-tight mb-6">
              Introducing Our
              <br />
              <em className="italic text-[#B8975A]">Online Project Planner</em>
            </h2>

            <p className="font-sans-body text-[#7A7774] text-sm leading-relaxed font-light mb-6 max-w-lg">
              You can now begin planning your renovation online. Share your project
              details at your own pace — before we prepare your estimate — so we
              understand your vision from the very start.
            </p>

            <p className="font-sans-body text-[#7A7774] text-sm leading-relaxed font-light mb-10 max-w-lg">
              No pressure, no commitment. Just a simple way to tell us about your
              project and help us prepare for a meaningful conversation.
            </p>

            <Link
              href="/project-planner"
              className="inline-flex items-center gap-3 bg-[#B8975A] hover:bg-[#9A7D48] text-white px-8 py-4 rounded-nx-sm font-sans-body text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#B8975A]/25"
            >
              Try Our Online Project Planner
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="bg-[#FAFAF8] border border-[#EDE9E3] p-10 lg:p-12 rounded-nx-md">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 border border-[#B8975A]/40 rounded-nx-sm flex items-center justify-center shrink-0">
                <ClipboardList size={20} className="text-[#B8975A]" />
              </div>
              <div>
                <h3 className="font-display text-[#2C2B29] text-xl font-light">
                  How It Works
                </h3>
                <p className="font-sans-body text-[#7A7774] text-xs font-light mt-1">
                  A guided experience — takes about 10 minutes
                </p>
              </div>
            </div>

            <ol className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Share your details",
                  description:
                    "Tell us about your project, the spaces involved, and the work you have in mind.",
                },
                {
                  step: "02",
                  title: "We personally review",
                  description:
                    "Every submission is reviewed by our team — not processed automatically.",
                },
                {
                  step: "03",
                  title: "We follow up",
                  description:
                    "If we need anything else, we will reach out. Then we prepare your estimate.",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-5">
                  <span className="font-sans-body text-[#B8975A] text-xs tracking-widest shrink-0 pt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <div className="font-sans-body text-[#2C2B29] text-sm mb-1">
                      {item.title}
                    </div>
                    <p className="font-sans-body text-[#7A7774] text-xs leading-relaxed font-light">
                      {item.description}
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
