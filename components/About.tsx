export default function About() {
  return (
    <section
      id="about"
      className="py-28 lg:py-36 bg-[#2C2B29] relative overflow-hidden"
    >
      {/* Subtle tile-pattern texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #B8975A,
            #B8975A 1px,
            transparent 1px,
            transparent 20px
          )`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] content-photo group rounded-nx-md">
              <img
                src="https://static.wixstatic.com/media/ea26fd_0e8eb61209a542fda3b36451a15530fc~mv2_d_6720_4480_s_4_2.jpg"
                alt="Surface Renaud Inc – craftsmanship and precision"
                className="content-photo-img"
              />
            </div>
            {/* Gold accent frames */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border border-[#B8975A]/30 -z-0 pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-1/2 h-1/2 border border-[#B8975A]/15 -z-0 pointer-events-none" />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#B8975A]" />
              <span className="font-sans-body text-[#B8975A] text-[11px] tracking-[0.4em] uppercase">
                Our Story
              </span>
            </div>

            <h2 className="font-display text-white text-4xl md:text-5xl font-light leading-tight mb-8">
              About
              <br />
              <em className="italic text-[#B8975A]">Surface Renaud Inc</em>
            </h2>

            <p className="font-sans-body text-white/60 text-sm leading-relaxed mb-6 font-light">
              Surface Renaud Inc is dedicated to delivering exceptional tile installation services with a keen focus on craftsmanship, precision, and attention to detail. Our mission is to transform spaces with stunning, enduring tile work.
            </p>
            <p className="font-sans-body text-white/60 text-sm leading-relaxed mb-10 font-light">
              Based in Brownsburg-Chatham, we serve the Laurentians and Ottawa region with the same commitment to quality — project after project.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10">
              {[
                { value: "15+", label: "Years of Experience" },
                { value: "200+", label: "Projects Completed" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-[#B8975A] text-3xl font-light mb-1">
                    {stat.value}
                  </div>
                  <div className="font-sans-body text-white/40 text-[11px] tracking-widest uppercase leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
