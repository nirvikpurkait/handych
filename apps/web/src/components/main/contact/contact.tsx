import type { ComponentProps } from "react";
import { useForm } from "@tanstack/react-form";
import { ArrowRight, Clock3, Mail, Phone } from "lucide-react";
import { cn } from "@repo/styles/cn";
import { platformMobileNo, platformSupportEmail } from "@repo/utils/const";
import { services } from "@repo/data";
import { useSearch } from "@tanstack/react-router";
import { generateWhatsappmessage } from "@repo/utils/generate-message";

export function ContactHero({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section
      className={cn(`bg-secondary-50/10 py-16 lg:py-24`, className)}
      {...props}
    >
      <div className={cn("mx-auto max-w-7xl px-4 lg:px-8")}>
        <div className={cn("max-w-4xl")}>
          <div
            className={cn(
              "border-secondary-300 bg-secondary-50 inline-flex border px-4 py-2 text-sm font-medium",
            )}
          >
            Contact Handych
          </div>

          <h1
            className={cn(
              "font-brand-secondary mt-6 text-6xl font-bold text-black lg:text-8xl",
            )}
          >
            Let's Talk
            <br />
            About Your
            <br />
            Cleaning Needs.
          </h1>

          <p className={cn("mt-8 max-w-2xl text-xl leading-9 text-black/70")}>
            Whether you need regular housekeeping, deep cleaning, office
            maintenance, or have questions about our services, we're here to
            help.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ContactForm({ className, ...props }: ComponentProps<"main">) {
  const { service } = useSearch({ from: "/contact/" });

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: service ?? "",
      location: "",
      time: "",
      message: "",
    },
    onSubmit: async ({ value }) => {
      const message = generateWhatsappmessage({ ...value });
      const a = document.createElement("a");
      a.target = "_blank";
      a.href = `https://wa.me/91${platformMobileNo}?${encodeURI(`text=${message}`)}`;

      a.click();
    },
  });

  return (
    <section className={cn(`bg-primary-500 py-24`, className)} {...props}>
      <div className={cn("mx-auto max-w-7xl px-4 lg:px-8")}>
        <div className={cn("grid gap-12 lg:grid-cols-[0.8fr_1.2fr]")}>
          {/* Left */}

          <div className={cn("space-y-6")}>
            <div className={cn("border-primary-300 bg-primary-50 border p-8")}>
              <Phone className={cn("text-primary-500 size-6")} />

              <h3 className={cn("mt-4 text-xl font-bold")}>Call Us</h3>

              <a
                href={`tel:91${platformMobileNo}`}
                className={cn("text-primary-800 mt-2")}
              >
                +91 {platformMobileNo}
              </a>
            </div>

            <div className={cn("border-primary-300 bg-primary-50 border p-8")}>
              <Mail className={cn("text-primary-500 size-6")} />

              <h3 className={cn("mt-4 text-xl font-bold")}>Email</h3>

              <a
                href={`mailto:${platformSupportEmail}`}
                className={cn("text-primary-800 mt-2")}
              >
                {platformSupportEmail}
              </a>
            </div>

            <div className={cn("border-primary-300 bg-primary-50 border p-8")}>
              <Clock3 className={cn("text-primary-500 size-6")} />

              <h3 className={cn("mt-4 text-xl font-bold")}>Working Hours</h3>

              <p className={cn("text-primary-800 mt-2")}>
                Mon - Sun
                <br />
                8:00 AM - 8:00 PM
              </p>
            </div>
          </div>

          {/* Form */}

          <div
            className={cn(
              "border-primary-300 bg-primary-50 border p-8 lg:p-10",
            )}
          >
            <h2
              className={cn(
                "font-brand-secondary text-primary-950 text-4xl font-bold",
              )}
            >
              Send Us A Message
            </h2>

            <p className={cn("text-primary-800 mt-4")}>
              Fill out the form below and we'll get back to you shortly.
            </p>

            <form
              className={cn("mt-10 space-y-6")}
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();

                void form.handleSubmit();
              }}
            >
              <form.Field
                name="name"
                validators={{
                  onChange: ({ value }) => {
                    if (!value.trim()) {
                      return "Name is required";
                    }

                    if (value.length < 2) {
                      return "Name must be at least 2 characters";
                    }

                    return undefined;
                  },
                }}
              >
                {(field) => (
                  <div>
                    <label className={cn("mb-2 block font-medium")}>
                      Full Name
                    </label>

                    <input
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className={cn(
                        "border-primary-300 w-full border bg-white px-4 py-3 outline-none",
                      )}
                      placeholder="John Doe"
                    />

                    {field.state.meta.errors.length > 0 && (
                      <p className={cn("mt-2 text-sm text-red-500")}>
                        {field.state.meta.errors[0]}
                      </p>
                    )}
                  </div>
                )}
              </form.Field>

              <div className={cn("grid gap-6 md:grid-cols-2")}>
                <form.Field
                  name="email"
                  validators={{
                    onChange: ({ value }) => {
                      if (!value.trim()) {
                        return "Email is required";
                      }

                      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                        return "Invalid email address";
                      }

                      return undefined;
                    },
                  }}
                >
                  {(field) => (
                    <div>
                      <label className={cn("mb-2 block font-medium")}>
                        Email
                      </label>

                      <input
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className={cn(
                          "border-primary-300 w-full border bg-white px-4 py-3 outline-none",
                        )}
                        placeholder="john@example.com"
                      />

                      {field.state.meta.errors.length > 0 && (
                        <p className={cn("mt-2 text-sm text-red-500")}>
                          {field.state.meta.errors[0]}
                        </p>
                      )}
                    </div>
                  )}
                </form.Field>

                <form.Field
                  name="phone"
                  validators={{
                    onChange: ({ value }) => {
                      if (!value.trim()) {
                        return "Phone is required";
                      }

                      if (!/^\d{10}$/.test(value)) {
                        return "Enter valid phone number";
                      }

                      return undefined;
                    },
                  }}
                >
                  {(field) => (
                    <div>
                      <label className={cn("mb-2 block font-medium")}>
                        Phone
                      </label>

                      <input
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className={cn(
                          "border-primary-300 w-full border bg-white px-4 py-3 outline-none",
                        )}
                        placeholder="9876543210"
                      />

                      {field.state.meta.errors.length > 0 && (
                        <p className={cn("mt-2 text-sm text-red-500")}>
                          {field.state.meta.errors[0]}
                        </p>
                      )}
                    </div>
                  )}
                </form.Field>
              </div>

              <form.Field
                name="service"
                validators={{
                  onChange: ({ value }) => {
                    if (!value.trim()) {
                      return "Please select a service";
                    }

                    return undefined;
                  },
                }}
              >
                {(field) => (
                  <div>
                    <label className={cn("mb-2 block font-medium")}>
                      Service
                    </label>

                    <select
                      // value={service ? "" : service}
                      onChange={(e) => field.handleChange(e.target.value)}
                      value={service ? service : ""}
                      className={cn(
                        "border-primary-300 w-full border bg-white px-4 py-3 outline-none",
                      )}
                    >
                      <option value="">Select Service</option>

                      {services.map(({ title }) => (
                        <option key={title} value={title}>
                          {title}
                        </option>
                      ))}
                    </select>

                    {field.state.meta.errors.length > 0 && (
                      <p className={cn("mt-2 text-sm text-red-500")}>
                        {field.state.meta.errors[0]}
                      </p>
                    )}
                  </div>
                )}
              </form.Field>

              <div className={cn("grid gap-6 md:grid-cols-2")}>
                <form.Field
                  name="location"
                  validators={{
                    onChange: ({ value }) => {
                      if (!value.trim()) {
                        return "Location is required";
                      }

                      if (value.length < 5) {
                        return "Please enter a valid location";
                      }

                      return undefined;
                    },
                  }}
                >
                  {(field) => (
                    <div>
                      <label className={cn("mb-2 block font-medium")}>
                        Service Location
                      </label>

                      <input
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className={cn(
                          "border-primary-300 w-full border bg-white px-4 py-3 outline-none",
                        )}
                        placeholder="Durgapur, West Bengal"
                      />

                      {field.state.meta.errors.length > 0 && (
                        <p className={cn("mt-2 text-sm text-red-500")}>
                          {field.state.meta.errors[0]}
                        </p>
                      )}
                    </div>
                  )}
                </form.Field>

                <form.Field
                  name="time"
                  validators={{
                    onChange: ({ value }) => {
                      if (!value.trim()) {
                        return "Preferred time is required";
                      }

                      return undefined;
                    },
                  }}
                >
                  {(field) => (
                    <div>
                      <label className={cn("mb-2 block font-medium")}>
                        Preferred Time
                      </label>

                      <input
                        type="datetime-local"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className={cn(
                          "border-primary-300 w-full border bg-white px-4 py-3 outline-none",
                        )}
                      />

                      {field.state.meta.errors.length > 0 && (
                        <p className={cn("mt-2 text-sm text-red-500")}>
                          {field.state.meta.errors[0]}
                        </p>
                      )}
                    </div>
                  )}
                </form.Field>
              </div>

              <form.Field
                name="message"
                validators={{
                  onChange: ({ value }) => {
                    if (!value.trim()) {
                      return "Message is required";
                    }

                    if (value.length < 20) {
                      return "Please provide more details";
                    }

                    return undefined;
                  },
                }}
              >
                {(field) => (
                  <div>
                    <label className={cn("mb-2 block font-medium")}>
                      Message
                    </label>

                    <textarea
                      rows={6}
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className={cn(
                        "border-primary-300 w-full resize-none border bg-white px-4 py-3 outline-none",
                      )}
                      placeholder="Tell us about your requirements..."
                    />

                    {field.state.meta.errors.length > 0 && (
                      <p className={cn("mt-2 text-sm text-red-500")}>
                        {field.state.meta.errors[0]}
                      </p>
                    )}
                  </div>
                )}
              </form.Field>

              <form.Subscribe
                selector={(state) => ({
                  isSubmitting: state.isSubmitting,
                })}
              >
                {({ isSubmitting }) => (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "bg-primary-500 flex items-center gap-3 px-8 py-4 font-semibold text-white transition-opacity disabled:opacity-50",
                    )}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}

                    <ArrowRight className={cn("size-4")} />
                  </button>
                )}
              </form.Subscribe>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
