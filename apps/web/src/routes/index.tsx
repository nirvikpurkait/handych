import {
  HeroSection,
  // OurFounders,
  OurService,
  WhyTrustHanych,
} from "@/components/main/home/home";
import { createFileRoute } from "@tanstack/react-router";
import { OurPurpose } from "../components/main/home/home";

export const Route = createFileRoute("/")({
  component: RouteComponent,

  head: () => ({
    meta: [{ title: "Handych" }],
  }),
});

function RouteComponent() {
  return (
    <main>
      <HeroSection />
      <OurService />
      <WhyTrustHanych />
      {/* <OurFounders /> */}
      <OurPurpose />
    </main>
  );
}
