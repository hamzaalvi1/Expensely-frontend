export const FontFamily = "Poppins, sans-serif";

export const FontFamilyMonospace =
  "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";

export const FontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
} as const;

export const LineHeights = {
  xs: "1.2",
  sm: "1.3",
  md: "1.5",
  lg: "1.5",
  xl: "1.6",
} as const;

export const FontWeights = {
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
} as const;

export const Headings = {
  fontFamily: FontFamily,
  fontWeight: FontWeights.semibold,
  textWrap: "wrap",
} as const;
