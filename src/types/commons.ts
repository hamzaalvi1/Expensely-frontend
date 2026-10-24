import type { LANGUAGES } from "@/constants/lang";

// Reusable TypeScript type: "en" | "ar"
export type SupportedLanguage = typeof LANGUAGES[keyof typeof LANGUAGES];

export type Headers = Record<string, string>;
export type QueryParams = Record<string, string>;