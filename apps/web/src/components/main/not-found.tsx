import { Link } from "@tanstack/react-router";
import { ArrowLeft, Home, Search } from "lucide-react";
import { cn } from "@repo/styles/cn";
import type { ComponentProps } from "react";

export default function NotFoundPage({
  className,
  ...props
}: ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden",
        className,
      )}
      {...props}
    >
      {/* Background Decoration */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary-100),transparent_40%)] dark:bg-[radial-gradient(circle_at_top_right,var(--color-primary-950),transparent_40%)]",
        )}
      />

      <div
        aria-hidden
        className={cn(
          "border-secondary-200 dark:border-secondary-900 absolute top-20 -left-32 h-64 w-64 border",
        )}
      />

      <div
        aria-hidden
        className={cn(
          "border-secondary-300 dark:border-secondary-800 absolute -right-24 bottom-20 h-56 w-56 border",
        )}
      />

      <div
        className={cn(
          "relative mx-auto flex w-full max-w-7xl flex-col px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8",
        )}
      >
        {/* Left Content */}
        <div className={cn("max-w-2xl")}>
          <div
            className={cn(
              "border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-900 dark:bg-primary-950 dark:text-primary-300 mb-6 inline-flex items-center gap-2 border px-4 py-2 text-sm font-medium",
            )}
          >
            Error 404
          </div>

          <h1
            className={cn(
              "font-brand-secondary text-primary-500 text-6xl leading-none font-bold tracking-tight sm:text-7xl lg:text-8xl",
            )}
          >
            Page
            <br />
            Not Found
          </h1>

          <p
            className={cn(
              "text-primary-500/50 mt-6 max-w-xl text-base leading-7 sm:text-lg",
            )}
          >
            The page you are looking for does not exist, may have been moved, or
            the URL may be incorrect.
          </p>

          <div
            className={cn(
              "mt-10 flex flex-col gap-3 sm:flex-row sm:items-center",
            )}
          >
            <Link
              to="/"
              className={cn(
                "bg-primary-500 hover:bg-primary-600 inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white transition-colors",
              )}
            >
              <Home className={cn("size-4")} />
              Back To Home
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className={cn(
                "bg-background inline-flex items-center justify-center gap-2 border border-black/10 px-6 py-4 text-sm font-semibold transition-colors hover:bg-black/3 dark:border-white/10 dark:hover:bg-white/3",
              )}
            >
              <ArrowLeft className={cn("size-4")} />
              Go Back
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className={cn("mt-16 flex justify-center lg:mt-0 lg:justify-end")}>
          <div
            className={cn(
              "dark:bg-accent-50/5 relative flex h-80 w-[320px] items-center justify-center border border-black/10 bg-white sm:h-105 sm:w-105 dark:border-white/10",
            )}
          >
            <div
              className={cn(
                "border-primary-200 dark:border-primary-900 absolute inset-6 border border-dashed",
              )}
            />

            <div
              className={cn(
                "border-secondary-200 dark:border-secondary-900 absolute inset-12 border",
              )}
            />

            <div
              className={cn(
                "relative flex flex-col items-center justify-center",
              )}
            >
              <Search
                className={cn("text-primary-500 mb-4 size-16 sm:size-20")}
              />

              <span
                className={cn(
                  "text-primary-500 text-8xl leading-none font-black sm:text-9xl",
                )}
              >
                404
              </span>

              <span
                className={cn(
                  "text-foreground/50 mt-3 text-sm font-medium tracking-[0.3em] uppercase",
                )}
              >
                Not Found
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
