import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  backHref?: string;
  backLabel?: string;
  footer?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  backHref = "/",
  backLabel = "Back to Home",
  footer,
}: PageHeroProps) {
  return (
    <div className="relative bg-[#2C2B29] pt-40 pb-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #B8975A,
            #B8975A 1px,
            transparent 1px,
            transparent 24px
          )`,
        }}
      />
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle at 80% 40%, #B8975A 0%, transparent 55%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {backHref ? (
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 font-sans-body text-white/40 hover:text-[#B8975A] text-xs tracking-widest uppercase mb-10 transition-colors duration-300"
          >
            <ArrowLeft size={13} /> {backLabel}
          </Link>
        ) : null}

        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 border border-[#B8975A] flex items-center justify-center shrink-0">
            <span className="text-[#B8975A] font-display text-sm font-semibold tracking-widest">
              SR
            </span>
          </div>
          <span className="font-sans-body text-white/50 text-[10px] tracking-[0.3em] uppercase">
            Surface Renaud Inc.
          </span>
        </div>

        <div className="flex items-center gap-4 mb-5">
          <div className="h-px w-10 bg-[#B8975A]" />
          <span className="font-sans-body text-[#B8975A] text-[11px] tracking-[0.4em] uppercase">
            {eyebrow}
          </span>
        </div>

        <h1 className="font-display text-white text-5xl md:text-6xl font-light leading-tight">
          {title}
        </h1>

        {footer ? <div className="mt-8">{footer}</div> : null}
      </div>
    </div>
  );
}
