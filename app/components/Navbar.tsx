"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position to change background styling (shadow/blur)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ["home", "about", "kelurahan"];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About Us", href: "#about", id: "about" },
    { label: "Kelurahan", href: "#kelurahan", id: "kelurahan" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-cream/80 dark:bg-brand-charcoal/80 backdrop-blur-md border-b border-brand-charcoal/5 dark:border-brand-cream/5 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Logo size="md" />
          </div>

          {/* Navigation Links (Desktop) on the far right */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`relative font-sans text-[15px] font-medium tracking-wide transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-brand-green-dark dark:text-brand-green-light"
                    : "text-brand-charcoal/70 dark:text-brand-cream/70 hover:text-brand-charcoal dark:hover:text-brand-cream"
                }`}
              >
                {link.label}
                {/* Active Underline Indicator */}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-brand-green-dark dark:bg-brand-green-light rounded-full transition-all duration-300" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-brand-charcoal dark:text-brand-cream hover:bg-brand-charcoal/5 dark:hover:bg-brand-cream/5 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-brand-cream dark:bg-brand-charcoal border-b border-brand-charcoal/5 dark:border-brand-cream/5 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`block py-2 font-sans text-lg font-semibold transition-colors ${
                activeSection === link.id
                  ? "text-brand-green-dark dark:text-brand-green-light"
                  : "text-brand-charcoal/80 dark:text-brand-cream/80"
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
