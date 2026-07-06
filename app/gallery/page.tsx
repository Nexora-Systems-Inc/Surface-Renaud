import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";
import Contact from "@/components/Contact";
import { galleryImages } from "@/data/galleryImages";

export const metadata: Metadata = {
  title: "Gallery | Surface Renaud Inc",
  description:
    "Browse completed tile installations, custom showers, and architectural surface projects by Surface Renaud Inc — Brownsburg-Chatham, Quebec.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
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
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-sans-body text-white/40 hover:text-[#B8975A] text-xs tracking-widest uppercase mb-10 transition-colors duration-300"
          >
            <ArrowLeft size={13} /> Back to Home
          </Link>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px w-10 bg-[#B8975A]" />
                <span className="font-sans-body text-[#B8975A] text-[11px] tracking-[0.4em] uppercase">
                  Our Work
                </span>
              </div>
              <h1 className="font-display text-white text-5xl md:text-6xl font-light leading-tight">
                Project
                <br />
                <em className="italic text-[#B8975A]">Gallery</em>
              </h1>
            </div>
            <p className="font-sans-body text-white/50 text-sm max-w-md font-light leading-relaxed lg:pb-2">
              A curated collection of completed installations — each one a reflection of precision, craftsmanship, and enduring quality.
            </p>
          </div>
        </div>
      </div>

      <main className="bg-[#F5F2EE]">
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-between mb-12 lg:mb-16">
              <p className="font-sans-body text-[#7A7774] text-[11px] tracking-[0.3em] uppercase">
                {galleryImages.length} Projects
              </p>
              <div className="h-px flex-1 max-w-xs ml-8 bg-[#2C2B29]/10 hidden sm:block" />
            </div>
            <GalleryGrid />
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
