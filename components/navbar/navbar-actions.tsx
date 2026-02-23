"use client";

import Link from "next/link";
import type { NavActions } from "@/lib/site-config";

export interface NavbarActionsProps {
  actions: NavActions;
  className?: string;
}

export function NavbarActions({ actions, className = "" }: NavbarActionsProps) {
  return (
    <div className={`hidden lg:flex items-center gap-2 ml-auto ${className}`}>
      <Link href={actions.loginHref} className="navbar-login">
        {actions.loginLabel}
      </Link>
      <Link href={actions.ctaHref} className="navbar-cta">
        {actions.ctaLabel}
      </Link>
    </div>
  );
}
