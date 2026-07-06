import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Custom Showers",
    description:
      "Transform your bathroom with a custom shower built to your exact size, style, and layout. From sleek walk-ins to spa-inspired retreats, every detail — tile, glass, and finish — is crafted to fit your vision. Precision installation ensures lasting beauty, comfort, and performance for years to come.",
    image: "https://static.wixstatic.com/media/d833f9_20c8e0094a134b289e3ea103c1c5f7e4~mv2.jpg",
    href: "/services#showers",
  },
  {
    number: "02",
    title: "Heated Floors",
    description:
      "Discover the comfort and warmth of our heated floors. Experience the seamless blend of functionality and aesthetics as we bring innovative heating solutions to your space, enhancing your everyday living experience.",
    image: "https://static.wixstatic.com/media/d833f9_b39c9c6af7ba413ba8cc9426c74cea89~mv2.jpg",
    href: "/services#floors",
  },
  {
    number: "03",
    title: "Architectural Coatings",
    description:
      "Our meticulous craftsmanship and attention to detail create stunning coatings that elevate the visual appeal and protection of interior and exterior surfaces — from residential feature walls to full architectural finishes.",
    image: "https://static.wixstatic.com/media/d833f9_95c3f726dcdb41ac961bdebfd23c1e5c~mv2.webp",
    href: "/services#coatings",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 lg:py-36 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="h-px w-10 bg-[#B8975A]" />
              <span className="font-sans-body text-[#B8975A] text-[11px] tracking-[0.4em] uppercase">
                What We Offer
              </span>
            </div>
            <h2 className="font-display text-[#2C2B29] text-4xl md:text-5xl font-light leading-tight">
              Our Specialized
              <br />
              <em className="italic text-[#7A7774] font-light">Services</em>
            </h2>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-2 font-sans-body text-[#B8975A] text-xs tracking-[0.25em] uppercase hover:gap-4 transition-all duration-300 group"
          >
            Discover More
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Service rows */}
        <div className="space-y-0 divide-y divide-[#EDE9E3]">
          {services.map((service, i) => (
            <div
              key={service.number}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-0 py-12 lg:py-16"
            >
              {/* Number */}
              <div className="lg:col-span-1 flex lg:block items-center mb-4 lg:mb-0">
                <span className="font-display text-[#EDE9E3] text-5xl font-light leading-none group-hover:text-[#B8975A]/20 transition-colors duration-500">
                  {service.number}
                </span>
              </div>

              {/* Image */}
              <div
                className={`lg:col-span-4 overflow-hidden mb-8 lg:mb-0 ${
                  i % 2 === 1 ? "lg:order-3 lg:col-start-9" : ""
                }`}
              >
                <div className="aspect-[4/3] content-photo">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="content-photo-img"
                  />
                </div>
              </div>

              {/* Content */}
              <div
                className={`lg:col-span-6 flex flex-col justify-center ${
                  i % 2 === 1 ? "lg:order-2 lg:pr-16" : "lg:pl-16"
                }`}
              >
                <h3 className="font-display text-[#2C2B29] text-3xl md:text-4xl font-light mb-5 leading-tight">
                  {service.title}
                </h3>
                <p className="font-sans-body text-[#7A7774] text-sm leading-relaxed mb-8 max-w-md font-light">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-[#2C2B29] hover:text-[#B8975A] font-sans-body text-xs tracking-[0.25em] uppercase transition-colors duration-300 group/link"
                >
                  Learn More
                  <ArrowRight
                    size={13}
                    className="group-hover/link:translate-x-1 transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
