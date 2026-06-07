import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { cn } from "@repo/styles/cn";
import type { ComponentProps } from "react";
import { LogoIcon, LogoText } from "@repo/ui/logo";
import {
  platformAddres,
  platformFacebookLink,
  platformInstagramLink,
  platformLocation,
  platformMobileNo,
  platformSupportEmail,
} from "@repo/utils/const";

export function Footer({ className, ...props }: ComponentProps<"footer">) {
  const navigationItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/service",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  const serviceItems = [
    "Housekeeping",
    "Deep Cleaning",
    "Office Cleaning",
    "Kitchen Cleaning",
    "Bathroom Cleaning",
    "Move In / Move Out Cleaning",
  ];

  return (
    <footer
      className={cn(
        "dark:bg-accent-50/5 border-t border-black/10 bg-white dark:border-white/10",
        className,
      )}
      {...props}
    >
      <div className={cn("mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8")}>
        {/* Top CTA */}
        <div
          className={cn(
            "border-primary-200 bg-primary-50 dark:border-primary-900 dark:bg-primary-950 mb-14 flex flex-col gap-8 border p-8 lg:flex-row lg:items-center lg:justify-between",
          )}
        >
          <div>
            <p
              className={cn(
                "text-primary-600 mb-2 text-sm font-semibold tracking-widest uppercase",
              )}
            >
              Ready To Get Started?
            </p>

            <h2
              className={cn(
                "font-brand-secondary text-3xl font-bold sm:text-4xl",
              )}
            >
              Professional Housekeeping,
              <br />
              Just One Click Away.
            </h2>
          </div>

          <Link
            to="/contact"
            className={cn(
              "bg-primary-500 hover:bg-primary-600 inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white transition-colors",
            )}
          >
            Book A Service
            <ArrowUpRight className={cn("size-4")} />
          </Link>
        </div>

        {/* Main Footer */}
        <div
          className={cn(
            "grid gap-10 border-b border-black/10 pb-12 md:grid-cols-2 lg:grid-cols-4 dark:border-white/10",
          )}
        >
          {/* Brand */}
          <div>
            <Link
              to="/"
              className={cn(
                "flex shrink-0 items-center gap-3 transition-opacity hover:opacity-80",
              )}
            >
              <LogoIcon className={cn(`h-10 w-10`)} />

              <LogoText className={cn(`h-10 w-30 max-sm:hidden`)} />
            </Link>

            <p className={cn("text-foreground/70 max-w-md leading-7")}>
              Handych provides trusted housekeeping and cleaning professionals
              for homes, apartments, offices, and commercial spaces. Reliable,
              verified, and affordable service at your convenience.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className={cn("mb-5 text-sm font-bold tracking-widest uppercase")}
            >
              Navigation
            </h4>

            <div className={cn("flex flex-col gap-3")}>
              {navigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={cn(
                    "text-foreground/70 hover:text-primary-500 w-fit text-sm transition-colors",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className={cn("mb-5 text-sm font-bold tracking-widest uppercase")}
            >
              Services
            </h4>

            <div className={cn("flex flex-col gap-3")}>
              {serviceItems.map((service) => (
                <span
                  key={service}
                  className={cn("text-foreground/70 text-sm")}
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className={cn("mb-5 text-sm font-bold tracking-widest uppercase")}
            >
              Contact
            </h4>

            <div className={cn("space-y-4")}>
              <a
                href={`tel:+91${platformMobileNo}`}
                className={cn(
                  "text-foreground/70 hover:text-primary-500 flex items-start gap-3 text-sm transition-colors",
                )}
              >
                <Phone className={cn("mt-0.5 size-4 shrink-0")} />
                <span>+91 {platformMobileNo}</span>
              </a>

              <a
                href={`mailto:${platformSupportEmail}`}
                className={cn(
                  "text-foreground/70 hover:text-primary-500 flex items-start gap-3 text-sm transition-colors",
                )}
              >
                <Mail className={cn("mt-0.5 size-4 shrink-0")} />
                <span>{platformSupportEmail}</span>
              </a>

              <a
                href={platformLocation}
                className={cn(
                  "text-foreground/70 flex items-start gap-3 text-sm",
                )}
              >
                <MapPin className={cn("mt-0.5 size-4 shrink-0")} />
                <span>{platformAddres}</span>
              </a>

              <div className={cn("pt-2")}>
                <h4
                  className={cn(
                    "mb-5 text-sm font-bold tracking-widest uppercase",
                  )}
                >
                  Links
                </h4>
                <div className={cn(`flex items-center gap-3`)}>
                  <a
                    href={platformFacebookLink}
                    className={cn(
                      "hover:border-primary-500 hover:text-primary-500 flex size-10 items-center justify-center border border-black/10 transition-colors dark:border-white/10",
                    )}
                  >
                    <FaFacebook className={cn("size-4")} />
                  </a>

                  <a
                    href={platformInstagramLink}
                    className={cn(
                      "hover:border-primary-500 hover:text-primary-500 flex size-10 items-center justify-center border border-black/10 transition-colors dark:border-white/10",
                    )}
                  >
                    <FaInstagram className={cn("size-4")} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={cn(
            "text-foreground/60 flex flex-col gap-4 pt-6 text-sm md:flex-row md:items-center md:justify-between",
          )}
        >
          <p>© {new Date().getFullYear()} Handych. All rights reserved.</p>
          <p>
            Developed and maintained by{" "}
            <a
              href="https://github.com/nirvikpurkait"
              className={cn(`underline`)}
            >
              Nirvik Purkait
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
