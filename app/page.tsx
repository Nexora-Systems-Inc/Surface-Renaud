import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectPlannerPromo from "@/components/ProjectPlannerPromo";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProject />
        <ProjectPlannerPromo />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
