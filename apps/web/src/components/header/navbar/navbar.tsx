import { Link, useLocation } from "@tanstack/react-router";
import type { LinkProps } from "@tanstack/react-router";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@repo/styles/cn";
import { LogoIcon, LogoText } from "@repo/ui/logo";
import { useNavbarState } from "@/hooks/use-navstate";
import { platformMobileNo } from "@repo/utils/const";
import { FaWhatsapp } from "react-icons/fa";

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

export function Navbar() {
  const { isNavOpen, closeNavBar, toggleNavBar } = useNavbarState();
  const { hash } = useLocation();

  return (
    <>
      {/* Main Navigation */}
      <nav
        aria-label="Primary navigation"
        className={cn(
          "bg-background/80 sticky top-0 z-50 border-b border-black/10 backdrop-blur-xl dark:border-white/10",
        )}
      >
        <div
          className={cn(
            "mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
          )}
        >
          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "flex shrink-0 items-center gap-3 transition-opacity hover:opacity-80",
            )}
          >
            <LogoIcon className={cn(`h-10 w-10`)} />
            <LogoText className={cn(`h-10 w-30 max-sm:hidden`)} />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Desktop navigation"
            className={cn(
              "hidden items-center gap-1 rounded-none px-2 py-2 lg:flex",
            )}
          >
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                className={cn("px-4 py-2 text-sm font-medium transition-all", {
                  "decoration-secondary-500 text-secondary-500 underline underline-offset-8":
                    hash === item.hash,
                })}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className={cn("hidden items-center gap-3 lg:flex")}>
            <a
              href={`https://wa.me/${platformMobileNo}`}
              target="_blank"
              className={cn(
                "dark:border-secondary-500 dark:bg-secondary-500 dark:text-primary-500 flex items-center gap-2 rounded-md border px-4 py-3 text-sm font-semibold transition-colors",
              )}
            >
              Book On Whatsapp
              <FaWhatsapp className={cn("size-5")} />
            </a>
          </div>

          {/* Mobile Trigger */}
          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={toggleNavBar}
            className={cn(
              "flex size-11 items-center justify-center rounded-sm border border-black/10 bg-white lg:hidden dark:border-white/10 dark:bg-white/5",
            )}
          >
            {isNavOpen ? (
              <X className={cn("size-5")} />
            ) : (
              <Menu className={cn("size-5")} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          isNavOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        {/* Backdrop */}
        <div
          onClick={closeNavBar}
          className={cn(
            "absolute inset-0 bg-black/40 transition-opacity",
            isNavOpen ? "opacity-100" : "opacity-0",
          )}
        />

        {/* Drawer */}
        <div
          className={cn(
            "bg-background absolute top-0 right-0 flex h-full w-full max-w-sm flex-col border-l border-black/10 transition-transform duration-300 dark:border-white/10",
            isNavOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div
            className={cn(
              "flex h-18 items-center justify-between border-b border-black/10 px-4 dark:border-white/10",
            )}
          >
            <div className={cn("flex items-center gap-3")}>
              <Link
                to="/"
                className={cn(
                  "flex shrink-0 items-center gap-3 transition-opacity hover:opacity-80",
                )}
              >
                <LogoIcon className={cn(`h-10 w-10`)} />
                <LogoText className={cn(`h-10 w-30 max-sm:hidden`)} />
              </Link>
            </div>

            <button
              onClick={closeNavBar}
              className={cn(
                "flex size-10 items-center justify-center border border-black/10 dark:border-white/10",
              )}
            >
              <X className={cn("size-5")} />
            </button>
          </div>

          <nav
            className={cn("flex flex-col p-4")}
            aria-label="Mobile navigation"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                onClick={closeNavBar}
                className={cn(
                  "flex min-h-10 items-center justify-between text-sm font-medium",
                  {
                    "decoration-secondary-500 text-secondary-500 underline underline-offset-8":
                      hash === item.hash,
                  },
                )}
              >
                {item.label}
                <ChevronRight className={cn("size-4 opacity-50")} />
              </Link>
            ))}
          </nav>

          <div
            className={cn(
              "mt-auto space-y-3 border-t border-black/10 p-4 dark:border-white/10",
            )}
          >
            <a
              href={`https://wa.me/${platformMobileNo}`}
              target="_blank"
              className={cn(
                "dark:border-secondary-500 dark:bg-secondary-500 dark:text-primary-500 flex items-center justify-center gap-2 rounded-md border px-4 py-3 text-sm font-semibold transition-colors",
              )}
            >
              Book On Whatsapp
              <FaWhatsapp className={cn("size-5")} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
