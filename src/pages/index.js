import React from 'react';

import { useSafeDate } from '../hooks/use-safe-date';

const Page = () => {
  const date = useSafeDate(new Date());

  return (
    <main>
      <h1>Page</h1>
      <time>{date}</time>
    </main>
  );
};

export default Page;
