import type { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useMatches } from "@remix-run/react";

import styles from "./styles/app.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "icon", href: "/images/favicon-32x32.png", type: "image/png", sizes: "32x32" },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Frontend Mentor Challenges",
  viewport: "width=device-width,initial-scale=1",
});

export default function App(): JSX.Element {
  const matches = useMatches();

  const includeScripts = matches.some((match) => match.handle?.hydrate);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        {includeScripts ? <Scripts /> : null}
        <LiveReload />
      </body>
    </html>
  );
}
