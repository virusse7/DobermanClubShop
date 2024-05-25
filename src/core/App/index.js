import React from 'react';
import GlobalStyle from './GlobalStyle';
import { Normalize } from 'styled-normalize';
import { DobermanClubShop } from '../../features/DobermanClubShop';

export const App = () => {
  return (
    <React.StrictMode>
      <Normalize />
      <GlobalStyle />
      <DobermanClubShop />
    </React.StrictMode>
  );
}
