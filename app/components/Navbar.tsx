"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

const InstagramIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" />
  </svg>
);

const TiktokIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.71a8.21 8.21 0 004.76 1.52V6.78a4.84 4.84 0 01-1-.09z" />
  </svg>
);

import { usePathname } from "next/navigation";

const socialLinks = [
  { icon: <InstagramIcon />, href: "https://www.instagram.com/se.tanjang", label: "Instagram" },
  { icon: <TiktokIcon />, href: "https://www.tiktok.com/@kknidbu70", label: "TikTok" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Dynamic navigation links based on current page
  const navLinks = (() => {
    if (pathname === "/jangli") {
      return [
        { label: "Home", href: "/" },
        { label: "Profil Kelurahan", href: "#profil-jangli" },
        { label: "Pengrajin", href: "#pengrajin" },
        { label: "Katalog", href: "#katalog" },
      ];
    } else if (pathname.startsWith("/tandang")) {
      return [
        { label: "Home", href: "/" },
        { label: "Profil Kelurahan", href: "#profil-tandang" },
        { label: "Pengrajin", href: "#pengrajin" },
        { label: "Katalog", href: "#katalog" },
      ];
    } else if (pathname === "/kkn") {
      return [
        { label: "Tali Lashing", href: "/#lashing" },
        { label: "Tim KKN", href: "/kkn" },
      ];
    }
    // Default Home Links
    return [
      { label: "Tali Lashing", href: "#lashing" },
      { label: "Tim KKN", href: "/kkn" },
    ];
  })();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hero section is ~92vh. We switch to light theme only after passing it.
      const heroThreshold = window.innerHeight * 0.85;
      setScrolled(currentScrollY > heroThreshold);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const el = document.getElementById(href.replace("#", ""));
      if (el) {
        e.preventDefault();
        window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
      }
    } else if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(href.replace("/#", ""));
      if (el) {
        window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
      }
    }
  };

  // Dynamic colors based on scroll state
  const isKknPage = pathname === "/kkn";
  const useDarkText = isKknPage || scrolled;

  const textColor = useDarkText ? "#1C1E21" : "#FFFFFF";
  const textColorMuted = useDarkText ? "rgba(28,30,33,0.7)" : "rgba(255,255,255,0.9)";
  const iconBg = useDarkText ? "rgba(28,30,33,0.08)" : "rgba(255,255,255,0.1)";
  const iconColor = useDarkText ? "rgba(28,30,33,0.6)" : "rgba(255,255,255,0.7)";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-[calc(100%+32px)]"
        }`}
    >
      {/* Background tint - extends slightly and fades out to avoid sharp cut */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none transition-colors duration-500 -z-10"
        style={{
          height: "calc(100% + 32px)",
          background: scrolled 
            ? "linear-gradient(to bottom, rgba(255, 255, 255, 0.6) 70%, transparent 100%)" 
            : (isKknPage 
                ? "linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 70%, transparent 100%)" 
                : "linear-gradient(to bottom, rgba(28, 30, 33, 0.2) 70%, transparent 100%)"),
        }}
      />

      {/* Corrected Progressive blur - smooth fade out */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none -z-20"
        style={{ height: "calc(100% + 32px)" }}
      >
        <div className="absolute inset-0" style={{ backdropFilter: "blur(2px)", WebkitBackdropFilter: "blur(2px)", maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)" }} />
        <div className="absolute inset-0" style={{ backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)", maskImage: "linear-gradient(to bottom, black 50%, transparent 90%)", WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 90%)" }} />
        <div className="absolute inset-0" style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", maskImage: "linear-gradient(to bottom, black 30%, transparent 70%)", WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 70%)" }} />
        <div className="absolute inset-0" style={{ backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", maskImage: "linear-gradient(to bottom, black 0%, transparent 50%)", WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 50%)" }} />
      </div>

      <div className="relative px-5 sm:px-6 lg:px-8 py-4">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex items-center justify-between relative">
            {/* Left — Logo */}
            <Logo size="md" variant={useDarkText ? "dark" : "light"} />

            {/* Center — Nav Links (Desktop) */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  style={{ color: textColorMuted }}
                  className="text-base font-medium transition-colors duration-300"
                  onMouseEnter={(e) => (e.currentTarget.style.color = textColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = textColorMuted)}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right — Social Icons (Desktop) */}
            <div className="hidden md:flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{ color: iconColor, backgroundColor: iconBg }}
                  className="h-9 w-9 rounded-full flex items-center justify-center transition-all duration-300"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = textColor;
                    e.currentTarget.style.backgroundColor = scrolled ? "rgba(28,30,33,0.12)" : "rgba(255,255,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = iconColor;
                    e.currentTarget.style.backgroundColor = iconBg;
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: iconColor }}
              className="md:hidden p-2 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        style={{
          backgroundColor: useDarkText ? "rgba(245,244,240,0.98)" : "rgba(28,30,33,0.95)",
          borderTop: useDarkText ? "1px solid rgba(28,30,33,0.06)" : "1px solid rgba(255,255,255,0.05)",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(-8px)",
          pointerEvents: isOpen ? "auto" : "none",
        }}
        className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl transition-all duration-300 ease-in-out"
      >
        <div className="px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              style={{ color: useDarkText ? "rgba(28,30,33,0.8)" : "rgba(255,255,255,0.85)" }}
              className="block py-3 text-base font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Social row in mobile */}
          <div
            style={{ borderTop: useDarkText ? "1px solid rgba(28,30,33,0.08)" : "1px solid rgba(255,255,255,0.1)" }}
            className="flex items-center gap-3 pt-4 mt-3"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  color: useDarkText ? "rgba(28,30,33,0.6)" : "rgba(255,255,255,0.7)",
                  backgroundColor: useDarkText ? "rgba(28,30,33,0.06)" : "rgba(255,255,255,0.1)",
                }}
                className="h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}