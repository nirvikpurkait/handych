import type { ComponentProps } from "react";
import {
  ArrowRight,
  BadgeCheck,
  HeartHandshake,
  Shield,
  Sparkles,
  Users,
  GraduationCap,
  Activity,
  MessageSquareMore,
} from "lucide-react";
import { cn } from "@repo/styles/cn";
import {
  qualitySteps as qualityStepsWithoutIcons,
  ourValues as ourValuesWithoutIcons,
} from "@repo/data";
import { Link } from "@tanstack/react-router";

export function AboutHero({ className, ...props }: ComponentProps<"section">) {
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
            About Handych
          </div>

          <h1
            className={cn(
              "font-brand-secondary mt-6 text-6xl font-bold text-black lg:text-8xl",
            )}
          >
            Building Trust
            <br />
            Through Better
            <br />
            Service.
          </h1>

          <p className={cn("mt-8 max-w-2xl text-xl leading-9 text-black/70")}>
            Handych was created to make professional housekeeping services
            reliable, accessible, and stress-free for every household and
            business.
          </p>
        </div>
      </div>
    </section>
  );
}

export function OurStory({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn(`bg-secondary-50/10 py-16 lg:py-24`, className)}
      {...props}
    >
      <div
        className={cn(
          "mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:px-8",
        )}
      >
        <div>
          <p
            className={cn(
              "border-primary-300 bg-primary-50 inline-flex border px-4 py-2 text-sm font-medium",
            )}
          >
            Our Story
          </p>

          <h2
            className={cn(
              "font-brand-secondary text-primary-950 mt-4 text-5xl font-bold",
            )}
          >
            Cleaning Services
            <br />
            That People Can
            <br />
            Actually Trust.
          </h2>
        </div>

        <div>
          <p className={cn("text-primary-800 text-lg leading-9")}>
            We noticed that many households struggled to find trustworthy and
            professional cleaning services. Bookings were inconsistent, quality
            varied, and customers often had no transparency.
          </p>

          <p className={cn("text-primary-800 mt-6 text-lg leading-9")}>
            Handych was founded to solve these problems through verified
            professionals, transparent pricing, and exceptional customer
            support.
          </p>
        </div>
      </div>
    </section>
  );
}

export function AboutCTA({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn(`bg-primary-500 py-24 text-white`, className)}
      {...props}
    >
      <div className={cn("mx-auto max-w-4xl px-4 text-center")}>
        <Users className={cn("mx-auto size-16")} />

        <h2 className={cn("font-brand-secondary mt-8 text-6xl font-bold")}>
          Join Thousands Of
          <br />
          Happy Customers
        </h2>

        <p className={cn("mt-6 text-xl text-white/80")}>
          Experience professional housekeeping services backed by trust, quality
          and reliability.
        </p>

        <Link
          to="/contact"
          className={cn(
            "text-primary-600 mt-10 inline-flex items-center gap-3 bg-white px-8 py-4 font-semibold",
          )}
        >
          Book A Service
          <ArrowRight className={cn("size-4")} />
        </Link>
      </div>
    </section>
  );
}

export function WhatWeStandFor({
  className,
  ...props
}: ComponentProps<"section">) {
  const icons = [
    { icon: Shield },
    { icon: Sparkles },
    { icon: HeartHandshake },
    { icon: BadgeCheck },
  ];
  const ourValues = ourValuesWithoutIcons.map((value, idx) => ({
    ...value,
    icon: icons[idx].icon,
  }));

  return (
    <section className={cn(`bg-secondary-500 py-24`, className)} {...props}>
      <div className={cn("mx-auto max-w-7xl px-4 lg:px-8")}>
        <h2
          className={cn(
            "font-brand-secondary text-primary-500 text-center text-5xl font-bold",
          )}
        >
          What We Stand For
        </h2>

        <div className={cn("mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4")}>
          {ourValues.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className={cn(
                  "border-secondary-500 bg-secondary-50 border p-8",
                )}
              >
                <Icon className={cn("text-primary-500 size-10")} />

                <h3 className={cn("mt-6 text-2xl font-bold")}>{value.title}</h3>

                <p className={cn("mt-4 text-black/70")}>{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function QualityProcessSection({
  className,
  ...props
}: ComponentProps<"section">) {
  const icons = [
    { icon: BadgeCheck },
    { icon: GraduationCap },
    { icon: Activity },
    { icon: MessageSquareMore },
  ];
  const qualitySteps = qualityStepsWithoutIcons.map((quality, idx) => ({
    ...quality,
    icon: icons[idx].icon,
  }));

  return (
    <section className={cn("bg-primary-50/10 py-24", className)} {...props}>
      <div className={cn("mx-auto max-w-7xl px-4 lg:px-8")}>
        <div className={cn("grid gap-16 lg:grid-cols-[0.75fr_1.25fr]")}>
          {/* Left Side */}

          <div>
            <span
              className={cn(
                "border-primary-300 bg-primary-100 text-primary-700 inline-flex border px-4 py-2 text-sm font-medium",
              )}
            >
              Quality Standards
            </span>

            <h2
              className={cn(
                "font-brand-secondary text-primary-950 mt-6 text-5xl font-bold md:text-6xl",
              )}
            >
              Every Service
              <br />
              Goes Through
              <br />A Proven Process
            </h2>

            <p className={cn("text-primary-800 mt-8 text-lg leading-9")}>
              Our quality assurance framework ensures that every professional
              and every service consistently meets Handych standards.
            </p>

            <div className={cn("mt-12 grid grid-cols-3 gap-4")}>
              <div
                className={cn("border-primary-300 bg-primary-100 border p-4")}
              >
                <p className={cn("text-primary-500 text-3xl font-black")}>
                  98%
                </p>

                <p className={cn("text-primary-800 mt-1 text-sm")}>
                  Satisfaction
                </p>
              </div>

              <div
                className={cn("border-primary-300 bg-primary-100 border p-4")}
              >
                <p className={cn("text-primary-500 text-3xl font-black")}>
                  5K+
                </p>

                <p className={cn("text-primary-800 mt-1 text-sm")}>Services</p>
              </div>

              <div
                className={cn("border-primary-300 bg-primary-100 border p-4")}
              >
                <p className={cn("text-primary-500 text-3xl font-black")}>
                  4.9★
                </p>

                <p className={cn("text-primary-800 mt-1 text-sm")}>Rating</p>
              </div>
            </div>
          </div>

          {/* Process Timeline */}

          <div className={cn("relative")}>
            <div
              className={cn(
                "bg-primary-300 absolute top-0 left-8 hidden h-full w-px lg:block",
              )}
            />

            <div className={cn("space-y-6")}>
              {qualitySteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className={cn(
                      "group border-primary-300 bg-primary-100 hover:border-primary-500 relative border transition-all duration-300 hover:-translate-y-1",
                    )}
                  >
                    <div className={cn("flex gap-6 p-8")}>
                      <div
                        className={cn(
                          "bg-primary-500 relative z-10 flex size-16 shrink-0 items-center justify-center text-white",
                        )}
                      >
                        <Icon className={cn("size-7")} />
                      </div>

                      <div className={cn("flex-1")}>
                        <div className={cn("mb-2 flex items-center gap-3")}>
                          <span
                            className={cn(
                              "text-primary-500 text-sm font-black tracking-widest",
                            )}
                          >
                            STEP {index + 1}
                          </span>
                        </div>

                        <h3
                          className={cn("text-primary-950 text-2xl font-bold")}
                        >
                          {step.title}
                        </h3>

                        <p className={cn("text-primary-800 mt-3 leading-7")}>
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div
                      className={cn(
                        "bg-primary-500 absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full",
                      )}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
