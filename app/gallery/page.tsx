import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery | Surface Renaud Inc",
  description:
    "Browse Surface Renaud tile installations — custom showers, heated floors, and architectural coatings across Brownsburg-Chatham and the Laurentians.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <PageHero
        eyebrow="Our Work"
        title={
          <>
            Project
            <br />
            <em className="italic text-[#B8975A]">Gallery</em>
          </>
        }
      />
      <main>
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
