import type { Metadata } from "next";
import { DefaultNavbar } from "@/components/navbar";
import { MainFooter } from "@/components/layout/main-footer";
import { SplashWrapper } from "@/components/splash";
import "./globals.css";
import "./splash-animations.css";
import "./navbar-animations.css";
import "./navbar-enhancements.css";

export const metadata: Metadata = {
  title: "Optimizify | Optimize • Grow • Succeed",
  description:
    "Stop Guessing. Start Ranking. Get Seen on YouTube with AI-Powered SEO.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <SplashWrapper>
          <DefaultNavbar
            brand={{
              image: "/images/optimizify-play-gold-icon.png",
              text: "Optimizify",
              logoSize: "45px",
              fontSize: "1.3rem",
            }}
            transparent
            light
            sticky
            relative
            center
          />
          <main className="flex-1">{children}</main>
          <MainFooter />
        </SplashWrapper>
      </body>
    </html>
  );
}
