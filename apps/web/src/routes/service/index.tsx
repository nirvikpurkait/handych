import {
  ExploreServices,
  ServiceCTA,
  ServiceHero,
  SpecialPackages,
} from "@/components/main/services/services";
import { Stats } from "@/components/main/stats";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/service/")({
  component: RouteComponent,

  head: () => ({
    meta: [{ title: "Handych | Service" }],
  }),
});

function RouteComponent() {
  return (
    <>
      <ServiceHero />
      <Stats />
      <ExploreServices />
      <SpecialPackages />
      <ServiceCTA />
    </>
  );
}
