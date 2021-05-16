import twConfig from "../../../tailwind-js";
const { screens, spacing } = twConfig.theme;

const container = {
  default: {
    maxWidth: screens["xl"],
    padding: spacing["4"],
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
    padding: spacing["8"],
  },
  xl: {
    breakpoint: screens["xl"],
    padding: spacing["12"],
  },
  xxl: {
    breakpoint: screens["xxl"],
    padding: spacing["0"],
  },
};

export default container;
