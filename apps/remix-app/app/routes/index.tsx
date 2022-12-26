import { Button } from '@acme/core';

import type { MetaFunction } from '@remix-run/node';

// -----------------------------------------------------------------------------

export const meta: MetaFunction = () => {
  return { title: 'remix-app' };
};

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
