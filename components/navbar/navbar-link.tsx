"use client";

import Link from "next/link";

export interface NavbarLinkProps {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}

export function NavbarLink({
  href,
  label,
  className = "",
  onClick,
}: NavbarLinkProps) {
  return (
    <Link
      href={href}
      className={`navbar-nav-item modern-nav-item nav-item-enhanced ${className}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}
