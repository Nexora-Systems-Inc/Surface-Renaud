"use client";

import { useState } from "react";
import ImageLightbox, { type LightboxImage } from "@/components/ImageLightbox";

const galleryImages: LightboxImage[] = [
  {
    src: "https://static.wixstatic.com/media/d833f9_6da1e94357f14eb09e2a82d1864dc4ee~mv2.jpg",
    alt: "Surface Renaud – bathroom tile installation",
  },
  {
    src: "https://static.wixstatic.com/media/d833f9_0ff722cf834f40f893903c997f142db9~mv2.jpg",
    alt: "Surface Renaud – custom shower installation",
  },
  {
    src: "https://static.wixstatic.com/media/d833f9_9866c6353c9848aa9f5691e23662968a~mv2.jpg",
    alt: "Surface Renaud – precision tile work",
  },
  {
    src: "https://static.wixstatic.com/media/d833f9_903f894571d2403b869f4548014eb82f~mv2.jpg",
    alt: "Surface Renaud – heated floor installation",
  },
  {
    src: "https://static.wixstatic.com/media/d833f9_a0f2778e7cfe4ded8760eaab0c5058f0~mv2.jpg",
    alt: "Surface Renaud – architectural coating",
  },
  {
    src: "https://static.wixstatic.com/media/d833f9_20c8e0094a134b289e3ea103c1c5f7e4~mv2.jpg",
    alt: "Surface Renaud – tile finish detail",
  },
  {
    src: "https://static.wixstatic.com/media/d833f9_43125b4e2cb345d193bd6c84d8e0d5bd~mv2.jpg",
    alt: "Surface Renaud – wall tile installation",
  },
  {
    src: "https://static.wixstatic.com/media/d833f9_05c3191379cd45538f61d13bad42b3b2~mv2.jpg",
    alt: "Surface Renaud – completed tile project",
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-28 lg:py-36 bg-[#F5F2EE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-10 bg-[#B8975A]" />
              <span className="font-sans-body text-[#B8975A] text-[11px] tracking-[0.4em] uppercase">
                Our Work
              </span>
            </div>
            <h2 className="font-display text-[#2C2B29] text-4xl md:text-5xl font-light leading-tight">
              Project
              <br />
              <em className="italic text-[#7A7774] font-light">Gallery</em>
            </h2>
          </div>
          <p className="font-sans-body text-[#7A7774] text-sm max-w-sm font-light leading-relaxed">
            Every installation reflects a dedication to craftsmanship and a passion for getting the details right.
          </p>
        </div>

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
