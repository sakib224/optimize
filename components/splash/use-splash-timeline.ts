"use client";

import { useState, useEffect, useCallback } from "react";

export interface SplashTimelineState {
  isVisible: boolean;
  logoScale: number;
  textOpacity: number;
  ringScale: number;
  particlesVisible: boolean;
  progress: number;
  splashFinished: boolean;
}

const PROGRESS_INTERVAL_MS = 50;
const PROGRESS_INCREMENT = 4;
const HOLD_AT_100_MS = 800;
const FADEOUT_BEFORE_FINISH_MS = 500;

/**
 * Runs the splash animation timeline: show content, animate progress to 100%,
 * then call onFinish after a short hold and fade.
 */
export function useSplashTimeline(onFinish: () => void): SplashTimelineState {
  const [isVisible, setIsVisible] = useState(false);
  const [logoScale, setLogoScale] = useState(0.3);
  const [textOpacity, setTextOpacity] = useState(0);
  const [ringScale, setRingScale] = useState(0.6);
  const [particlesVisible, setParticlesVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [splashFinished, setSplashFinished] = useState(false);

  const finishCb = useCallback(onFinish, [onFinish]);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    timeouts.push(
      setTimeout(() => {
        setIsVisible(true);
        setParticlesVisible(true);
      }, 100)
    );
    timeouts.push(setTimeout(() => setLogoScale(1.1), 300));
    timeouts.push(setTimeout(() => setLogoScale(1), 600));
    timeouts.push(setTimeout(() => setRingScale(1), 500));
    timeouts.push(setTimeout(() => setTextOpacity(1), 800));

    timeouts.push(
      setTimeout(() => {
        const id = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(id);
              setTimeout(() => {
                setSplashFinished(true);
                setTimeout(() => finishCb(), FADEOUT_BEFORE_FINISH_MS);
              }, HOLD_AT_100_MS);
              return 100;
            }
            return Math.min(prev + PROGRESS_INCREMENT, 100);
          });
        }, PROGRESS_INTERVAL_MS);
        return () => clearInterval(id);
      }, 500)
    );

    return () => timeouts.forEach((t) => clearTimeout(t));
  }, [finishCb]);

  return {
    isVisible,
    logoScale,
    textOpacity,
    ringScale,
    particlesVisible,
    progress,
    splashFinished,
  };
}
