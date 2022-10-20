import React from 'react';

import { useHydrationSafeDate } from '../hooks/use-hydration-safe-date';

const Page = () => {
  const date = useHydrationSafeDate(new Date());

  return (
    <main>
      <h1>Page</h1>
      <time>{date}</time>
    </main>
  );
};

export default Page;
