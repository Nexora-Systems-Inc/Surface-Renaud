const testimonials = [
  {
    quote:
      "Surface Renaud Inc exceeded our expectations with their impeccable work and professionalism. We highly recommend their services.",
    author: "The Connelly Family",
    location: "Brownsburg-Chatham",
  },
  {
    quote:
      "We are thrilled with the custom shower installation by Surface Renaud Inc. Their expertise is truly unmatched.",
    author: "David & Sarah Garcia",
    location: "Laurentians",
  },
  {
    quote:
      "Surface Renaud Inc's heated floor installation has added both luxury and comfort to our home. We couldn't be happier with the results.",
    author: "Client Stories",
    location: "Ottawa Region",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 lg:py-36 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-[#B8975A]" />
            <span className="font-sans-body text-[#B8975A] text-[11px] tracking-[0.4em] uppercase">
              Client Feedback
            </span>
            <div className="h-px w-10 bg-[#B8975A]" />
          </div>
          <h2 className="font-display text-[#2C2B29] text-4xl md:text-5xl font-light">
            What Our
            <br />
            <em className="italic text-[#7A7774]">Clients Say</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group bg-white border border-[#EDE9E3] p-8 rounded-nx-md hover:border-[#B8975A]/40 hover:shadow-lg hover:shadow-[#B8975A]/5 transition-all duration-400"
            >
              <div className="font-display text-[#B8975A]/25 text-7xl font-light leading-none mb-4 -mt-2">
                &ldquo;
              </div>
              <p className="font-sans-body text-[#4A4845] text-sm leading-relaxed font-light mb-8 italic">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-6 border-t border-[#EDE9E3]">
                <div className="w-8 h-8 bg-[#B8975A]/10 rounded-nx-sm flex items-center justify-center">
                  <span className="font-display text-[#B8975A] text-sm font-medium">
                    {t.author[0]}
                  </span>
                </div>
                <div>
                  <div className="font-sans-body text-[#2C2B29] text-xs font-medium tracking-wider uppercase">
                    {t.author}
                  </div>
                  <div className="font-sans-body text-[#B8975A] text-[10px] tracking-widest uppercase mt-0.5">
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
