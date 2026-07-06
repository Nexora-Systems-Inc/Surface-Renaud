import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectPlannerIntro from "@/components/ProjectPlannerIntro";
import ProjectPlannerPageClient from "./ProjectPlannerPageClient";

export const metadata = {
  title: "Online Project Planner (Beta) | Surface Renaud Inc",
  description:
    "Begin planning your renovation online. Share project details with Surface Renaud and our team will personally review your request.",
};

export default function ProjectPlannerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAFAF8] pt-28 pb-20 lg:pb-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <header className="mb-12 lg:mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#B8975A]" />
              <span className="font-sans-body text-[#B8975A] text-[11px] tracking-[0.4em] uppercase">
                Online Project Planner — Beta
              </span>
            </div>
            <h1 className="font-display text-[#2C2B29] text-4xl md:text-5xl font-light leading-tight">
              Plan Your
              <br />
              <em className="italic text-[#B8975A]">Renovation Online</em>
            </h1>
          </header>

          <ProjectPlannerIntro />
          <ProjectPlannerPageClient />
        </div>
      </main>
      <Footer />
    </>
  );
}
