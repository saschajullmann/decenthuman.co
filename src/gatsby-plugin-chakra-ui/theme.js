import theme from "@chakra-ui/theme";

const customTheme = {
  ...theme,
  styles: {
    ...theme.styles,
    global: {
      bg: "orange.50",
    },
  },
};

export default customTheme;
