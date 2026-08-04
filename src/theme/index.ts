import { definePreset } from "@primeuix/themes";
import AuraTheme from "@primeuix/themes/aura";
import "./root.css";
import { Primary } from "./colors";
import { Typography } from "./typography";
import { FormField, FocusRing, List, Navigation, Overlay } from "./misc";
import { ButtonComponent } from "./components/button";
import { ColorSchemeDark, ColorSchemeLight } from "./color-scheme";

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
      dark: ColorSchemeDark,
    },
  },
  components: {
    button: ButtonComponent,
  },
});
