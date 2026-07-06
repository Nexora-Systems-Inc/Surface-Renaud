"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Background Image with parallax */}
      <div ref={parallaxRef} className="absolute inset-0 scale-110">
        <img
          src="https://static.wixstatic.com/media/d833f9_8eb0be85376344e9bd86ba67da3280ab~mv2.jpg"
          alt="Surface Renaud – premium tile installation"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" />
      <div className="absolute inset-0 bg-[#2C2B29]/30" />

      {/* Vertical line accent */}
      <div className="absolute left-10 top-1/4 h-48 w-px bg-gradient-to-b from-transparent via-[#B8975A]/60 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-[#B8975A]" />
            <span className="font-sans-body text-[#B8975A] text-xs tracking-[0.4em] uppercase">
              Brownsburg-Chatham, Quebec
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-white text-5xl md:text-6xl lg:text-7xl font-light leading-[1.08] mb-6">
            Crafting Timeless
            <br />
            <em className="italic text-[#B8975A]">Tile Installations</em>
          </h1>

          <p className="font-sans-body text-white/65 text-base md:text-lg leading-relaxed max-w-xl mb-10 font-light tracking-wide">
            Specialists in custom showers, heated floors, and architectural coatings — built to last, finished to impress.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/project-planner"
              className="inline-flex items-center gap-3 bg-[#B8975A] hover:bg-[#9A7D48] text-white px-8 py-4 rounded-nx-sm font-sans-body text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#B8975A]/25"
            >
              Start Planning Your Project
            </Link>
            <a
              href="tel:450-612-2539"
              className="inline-flex items-center gap-3 border border-white/40 hover:border-[#B8975A] text-white hover:text-[#B8975A] px-8 py-4 rounded-nx-sm font-sans-body text-xs tracking-[0.25em] uppercase transition-all duration-300"
            >
              Call Now
            </a>
          </div>
          <p className="font-sans-body text-white/45 text-xs font-light mt-5 tracking-wide">
            New — try our{" "}
            <Link
              href="/project-planner"
              className="text-[#B8975A]/90 hover:text-[#B8975A] underline underline-offset-2 transition-colors duration-300"
            >
              Online Project Planner (Beta)
            </Link>
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <ArrowDown size={16} className="text-white/40" />
      </div>

      {/* Bottom stat bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#2C2B29]/90 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {[
            { label: "Extensive Expertise" },
            { label: "Skilled Craftsmen" },
            { label: "Exquisite Finish" },
            { label: "Eco-friendly Approach" },
          ].map((item) => (
            <div key={item.label} className="px-5 py-2 first:pl-0 last:pr-0">
              <div className="font-sans-body text-white/70 text-xs tracking-[0.2em] uppercase">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
