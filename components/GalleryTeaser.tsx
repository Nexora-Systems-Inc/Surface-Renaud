import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { galleryPreviewImages } from "@/lib/galleryImages";

export default function GalleryTeaser() {
  return (
    <section className="py-28 lg:py-36 bg-[#F5F2EE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
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
            Every installation reflects a dedication to craftsmanship and a
            passion for getting the details right.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryPreviewImages.map((img) => (
            <div
              key={img.src}
              className="aspect-[4/5] overflow-hidden rounded-nx-md"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 bg-[#B8975A] hover:bg-[#9A7D48] text-white px-8 py-4 rounded-nx-sm font-sans-body text-xs tracking-[0.25em] uppercase transition-all duration-300 hover:shadow-lg hover:shadow-[#B8975A]/25"
          >
            View Full Gallery
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
