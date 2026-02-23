"use client";

import Image from "next/image";

export interface SplashLogoProps {
  /** Logo image src (URL or static import) */
  logoSrc: string;
  /** Alt text for the logo */
  alt: string;
  /** Scale factor for logo container (0–1+), e.g. from timeline */
  scale: number;
  /** Scale factor for the ring (0–1) */
  ringScale: number;
  /** Primary accent for ring and glow */
  primaryColor: string;
  /** Secondary accent */
  secondaryColor: string;
  /** Logo width in pixels */
  width?: number;
  /** Logo height in pixels */
  height?: number;
}

export function SplashLogo({
  logoSrc,
  alt,
  scale,
  ringScale,
  primaryColor,
  secondaryColor,
  width = 144,
  height = 144,
}: SplashLogoProps) {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div
        className="absolute w-72 h-72 rounded-full border-2 transition-all duration-1000 ease-out splash-ring"
        style={{
          borderColor: primaryColor,
          borderImage: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor}, ${primaryColor}) 1`,
          transform: `scale(${ringScale})`,
          boxShadow: `0 0 30px ${hexToRgba(primaryColor, 0.4)}`,
          animation: ringScale >= 1 ? "splash-ring-pulse 4s ease-in-out infinite" : "none",
        }}
      />
      <div
        className="relative w-72 h-72 rounded-full flex items-center justify-center transition-all duration-700 ease-out"
        style={{
          background: `radial-gradient(circle,
            rgba(255,255,255,0.12) 0%,
            ${hexToRgba(primaryColor, 0.1)} 40%,
            ${hexToRgba(secondaryColor, 0.08)} 100%
          )`,
          border: `2px solid ${hexToRgba(primaryColor, 0.4)}`,
          transform: `scale(${scale})`,
          boxShadow: `0 0 40px ${hexToRgba(primaryColor, 0.3)}`,
          animation: scale >= 1 ? "splash-breathe 3s ease-in-out infinite" : "none",
        }}
      >
        <Image
          src={logoSrc}
          alt={alt}
          width={width}
          height={height}
          className="object-contain relative z-10"
          style={{
            filter: `drop-shadow(0 4px 20px ${hexToRgba(primaryColor, 0.5)})`,
          }}
        />
      </div>
    </div>
  );
}

function hexToRgba(hex: string, alpha: number): string {
  if (hex.startsWith("rgba") || hex.startsWith("rgb")) return hex;
  const m = hex.replace(/^#/, "").match(/^(..)(..)(..)$/);
  if (!m) return hex;
  const r = parseInt(m[1], 16);
  const g = parseInt(m[2], 16);
  const b = parseInt(m[3], 16);
  return `rgba(${r},${g},${b},${alpha})`;
}
