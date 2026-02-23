"use client";

import Link from "next/link";
import type { NavRouteItem, NavActions } from "@/lib/site-config";
import { isDropdown } from "@/lib/site-config";

export interface NavbarMobileProps {
  routes: NavRouteItem[];
  actions: NavActions;
  open: boolean;
  onClose: () => void;
  className?: string;
}

export function NavbarMobile({
  routes,
  actions,
  open,
  onClose,
  className = "",
}: NavbarMobileProps) {
  if (!open) return null;

  return (
    <div
      className={`navbar-mobile-panel lg:hidden mt-3 p-4 ${className}`}
      role="dialog"
      aria-label="Mobile menu"
    >
      <div className="flex flex-col gap-1">
        {routes.map((item) =>
          isDropdown(item) ? (
            <div key={item.name} className="py-2">
              <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--muted-foreground)]">
                {item.name}
              </div>
              {item.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="navbar-dropdown-item dropdown-item-enhanced block"
                  onClick={onClose}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              className="navbar-dropdown-item block"
              onClick={onClose}
            >
              {item.name}
            </Link>
          )
        )}
        <div className="border-t border-white/10 my-2" />
        <Link
          href={actions.loginHref}
          className="navbar-dropdown-item block"
          onClick={onClose}
        >
          {actions.loginLabel}
        </Link>
        <Link
          href={actions.ctaHref}
          className="navbar-cta mt-2 block text-center"
          onClick={onClose}
        >
          {actions.ctaLabel}
        </Link>
      </div>
    </div>
  );
}
