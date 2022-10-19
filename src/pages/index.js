import React from 'react';

const Page = () => {
  return (
    <main>
      <h1>Page</h1>
      <time>{new Date().toLocaleDateString()}</time>
    </main>
  );
};

export default Page;
