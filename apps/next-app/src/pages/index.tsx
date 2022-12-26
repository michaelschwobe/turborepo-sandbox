import { Button } from '@acme/core';
import Head from 'next/head';

import type { NextPage } from 'next';

// -----------------------------------------------------------------------------

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>next-app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>HomePage</h1>
        <p>TBD</p>
        <Button>Button</Button>
      </main>
    </div>
  );
};

export default HomePage;
