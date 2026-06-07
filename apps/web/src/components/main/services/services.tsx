import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  Home,
  Sparkles,
  UtensilsCrossed,
  Bath,
  Truck,
} from "lucide-react";
import { services as servicesWithoutIcon, specialPackages } from "@repo/data";
import { Link } from "@tanstack/react-router";

export function ServiceHero({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section
      className={cn(`bg-secondary-100/10 py-24 lg:py-32`, className)}
      {...props}
    >
      <div className={cn("mx-auto max-w-7xl px-4 lg:px-8")}>
        <div className={cn("max-w-4xl")}>
          <div
            className={cn(
              "border-secondary-300 bg-secondary-50 inline-flex border px-4 py-2 text-sm font-medium",
            )}
          >
            Professional Cleaning Solutions
          </div>

          <h1
            className={cn(
              "font-brand-secondary mt-6 text-6xl font-bold text-black lg:text-8xl",
            )}
          >
            Services Designed
            <br />
            For Every Space.
          </h1>

          <p className={cn("mt-8 max-w-2xl text-xl leading-9 text-black/70")}>
            From everyday housekeeping to deep cleaning and commercial
            maintenance, Handych delivers reliable cleaning solutions tailored
            to your needs.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ExploreServices({
  className,
  ...props
}: ComponentProps<"section">) {
  const icons = [
    { icon: Home },
    { icon: Sparkles },
    { icon: Building2 },
    { icon: UtensilsCrossed },
    { icon: Bath },
    { icon: Truck },
  ];
  const services = servicesWithoutIcon.map((item, idx) => ({
    ...item,
    icon: icons[idx].icon,
  }));

  return (
    <section className={cn(`bg-primary-50 py-24`, className)} {...props}>
      <div className={cn("mx-auto max-w-7xl px-4 lg:px-8")}>
        <h2
          className={cn(
            "font-brand-secondary text-primary-950 text-center text-5xl font-bold",
          )}
        >
          Explore Our Services
        </h2>

        <div className={cn("mt-16 grid gap-6 lg:grid-cols-6")}>
          {services.map((service, index) => {
            const Icon = service.icon;

            const span =
              index === 0 || index === 1
                ? "md:col-span-6 lg:col-span-3"
                : "md:col-span-3 lg:col-span-2";

            return (
              <div
                key={service.title}
                className={cn(
                  "border-primary-200 bg-primary-100 group border p-8 transition-all duration-300 hover:-translate-y-2",
                  span,
                )}
              >
                <Icon className={cn("text-primary-500 size-10")} />

                <h3 className={cn("text-primary-950 mt-6 text-2xl font-bold")}>
                  {service.title}
                </h3>

                <p className={cn("text-primary-800 mt-4")}>
                  {service.description}
                </p>

                <p className={cn("text-primary-600 mt-6 font-semibold")}>
                  {service.price}
                </p>

                <div className={cn("mt-6 flex flex-wrap gap-2")}>
                  {service.includes.map((item) => (
                    <span
                      key={item}
                      className={cn(
                        "border-primary-300 bg-primary-50 border px-3 py-2 text-sm",
                      )}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className={cn(`mt-10`)}>
                  <Link
                    to="/contact"
                    search={{ service: service.title }}
                    className={cn(
                      `bg-primary-500 flex max-w-max items-center justify-center gap-2 px-8 py-2 text-white`,
                    )}
                  >
                    <span>Get a quote</span>
                    <span className={cn(`-rotate-45`)}>
                      <ArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SpecialPackages({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section className={cn("bg-secondary-500 py-24", className)} {...props}>
      <div className={cn("mx-auto max-w-7xl px-4 lg:px-8")}>
        <h2
          className={cn("font-brand-secondary text-center text-5xl font-bold")}
        >
          Special Packages
        </h2>

        <div className={cn("mt-16 grid gap-6 lg:grid-cols-3")}>
          {specialPackages.map((pkg) => (
            <div
              key={pkg.title}
              className={cn(
                "border p-8",
                pkg.featured
                  ? "border-primary-500 bg-primary-50"
                  : "border-secondary-300 bg-secondary-50",
              )}
            >
              <h3 className={cn("text-3xl font-bold")}>{pkg.title}</h3>

              <p className={cn("text-primary-500 mt-4 text-5xl font-black")}>
                {pkg.price}
              </p>

              <div className={cn("mt-8 space-y-4")}>
                {pkg.features.map((feature) => (
                  <div key={feature} className={cn("flex items-center gap-3")}>
                    <Check className={cn("text-primary-500 size-4")} />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceCTA({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn(`bg-primary-500 py-24 text-white`, className)}
      {...props}
    >
      <div className={cn("mx-auto max-w-4xl px-4 text-center")}>
        <h2 className={cn("font-brand-secondary text-6xl font-bold")}>
          Ready To Book?
        </h2>

        <p className={cn("mt-6 text-xl text-white/80")}>
          Professional housekeeping services are just a few clicks away.
        </p>

        <Link
          to="/contact"
          className={cn(
            "text-primary-600 mt-10 inline-flex items-center gap-2 bg-white px-8 py-4 font-semibold",
          )}
        >
          Book Service
          <ArrowRight className={cn("size-4")} />
        </Link>
      </div>
    </section>
  );
}
