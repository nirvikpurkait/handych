import { cn } from "@repo/styles/cn";
import type { ComponentProps } from "react";
import { Navbar } from "./navbar/navbar";

export function Header({ className, ...props }: ComponentProps<"header">) {
  return (
    <header className={cn(``, className)} {...props}>
      <Navbar />
    </header>
  );
}
