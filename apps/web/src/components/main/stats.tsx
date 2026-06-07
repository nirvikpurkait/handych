import { cn } from "@/lib/utils";
import { stat } from "@repo/data";
import type { ComponentProps } from "react";

export function Stats({ className, ...props }: ComponentProps<"section">) {
  return (
    <section
      className={cn("bg-primary-500 py-24 text-white", className)}
      {...props}
    >
      <div
        className={cn(
          "mx-auto grid max-w-7xl gap-8 px-4 text-center md:grid-cols-2 lg:grid-cols-4 lg:px-8",
        )}
      >
        {stat.map(({ counter, label }) => (
          <div key={label}>
            <h3 className={cn("text-6xl font-black text-white")}>{counter}</h3>

            <p className={cn("mt-3 text-white/50")}>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
