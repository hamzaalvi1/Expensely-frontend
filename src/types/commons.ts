import type { LANGUAGES } from "@/constants/lang";

// Reusable TypeScript type: "en" | "ar"
export type SupportedLanguage = typeof LANGUAGES[keyof typeof LANGUAGES];
