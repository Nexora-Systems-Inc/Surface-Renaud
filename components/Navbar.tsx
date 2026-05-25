"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#2C2B29]/97 backdrop-blur-md py-3 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border border-[#B8975A] flex items-center justify-center">
            <span className="text-[#B8975A] font-display text-sm font-semibold tracking-widest">SR</span>
          </div>
          <div>
            <span className="font-display text-white tracking-[0.15em] text-sm font-medium uppercase">
              Surface Renaud
            </span>
            <span className="font-sans-body text-[#B8975A] text-[10px] tracking-[0.3em] uppercase block leading-none mt-0.5">
              Inc.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Gallery", href: "#gallery" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans-body text-white/70 hover:text-[#B8975A] text-xs tracking-[0.25em] uppercase transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:450-612-2539"
          className="hidden md:flex items-center gap-2 border border-[#B8975A] text-[#B8975A] hover:bg-[#B8975A] hover:text-white px-5 py-2.5 transition-all duration-300 font-sans-body text-xs tracking-[0.2em] uppercase"
        >
          <Phone size={13} />
          450-612-2539
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2C2B29] border-t border-white/10 px-6 py-6 space-y-5">
          {[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Gallery", href: "#gallery" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block font-sans-body text-white/80 text-sm tracking-[0.2em] uppercase py-1"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:450-612-2539"
            className="flex items-center gap-2 text-[#B8975A] font-sans-body text-sm tracking-widest uppercase mt-4"
          >
            <Phone size={14} /> 450-612-2539
          </a>
        </div>
      )}
    </header>
  );
}
