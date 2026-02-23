"use client";

import type { ReactNode } from "react";

export interface SplashBackgroundProps {
  /** Whether background and particles are visible */
  visible: boolean;
  /** Primary accent color (hex or CSS value) */
  primaryColor: string;
  /** Secondary accent color */
  secondaryColor: string;
  /** Number of floating particles */
  particleCount?: number;
  /** Optional content (e.g. gradient overlay) */
  children?: ReactNode;
}

export function SplashBackground({
  visible,
  primaryColor,
  secondaryColor,
  particleCount = 16,
  children,
}: SplashBackgroundProps) {
  const gradientStyle = {
    background: `
      radial-gradient(ellipse at center,
        rgba(15, 23, 42, 0.98) 0%,
        rgba(30, 41, 59, 0.99) 50%,
        rgba(51, 65, 85, 1) 100%
      ),
      linear-gradient(45deg,
        ${hexToRgba(primaryColor, 0.08)} 0%,
        transparent 30%,
        ${hexToRgba(secondaryColor, 0.08)} 70%,
        ${hexToRgba(primaryColor, 0.05)} 100%
      )
    `,
  };

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          ...gradientStyle,
          opacity: visible ? 1 : 0,
          backdropFilter: "blur(20px)",
        }}
      />
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: particleCount }, (_, i) => (
          <div
            key={i}
            className={`splash-particle absolute w-2 h-2 rounded-full transition-opacity duration-1000 ${
              visible ? "opacity-50" : "opacity-0"
            }`}
            style={{
              background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${(i % 5) * 0.3}s`,
              boxShadow: `0 0 10px ${hexToRgba(primaryColor, 0.5)}`,
            }}
          />
        ))}
      </div>
      {children}
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
