import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-24 bg-[var(--background)]">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-gradient-gold mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold text-white mb-4">Page not found</h2>
        <p className="text-[var(--muted)] max-w-md mx-auto mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
          <Link href="/plans">
            <Button variant="secondary">View Plans</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
