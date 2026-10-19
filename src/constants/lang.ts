export const LANGUAGES = {
  EN: "en",
  AR: "ar",
} as const;

export const LANGUAGE_OPTIONS = [
  { value: LANGUAGES.EN, label: "English" },
  { value: LANGUAGES.AR, label: "العربية" },
] as const;

export const DEFAULT_LANGUAGE = LANGUAGES.EN;
