import Link from "next/link";
import { Phone } from "lucide-react";

/**
 * Project Planner stays routed at /project-planner, but the private
 * `@nexora-systems-inc/planner-*` packages are disconnected so production
 * can install and build without NPM_TOKEN. The previous widget is preserved
 * in SurfaceRenaudProjectPlanner.integration.tsx.
 */
export default function SurfaceRenaudProjectPlanner() {
  return (
    <div className="bg-[#F5F2EE] border border-[#EDE9E3] p-8 lg:p-12 rounded-nx-md text-center">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="h-px w-10 bg-[#B8975A]" />
        <span className="font-sans-body text-[#B8975A] text-[11px] tracking-[0.4em] uppercase">
          Temporarily unavailable
        </span>
        <div className="h-px w-10 bg-[#B8975A]" />
      </div>

      <h2 className="font-display text-[#2C2B29] text-3xl md:text-4xl font-light mb-4">
        The online planner is
        <br />
        <em className="italic text-[#B8975A]">paused for now</em>
      </h2>

      <p className="font-sans-body text-[#7A7774] text-sm leading-relaxed font-light max-w-md mx-auto mb-8">
        We are still planning renovations with you directly. Call or write and
        our team will review your project personally.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="tel:450-612-2539"
          className="inline-flex items-center gap-2 bg-[#B8975A] hover:bg-[#9A7D48] text-white px-8 py-4 rounded-nx-sm font-sans-body text-xs tracking-[0.25em] uppercase transition-all duration-300"
        >
          <Phone size={14} aria-hidden="true" />
          450-612-2539
        </a>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 border border-[#B8975A] text-[#B8975A] hover:bg-[#B8975A] hover:text-white px-8 py-4 rounded-nx-sm font-sans-body text-xs tracking-[0.25em] uppercase transition-all duration-300"
        >
          Contact the team
        </Link>
      </div>
    </div>
  );
}
