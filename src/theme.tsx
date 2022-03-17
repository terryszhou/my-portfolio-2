import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode, Styles } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const styles: Styles = {
  global: props => ({
    body: {
      bg: mode("rgb(230,230,230)", "rgb(27,32,43)")(props),
    },
  }),
};

export const theme = extendTheme({
  fonts: {
    mono: "'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace",
    nunito: "'Nunito', sans-serif",
    roboto: "'Roboto', sans-serif",
  },
  config,
  styles,
});
