import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      <main className="pt-28">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
