import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-36 bg-[#2C2B29] relative overflow-hidden">
      <div
        className="absolute right-0 top-0 w-1/2 h-full opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 70% 50%, #B8975A 0%, transparent 60%)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left – info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#B8975A]" />
              <span className="font-sans-body text-[#B8975A] text-[11px] tracking-[0.4em] uppercase">
                Get In Touch
              </span>
            </div>

            <h2 className="font-display text-white text-4xl md:text-5xl font-light leading-tight mb-8">
              Start Your
              <br />
              <em className="italic text-[#B8975A]">Project Today</em>
            </h2>

            <p className="font-sans-body text-white/55 text-sm leading-relaxed font-light mb-12 max-w-md">
              Contact us to discuss your project and receive a free estimate. We serve Brownsburg-Chatham, the Laurentians, and the Ottawa region.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: "450-612-2539",
                  href: "tel:450-612-2539",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "Surfacerenaud@hotmail.com",
                  href: "mailto:Surfacerenaud@hotmail.com",
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value: "814 Rte Des Outaouis, Brownsburg-Chatham, Quebec",
                  href: "https://maps.google.com/?q=814+Rte+Des+Outaouis+Brownsburg-Chatham+Quebec",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.icon === MapPin ? "_blank" : undefined}
                  rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 border border-[#B8975A]/40 flex items-center justify-center shrink-0 group-hover:bg-[#B8975A]/10 transition-colors duration-300 mt-0.5">
                    <item.icon size={15} className="text-[#B8975A]" />
                  </div>
                  <div>
                    <div className="font-sans-body text-white/35 text-[10px] tracking-[0.3em] uppercase mb-1">
                      {item.label}
                    </div>
                    <div className="font-sans-body text-white/80 text-sm group-hover:text-[#B8975A] transition-colors duration-300">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-6 mt-12 pt-10 border-t border-white/10">
              <span className="font-sans-body text-white/30 text-[10px] tracking-widest uppercase">Follow Us</span>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans-body text-white/40 hover:text-[#B8975A] text-[11px] tracking-widest uppercase transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans-body text-white/40 hover:text-[#B8975A] text-[11px] tracking-widest uppercase transition-colors duration-300"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Right – CTA card */}
          <div className="lg:pt-16">
            <div className="bg-[#F5F2EE] p-10 lg:p-12 rounded-nx-md">
              <div className="font-sans-body text-[#B8975A] text-[10px] tracking-[0.3em] uppercase mb-3">
                Online Project Planner — Beta
              </div>
              <h3 className="font-display text-[#2C2B29] text-2xl md:text-3xl font-light mb-3">
                Plan Your Renovation Online
              </h3>
              <p className="font-sans-body text-[#7A7774] text-sm font-light mb-8">
                Share your project details online and our team will review your
                request before preparing an estimate. Prefer to talk first? Call
                or email us anytime.
              </p>

              <div className="space-y-3">
                <a
                  href="/project-planner"
                  className="w-full flex items-center justify-center gap-3 bg-[#B8975A] hover:bg-[#9A7D48] text-white px-8 py-4 rounded-nx-sm font-sans-body text-xs tracking-[0.25em] uppercase transition-all duration-300"
                >
                  Start Planning Your Project
                </a>
                <a
                  href="tel:450-612-2539"
                  className="w-full flex items-center justify-center gap-3 bg-[#2C2B29] hover:bg-[#B8975A] text-white px-8 py-4 rounded-nx-sm font-sans-body text-xs tracking-[0.25em] uppercase transition-all duration-300"
                >
                  <Phone size={14} />
                  Call Now: 450-612-2539
                </a>
                <a
                  href="mailto:Surfacerenaud@hotmail.com"
                  className="w-full flex items-center justify-center gap-3 border border-[#2C2B29] hover:border-[#B8975A] text-[#2C2B29] hover:text-[#B8975A] px-8 py-4 rounded-nx-sm font-sans-body text-xs tracking-[0.25em] uppercase transition-all duration-300"
                >
                  <Mail size={14} />
                  Send an Email
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-[#EDE9E3]">
                <div className="font-sans-body text-[#B8975A] text-[10px] tracking-[0.3em] uppercase mb-2">Service Area</div>
                <p className="font-sans-body text-[#7A7774] text-xs leading-relaxed font-light">
                  Brownsburg-Chatham · Laurentians · Outaouais · Ottawa Region
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
