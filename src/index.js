import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './core/App';
import GlobalStyle from './core/App/GlobalStyle';
import { Normalize } from 'styled-normalize';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
