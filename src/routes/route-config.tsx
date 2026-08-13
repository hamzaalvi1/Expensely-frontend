import {
  authenticatedOnlyLoader,
  guestOnlyLoader,
  languageLoader,
  rootLoader,
} from "./route-loaders";
import App from "../App";
import { type RouteObject } from "react-router-dom";
import { ROUTES_PATHS } from "../constants/routes";

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
            loader: guestOnlyLoader,
            lazy: async () => {
              const { default: Component } = await import("../layouts/auth-layouts");

              return { Component };
            },
            children: [
              {
                path: LOGIN,
                lazy: async () => {
                  const { Login: Component } = await import("../pages/auth/login");

                  return { Component };
                },
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
