export const ROUTES_PATHS = {
    ROOT: "/",
    LANGUAGE: ":lang",
    DASHBOARD: "dashboard",
    LOGIN: "login",
    REGISTER: "register",
} as const satisfies Record<string, string>;
