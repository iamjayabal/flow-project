'use client';

import { Provider, useSelector } from 'react-redux';
import Template from './index';
import store from '@_store/index';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Provider store={store}>
        <Template />
      </Provider>
    </main>
  );
}
