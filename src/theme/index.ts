import { createTheme } from "@mantine/core";
import { Shadows } from "./shadows";
import { Spacing } from "./spacing";
import { Radius } from "./radius";

import { Breakpoints } from "./breakpoints";
import {
  Base,
  MantinePrimary,
  MantineSecondary,
  Neutral,
  Secondary,
  Text,
} from "./colors";
import {
  FontFamily,
  FontFamilyMonospace,
  FontSizes,
  FontWeights,
  Headings,
  LineHeights,
} from "./fonts";

export const theme = createTheme({
  primaryColor: "primary",
  primaryShade: 5,

  colors: {
    primary: MantinePrimary,
    secondary: MantineSecondary,
  },

  white: Base.white,
  black: Base.black,

  fontFamily: FontFamily,
  fontFamilyMonospace: FontFamilyMonospace,
  fontSizes: FontSizes,
  lineHeights: LineHeights,
  fontWeights: FontWeights,
  headings: Headings,
  breakpoints: Breakpoints,
  shadows: Shadows,
  spacing: Spacing,
  radius: Radius,

  defaultRadius: "sm",
  focusRing: "auto",
  cursorType: "pointer",
  respectReducedMotion: true,

  other: {  
    colors: {
      secondary: Secondary[50],
      secondaryHover: Secondary[100],
      neutralBorder: Neutral[200],
    },
    text: Text,
  },
});
