"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About Us", href: "#about", id: "about" },
  { label: "Kelurahan", href: "#kelurahan", id: "kelurahan" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [kelurahanOpen, setKelurahanOpen] = useState(false);

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

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    handleScroll();

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      label: "Home",
      href: "#home",
      id: "home",
    },
    {
      label: "About Us",
      href: "#about",
      id: "about",
    },
  ];

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
      className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 lg:px-12 transition-[background-color,padding,box-shadow,border-color,backdrop-filter] duration-500 ease-in-out ${scrolled
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
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${activeSection === link.id
                  ? "text-brand-green-dark"
                  : "text-brand-charcoal/60 hover:text-brand-charcoal"
                  }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-brand-green-dark transition-all duration-300 ${activeSection === link.id
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-0"
                    }`}
                />
              </a>
            ))}

            {/* Dropdown Kelurahan */}
            <div
              className="relative"
              onMouseEnter={() => setKelurahanOpen(true)}
              onMouseLeave={() => setKelurahanOpen(false)}
            >
              <button className="flex items-center gap-1 font-sans text-[15px] font-medium text-brand-charcoal/70 dark:text-brand-cream/70 hover:text-brand-charcoal dark:hover:text-brand-cream transition-colors">
                Kelurahan
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${kelurahanOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              <div
                className={`absolute right-0 mt-3 w-56 rounded-xl bg-brand-cream dark:bg-brand-charcoal border border-brand-charcoal/10 dark:border-brand-cream/10 shadow-xl transition-all duration-200 origin-top ${kelurahanOpen
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
                  }`}
              >
                <Link
                  href="/tandang"
                  className="block px-5 py-3 hover:bg-brand-green-light/10 transition-colors"
                >
                  Kelurahan Tandang
                </Link>

                <Link
                  href="/jangli"
                  className="block px-5 py-3 hover:bg-brand-green-light/10 transition-colors"
                >
                  Kelurahan Jangli
                </Link>
              </div>
            </div>
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

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-brand-cream border-b border-brand-charcoal/5 shadow-lg transition-all duration-300 ease-in-out ${isOpen
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
              className={`block py-2 text-base font-medium transition-colors ${activeSection === link.id
                ? "text-brand-green-dark"
                : "text-brand-charcoal/70"
                }`}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Dropdown */}
          <div>
            <button
              onClick={() => setKelurahanOpen(!kelurahanOpen)}
              className="flex w-full items-center justify-between py-2 font-sans text-lg font-semibold text-brand-charcoal/80 dark:text-brand-cream/80"
            >
              Kelurahan

              <ChevronDown
                className={`h-5 w-5 transition-transform duration-200 ${kelurahanOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${kelurahanOpen
                ? "max-h-40 mt-2"
                : "max-h-0"
                }`}
            >
              <div className="ml-4 border-l border-brand-charcoal/10 dark:border-brand-cream/10 pl-4 space-y-2">
                <Link
                  href="/tandang"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-brand-charcoal/70 dark:text-brand-cream/70 hover:text-brand-green-dark"
                >
                  Kelurahan Tandang
                </Link>

                <Link
                  href="/jangli"
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-brand-charcoal/70 dark:text-brand-cream/70 hover:text-brand-green-dark"
                >
                  Kelurahan Jangli
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}