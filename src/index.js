import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './core/App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ContactPage } from './features/DobermanClubShop/SubPages/ContactPage';
import { RegulationsPage } from './features/DobermanClubShop/SubPages/RegulationsPage';
import { RefundPage } from "./features/DobermanClubShop/SubPages/RefundPage";
import { PolicyPrivacyPage } from "./features/DobermanClubShop/SubPages/PolicyPrivacyPage";
import GlobalStyle from './core/App/GlobalStyle';
import { Normalize } from 'styled-normalize';


const router = createBrowserRouter([
  {
    path: "/DobermanClubShop",
    element: <App />,
  },
  {
    path: "/DobermanClubShop/kontakt",
    element: <ContactPage />

  },
  {
    path: "/DobermanClubShop/regulamin",
    element: <RegulationsPage />
  },
  {
    path: "/DobermanClubShop/zwroty-reklamacje",
    element: <RefundPage />
  },
  {
    path: "/DobermanClubShop/polityka-prywatnosci",
    element: <PolicyPrivacyPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle/>
    <Normalize/>
  </React.StrictMode>
);
