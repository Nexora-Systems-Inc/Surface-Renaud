import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PoweredByCrewPilot from "@/components/PoweredByCrewPilot";
import Image from "next/image";
import ProjectPlannerIntro, {
  ProjectPlannerFormDivider,
  ProjectPlannerInfoSection,
} from "@/components/ProjectPlannerIntro";
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
      <PageHero
        eyebrow={
          <span className="inline-flex items-center gap-2.5">
            <span>NEW —</span>
            <Image
              src="/products/crewpilot-logo.png"
              alt=""
              width={72}
              height={72}
              className="h-[14px] w-auto shrink-0"
            />
            <span>BETA</span>
          </span>
        }
        title={
          <>
            Plan Your
            <br />
            <em className="italic text-[#B8975A]">Renovation Online</em>
          </>
        }
        footer={<PoweredByCrewPilot variant="dark" />}
      />

      <main className="bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 pt-16 lg:pt-20">
          <ProjectPlannerIntro />
        </div>

        <ProjectPlannerInfoSection />

        <div className="max-w-4xl mx-auto px-6 lg:px-10 pt-12 lg:pt-16 pb-20 lg:pb-28">
          <div className="mb-16 lg:mb-20">
            <ProjectPlannerFormDivider />
          </div>
          <ProjectPlannerPageClient />
          <div className="mt-10 pt-6 border-t border-[#EDE9E3] text-center">
            <PoweredByCrewPilot variant="light" />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
