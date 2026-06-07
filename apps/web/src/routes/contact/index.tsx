import { ContactHero, ContactForm } from "@/components/main/contact/contact";
import { contactRouteSearchSchema } from "@/lib/validation-schema/search-schema/contact-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact/")({
  component: RouteComponent,

  validateSearch: contactRouteSearchSchema,

  head: () => ({
    meta: [{ title: "Handych | Contact" }],
  }),
});

function RouteComponent() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
