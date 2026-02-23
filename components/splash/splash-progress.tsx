"use client";

export interface SplashProgressProps {
  /** Progress 0–100 */
  progress: number;
  /** Opacity 0–1 for the block */
  opacity: number;
  /** Primary color for bar and text */
  primaryColor: string;
  /** Secondary color for gradient */
  secondaryColor: string;
  /** Optional status message (e.g. "Loading...", "Ready") */
  statusText?: string;
}

const DEFAULT_STATUSES: Record<number, string> = {
  0: "Initializing...",
  20: "Loading assets...",
  40: "Preparing...",
  60: "Almost there...",
  80: "Finalizing...",
  100: "Welcome!",
};

function getStatus(progress: number): string {
  if (progress >= 100) return DEFAULT_STATUSES[100];
  if (progress >= 80) return DEFAULT_STATUSES[80];
  if (progress >= 60) return DEFAULT_STATUSES[60];
  if (progress >= 40) return DEFAULT_STATUSES[40];
  if (progress >= 20) return DEFAULT_STATUSES[20];
  return DEFAULT_STATUSES[0];
}

export function SplashProgress({
  progress,
  opacity,
  primaryColor,
  secondaryColor,
  statusText,
}: SplashProgressProps) {
  const status = statusText ?? getStatus(progress);

  return (
    <div
      className="mt-12 w-80 max-w-[90vw] transition-opacity duration-1000"
      style={{ opacity }}
    >
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.1)",
          border: `1px solid ${hexToRgba(primaryColor, 0.3)}`,
        }}
      >
        <div
          className="h-full rounded-full transition-all duration-300 ease-out"
          style={{
            width: `${progress}%`,
            background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
            boxShadow: `0 0 15px ${hexToRgba(primaryColor, 0.5)}`,
          }}
        />
      </div>
      <div className="flex justify-between items-center mt-3">
        <span className="text-sm text-white/70 font-medium">{status}</span>
        <span
          className="text-lg font-bold tabular-nums"
          style={{
            color: primaryColor,
            textShadow: `0 0 10px ${hexToRgba(primaryColor, 0.5)}`,
          }}
        >
          {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}

function hexToRgba(hex: string, alpha: number): string {
  if (hex.startsWith("rgba") || hex.startsWith("rgb")) return hex;
  const m = hex.replace(/^#/, "").match(/^(..)(..)(..)$/);
  if (!m) return hex;
  const [r, g, b] = m.slice(1, 4).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
}
