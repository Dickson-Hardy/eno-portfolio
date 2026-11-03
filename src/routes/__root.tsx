import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0B0A12" },
      { title: "Eno Osuji — Backend Engineer | APIs & Distributed Systems" },
      {
        name: "description",
        content:
          "Portfolio of Eno Osuji, a backend engineer specializing in high-performance APIs, distributed systems, reliable server-side architectures, and database design.",
      },
      {
        name: "keywords",
        content:
          "Eno Osuji, Backend Engineer, API Design, Distributed Systems, Node.js, Go, Python, PostgreSQL, Docker, Redis, Port Harcourt, Software Engineer, System Architecture",
      },
      { name: "author", content: "Eno Osuji" },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "Eno Osuji — Backend Engineer" },
      { property: "og:title", content: "Eno Osuji — Backend Engineer | APIs & Distributed Systems" },
      {
        property: "og:description",
        content:
          "Portfolio of Eno Osuji, a backend engineer specializing in high-performance APIs, distributed systems, and reliable server architectures.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pro-code-port.lovable.app" },
      { property: "og:image", content: "https://pro-code-port.lovable.app/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Eno Osuji — Backend Engineer Portfolio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Eno Osuji — Backend Engineer | APIs & Distributed Systems" },
      {
        name: "twitter:description",
        content:
          "Portfolio of Eno Osuji, a backend engineer specializing in high-performance APIs, distributed systems, and reliable server architectures.",
      },
      { name: "twitter:image", content: "https://pro-code-port.lovable.app/og-image.png" },
      { name: "twitter:image:alt", content: "Eno Osuji — Backend Engineer Portfolio" },
    ],
    links: [
      { rel: "canonical", href: "https://pro-code-port.lovable.app/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Eno Osuji",
          jobTitle: "Backend Engineer",
          url: "https://pro-code-port.lovable.app",
          image: "https://pro-code-port.lovable.app/avatar.png",
          email: "mailto:enoosuji@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Port Harcourt",
            addressCountry: "Nigeria",
          },
          knowsAbout: [
            "Backend Engineering",
            "REST APIs",
            "GraphQL",
            "Distributed Systems",
            "PostgreSQL",
            "Redis",
            "Docker",
            "Node.js",
            "Python",
            "Go",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
