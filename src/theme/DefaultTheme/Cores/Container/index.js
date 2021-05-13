import twConfig from "@/theme/tailwind-js";
const { screens, spacing, maxWidth } = twConfig.theme;

const container = {
  default: {
    maxWidth: maxWidth["screen-xl"],
    padding: spacing["12"],
  },
  sm: {
    breakpoint: screens["sm"],
    padding: spacing["12"],
  },
  md: {
    breakpoint: screens["md"],
    padding: spacing["12"],
  },
  lg: {
    breakpoint: screens["lg"],
    padding: spacing["12"],
  },
  xl: {
    breakpoint: screens["xl"],
    padding: spacing["12"],
  },
};

export default container;
