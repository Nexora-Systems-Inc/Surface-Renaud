"use client";

import { useState } from "react";
import ImageLightbox from "@/components/ImageLightbox";
import { galleryImages } from "@/data/galleryImages";

function tileLayout(index: number): string {
  if (index % 5 === 0) {
    return "sm:col-span-2 aspect-[16/10]";
  }
  return "aspect-[4/5]";
}

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {galleryImages.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setLightboxIndex(i)}
            aria-label={`View larger: ${img.alt}`}
            className={`relative w-full cursor-pointer group text-left content-photo ${tileLayout(i)}`}
          >
            <img
              src={img.thumb ?? img.src}
              alt={img.alt}
              loading={i < 3 ? "eager" : "lazy"}
              className="content-photo-img absolute inset-0"
            />
            <div className="absolute inset-0 bg-[#2C2B29]/0 group-hover:bg-[#2C2B29]/25 transition-all duration-400 flex items-center justify-center">
              <div className="w-10 h-10 border border-white/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-xl font-light">+</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onIndexChange={setLightboxIndex}
        />
      )}
    </>
  );
}
