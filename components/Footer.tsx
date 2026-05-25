import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1E1D1B] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7 border border-[#B8975A] flex items-center justify-center">
                <span className="text-[#B8975A] font-display text-xs font-semibold">SR</span>
              </div>
              <div>
                <span className="font-display text-white tracking-[0.15em] text-sm font-medium uppercase">
                  Surface Renaud
                </span>
                <span className="font-sans-body text-[#B8975A] text-[9px] tracking-[0.3em] uppercase block leading-none mt-0.5">
                  Inc.
                </span>
              </div>
            </div>
            <p className="font-sans-body text-white/35 text-xs leading-relaxed font-light max-w-xs">
              Specialists in tile installation, custom showers, heated floors, and architectural coatings. Brownsburg-Chatham, Quebec.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-sans-body text-white/30 text-[10px] tracking-[0.3em] uppercase mb-5">Navigation</div>
            <nav className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Gallery", href: "/#gallery" },
                { label: "Contact", href: "/#contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block font-sans-body text-white/50 hover:text-[#B8975A] text-xs tracking-wider uppercase transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <div className="font-sans-body text-white/30 text-[10px] tracking-[0.3em] uppercase mb-5">Contact</div>
            <div className="space-y-3">
              <a
                href="tel:450-612-2539"
                className="block font-sans-body text-white/50 hover:text-[#B8975A] text-xs tracking-wider transition-colors duration-300"
              >
                450-612-2539
              </a>
              <a
                href="mailto:Surfacerenaud@hotmail.com"
                className="block font-sans-body text-white/50 hover:text-[#B8975A] text-xs tracking-wider transition-colors duration-300"
              >
                Surfacerenaud@hotmail.com
              </a>
              <p className="font-sans-body text-white/35 text-xs leading-relaxed">
                814 Rte Des Outaouis
                <br />
                Brownsburg-Chatham, Quebec
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans-body text-white/20 text-[11px] tracking-wider">
            © 2025 Surface Renaud Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans-body text-white/20 hover:text-[#B8975A] text-[11px] tracking-widest uppercase transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans-body text-white/20 hover:text-[#B8975A] text-[11px] tracking-widest uppercase transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
