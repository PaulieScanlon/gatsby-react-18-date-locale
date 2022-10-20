import React from 'react';

const Page = () => {
  return (
    <main>
      <h1>Page</h1>
      <time>{new Date().toLocaleDateString(undefined, { second: undefined })}</time>
    </main>
  );
};

export default Page;
