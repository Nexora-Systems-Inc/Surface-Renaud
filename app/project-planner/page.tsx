import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectPlannerPageClient from "./ProjectPlannerPageClient";

export const metadata = {
  title: "Project Planner | Surface Renaud Inc",
  description:
    "Tell us about your tile or architectural surface project. Surface Renaud will review your request.",
};

export default function ProjectPlannerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAFAF8] pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#B8975A]" />
              <span className="font-sans-body text-[#B8975A] text-[11px] tracking-[0.4em] uppercase">
                Project Planner
              </span>
            </div>
            <h1 className="font-display text-[#2C2B29] text-4xl md:text-5xl font-light leading-tight">
              Plan Your
              <br />
              <em className="italic text-[#B8975A]">Project</em>
            </h1>
            <p className="font-sans-body text-[#7A7774] text-sm leading-relaxed font-light mt-6 max-w-2xl">
              Share your project details and our team will review your request.
            </p>
          </div>

          <ProjectPlannerPageClient />
        </div>
      </main>
      <Footer />
    </>
  );
}
