import { createBrowserRouter, Navigate } from "react-router-dom";
import {
  AboutPage,
  ContactPage,
  LandingPagesection,
  NotFoundpage,
} from "../pages/index.js";
const routes = [
  {
    children: [
      {
        path: "/",
        element: <Navigate to="/LandingPage" replace />,
      },
      {
        path: "/LandingPage",
        element: <LandingPagesection />,
      },
      {
        path: "/About",
        element: <AboutPage />,
      },
      {
        path: "/Contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundpage />,
  },
];

const Router = createBrowserRouter(routes);

export default Router;
