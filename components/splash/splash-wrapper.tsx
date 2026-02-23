"use client";

import { useState, useCallback } from "react";
import { SplashScreen } from "./splash-screen";

export interface SplashWrapperProps {
  /** App content shown after splash finishes */
  children: React.ReactNode;
}

/**
 * Client wrapper: shows full-screen splash first, then children when onFinish fires.
 * Same pattern as app.jsx (loading ? SplashScreen : main layout).
 */
export function SplashWrapper({ children }: SplashWrapperProps) {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = useCallback(() => {
    setShowSplash(false);
  }, []);

  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  return <>{children}</>;
}
