export const InputTextComponent = {
  root: {
    background: "#ffffff",
    disabledBackground: "{surface.100}",
    borderColor: "{neutral.200}",
    hoverBorderColor: "{neutral.200}",
    focusBorderColor: "{primary.500}",
    invalidBorderColor: "{red.400}",
    color: "{text.color}",
    disabledColor: "{text.muted.color}",
    placeholderColor: "{surface.400}",
    invalidPlaceholderColor: "{red.600}",
    shadow: "none",
    fontSize: "0.75rem",
    fontWeight: "400",
    focusRing: {
      width: "0",
      style: "none",
      color: "transparent",
      offset: "0",
      shadow: "none",
    },
  },
  css: `
    .p-inputtext {
      height: 40px;
    }
  `,
};
