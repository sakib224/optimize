"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavDropdown as NavDropdownType } from "@/lib/site-config";

export interface NavDropdownProps {
  item: NavDropdownType;
}

export function NavDropdown({ item }: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="navbar-nav-item flex items-center gap-1"
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
          <div className="navbar-dropdown-panel relative">
            {item.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="navbar-dropdown-item"
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
