export const ROUTES_PATHS = {
    ROOT: "/",
    LANGUAGE: ":lang",
    DASHBOARD: "dashboard",
    LOGIN: "login",
    REGISTER: "register",
    FORGOT_PASSWORD: "forgot-password",
} as const satisfies Record<string, string>;
