import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export interface PlansCtaSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export function PlansCtaSection({
  title = "Choose Your Growth Plan",
  subtitle = "Unlock your YouTube potential with data-driven optimization.",
  buttonText = "View Plans",
}: PlansCtaSectionProps) {
  return (
    <section className="py-24 bg-[var(--bg-gradient)]">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-[var(--muted)] mb-10">{subtitle}</p>
          <Link href="/plans">
            <Button size="lg">{buttonText}</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
