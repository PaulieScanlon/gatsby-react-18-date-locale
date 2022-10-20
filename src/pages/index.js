import React, { Suspense } from 'react';

const Page = () => {
  return (
    <main>
      <h1>Page</h1>
      <time>
        <Suspense fallback={null}>{new Date().toLocaleDateString()}</Suspense>
      </time>
    </main>
  );
};

export default Page;
