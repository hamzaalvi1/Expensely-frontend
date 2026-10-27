export const authRoutes = {
    REGISTER: "/register",
    LOGIN: "/login",
    GET_ME: "/me",
  } as const;


export const categoriesRoutes = {
    GET_ALL: "/all",
    CREATE: "/create",
    UPDATE: "/update/{category_id}",
    DELETE: "/delete/{category_id}",
} as const;
