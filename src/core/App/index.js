import React from 'react';
import { DobermanClubShop } from '../../features/DobermanClubShop';
import GlobalStyle from './GlobalStyle';
import { Normalize } from 'styled-normalize';

export const App = () => {
  return (
    <React.StrictMode>
      <Normalize />
      <GlobalStyle />
      <DobermanClubShop />
    </React.StrictMode>
  );
}
