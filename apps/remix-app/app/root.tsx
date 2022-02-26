import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';

import globalStylesUrl from '~/styles/global.css';

import type { LinksFunction, MetaFunction } from 'remix';

// -----------------------------------------------------------------------------

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' };
};

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: globalStylesUrl }];
};

// -----------------------------------------------------------------------------

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
