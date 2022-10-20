import React from 'react';
import { AppContext } from '../context/app-context';

const Page = () => {
  return (
    <main>
      <h1>Page</h1>
      <time>
        <AppContext.Consumer>
          {({ hydrated }) => {
            return hydrated ? new Date().toLocaleDateString() : '';
          }}
        </AppContext.Consumer>
      </time>
    </main>
  );
};

export default Page;
