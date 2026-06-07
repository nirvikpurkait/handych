import {
  CTASection,
  FAQSection,
  HeroSection,
  HowItWorksSection,
  ServicesSection,
  TestimonialsSection,
  WhyChooseUsSection,
} from "@/components/main/home/home";
import { Stats } from "@/components/main/stats";
import { cn } from "@repo/styles/cn";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,

  head: () => ({
    meta: [{ title: "Handych | Home" }],
  }),
});

function RouteComponent() {
  return (
    <main className={cn(``)}>
      <HeroSection />
      <Stats />
      <ServicesSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <FAQSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
