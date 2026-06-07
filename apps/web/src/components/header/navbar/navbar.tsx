import { Link, useLocation } from "@tanstack/react-router";
import type { LinkProps } from "@tanstack/react-router";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { cn } from "@repo/styles/cn";
import { LogoIcon, LogoText } from "@repo/ui/logo";
import { useNavbarState } from "@/hooks/use-navstate";
import { platformMobileNo } from "@repo/utils/const";

const navigationItems = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Service",
    to: "/service",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
] satisfies {
  label: string;
  to: LinkProps["to"];
}[];

export function Navbar() {
  const { isNavOpen, closeNavBar, toggleNavBar } = useNavbarState();
  const { pathname } = useLocation();

  const pathnameFirstSlot = `/${pathname.split("/")[1]}`;

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
              "hidden items-center gap-1 rounded-none border border-black/10 bg-white px-2 py-2 lg:flex dark:border-white/10 dark:bg-white/5",
            )}
          >
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={cn(
                  "text-foreground/70 hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-950 px-4 py-2 text-sm font-medium transition-all",
                  {
                    "bg-primary-500 text-white": pathnameFirstSlot === item.to,
                  },
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className={cn("hidden items-center gap-3 lg:flex")}>
            <a
              href={`tel:+91${platformMobileNo}`}
              className={cn(
                "border-primary-200 bg-primary-50 bg-primary-500 hover:bg-primary-600 dark:border-primary-900 dark:bg-primary-950 dark:text-primary-300 flex items-center gap-2 border px-4 py-3 text-sm font-semibold text-white transition-colors",
              )}
            >
              <Phone className={cn("size-4")} />
              +91 {platformMobileNo}
            </a>
          </div>

          {/* Mobile Trigger */}
          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={toggleNavBar}
            className={cn(
              "flex size-11 items-center justify-center border border-black/10 bg-white lg:hidden dark:border-white/10 dark:bg-white/5",
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
                onClick={closeNavBar}
                className={cn(
                  "flex items-center justify-between border-b border-black/5 py-4 text-sm font-medium dark:border-white/5",
                  {
                    "bg-primary-500 text-white": pathnameFirstSlot === item.to,
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
              href="tel:+919999999999"
              className={cn(
                "border-primary-200 bg-primary-500 dark:border-primary-900 dark:bg-primary-950 dark:text-primary-300 flex w-full items-center justify-center gap-2 border px-4 py-3 font-semibold text-white",
              )}
            >
              <Phone className={cn("size-4")} />
              +91 98765 43210
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
