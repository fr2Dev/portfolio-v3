import React, { Suspense } from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import { SuspenseLoader } from './components';
import * as serviceWorker from './serviceWorker';
import './i18n';

const rootElement = document.getElementById('root');
const APP = (
  <React.StrictMode>
    <Suspense fallback={<SuspenseLoader />}>
      <App />
    </Suspense>
  </React.StrictMode>
);

if (rootElement?.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
