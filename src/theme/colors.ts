export const Primary = {
  50: "#e6f3f2",
  100: "#95f3ec",
  200: "#82f5ef",
  300: "#82f5ef",
  400: "#0f9f9a",
  500: "#006764",
  600: "#005d51",
  700: "#005249",
  800: "#00483f",
  900: "#003d35",
  950: "#002b26",
} as const;

export const MantinePrimary = [
  Primary[50],
  Primary[100],
  Primary[200],
  Primary[300],
  Primary[400],
  Primary[500],
  Primary[600],
  Primary[700],
  Primary[800],
  Primary[900],
  Primary[950],
] as const;

export const Secondary = {
  50: "#F1F3FF",
  100: "#E1E8FD",
} as const;

export const Neutral = {
  200: "#E5E7EB",
} as const;

export const Text = {
  primary: "#0f172a",
  body: "#334155",
  muted: "#64748b",
  subtle: "#6b7280",
  hover: "#1e293b",
  disabled: "#94a3b8",
  inverse: "#ffffff",
} as const;

export const Base = {
  white: "#ffffff",
  black: "#0f172a",
} as const;
