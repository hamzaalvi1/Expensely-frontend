import {
  authenticatedOnlyLoader,
  guestOnlyLoader,
  languageLoader,
  rootLoader,
} from "./route-loaders";
import App from "@/App";
import { type RouteObject } from "react-router-dom";
import { ROUTES_PATHS } from "@/constants/routes";
import AuthLayout from "@/layouts/auth-layouts";
import { LoginPage } from "@/pages/auth/login-page";
import { SignupPage } from "@/pages/auth/signup-page";

const { ROOT, LANGUAGE, DASHBOARD, LOGIN, REGISTER } = ROUTES_PATHS;

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
            loader: guestOnlyLoader,
            Component: AuthLayout,
            children: [
              {
                path: LOGIN,
                Component: LoginPage,
              },
              {
                path: REGISTER,
                Component: SignupPage,
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
