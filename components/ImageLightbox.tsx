"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxImage = {
  src: string;
  alt: string;
};

type ImageLightboxProps = {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export default function ImageLightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: ImageLightboxProps) {
  const [visible, setVisible] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  const handleClose = useCallback(() => {
    setVisible(false);
    window.setTimeout(onClose, 280);
  }, [onClose]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goPrev, goNext, handleClose]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goPrev();
      else goNext();
    }
    touchStartX.current = null;
  };

  const current = images[index];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-6 md:p-10 transition-opacity duration-300 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#2C2B29]/80 backdrop-blur-md"
        onClick={handleClose}
      />

      {/* Close */}
      <button
        type="button"
        className="absolute top-5 right-5 md:top-8 md:right-8 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
        onClick={handleClose}
        aria-label="Close"
      >
        <X size={20} strokeWidth={1.5} />
      </button>

      {/* Previous */}
      {images.length > 1 && (
        <button
          type="button"
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:text-white hover:bg-white/20 opacity-80 md:opacity-40 md:hover:opacity-100 transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          aria-label="Previous image"
        >
          <ChevronLeft size={24} strokeWidth={1.5} />
        </button>
      )}

      {/* Image */}
      <div
        className={`relative z-10 transition-all duration-300 ease-out ${
          visible ? "scale-100 opacity-100" : "scale-[0.97] opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="rounded-nx-lg overflow-hidden shadow-2xl shadow-black/50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current.src}
            alt={current.alt}
            className="block max-h-[82vh] max-w-[min(92vw,1100px)] w-auto h-auto object-contain"
            draggable={false}
          />
        </div>

        {images.length > 1 && (
          <p className="mt-4 text-center font-sans-body text-white/50 text-[11px] tracking-[0.3em] uppercase">
            {index + 1} / {images.length}
          </p>
        )}
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          type="button"
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:text-white hover:bg-white/20 opacity-80 md:opacity-40 md:hover:opacity-100 transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          aria-label="Next image"
        >
          <ChevronRight size={24} strokeWidth={1.5} />
        </button>
      )}
    </div>
  );
}
