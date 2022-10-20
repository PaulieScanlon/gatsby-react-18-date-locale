import React from 'react';

const Page = () => {
  return (
    <main>
      <h1>Page</h1>
      <time>{Intl.DateTimeFormat(undefined, { dateStyle: 'short', timeStyle: 'short' }).format().split(',')[0]}</time>
    </main>
  );
};

export default Page;
