"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: {
      container: "text-2xl",
      se: "text-2xl",
      dot: "text-2xl",
      tanjang: "text-2xl",
      accentsTop: "-top-2.5 left-[2px]",
      accentsSvgWidth: "16",
      accentsSvgHeight: "6",
      leafTop: "-top-[8px] -left-[1px]",
      leafSvgWidth: "8",
      leafSvgHeight: "8",
    },
    md: {
      container: "text-3xl",
      se: "text-3xl",
      dot: "text-3xl",
      tanjang: "text-3xl",
      accentsTop: "-top-3 left-[3px]",
      accentsSvgWidth: "22",
      accentsSvgHeight: "8",
      leafTop: "-top-[11px] -left-[1px]",
      leafSvgWidth: "11",
      leafSvgHeight: "11",
    },
    lg: {
      container: "text-4xl md:text-5xl",
      se: "text-4xl md:text-5xl",
      dot: "text-4xl md:text-5xl",
      tanjang: "text-4xl md:text-5xl",
      accentsTop: "-top-4 left-[4px]",
      accentsSvgWidth: "30",
      accentsSvgHeight: "11",
      leafTop: "-top-[15px] -left-[1.5px]",
      leafSvgWidth: "15",
      leafSvgHeight: "15",
    },
  };

  const c = sizeClasses[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center select-none group focus:outline-none ${className}`}
      aria-label="Setanjang Home"
    >
      <div className={`relative inline-flex items-center font-normal tracking-tight ${c.container}`}>
        {/* "se" - Serif Italic */}
        <span className={`font-serif italic text-brand-charcoal dark:text-brand-cream transition-colors duration-300 ${c.se}`}>
          se
        </span>
        
        {/* "." - Green Dot */}
        <span className={`font-serif font-bold text-brand-green-light transition-transform duration-300 group-hover:scale-125 ${c.dot} -ml-0.5`}>
          .
        </span>
        
        {/* "tanjang" - Sans Bold */}
        <span className={`relative font-sans font-bold text-brand-charcoal dark:text-brand-cream tracking-tight ${c.tanjang} ml-0.5`}>
          {/* Three little accent leaves above 'ta' */}
          <span className={`absolute ${c.accentsTop} flex opacity-90 transition-transform duration-300 group-hover:-translate-y-[1px]`}>
            <svg
              width={c.accentsSvgWidth}
              height={c.accentsSvgHeight}
              viewBox="0 0 22 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-brand-charcoal dark:text-brand-cream fill-current"
            >
              {/* Three elegant slanted strokes simulating the leaves in the logo */}
              <path d="M1 7C2 5.5 3.5 3.5 6.5 3C5.5 4.5 4.5 6.5 2 7.5L1 7Z" />
              <path d="M8 7C9 5.5 10.5 3.5 13.5 3C12.5 4.5 11.5 6.5 9 7.5L8 7Z" />
              <path d="M15 7C16 5.5 17.5 3.5 20.5 3C19.5 4.5 18.5 6.5 16 7.5L15 7Z" />
            </svg>
          </span>
          
          t
          a
          n
          
          {/* Custom 'j' using dotless j (ȷ) + green leaf */}
          <span className="relative inline-block">
            <span>ȷ</span>
            {/* Green Leaf replacing the dot of j */}
            <span className={`absolute ${c.leafTop} transition-transform duration-500 group-hover:rotate-12`}>
              <svg
                width={c.leafSvgWidth}
                height={c.leafSvgHeight}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-brand-green-light fill-current"
              >
                {/* Detailed leaf vector path resembling the one in the logo */}
                <path d="M1.5 10.5C3.5 9.5 7.5 9.5 10.5 2.5C9.5 4.5 7.5 9.5 1.5 10.5Z" />
                {/* Leaf central vein */}
                <path
                  d="M4.5 7.5C5.5 6.5 7 5.5 8.5 3.5C7.5 5 6 6 4.5 7.5Z"
                  className="text-brand-green-dark fill-current opacity-40"
                />
              </svg>
            </span>
          </span>
          
          ang
        </span>
      </div>
    </Link>
  );
}
