"use client";

import React, { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════════════════
   UMKM / POI Data — titik-titik yang akan muncul di peta
   ═══════════════════════════════════════════════ */
const poiData = [
  { id: 1, x: 285, y: 165, label: "UMKM Anyam 1", delay: "0.6s" },
  { id: 2, x: 410, y: 120, label: "UMKM Tali Lashing", delay: "1.0s" },
  { id: 3, x: 520, y: 200, label: "Pengrajin Tas", delay: "1.4s" },
  { id: 4, x: 350, y: 310, label: "Balai RW 04", delay: "1.8s" },
  { id: 5, x: 190, y: 280, label: "Pojok Baca", delay: "2.2s" },
  { id: 6, x: 460, y: 340, label: "UMKM Keranjang", delay: "2.6s" },
];

export default function JangliMap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="w-full flex items-center justify-center py-8">
      <div className="w-full max-w-[700px] relative">
        <svg
          viewBox="0 0 700 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          {/* ── Grid lines (subtle background texture) ── */}
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.3"
                className="text-brand-charcoal/[0.06]"
              />
            </pattern>

            {/* Glow filter for pulsing dots */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect width="700" height="450" fill="url(#grid)" />

          {/* ════════════════════════════════════
              KELURAHAN JANGLI — Boundary Outline
              (Stylized circuit-like path)
              ════════════════════════════════════ */}
          <path
            d="
              M 150 80
              C 170 60, 220 45, 280 50
              C 340 55, 380 40, 430 55
              C 480 70, 530 60, 560 90
              C 590 120, 600 160, 590 210
              C 580 260, 570 290, 540 330
              C 510 370, 460 390, 400 385
              C 340 380, 300 370, 260 350
              C 220 330, 180 310, 155 270
              C 130 230, 120 190, 125 150
              C 130 110, 140 90, 150 80
              Z
            "
            className={`
              stroke-brand-charcoal
              transition-all duration-[3s] ease-in-out
              ${isVisible ? "map-path-visible" : "map-path-hidden"}
            `}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            style={{
              strokeDasharray: 1600,
              strokeDashoffset: isVisible ? 0 : 1600,
            }}
          />

          {/* Inner road / detail path */}
          <path
            d="
              M 200 140
              C 240 120, 310 110, 370 115
              C 430 120, 490 130, 520 170
              C 550 210, 540 270, 500 310
              C 460 350, 390 350, 330 340
              C 270 330, 220 300, 195 250
              C 170 200, 175 160, 200 140
              Z
            "
            className="stroke-brand-charcoal/20"
            strokeWidth="1"
            strokeDasharray="6 4"
            fill="none"
            style={{
              strokeDasharray: "6 4",
              opacity: isVisible ? 1 : 0,
              transition: "opacity 1.5s ease-in-out 1.5s",
            }}
          />

          {/* ── Area label ── */}
          <text
            x="350"
            y="230"
            textAnchor="middle"
            className="fill-brand-charcoal/10"
            style={{
              fontSize: "48px",
              fontWeight: 600,
              letterSpacing: "0.15em",
              opacity: isVisible ? 1 : 0,
              transition: "opacity 2s ease-in-out 2s",
            }}
          >
            JANGLI
          </text>

          {/* RW labels */}
          {[
            { x: 260, y: 150, label: "RW 01" },
            { x: 460, y: 140, label: "RW 02" },
            { x: 520, y: 260, label: "RW 03" },
            { x: 350, y: 350, label: "RW 04" },
            { x: 190, y: 250, label: "RW 05" },
          ].map((rw, i) => (
            <text
              key={i}
              x={rw.x}
              y={rw.y}
              textAnchor="middle"
              className="fill-brand-charcoal/25"
              style={{
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                opacity: isVisible ? 1 : 0,
                transition: `opacity 1s ease-in-out ${1.8 + i * 0.3}s`,
              }}
            >
              {rw.label}
            </text>
          ))}

          {/* ════════════════════════════════════
              UMKM POI Dots — Pulsing Red Markers
              ════════════════════════════════════ */}
          {poiData.map((poi) => (
            <g
              key={poi.id}
              style={{
                opacity: isVisible ? 1 : 0,
                transition: `opacity 0.6s ease-in-out ${poi.delay}`,
              }}
            >
              {/* Outer pulse ring */}
              <circle
                cx={poi.x}
                cy={poi.y}
                r="12"
                fill="none"
                stroke="#EF4444"
                strokeWidth="1"
                opacity="0.4"
                className={isVisible ? "animate-map-ping" : ""}
                style={{ animationDelay: poi.delay }}
              />

              {/* Middle glow */}
              <circle
                cx={poi.x}
                cy={poi.y}
                r="6"
                fill="#EF4444"
                opacity="0.15"
                filter="url(#glow)"
              />

              {/* Center dot */}
              <circle cx={poi.x} cy={poi.y} r="4" fill="#EF4444" />
              <circle cx={poi.x} cy={poi.y} r="1.5" fill="white" />

              {/* Label */}
              <text
                x={poi.x}
                y={poi.y - 14}
                textAnchor="middle"
                className="fill-brand-charcoal/70"
                style={{ fontSize: "9px", fontWeight: 600 }}
              >
                {poi.label}
              </text>
            </g>
          ))}

          {/* ── Legend ── */}
          <g
            style={{
              opacity: isVisible ? 1 : 0,
              transition: "opacity 1s ease-in-out 3s",
            }}
          >
            <circle cx="40" cy="415" r="4" fill="#EF4444" />
            <text
              x="52"
              y="418"
              className="fill-brand-charcoal/50"
              style={{ fontSize: "10px", fontWeight: 500 }}
            >
              Lokasi UMKM / Pengrajin
            </text>

            <line
              x1="200"
              y1="415"
              x2="220"
              y2="415"
              className="stroke-brand-charcoal/20"
              strokeWidth="1"
              strokeDasharray="6 4"
            />
            <text
              x="228"
              y="418"
              className="fill-brand-charcoal/50"
              style={{ fontSize: "10px", fontWeight: 500 }}
            >
              Jalan Utama
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
