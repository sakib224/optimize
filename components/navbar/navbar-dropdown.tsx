"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import type { NavDropdown as NavDropdownType } from "@/lib/site-config";

export interface NavbarDropdownProps {
  item: NavDropdownType;
  className?: string;
  panelClassName?: string;
  itemClassName?: string;
}

export function NavbarDropdown({
  item,
  className = "",
  panelClassName = "",
  itemClassName = "",
}: NavbarDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="navbar-nav-item modern-nav-item nav-item-enhanced flex items-center gap-1"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.name}
        <svg
          className="w-4 h-4 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </button>
      {open && (
        <div
          className="absolute top-full left-0 pt-2 z-[9999]"
          style={{ marginTop: "4px" }}
        >
          <div
            className={`navbar-dropdown-panel dropdown-enhanced relative min-w-[220px] p-2 ${panelClassName}`}
          >
            {item.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`navbar-dropdown-item dropdown-item-enhanced block ${itemClassName}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
