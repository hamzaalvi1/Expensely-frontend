export const ROUTES_PATHS = {
    ROOT: "/",
    LANGUAGE: ":lang",
    // Auth routes
    LOGIN: "login",
    REGISTER: "register",
    FORGOT_PASSWORD: "forgot-password",
    // Dashboard routes
    DASHBOARD: "dashboard",
    TRANSACTIONS: "transactions",
    TRANSACTION_DETAILS: "transactions/:transactionId",
    CATEGORIES: "categories",
    BUDGETS: "budgets",
    AI_INSIGHTS: "ai-insights",
    SETTINGS: "settings",
} as const satisfies Record<string, string>;
