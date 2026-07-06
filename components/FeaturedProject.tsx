"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ImageLightbox, { type LightboxImage } from "@/components/ImageLightbox";

const projectImages: LightboxImage[] = [
  {
    src: "/images/featured-project/bathroom-retreat-hero.webp",
    alt: "Luxury marble-look bathroom with freestanding tub and curbless walk-in shower",
  },
  {
    src: "/images/featured-project/bathroom-retreat-shower.webp",
    alt: "Curbless walk-in shower with integrated bench and marble-look porcelain tile",
  },
  {
    src: "/images/featured-project/bathroom-retreat-niche.webp",
    alt: "Custom recessed shower niche with precision marble-look tile work",
  },
];

const heroImage = {
  ...projectImages[0],
  width: 768,
  height: 1024,
};

const galleryImages = projectImages.slice(1).map((img) => ({
  ...img,
  width: 768,
  height: 1024,
}));

function ClickableImage({
  src,
  alt,
  width,
  height,
  priority,
  sizes,
  className,
  onOpen,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes: string;
  className?: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`relative w-full h-full overflow-hidden cursor-pointer group text-left ${className ?? ""}`}
      aria-label={`View larger: ${alt}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        sizes={sizes}
      />
      <div className="absolute inset-0 bg-[#2C2B29]/0 group-hover:bg-[#2C2B29]/25 transition-all duration-400 flex items-center justify-center">
        <div className="w-10 h-10 border border-white/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-xl font-light">+</span>
        </div>
      </div>
    </button>
  );
}

export default function FeaturedProject() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="featured-project" className="py-28 lg:py-36 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-10 bg-[#B8975A]" />
            <span className="font-sans-body text-[#B8975A] text-[11px] tracking-[0.4em] uppercase">
              Featured Project
            </span>
          </div>
          <h2 className="font-display text-[#2C2B29] text-4xl md:text-5xl font-light leading-tight max-w-2xl">
            Exceptional Work,
            <br />
            <em className="italic text-[#7A7774] font-light">Crafted to Last</em>
          </h2>
        </div>

        {/* Hero + content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 relative">
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <ClickableImage
                src={heroImage.src}
                alt={heroImage.alt}
                width={heroImage.width}
                height={heroImage.height}
                priority
                sizes="(max-width: 1024px) 100vw, 58vw"
                onOpen={() => setLightboxIndex(0)}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-[#B8975A]/20 pointer-events-none hidden lg:block" />
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center lg:pt-8">
            <h3 className="font-display text-[#2C2B29] text-3xl md:text-4xl font-light leading-tight mb-6">
              Luxury Marble-Look Bathroom Retreat
            </h3>
            <p className="font-sans-body text-[#7A7774] text-sm leading-relaxed font-light mb-8">
              A modern custom bathroom featuring large-format marble-look porcelain tile, a curbless walk-in shower, integrated bench seating, recessed shelving, dual rainfall shower heads, and premium black fixtures. Designed to create a timeless, luxurious space with exceptional craftsmanship and attention to detail.
            </p>
            <p className="font-display text-[#B8975A] text-lg italic font-light mb-12">
              &ldquo;Craftsmanship designed to last for decades.&rdquo;
            </p>

            {/* Secondary gallery */}
            <div className="grid grid-cols-2 gap-3">
              {galleryImages.map((img, i) => (
                <div key={img.src} className="aspect-[3/4] overflow-hidden rounded-sm">
                  <ClickableImage
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    sizes="(max-width: 1024px) 45vw, 20vw"
                    onOpen={() => setLightboxIndex(i + 1)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 border border-[#2C2B29]/20 hover:border-[#B8975A] text-[#2C2B29] hover:text-[#B8975A] px-10 py-4 font-sans-body text-xs tracking-[0.25em] uppercase transition-all duration-300 group"
          >
            View Full Gallery
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>
      </div>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={projectImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </section>
  );
}
