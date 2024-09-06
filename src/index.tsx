import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import App from '../../dashboard/src/app/app';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

reportWebVitals();
