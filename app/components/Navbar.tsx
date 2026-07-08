"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About Us", href: "#about", id: "about" },
  { label: "Kelurahan", href: "#kelurahan", id: "kelurahan" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "kelurahan"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(href.replace("#", ""));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 lg:px-12 transition-[background-color,padding,box-shadow,border-color,backdrop-filter] duration-500 ease-in-out ${
        scrolled
          ? "bg-white/55 backdrop-blur-xl border-b border-brand-charcoal/[0.06] py-3.5 shadow-[0_1px_12px_rgba(0,0,0,0.04)]"
          : "bg-transparent backdrop-blur-none py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between">
          <Logo size="md" />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-brand-green-dark"
                    : "text-brand-charcoal/60 hover:text-brand-charcoal"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-brand-green-dark transition-all duration-300 ${
                    activeSection === link.id
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-brand-charcoal hover:bg-brand-charcoal/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-brand-cream border-b border-brand-charcoal/5 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-6 py-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`block py-2 text-base font-medium transition-colors ${
                activeSection === link.id
                  ? "text-brand-green-dark"
                  : "text-brand-charcoal/70"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
