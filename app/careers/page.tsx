import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import CareersApplicationForm from "@/components/CareersApplicationForm";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Careers | Surface Renaud Inc",
  description:
    "Join Surface Renaud Inc — explore opportunities in tile installation, renovations, and related trades in Brownsburg-Chatham, Quebec.",
};

export default function CareersPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Careers"
        title={
          <>
            Looking to Join a Team
            <br />
            That Takes Pride in{" "}
            <em className="italic text-[#B8975A]">Quality Workmanship?</em>
          </>
        }
        footer={
          <p className="font-sans-body text-white/50 text-sm max-w-xl font-light leading-relaxed">
            We&apos;re always interested in meeting motivated people with
            experience in tile installation, renovations, and related trades.
            If you&apos;d like to be considered for future opportunities, submit
            your application below.
          </p>
        }
      />

      <main className="bg-[#FAFAF8]">
        <section className="py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-10">
            <div className="mb-12 lg:mb-16">
              <div className="flex items-center gap-4 mb-3">
                <div className="h-px w-10 bg-[#B8975A]" />
                <span className="font-sans-body text-[#B8975A] text-[11px] tracking-[0.4em] uppercase">
                  Application
                </span>
              </div>
              <h2 className="font-display text-[#2C2B29] text-3xl md:text-4xl font-light mb-4">
                Submit Your{" "}
                <em className="italic text-[#B8975A]">Application</em>
              </h2>
              <p className="font-sans-body text-[#7A7774] text-sm font-light max-w-xl leading-relaxed">
                Tell us about your experience and attach your résumé if you
                have one. Our team reviews every application personally.
              </p>
            </div>

            <CareersApplicationForm />
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
