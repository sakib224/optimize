"use client";

import Link from "next/link";
import type { NavBrand } from "@/lib/site-config";

export interface DashboardNavbarProps {
  brand: NavBrand;
  /** Optional: callback when menu toggle is clicked (e.g. toggle sidebar) */
  onMenuToggle?: () => void;
  /** Optional: right-side content (e.g. notifications, user menu) */
  rightSlot?: React.ReactNode;
  /** Optional: show sidebar menu toggle button */
  showMenuToggle?: boolean;
  className?: string;
}

export function DashboardNavbar({
  brand,
  onMenuToggle,
  rightSlot,
  showMenuToggle = true,
  className = "",
}: DashboardNavbarProps) {
  return (
    <header
      className={`sticky top-0 z-[9998] flex h-[70px] items-center justify-between gap-4 px-4 md:px-6 border-b border-white/10 bg-[#0f172a]/95 backdrop-blur-md ${className}`}
      role="banner"
    >
      <div className="flex items-center gap-4">
        {showMenuToggle && onMenuToggle && (
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-800/80 text-white transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            onClick={onMenuToggle}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>
        )}
        <Link
          href="/"
          className="flex items-center gap-3 no-underline text-white"
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white"
            style={{
              background: "linear-gradient(135deg, #FFB000 0%, #FF7A00 100%)",
            }}
          >
            {brand.brandName.charAt(0)}
          </span>
          <span
            className="hidden sm:inline font-extrabold"
            style={{
              background: "linear-gradient(135deg, #FFB000 0%, #FF7A00 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {brand.brandName}
          </span>
        </Link>
      </div>
      {rightSlot && <div className="flex items-center gap-2">{rightSlot}</div>}
    </header>
  );
}
