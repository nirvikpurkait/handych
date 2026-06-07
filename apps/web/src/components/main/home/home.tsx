import { Link } from "@tanstack/react-router";
import type { Icon } from "lucide-react";
import {
  BadgeCheck,
  Phone,
  Sparkles,
  CalendarDays,
  Shield,
  Star,
  Wallet,
  ArrowRight,
  CheckCircle2,
  Home,
  Quote,
} from "lucide-react";
import { cn } from "@repo/styles/cn";
import { useState } from "react";
import type { ComponentProps } from "react";
import { platformMobileNo } from "@repo/utils/const";
import {
  heroItem,
  services,
  whyChooseUs as whyChooseUsWithoutIcon,
  howItWorksSteps as howItWorksStepsWithoutIcon,
  faqs,
  testimonials,
} from "@repo/data";
import { LogoIcon } from "@repo/ui/logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function HeroSection({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section className={cn("", className)} {...props}>
      <div
        className={cn(
          "mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28",
        )}
      >
        <div>
          <div
            className={cn(
              "border-secondary-400 text-secondary-500 dark:text-secondary-50 bg-secondary-50 inline-flex border px-4 py-2 text-sm font-medium",
            )}
          >
            Professional Housekeeping Services
          </div>

          <h1
            className={cn(
              "font-brand-secondary text-primary-500 dark:text-primary-50 mt-6 text-5xl leading-tight font-bold md:text-7xl",
            )}
          >
            Clean Spaces.
            <br />
            Happy Lives.
          </h1>

          <p className={cn("text-primary-800/70 mt-6 max-w-xl text-lg")}>
            Trusted housekeeping professionals for homes, offices, apartments
            and commercial spaces.
          </p>

          <div className={cn("mt-8 flex flex-col gap-4 sm:flex-row")}>
            <Link
              to="/service"
              className={cn(
                "bg-primary-500 px-6 py-4 text-center font-semibold text-white",
              )}
            >
              Book Service
            </Link>

            <a
              href={`tel:+91${platformMobileNo}`}
              className={cn(
                "border-primary-500 bg-primary-50 text-primary-500 flex items-center justify-center gap-2 border px-6 py-4 font-semibold",
              )}
            >
              <Phone className={cn("size-4")} />
              Call Now
            </a>
          </div>

          <div className={cn("mt-12 grid grid-cols-2 gap-4")}>
            {heroItem.map(({ label }) => (
              <div
                key={label}
                className={cn("text-primary-500 flex items-center gap-2")}
              >
                <BadgeCheck className={cn("size-4")} />
                {label}
              </div>
            ))}
          </div>
        </div>

        <div
          className={cn(
            "border-secondary-400 bg-secondary-50 min-h-137.5 border",
          )}
        />
      </div>
    </section>
  );
}

export function ServicesSection({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section className={cn("bg-primary-50 py-24", className)} {...props}>
      <div className={cn("mx-auto max-w-7xl px-4 lg:px-8")}>
        <h2
          className={cn(
            "font-brand-secondary text-primary-950 text-center text-5xl font-bold",
          )}
        >
          Our Services
        </h2>

        <div className={cn("mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3")}>
          {services.map(({ title }) => (
            <div
              key={title}
              className={cn("border-primary-200 bg-primary-100 border p-8")}
            >
              <Sparkles className={cn("text-primary-600 size-8")} />

              <h3 className={cn("text-primary-950 mt-5 text-xl font-semibold")}>
                {title}
              </h3>

              <p className={cn("text-primary-800 mt-3")}>
                Professional cleaning solutions delivered by trained experts.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUsSection({
  className,
  ...props
}: ComponentProps<"section">) {
  const [active, setActive] = useState(0);

  const icons = [
    { icon: Shield },
    { icon: CalendarDays },
    { icon: Wallet },
    { icon: Star },
  ] satisfies {
    icon: typeof Icon;
  }[];
  const whyChooseUs = whyChooseUsWithoutIcon.map((item, idx) => ({
    ...item,
    icon: icons[idx]?.icon ?? LogoIcon,
  }));

  const ActiveIcon = whyChooseUs[active].icon;

  return (
    <section
      className={cn("bg-secondary-500 py-24 text-black", className)}
      {...props}
    >
      <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8")}>
        <div className={cn("mb-16 max-w-3xl")}>
          <span
            className={cn(
              "border-secondary-700 bg-secondary-200 inline-flex border px-4 py-2 text-sm font-medium",
            )}
          >
            Why Customers Trust Handych
          </span>

          <h2
            className={cn(
              "font-brand-secondary mt-6 text-4xl font-bold md:text-6xl",
            )}
          >
            Built Around Reliability,
            <br />
            Quality & Trust.
          </h2>
        </div>

        <div className={cn("grid gap-8 lg:grid-cols-[1.1fr_0.9fr]")}>
          {/* Visual Side */}
          <div
            className={cn(
              "border-secondary-700 bg-secondary-200 relative overflow-hidden border p-8 lg:p-12",
            )}
          >
            <div
              className={cn(
                "border-secondary-700 bg-secondary-100 absolute top-6 right-6 border px-4 py-3",
              )}
            >
              <p className={cn("text-3xl font-black")}>5000+</p>

              <p className={cn("text-sm opacity-70")}>Services Completed</p>
            </div>

            <div
              className={cn("flex h-full min-h-112.5 flex-col justify-between")}
            >
              <div>
                <ActiveIcon className={cn("text-primary-500 size-20")} />

                <h3 className={cn("mt-8 text-4xl font-bold")}>
                  {whyChooseUs[active].title}
                </h3>

                <p className={cn("mt-4 max-w-xl text-lg leading-8 opacity-80")}>
                  {whyChooseUs[active].description}
                </p>
              </div>

              <div className={cn("grid grid-cols-2 gap-4")}>
                <div
                  className={cn(
                    "border-secondary-700 bg-secondary-100 border p-5",
                  )}
                >
                  <p className={cn("text-primary-500 text-4xl font-black")}>
                    4.9★
                  </p>

                  <p className={cn("mt-2 text-sm opacity-70")}>
                    Average Rating
                  </p>
                </div>

                <div
                  className={cn(
                    "border-secondary-700 bg-secondary-100 border p-5",
                  )}
                >
                  <p className={cn("text-primary-500 text-4xl font-black")}>
                    150+
                  </p>

                  <p className={cn("mt-2 text-sm opacity-70")}>Professionals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Stack */}
          <div className={cn("flex flex-col")}>
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;

              const isActive = active === index;

              return (
                <button
                  key={item.title}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={cn(
                    "border-secondary-700 group border-b text-left transition-all",
                    isActive ? "bg-secondary-200" : "hover:bg-secondary-400/60",
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center justify-between p-6 lg:p-8",
                    )}
                  >
                    <div className={cn("flex items-center gap-4")}>
                      <div
                        className={cn(
                          "border-secondary-700 bg-secondary-100 flex size-14 items-center justify-center border",
                        )}
                      >
                        <Icon className={cn("text-primary-500 size-6")} />
                      </div>

                      <div>
                        <h3 className={cn("text-lg font-semibold")}>
                          {item.title}
                        </h3>

                        <p className={cn("mt-1 text-sm opacity-70")}>
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <ArrowRight
                      className={cn(
                        "size-5 transition-transform group-hover:translate-x-1",
                        isActive ? "text-primary-500" : "opacity-50",
                      )}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection({
  className,
  ...props
}: ComponentProps<"section">) {
  const [activeStep, setActiveStep] = useState(0);
  const icons = [
    { icon: Home },
    { icon: CalendarDays },
    { icon: Sparkles },
    { icon: CheckCircle2 },
  ] satisfies {
    icon: typeof Icon;
  }[];
  const howItWorksSteps = howItWorksStepsWithoutIcon.map((item, idx) => ({
    ...item,
    icon: icons[idx]?.icon ?? LogoIcon,
  }));

  const ActiveIcon = howItWorksSteps[activeStep].icon;

  return (
    <section className={cn("bg-primary-50 py-24", className)} {...props}>
      <div className={cn("mx-auto max-w-7xl px-4 lg:px-8")}>
        <div className={cn("mb-16 text-center")}>
          <span
            className={cn(
              "border-primary-300 bg-primary-100 text-primary-700 inline-flex border px-4 py-2 text-sm font-medium",
            )}
          >
            Simple Booking Process
          </span>

          <h2
            className={cn(
              "font-brand-secondary text-primary-950 mt-6 text-5xl font-bold md:text-6xl",
            )}
          >
            How It Works
          </h2>

          <p className={cn("text-primary-800 mx-auto mt-6 max-w-2xl text-lg")}>
            Get professional housekeeping services in just a few simple steps.
          </p>
        </div>

        <div className={cn("grid gap-10 lg:grid-cols-[0.8fr_1.2fr]")}>
          {/* Active Step Preview */}
          <div
            className={cn(
              "border-primary-300 bg-primary-100 flex min-h-112.5 flex-col justify-between border p-8 lg:p-10",
            )}
          >
            <div>
              <div
                className={cn(
                  "bg-primary-500 flex size-20 items-center justify-center",
                )}
              >
                <ActiveIcon className={cn("size-10 text-white")} />
              </div>

              <p
                className={cn(
                  "text-primary-700 mt-8 text-sm font-semibold tracking-wider uppercase",
                )}
              >
                Step {activeStep + 1}
              </p>

              <h3 className={cn("text-primary-950 mt-2 text-4xl font-bold")}>
                {howItWorksSteps[activeStep].title}
              </h3>

              <p className={cn("text-primary-800 mt-6 text-lg leading-8")}>
                {howItWorksSteps[activeStep].description}
              </p>
            </div>

            <div className={cn("border-primary-300 bg-primary-50 border p-6")}>
              <div className={cn("flex items-center justify-between")}>
                <span className={cn("text-primary-700 text-sm font-medium")}>
                  Progress
                </span>

                <span className={cn("text-primary-950 font-semibold")}>
                  {activeStep + 1}/4
                </span>
              </div>

              <div className={cn("bg-primary-200 mt-4 h-2 overflow-hidden")}>
                <div
                  className={cn(
                    "bg-primary-500 h-full transition-all duration-300",
                  )}
                  style={{
                    width: `${((activeStep + 1) / howItWorksSteps.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className={cn("relative")}>
            <div
              className={cn(
                "bg-primary-300 absolute top-0 left-7 hidden h-full w-px lg:block",
              )}
            />

            <div className={cn("flex flex-col gap-4")}>
              {howItWorksSteps.map((step, index) => {
                const Icon = step.icon;

                const isActive = activeStep === index;

                return (
                  <button
                    key={step.title}
                    onMouseEnter={() => setActiveStep(index)}
                    onFocus={() => setActiveStep(index)}
                    onClick={() => setActiveStep(index)}
                    className={cn(
                      "border-primary-300 relative border text-left transition-all",
                      isActive
                        ? "bg-primary-200"
                        : "bg-primary-100 hover:bg-primary-150",
                    )}
                  >
                    <div className={cn("flex gap-6 p-6 lg:p-8")}>
                      <div
                        className={cn(
                          "relative z-10 flex size-14 shrink-0 items-center justify-center",
                          isActive
                            ? "bg-primary-500 text-white"
                            : "bg-primary-300 text-primary-800",
                        )}
                      >
                        <Icon className={cn("size-6")} />
                      </div>

                      <div>
                        <p
                          className={cn(
                            "text-primary-700 text-sm font-semibold",
                          )}
                        >
                          STEP {index + 1}
                        </p>

                        <h3
                          className={cn(
                            "text-primary-950 mt-1 text-xl font-bold",
                          )}
                        >
                          {step.title}
                        </h3>

                        <p className={cn("text-primary-800 mt-3")}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQSection({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn("bg-primary-500 py-24 text-white", className)}
      {...props}
    >
      <div className={cn("mx-auto max-w-7xl px-4 lg:px-8")}>
        <div className={cn("grid gap-12 lg:grid-cols-[0.8fr_1.2fr]")}>
          <div>
            <span
              className={cn(
                "border-primary-300 bg-primary-100 text-primary-500 inline-flex border px-4 py-2 text-sm font-medium",
              )}
            >
              FAQ
            </span>

            <h2
              className={cn(
                "font-brand-secondary mt-6 text-5xl font-bold md:text-6xl",
              )}
            >
              Frequently Asked Questions
            </h2>

            <p className={cn("mt-6 max-w-md text-lg text-white/80")}>
              Everything you need to know about our housekeeping and cleaning
              services.
            </p>

            <div
              className={cn(
                "border-primary-300 text-primary-500 bg-primary-100 mt-10 border p-6",
              )}
            >
              <p className={cn("text-primary-400 text-sm")}>
                Still have questions?
              </p>

              <p className={cn("mt-2 text-xl font-semibold")}>
                Contact our support team.
              </p>
            </div>
          </div>

          <div
            className={cn(
              "border-primary-300 bg-primary-100 text-primary-500 border",
            )}
          >
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className={cn("border-primary-300 border-b px-6")}
                >
                  <AccordionTrigger
                    className={cn(
                      "py-6 text-left text-lg font-semibold hover:no-underline",
                    )}
                  >
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className={cn("text-primary-400 pb-6")}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection({
  className,
  ...props
}: ComponentProps<"section">) {
  const featured = testimonials.find((t) => t.featured)!;
  const others = testimonials.filter((t) => !t.featured);

  return (
    <section className={cn("bg-secondary-50 py-24", className)} {...props}>
      <div className={cn("mx-auto max-w-7xl px-4 lg:px-8")}>
        <div className={cn("mb-16 text-center")}>
          <span
            className={cn(
              "border-secondary-300 bg-secondary-100 inline-flex border px-4 py-2 text-sm font-medium",
            )}
          >
            Customer Stories
          </span>

          <h2
            className={cn(
              "font-brand-secondary mt-6 text-5xl font-bold text-black md:text-6xl",
            )}
          >
            What Customers Say
          </h2>

          <p className={cn("mx-auto mt-6 max-w-2xl text-lg text-black/70")}>
            Trusted by homeowners and businesses across the region.
          </p>
        </div>

        <div className={cn("grid gap-6 lg:grid-cols-[1.4fr_0.8fr]")}>
          <div
            className={cn(
              "border-secondary-300 bg-secondary-100 relative border p-10 lg:p-14",
            )}
          >
            <Quote
              className={cn("text-primary-300 absolute top-8 right-8 size-20")}
            />

            <div className={cn("mb-8 flex gap-1")}>
              {Array.from({ length: featured.rating }).map((_, index) => (
                <Star
                  key={index}
                  className={cn("fill-primary-500 text-primary-500 size-5")}
                />
              ))}
            </div>

            <p
              className={cn(
                "text-secondary-950 text-2xl leading-relaxed font-medium",
              )}
            >
              {featured.review}
            </p>

            <div className={cn("mt-10 flex items-center gap-4")}>
              <div
                className={cn(
                  "bg-primary-500 flex size-14 items-center justify-center text-lg font-bold text-white",
                )}
              >
                PS
              </div>

              <div>
                <p className={cn("font-semibold")}>{featured.name}</p>

                <p className={cn("text-sm text-black/60")}>
                  {featured.location}
                </p>
              </div>
            </div>
          </div>

          <div className={cn("flex flex-col gap-6")}>
            {others.map((item) => (
              <div
                key={item.name}
                className={cn(
                  "border-secondary-300 hover:border-primary-400 border bg-white p-8 transition-all duration-300 hover:-translate-y-1",
                )}
              >
                <div className={cn("mb-4 flex gap-1")}>
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star
                      key={index}
                      className={cn("fill-primary-500 text-primary-500 size-4")}
                    />
                  ))}
                </div>

                <p className={cn("text-black/75")}>{item.review}</p>

                <div className={cn("mt-6 border-t border-black/10 pt-4")}>
                  <p className={cn("font-semibold")}>{item.name}</p>

                  <p className={cn("text-sm text-black/60")}>{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTASection({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn("bg-primary-500 py-24 text-white", className)}
      {...props}
    >
      <div className={cn("mx-auto max-w-4xl px-4 text-center")}>
        <h2 className={cn("font-brand-secondary text-6xl font-bold")}>
          Ready For A Cleaner Space?
        </h2>

        <p className={cn("text-primary-50 mt-6")}>
          Book professional housekeeping services today.
        </p>

        <Link
          to="/contact"
          className={cn(
            "bg-secondary-50 text-primary-700 mt-8 inline-flex px-6 py-4 font-semibold",
          )}
        >
          Book Service
        </Link>
      </div>
    </section>
  );
}
