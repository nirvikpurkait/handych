import { Link } from "@tanstack/react-router";
import type { LinkProps } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
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
import { offeredServices, upcomingServices } from "@repo/data";

export function Footer({ className, ...props }: ComponentProps<"footer">) {
  const navigationItems = [
    {
      label: "Home",
      to: "/",
      hash: "",
    },
    {
      label: "Services",
      to: "/",
      hash: "services",
    },
    {
      label: "Why Handych",
      to: "/",
      hash: "why-handych",
    },
    {
      label: "About",
      to: "/",
      hash: "about",
    },
    {
      label: "Our Purpose",
      to: "/",
      hash: "our-purpose",
    },
  ] satisfies {
    label: string;
    to: LinkProps["to"];
    hash?: LinkProps["hash"];
  }[];

  return (
    <footer
      className={cn(
        "dark:bg-accent-50/5 border-t border-black/10 bg-white dark:border-white/10",
        className,
      )}
      {...props}
    >
      <div className={cn("mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8")}>
        {/* Main Footer */}
        <div className={cn("grid gap-10 md:grid-cols-2 lg:grid-cols-4")}>
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

          <div>
            {/* Navigation */}
            <div>
              <h4
                className={cn(
                  "mb-5 text-sm font-bold tracking-widest uppercase",
                )}
              >
                Navigation
              </h4>

              <div className={cn("flex flex-col gap-3")}>
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    hash={item.hash}
                    className={cn(
                      "text-foreground/70 hover:text-secondary-500 w-fit text-sm transition-colors",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className={cn("pt-4")}>
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

          {/* Services */}
          <div className={cn(`space-y-6`)}>
            <div>
              <h4
                className={cn(
                  "mb-5 text-sm font-bold tracking-widest uppercase",
                )}
              >
                Services
              </h4>

              <div className={cn("flex flex-col gap-3")}>
                {offeredServices.map(({ serviceName: service }) => (
                  <span
                    key={service}
                    className={cn("text-foreground/70 text-sm")}
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4
                className={cn(
                  "mb-5 text-sm font-bold tracking-widest uppercase",
                )}
              >
                More services
              </h4>

              <div className={cn("flex flex-col gap-3")}>
                {upcomingServices.map(({ serviceName: service }) => (
                  <span
                    key={service}
                    className={cn("text-foreground/70 text-sm")}
                  >
                    {service}
                  </span>
                ))}
              </div>
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

              <div className={cn(`size-40`)}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.0291018669686!2d88.43244467790743!3d22.980707864288973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f895a72348aca1%3A0xa838fa4bf478cef0!2sHandyCh!5e1!3m2!1sen!2sin!4v1784833197001!5m2!1sen!2sin"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={cn(`border-b border-black/10 py-12 dark:border-white/10`)}
        >
          <h2
            className={cn(
              `text-secondary-500 font-brand-secondary text-center text-lg`,
            )}
          >
            Caring for better living.
          </h2>
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
