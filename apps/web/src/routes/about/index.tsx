import {
  AboutCTA,
  AboutHero,
  QualityProcessSection,
  OurStory,
  WhatWeStandFor,
} from "@/components/main/about/about";
import { Stats } from "@/components/main/stats";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/")({
  component: RouteComponent,

  head: () => ({
    meta: [{ title: "Handych | About" }],
  }),
});

function RouteComponent() {
  return (
    <>
      <AboutHero />
      <Stats />
      <OurStory />
      <WhatWeStandFor />
      <QualityProcessSection />
      <AboutCTA />
    </>
  );
}
