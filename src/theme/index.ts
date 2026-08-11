import { definePreset } from "@primeuix/themes";
import AuraTheme from "@primeuix/themes/aura";
import "./root.css";
import { Neutral, Primary, Secondary } from "./colors";
import { Typography } from "./typography";
import { FormField, FocusRing, List, Navigation, Overlay } from "./misc";
import { ButtonComponent } from "./components/button";
import { BadgeComponent } from "./components/badge";
import { CardComponent } from "./components/card";
import { ColorSchemeLight } from "./color-scheme";

export const Aura = definePreset(AuraTheme, {
  semantic: {
    transitionDuration: "0.2s",
    disabledOpacity: "0.6",
    iconSize: "0.875rem",
    anchorGutter: "2px",
    typography: Typography,
    primary: Primary,
    formField: FormField,
    focusRing: FocusRing,
    list: List,
    navigation: Navigation,
    overlay: Overlay,
    colorScheme: {
      light: ColorSchemeLight,
    },
  },
  components: {
    badge: BadgeComponent,
    button: ButtonComponent,
    card: CardComponent,
  },
  extend: {
    secondary: Secondary,
    neutral: Neutral,
  },
});
