import React from 'react';
import { DobermanClubShop } from '../../features/DobermanClubShop';
import { 
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

export const App = () => {
  return (
    <React.StrictMode>
      <DobermanClubShop/>
    </React.StrictMode>
  );
}
