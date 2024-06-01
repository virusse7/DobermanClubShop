import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './core/App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Contact } from './features/Contact';

const router = createBrowserRouter([
  {
    path: "/DobermanClubShop",
    element: <App />,
  },
  {
    path: "/DobermanClubShop/kontakt",
    element: <Contact />

  },
  // {
  //   path: "/DobermanClubShop/regulamin",
  //   element: <Regulations />
  // },
  // {
  //   path: "/DobermanClubShop/zwroty-reklamacje",
  //   element: <Refund />
  // },
  // {
  //   path: "/DobermanClubShop/polityka-prywatnosci",
  //   element: <PolicePrivacy />
  // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
