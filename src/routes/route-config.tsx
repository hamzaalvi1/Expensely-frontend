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
import { lazyRoute } from "./route-helpers";

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
              lazyRoute(LOGIN, "/src/pages/auth/login-page.tsx"),
              lazyRoute(REGISTER, "/src/pages/auth/signup-page.tsx"),
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
