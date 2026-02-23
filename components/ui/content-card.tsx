import type { ReactNode } from "react";

export interface ContentCardProps {
  children: ReactNode;
  className?: string;
}

export function ContentCard({ children, className = "" }: ContentCardProps) {
  return (
    <div
      className={`relative rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[var(--border)] overflow-hidden group hover:border-[rgba(255,199,39,0.3)] transition-colors ${className}`}
    >
      {children}
    </div>
  );
}
