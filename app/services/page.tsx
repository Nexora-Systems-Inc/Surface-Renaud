import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Services | Surface Renaud Inc",
  description: "Custom showers, heated floors, and architectural coatings — Surface Renaud Inc, Brownsburg-Chatham, Quebec.",
};

const services = [
  {
    id: "showers",
    number: "01",
    title: "Custom Showers",
    description:
      "Transform your bathroom with a custom shower built to your exact size, style, and layout. From sleek walk-ins to spa-inspired retreats, every detail — tile, glass, and finish — is crafted to fit your vision. Precision installation ensures lasting beauty, comfort, and performance for years to come.",
    images: [
      "https://static.wixstatic.com/media/d833f9_20c8e0094a134b289e3ea103c1c5f7e4~mv2.jpg",
      "https://static.wixstatic.com/media/d833f9_8348dd746d3348a0b76bdbb6cf36c0df~mv2.jpg",
      "https://static.wixstatic.com/media/d833f9_43125b4e2cb345d193bd6c84d8e0d5bd~mv2.jpg",
      "https://static.wixstatic.com/media/d833f9_150e9816411f456599c7835b48d39587~mv2.png",
    ],
  },
  {
    id: "floors",
    number: "02",
    title: "Heated Floors",
    description:
      "Discover the comfort and warmth of our heated floors. Experience the seamless blend of functionality and aesthetics as we bring innovative heating solutions to your space, enhancing your everyday living experience.",
    images: [
      "https://static.wixstatic.com/media/d833f9_31587e546295451790cc257cd134c758~mv2.jpg",
      "https://static.wixstatic.com/media/d833f9_b39c9c6af7ba413ba8cc9426c74cea89~mv2.jpg",
      "https://static.wixstatic.com/media/d833f9_a9c6f14da2f0492ba7ec23510e4bb5dc~mv2.jpg",
      "https://static.wixstatic.com/media/d833f9_782c358aec6d4d7e966864c25cb2ffdd~mv2.jpg",
    ],
  },
  {
    id: "coatings",
    number: "03",
    title: "Architectural Coatings",
    description:
      "Step into the beauty of our architectural coatings. Our meticulous craftsmanship and attention to detail create stunning coatings that elevate the visual appeal and protection of interior and exterior surfaces.",
    images: [
      "https://static.wixstatic.com/media/d833f9_95c3f726dcdb41ac961bdebfd23c1e5c~mv2.webp",
      "https://static.wixstatic.com/media/d833f9_e132d7007b9a4f23a0a3789cf3374f0c~mv2.jpg",
      "https://static.wixstatic.com/media/d833f9_b7be906af96843f28f95e1b740669bd5~mv2.webp",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="What We Offer"
        title={
          <>
            Our Specialized
            <br />
            <em className="italic text-[#B8975A]">Services</em>
          </>
        }
      />

      {/* Service sections */}
      <main>
        {services.map((service, i) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-24 lg:py-32 ${i % 2 === 0 ? "bg-[#FAFAF8]" : "bg-[#F5F2EE]"}`}
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              {/* Header */}
              <div className="flex items-start gap-6 mb-16">
                <span className="font-display text-[#EDE9E3] text-6xl font-light leading-none hidden md:block">
                  {service.number}
                </span>
                <div>
                  <h2 className="font-display text-[#2C2B29] text-4xl md:text-5xl font-light leading-tight mb-5">
                    {service.title}
                  </h2>
                  <p className="font-sans-body text-[#7A7774] text-sm leading-relaxed max-w-2xl font-light">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Image grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {service.images.map((img, j) => (
                  <div
                    key={j}
                    className={`overflow-hidden group rounded-nx-md ${j === 0 ? "col-span-2 row-span-2" : ""}`}
                  >
                    <div className={`${j === 0 ? "aspect-square" : "aspect-[4/3]"} overflow-hidden rounded-nx-md`}>
                      <img
                        src={img}
                        alt={`${service.title} – project ${j + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <Contact />
      </main>

      <Footer />
    </>
  );
}
