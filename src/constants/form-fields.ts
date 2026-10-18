export const loginFields = {
    EMAIL: "email",
    PASSWORD: "password",
    REMEMBER_ME: "rememberMe"
} as const;

export const signupFields = {
    NAME: "name",
    EMAIL: "email",
    PASSWORD: "password",
    CONFIRM_PASSWORD: "confirmPassword"
} as const;

export const categoryFormFields = {
    NAME: "name",
    TYPE: "type",
    ICON: "icon",
    COLOR: "color"
} as const;

export const transactionFormFields = {
    TYPE: "type",
    AMOUNT: "amount",
    DATE: "date",
    CATEGORY: "category",
    DESCRIPTION: "description",
    NOTES: "notes"
} as const;

export const budgetFormFields = {
    CATEGORY: "category",
    LIMIT: "limit",
    CYCLE: "cycle",
    ALERT_THRESHOLD: "alertThreshold"
} as const;
