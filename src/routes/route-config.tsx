import {
  authenticatedOnlyLoader,
  guestOnlyLoader,
  languageLoader,
  rootLoader,
} from "./route-loaders";
import App from "../App";
import { type RouteObject } from "react-router-dom";
import { ROUTES_PATHS } from "../constants/routes";
import AuthLayout from "../layouts/auth-layouts";
import { Login } from "../pages/auth/login";

const { ROOT, LANGUAGE, DASHBOARD, LOGIN } = ROUTES_PATHS;

export const routeConfig: RouteObject[] = [
  {
    path: ROOT,
    element: <App />,
    children: [
      {
        index: true,
        loader: rootLoader,
      },
      {
        path: `${LANGUAGE}?`,
        loader: languageLoader,
        children: [
          {
            element: <AuthLayout />,
            loader: guestOnlyLoader,
            children: [
              {
                path: LOGIN,
                element: <Login />,
              },
            ],
          },
          {
            path: DASHBOARD,
            loader: authenticatedOnlyLoader,
          },
        ],
      },
    ],
  },
];
