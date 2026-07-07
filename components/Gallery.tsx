"use client";

import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";
import { galleryImages } from "@/lib/galleryImages";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section className="py-28 lg:py-36 bg-[#F5F2EE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="font-sans-body text-[#7A7774] text-sm max-w-sm font-light leading-relaxed mb-16">
          Every installation reflects a dedication to craftsmanship and a passion for getting the details right.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[220px]">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setLightboxIndex(i)}
              aria-label={`View larger: ${img.alt}`}
              className={`overflow-hidden cursor-pointer group relative text-left rounded-nx-md ${i === 0 ? "row-span-2" : ""} ${i === 3 ? "md:col-span-2" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#2C2B29]/0 group-hover:bg-[#2C2B29]/25 transition-all duration-400 flex items-center justify-center">
                <div className="w-10 h-10 border border-white/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xl font-light">+</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </section>
  );
}
