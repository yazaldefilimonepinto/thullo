import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouteWeb } from '@/main/routes';
import '@/shared/scss/styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouteWeb />
  </React.StrictMode>,
);
