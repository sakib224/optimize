"use client";

import { useState, useEffect, useCallback } from "react";

const LOGO_SRC = "/images/optimizify-full-gold-logo.png";

export interface SplashScreenProps {
  onFinish?: () => void;
}

export function SplashScreen({ onFinish = () => {} }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [logoScale, setLogoScale] = useState(0.3);
  const [textOpacity, setTextOpacity] = useState(0);
  const [ringScale, setRingScale] = useState(0.6);
  const [particlesVisible, setParticlesVisible] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [glowIntensity, setGlowIntensity] = useState(0.2);
  const [interactiveMode, setInteractiveMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [logoRotation, setLogoRotation] = useState(0);
  const [splashFinished, setSplashFinished] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (interactiveMode) {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    }
  }, [interactiveMode]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveMode) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const newRipple = { id: Date.now(), x, y };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
      }, 1000);
    }
  }, [interactiveMode]);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    timeouts.push(setTimeout(() => {
      setIsVisible(true);
      setParticlesVisible(true);
    }, 100));
    timeouts.push(setTimeout(() => setLogoScale(1.1), 300));
    timeouts.push(setTimeout(() => setLogoScale(1), 600));
    timeouts.push(setTimeout(() => setRingScale(1), 500));
    timeouts.push(setTimeout(() => setTextOpacity(1), 800));

    timeouts.push(
      setTimeout(() => {
        const progressInterval = setInterval(() => {
          setLoadingProgress((prev) => {
            if (prev >= 100) {
              clearInterval(progressInterval);
              setTimeout(() => {
                setSplashFinished(true);
                setTimeout(() => onFinish(), 500);
              }, 800);
              return 100;
            }
            return Math.min(prev + 4, 100);
          });
        }, 50);
      }, 500)
    );

    timeouts.push(
      setTimeout(() => {
        setInteractiveMode(true);
        const rotationInterval = setInterval(() => {
          setLogoRotation((prev) => (prev + 1) % 360);
        }, 50);
        return () => clearInterval(rotationInterval);
      }, 1200)
    );

    timeouts.push(
      setTimeout(() => {
        const glowInterval = setInterval(() => {
          setGlowIntensity((prev) => (prev === 0.2 ? 0.9 : 0.2));
        }, 2000);
        return () => clearInterval(glowInterval);
      }, 1400)
    );

    return () => timeouts.forEach((t) => clearTimeout(t));
  }, [onFinish]);

  useEffect(() => {
    if (!interactiveMode) return;
    const fn = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, [interactiveMode]);

  return (
    <div
      className={`splash-container fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 overflow-hidden ${
        isVisible && !splashFinished ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      style={{
        background: `
          radial-gradient(ellipse at center, 
            rgba(15, 23, 42, 0.98) 0%, 
            rgba(30, 41, 59, 0.99) 50%, 
            rgba(51, 65, 85, 1) 100%
          ),
          linear-gradient(45deg, 
            rgba(255, 176, 0, 0.08) 0%, 
            transparent 30%, 
            rgba(255, 122, 0, 0.08) 70%,
            rgba(255, 176, 0, 0.05) 100%
          )
        `,
        backdropFilter: "blur(20px)",
        animation: isVisible ? "backgroundShift 12s ease-in-out infinite, backgroundPulse 6s ease-in-out infinite" : "none",
        backgroundSize: "400% 400%",
        cursor: interactiveMode ? "pointer" : "default",
        transform: interactiveMode ? `translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px, 0)` : "none",
        transition: "transform 0.3s ease-out",
      }}
    >
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: ripple.x - 50,
            top: ripple.y - 50,
            width: 100,
            height: 100,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255, 176, 0, 0.6) 0%, rgba(255, 122, 0, 0.3) 30%, transparent 70%)",
            animation: "rippleExpand 1s ease-out forwards",
            transform: "scale(0)",
          }}
        />
      ))}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 0.1}% ${50 + mousePosition.y * 0.1}%, 
            rgba(255, 176, 0, 0.1) 0%, 
            transparent 50%
          )`,
          transition: "background 0.3s ease-out",
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className={`splash-particle absolute w-2 h-2 rounded-full transition-all duration-1000 ${
              particlesVisible ? "opacity-70" : "opacity-0"
            }`}
            style={{
              background: "linear-gradient(135deg, #FFB000, #FF7A00)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              boxShadow: "0 0 15px rgba(255, 176, 0, 0.8)",
              transform: interactiveMode
                ? `translate3d(${mousePosition.x * (0.1 + Math.random() * 0.2)}px, ${mousePosition.y * (0.1 + Math.random() * 0.2)}px, 0)`
                : "none",
              transition: "transform 0.6s ease-out",
            }}
          />
        ))}
        <div
          className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full opacity-40"
          style={{
            background: "radial-gradient(circle, #FFB000 0%, rgba(255, 176, 0, 0.4) 50%, transparent 70%)",
            animation: particlesVisible ? "float 6s ease-in-out infinite, pulse-gold 3s ease-in-out infinite" : "none",
            animationDelay: "1s",
            transform: interactiveMode
              ? `translate3d(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px, 0) scale(${1 + Math.abs(mousePosition.x + mousePosition.y) * 0.01})`
              : "none",
            transition: "transform 0.4s ease-out",
            filter: `blur(${Math.abs(mousePosition.x + mousePosition.y) * 0.05}px)`,
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full opacity-35"
          style={{
            background: "radial-gradient(circle, #FF7A00 0%, rgba(255, 122, 0, 0.4) 50%, transparent 70%)",
            animation: particlesVisible ? "float 4s ease-in-out infinite reverse, pulse-gold 2.5s ease-in-out infinite" : "none",
            animationDelay: "0.5s",
            transform: interactiveMode
              ? `translate3d(${-mousePosition.x * 0.2}px, ${-mousePosition.y * 0.2}px, 0) scale(${1 + Math.abs(mousePosition.x + mousePosition.y) * 0.008})`
              : "none",
            transition: "transform 0.5s ease-out",
          }}
        />
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={`orbit-${i}`}
            className="absolute w-1 h-1 rounded-full opacity-50"
            style={{
              background: "linear-gradient(135deg, #FFB000, #FF7A00)",
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) rotate(${i * 45 + (interactiveMode ? logoRotation * 0.5 : 0)}deg) translateX(${150 + Math.sin(logoRotation * 0.1) * 20}px)`,
              animation: particlesVisible ? `orbit-${i} ${8 + i}s linear infinite` : "none",
              boxShadow: "0 0 8px rgba(255, 176, 0, 0.6)",
              transition: "transform 0.1s ease-out",
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center justify-center p-8">
        <div
          className={`splash-ring absolute w-80 h-80 rounded-full border-2 transition-all duration-1000 ease-out ${
            ringScale === 1 ? "rotate-0" : "-rotate-12"
          }`}
          style={{
            borderColor: "#FFB000",
            borderImage: "linear-gradient(135deg, #FFB000, #FF7A00, #FFB000) 1",
            transform: `scale(${ringScale}) rotate(${ringScale === 1 ? "0deg" : "-12deg"})`,
            boxShadow: `0 0 ${glowIntensity * 60}px rgba(255, 176, 0, ${glowIntensity}), inset 0 0 20px rgba(255, 176, 0, 0.1)`,
            animation: ringScale === 1 ? "ringPulse 4s ease-in-out infinite" : "none",
          }}
        />
        <div
          className="splash-secondary-ring absolute w-96 h-96 rounded-full border border-opacity-30"
          style={{
            borderColor: "#FF7A00",
            transform: `scale(${ringScale * 0.9})`,
            animation: ringScale === 1 ? "rotate-360 25s linear infinite reverse" : "none",
            opacity: ringScale === 1 ? 0.4 : 0,
            transition: "opacity 1s ease-in-out",
            boxShadow: "0 0 30px rgba(255, 122, 0, 0.2)",
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full border border-opacity-20"
          style={{
            borderColor: "#FFB000",
            transform: `scale(${ringScale * 1.1})`,
            animation: ringScale === 1 ? "rotate-360 30s linear infinite" : "none",
            opacity: ringScale === 1 ? 0.2 : 0,
            transition: "opacity 1.5s ease-in-out",
            borderStyle: "dashed",
          }}
        />

        <div
          className="splash-logo-container relative w-72 h-72 rounded-full flex items-center justify-center transition-all duration-700 ease-out cursor-pointer"
          style={{
            background: `
              radial-gradient(circle, 
                rgba(255, 255, 255, 0.2) 0%, 
                rgba(255, 176, 0, 0.12) 30%,
                rgba(255, 122, 0, 0.08) 60%, 
                rgba(255, 122, 0, 0.15) 100%
              )
            `,
            backdropFilter: `blur(${20 + Math.abs(mousePosition.x + mousePosition.y) * 0.1}px)`,
            border: `2px solid rgba(255, 176, 0, ${0.4 + glowIntensity * 0.3})`,
            transform: `scale(${logoScale}) rotate(${interactiveMode ? logoRotation * 0.2 : 0}deg) translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px, 0)`,
            boxShadow: `
              0 30px 60px -15px rgba(0, 0, 0, 0.6),
              0 0 ${glowIntensity * 80}px rgba(255, 176, 0, ${glowIntensity}),
              0 0 ${glowIntensity * 120}px rgba(255, 122, 0, ${glowIntensity * 0.6}),
              inset 0 2px 0 rgba(255, 255, 255, 0.3),
              inset 0 -2px 0 rgba(0, 0, 0, 0.2)
            `,
            animation: logoScale === 1 ? "breathe 3s ease-in-out infinite, logoFloat 6s ease-in-out infinite" : "none",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          onMouseEnter={() => interactiveMode && setGlowIntensity(0.9)}
          onMouseLeave={() => interactiveMode && setGlowIntensity(0.4)}
        >
          <div
            className="absolute inset-3 rounded-full"
            style={{
              background: `radial-gradient(circle at ${50 + mousePosition.x * 0.2}% ${50 + mousePosition.y * 0.2}%, 
                rgba(255, 176, 0, ${0.15 + glowIntensity * 0.1}) 0%, 
                rgba(255, 122, 0, ${0.08 + glowIntensity * 0.05}) 40%, 
                transparent 70%
              )`,
              animation: logoScale === 1 ? "pulse-gold 2s ease-in-out infinite, rotate-slow 20s linear infinite" : "none",
              transform: `rotate(${interactiveMode ? logoRotation * -0.1 : 0}deg)`,
            }}
          />
          <div
            className="absolute inset-6 rounded-full"
            style={{
              background: `conic-gradient(from ${logoRotation}deg, 
                rgba(255, 176, 0, 0.2) 0deg, 
                transparent 60deg, 
                rgba(255, 122, 0, 0.15) 120deg,
                transparent 180deg,
                rgba(255, 176, 0, 0.1) 240deg,
                transparent 300deg
              )`,
              animation: interactiveMode ? "rotate-360 8s linear infinite" : "none",
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_SRC}
            alt="Optimizify Logo"
            className="splash-logo w-36 h-36 object-contain transition-all duration-500 relative z-10"
            style={{
              filter: `
                drop-shadow(0 6px 25px rgba(255, 176, 0, ${glowIntensity}))
                drop-shadow(0 0 15px rgba(255, 176, 0, 0.6))
                drop-shadow(0 0 30px rgba(255, 122, 0, ${glowIntensity * 0.4}))
              `,
              transform: `rotate(${interactiveMode ? logoRotation * 0.05 : 0}deg) scale(${1 + Math.abs(mousePosition.x + mousePosition.y) * 0.002})`,
              transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
          <div
            className="absolute inset-0 rounded-full pointer-events-none opacity-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x + 50}% ${mousePosition.y + 50}%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
              opacity: interactiveMode ? Math.abs(mousePosition.x + mousePosition.y) * 0.005 : 0,
            }}
          />
        </div>

        <div
          className="mt-12 text-center transition-all duration-1000"
          style={{
            opacity: textOpacity,
            transform: interactiveMode ? `translate3d(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.1}px, 0)` : "none",
            transition: "transform 0.4s ease-out",
          }}
        >
          <h1
            className="splash-title text-5xl md:text-6xl lg:text-7xl font-black mb-4 select-none"
            style={{
              background: `
                linear-gradient(135deg, 
                  #FFB000 0%, 
                  #FF7A00 25%, 
                  #FFD700 40%, 
                  #FF8C00 60%, 
                  #FFB000 80%, 
                  #FF7A00 100%
                )
              `,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "400% 100%",
              animation:
                textOpacity === 1
                  ? "shimmer 3s ease-in-out infinite, textGlow 4s ease-in-out infinite, textFloat 6s ease-in-out infinite"
                  : "none",
              letterSpacing: "0.02em",
              textShadow: `
                0 0 20px rgba(255, 176, 0, ${glowIntensity * 0.8}),
                0 0 40px rgba(255, 122, 0, ${glowIntensity * 0.4}),
                0 0 60px rgba(255, 215, 0, ${glowIntensity * 0.2})
              `,
              cursor: interactiveMode ? "pointer" : "default",
              transform: interactiveMode ? `scale(${1 + Math.abs(mousePosition.x + mousePosition.y) * 0.001})` : "scale(1)",
              transition: "transform 0.3s ease-out",
            }}
          >
            Optimizify
          </h1>
          <div className="space-y-3">
            <p className="text-xl md:text-2xl text-white/95 font-semibold tracking-wide">
              <span
                className="inline-block animate-pulse"
                style={{
                  color: "#FFB000",
                  filter: "drop-shadow(0 0 8px rgba(255, 176, 0, 0.6))",
                  fontSize: "1.2em",
                }}
              >
                ✨
              </span>{" "}
              <span className="bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent">
                Optimize • Grow • Succeed
              </span>{" "}
              <span
                className="inline-block animate-pulse"
                style={{
                  color: "#FF7A00",
                  filter: "drop-shadow(0 0 8px rgba(255, 122, 0, 0.6))",
                  fontSize: "1.2em",
                  animationDelay: "0.5s",
                }}
              >
                ✨
              </span>
            </p>
            <p className="text-base text-white/70 font-medium">
              <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                Powered by AI
              </span>
              <span className="mx-2 text-white/50">•</span>
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Built for Creators
              </span>
            </p>
            {interactiveMode && (
              <p className="text-sm text-white/50 font-light animate-fadeIn mt-4">
                <span className="inline-block animate-bounce">👆</span> Click anywhere to create ripples
              </p>
            )}
          </div>
        </div>

        <div
          className="splash-progress mt-16 w-96 transition-all duration-1000"
          style={{
            opacity: textOpacity,
            transform: interactiveMode ? `translate3d(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.05}px, 0)` : "none",
            transition: "transform 0.5s ease-out",
          }}
        >
          <div className="relative">
            <div
              className="h-3 rounded-full overflow-hidden relative"
              style={{
                background: `
                  linear-gradient(90deg, 
                    rgba(255, 255, 255, 0.08) 0%, 
                    rgba(255, 176, 0, 0.15) 50%, 
                    rgba(255, 255, 255, 0.08) 100%
                  )
                `,
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 176, 0, 0.3)",
                boxShadow: `
                  0 4px 20px rgba(0, 0, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                `,
              }}
            >
              <div
                className="h-full rounded-full transition-all duration-500 ease-out relative overflow-hidden"
                style={{
                  width: `${loadingProgress}%`,
                  background: `
                    linear-gradient(90deg, 
                      #FFB000 0%, 
                      #FF7A00 20%, 
                      #FFD700 40%, 
                      #FF8C00 60%, 
                      #FFB000 80%, 
                      #FF7A00 100%
                    )
                  `,
                  backgroundSize: "300% 100%",
                  animation:
                    loadingProgress > 0
                      ? "shimmer 1.5s ease-in-out infinite, progressGlow 3s ease-in-out infinite, progressPulse 2s ease-in-out infinite"
                      : "none",
                  boxShadow: `
                    0 0 20px rgba(255, 176, 0, ${glowIntensity * 0.8}),
                    0 0 40px rgba(255, 122, 0, ${glowIntensity * 0.4}),
                    inset 0 1px 0 rgba(255, 255, 255, 0.4)
                  `,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)",
                    animation: "shimmer 1.2s ease-in-out infinite",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(45deg, transparent 30%, rgba(255, 215, 0, 0.3) 50%, transparent 70%)",
                    animation: "shimmer 2s ease-in-out infinite reverse",
                    animationDelay: "0.5s",
                  }}
                />
              </div>
              <div
                className="absolute top-0 h-full w-2 rounded-full transition-all duration-500"
                style={{
                  left: `${Math.max(0, loadingProgress - 1)}%`,
                  background: "radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, transparent 70%)",
                  animation: loadingProgress > 0 && loadingProgress < 100 ? "spark 0.5s ease-in-out infinite" : "none",
                }}
              />
            </div>
            <div className="flex justify-between items-center mt-6">
              <div className="text-left">
                <span className="text-base text-white/80 font-semibold block">
                  {loadingProgress < 20
                    ? "Initializing Systems..."
                    : loadingProgress < 40
                      ? "Loading Core Assets..."
                      : loadingProgress < 60
                        ? "Preparing Interface..."
                        : loadingProgress < 80
                          ? "Optimizing Performance..."
                          : loadingProgress < 95
                            ? "Finalizing Setup..."
                            : loadingProgress < 100
                              ? "Almost Ready!"
                              : "Welcome to Optimizify!"}
                </span>
                <span className="text-sm text-white/60 font-normal">
                  {interactiveMode ? "Interactive mode enabled" : "Setting up your dashboard..."}
                </span>
              </div>
              <div className="text-right">
                <span
                  className="text-2xl font-black block"
                  style={{
                    background: "linear-gradient(135deg, #FFB000, #FF7A00, #FFD700)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    backgroundSize: "200% 100%",
                    animation: "shimmer 2s ease-in-out infinite",
                    filter: `drop-shadow(0 0 10px rgba(255, 176, 0, ${glowIntensity * 0.6}))`,
                  }}
                >
                  {loadingProgress}%
                </span>
                <span className="text-xs text-white/50 font-light">{100 - loadingProgress}% remaining</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-10 flex justify-center items-center space-x-4 transition-all duration-1000"
          style={{
            opacity: textOpacity,
            transform: interactiveMode ? `translate3d(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.03}px, 0)` : "none",
            transition: "transform 0.6s ease-out",
          }}
        >
          <div className="flex items-center space-x-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative"
                style={{
                  transform: interactiveMode ? `scale(${1 + Math.sin(((logoRotation + i * 30) * Math.PI) / 180) * 0.2})` : "scale(1)",
                  transition: "transform 0.3s ease-out",
                }}
              >
                <div
                  className="w-4 h-4 rounded-full relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #FFB000 0%, #FF7A00 50%, #FFD700 100%)",
                    animation: `pulse-gold ${1.5 + i * 0.1}s ease-in-out infinite, float ${3 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`,
                    boxShadow: `
                      0 0 20px rgba(255, 176, 0, ${0.6 + glowIntensity * 0.3}),
                      0 0 40px rgba(255, 122, 0, ${0.3 + glowIntensity * 0.2}),
                      inset 0 1px 0 rgba(255, 255, 255, 0.4)
                    `,
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, transparent 60%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `conic-gradient(from ${logoRotation + i * 45}deg, transparent 0deg, rgba(255, 255, 255, 0.4) 60deg, transparent 120deg)`,
                      animation: interactiveMode ? "rotate-360 3s linear infinite" : "none",
                    }}
                  />
                </div>
                {interactiveMode && (
                  <div
                    className="absolute w-1 h-1 rounded-full"
                    style={{
                      background: "rgba(255, 215, 0, 0.8)",
                      transform: `translate(-50%, -50%) rotate(${logoRotation * 2 + i * 60}deg) translateX(20px)`,
                      left: "50%",
                      top: "50%",
                      boxShadow: "0 0 6px rgba(255, 215, 0, 0.8)",
                      animation: "pulse-gold 1s ease-in-out infinite",
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
          {interactiveMode && (
            <div className="ml-6 flex items-center space-x-2 animate-fadeIn">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{
                  background: loadingProgress === 100 ? "#4CAF50" : "#FFB000",
                  boxShadow: `0 0 10px ${loadingProgress === 100 ? "rgba(76, 175, 80, 0.8)" : "rgba(255, 176, 0, 0.8)"}`,
                }}
              />
              <span className="text-xs text-white/60 font-medium">{loadingProgress === 100 ? "Ready" : "Loading"}</span>
            </div>
          )}
        </div>
      </div>

      <div className="absolute top-8 left-8">
        <div
          className="w-24 h-24 rounded-full opacity-20 cursor-pointer transition-all duration-300 hover:opacity-40"
          style={{
            background: "radial-gradient(circle, #FFB000 0%, rgba(255, 176, 0, 0.4) 40%, transparent 70%)",
            animation: "float 6s ease-in-out infinite, pulse-gold 4s ease-in-out infinite",
            boxShadow: "0 0 40px rgba(255, 176, 0, 0.4)",
            transform: interactiveMode
              ? `translate3d(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px, 0) scale(${1 + Math.abs(mousePosition.x) * 0.003})`
              : "none",
            transition: "transform 0.4s ease-out, opacity 0.3s ease-out",
          }}
        />
      </div>
      <div className="absolute bottom-8 right-8">
        <div
          className="w-20 h-20 rounded-full cursor-pointer transition-all duration-300 hover:opacity-35"
          style={{
            background: "radial-gradient(circle, #FF7A00 0%, rgba(255, 122, 0, 0.4) 40%, transparent 70%)",
            animation: "float 5s ease-in-out infinite reverse, pulse-gold 3.5s ease-in-out infinite",
            boxShadow: "0 0 35px rgba(255, 122, 0, 0.4)",
            opacity: 0.18,
            transform: interactiveMode
              ? `translate3d(${-mousePosition.x * 0.08}px, ${-mousePosition.y * 0.08}px, 0) scale(${1 + Math.abs(mousePosition.y) * 0.002})`
              : "none",
            transition: "transform 0.5s ease-out, opacity 0.3s ease-out",
          }}
        />
      </div>
      <div className="absolute top-16 right-16">
        <div
          className="w-12 h-12 rounded-full opacity-25 cursor-pointer"
          style={{
            background: "linear-gradient(45deg, #FFB000, #FF7A00, #FFD700)",
            animation: "pulse-gold 3s ease-in-out infinite, rotate-360 20s linear infinite",
            animationDelay: "1s",
            boxShadow: "0 0 20px rgba(255, 176, 0, 0.5)",
            transform: interactiveMode
              ? `translate3d(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.12}px, 0) rotate(${logoRotation * 0.5}deg)`
              : "none",
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>
      <div className="absolute bottom-16 left-16">
        <div
          className="w-10 h-10 rounded-full opacity-30 cursor-pointer"
          style={{
            background: "linear-gradient(45deg, #FF7A00, #FFB000, #FF8C00)",
            animation: "pulse-gold 2.5s ease-in-out infinite, float 4s ease-in-out infinite",
            animationDelay: "0.7s",
            boxShadow: "0 0 18px rgba(255, 122, 0, 0.6)",
            transform: interactiveMode
              ? `translate3d(${-mousePosition.x * 0.12}px, ${mousePosition.y * 0.08}px, 0) rotate(${-logoRotation * 0.3}deg)`
              : "none",
            transition: "transform 0.4s ease-out",
          }}
        />
      </div>
      <div className="absolute top-1/2 left-4">
        <div
          className="w-3 h-16 rounded-full opacity-15"
          style={{
            background: "linear-gradient(180deg, transparent, #FFB000, transparent)",
            animation: "pulse-gold 4s ease-in-out infinite",
            animationDelay: "2s",
            transform: interactiveMode
              ? `translateX(${mousePosition.x * 0.05}px) scaleY(${1 + Math.abs(mousePosition.x) * 0.005})`
              : "none",
            transition: "transform 0.5s ease-out",
          }}
        />
      </div>
      <div className="absolute top-1/2 right-4">
        <div
          className="w-3 h-12 rounded-full opacity-12"
          style={{
            background: "linear-gradient(180deg, transparent, #FF7A00, transparent)",
            animation: "pulse-gold 3.5s ease-in-out infinite",
            animationDelay: "1.5s",
            transform: interactiveMode
              ? `translateX(${-mousePosition.x * 0.04}px) scaleY(${1 + Math.abs(mousePosition.x) * 0.003})`
              : "none",
            transition: "transform 0.6s ease-out",
          }}
        />
      </div>
      {interactiveMode &&
        Array.from({ length: 5 }, (_, i) => (
          <div
            key={`grid-${i}`}
            className="absolute w-px opacity-5"
            style={{
              background: "linear-gradient(180deg, transparent, rgba(255, 176, 0, 0.3), transparent)",
              left: `${20 + i * 15}%`,
              top: 0,
              bottom: 0,
              transform: `translateX(${mousePosition.x * (0.02 + i * 0.005)}px)`,
              transition: "transform 0.8s ease-out",
            }}
          />
        ))}
    </div>
  );
}
