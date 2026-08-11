export const BadgeComponent = {
  root: {
    borderRadius: "{border.radius.lg}",
    padding: "0 0.375rem",
    fontSize: "0.625rem",
    fontWeight: "500",
    minWidth: "1.25rem",
    height: "1.25rem",
  },
  dot: {
    size: "0.5rem",
  },
  sm: {
    fontSize: "0.5rem",
    minWidth: "1.125rem",
    height: "1.125rem",
  },
  lg: {
    fontSize: "0.75rem",
    minWidth: "1.5rem",
    height: "1.5rem",
  },
  xl: {
    fontSize: "0.875rem",
    minWidth: "1.75rem",
    height: "1.75rem",
  },
  primary: {
    background: "{primary.color}",
    color: "{primary.contrast.color}",
  },
  secondary: {
    background: "light-dark({surface.100}, {surface.800})",
    color: "light-dark({surface.600}, {surface.300})",
  },
  success: {
    background: "light-dark({green.500}, {green.400})",
    color: "light-dark({surface.0}, {green.950})",
  },
  info: {
    background: "light-dark({sky.500}, {sky.400})",
    color: "light-dark({surface.0}, {sky.950})",
  },
  warn: {
    background: "light-dark({orange.500}, {orange.400})",
    color: "light-dark({surface.0}, {orange.950})",
  },
  danger: {
    background: "light-dark({red.500}, {red.400})",
    color: "light-dark({surface.0}, {red.950})",
  },
  contrast: {
    background: "light-dark({surface.950}, {surface.0})",
    color: "light-dark({surface.0}, {surface.950})",
  },
};
