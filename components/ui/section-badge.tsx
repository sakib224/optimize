import type { ReactNode } from "react";

export interface SectionBadgeProps {
  children: ReactNode;
  className?: string;
}

export function SectionBadge({ children, className = "" }: SectionBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border border-[rgba(255,199,39,0.3)] bg-gradient-to-r from-[rgba(255,199,39,0.2)] to-[rgba(255,184,0,0.2)] text-[var(--primary)] ${className}`}
    >
      {children}
    </span>
  );
}
