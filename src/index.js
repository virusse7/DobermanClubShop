import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './core/App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ContactPage } from './features/DobermanClubShop/ContactPage';
import { RegulationsPage } from './features/DobermanClubShop/RegulationsPage';
import { RefundPage } from "./features/DobermanClubShop/RefundPage";
import { PolicyPrivacyPage } from "./features/DobermanClubShop/PolicyPrivacyPage";


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
  </React.StrictMode>
);
