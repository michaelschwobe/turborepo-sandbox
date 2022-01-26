import { Button } from '@acme/core';
// import { useCatch } from 'remix';

import type {
  // ActionFunction,
  // HeadersFunction,
  // LinksFunction,
  // LoaderFunction,
  MetaFunction,
} from 'remix';

// -----------------------------------------------------------------------------

// export const loader: LoaderFunction = async ({ params, request, context }) => {};

// export const action: ActionFunction = async ({ params, request, context }) => {};

// export const headers: HeadersFunction = ({ loaderHeaders, parentHeaders }) => {};

// export const handle = {};

export const meta: MetaFunction = () => {
  return { title: 'HomePage' };
};

// export const links: LinksFunction = () => {
//   return [{ rel: 'stylesheet', href: homePageStyles }];
// };

// -----------------------------------------------------------------------------

export default function HomePage() {
  return (
    <main>
      <h1>HomePage</h1>
      <p>TBD</p>
      <Button>Button</Button>
    </main>
  );
}

// export function CatchBoundary() {
//   const caught = useCatch();
//   let message;
//   switch (caught.status) {
//     case 401:
//       message =
//         'Oops! Looks like you tried to visit a page that you do not have access to.';
//       break;
//     case 404:
//       message =
//         'Oops! Looks like you tried to visit a page that does not exist.';
//       break;
//     default:
//       // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
//       throw new Error(caught.data || caught.statusText);
//   }
//   return (
//     <>
//       <h1>
//         {caught.status}: {caught.statusText}
//       </h1>
//       <p>{message}</p>
//     </>
//   );
// }

// export function ErrorBoundary({ error }: { error: Error }) {
//   console.error(error);
//   return (
//     <>
//       <h1>Oops! Looks like something went wrong.</h1>
//       <p>{error.message}</p>
//       {process.env.NODE_ENV === 'development' && (
//         <pre
//           style={{
//             fontSize: '10px',
//             padding: '1em',
//             border: '1px dashed',
//             overflow: 'auto',
//           }}
//         >
//           {JSON.stringify(error.stack, null, 2)}
//         </pre>
//       )}
//     </>
//   );
// }
