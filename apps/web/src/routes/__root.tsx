import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { DevTools } from "@/integrations/tanstack/devtools";
import appCss from "../styles.css?url";
import type { QueryClient } from "@tanstack/react-query";
// import { ThemeProvider } from "@/integrations/theme/theme-provider";
import { cn } from "@repo/styles/cn";
import { Header } from "@/components/header/header";
import NotFoundPage from "@/components/main/not-found";
import { Footer } from "@/components/footer/footer";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "description",
        content: "A housekeeping service providing company.",
      },
      {
        title: "Handych",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playwrite+NZ:wght@100..400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      },
    ],
  }),

  shellComponent: RootDocument,

  notFoundComponent: () => <NotFoundPage />,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body
        className={cn(
          `flex max-w-svw flex-col overflow-x-clip overflow-y-auto`,
        )}
      >
        <Header />
        {children}
        {/* <ThemeProvider>{children}</ThemeProvider> */}
        <Footer />
        <DevTools />
        <Scripts />
      </body>
    </html>
  );
}
