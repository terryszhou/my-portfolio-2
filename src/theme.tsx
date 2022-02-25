import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

export const theme = extendTheme({
  fonts: {
    mono: "'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace",
    nunito: "'Nunito', sans-serif",
    roboto: "'Roboto', sans-serif",
  },
  config,
});
