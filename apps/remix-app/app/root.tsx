import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import globalStylesUrl from '~/styles/global.css';

import type { LinksFunction, MetaFunction } from '@remix-run/node';

// -----------------------------------------------------------------------------

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'remix-app',
  viewport: 'width=device-width,initial-scale=1',
});

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: globalStylesUrl }];
};

// -----------------------------------------------------------------------------

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
