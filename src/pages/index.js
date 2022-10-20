import React, { useRef } from 'react';

const Page = () => {
  const time = useRef(null);

  return (
    <main>
      <h1>Page</h1>
      <time ref={time}>{time ? new Date().toLocaleDateString() : null}</time>
    </main>
  );
};

export default Page;
