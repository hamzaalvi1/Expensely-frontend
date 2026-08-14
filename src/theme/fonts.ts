export const FontFamily = "Poppins, sans-serif";

export const FontFamilyMonospace =
  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

export const FontSizes = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  md: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "1.75rem", // 28px
  "4xl": "2rem", // 32px
  "5xl": "2.25rem", // 36px
  "6xl": "2.5rem", // 40px
} as const;

export const LineHeights = {
  tight: "1.2", 
  heading: "1.25",
  body: "1.5",
  relaxed: "1.6",
} as const;

export const FontWeights = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
} as const;

export const Headings = {
  fontFamily: FontFamily,
  fontWeight: FontWeights.bold,
  textWrap: "wrap",
} as const;
