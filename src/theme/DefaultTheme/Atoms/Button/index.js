import cores from "../../Cores";
import twConfig from "../../tailwind-js";

const { typography } = cores;
const { colors, spacing, borderRadius } = twConfig.theme;

// Lequ Button
const lequYellow = {
  default: {
    typography: typography.text.button,
    textTransform: "none",
    padding: `${spacing["2"]} ${spacing["12"]}`,
    borderRadius: borderRadius.full,
    color: "#2a2a2a",
    backgroundColor: "#ffed76",
    fontSize: "16px",
  },
  hover: {
    color: "#2a2a2a",
    backgroundColor: "#c5a730",
  },
  disabled: {
    color: "#2a2a2a",
    backgroundColor: colors.base.grey["300"],
  },
};

const button = {
  default: {
    padding: `${spacing["3"]} ${spacing["5"]}`,
    typography: typography.text.button,
    textTransform: "uppercase",
    borderRadius: spacing["2"],
  },
  primary: {
    default: {
      color: colors.base.white,
      backgroundColor: colors.primary["slime-light"],
    },
    hover: {
      color: colors.base.white,
      backgroundColor: colors.primary["slime-dark"],
    },
    disabled: {
      color: colors.base.white,
      backgroundColor: colors.base.grey["300"],
    },
  },
  secondary: {
    default: {
      color: colors.primary["slime-light"],
      borderColor: colors.primary["slime-light"],
    },
    hover: {
      color: colors.primary["slime-dark"],
      borderColor: colors.primary["slime-dark"],
    },
    disabled: {
      color: colors.base.grey["300"],
      borderColor: colors.base.grey["300"],
    },
  },
  ghost: {
    default: {
      color: colors.base.grey["500"],
    },
    hover: {
      color: colors.base.grey["700"],
    },
    disabled: {
      color: colors.base.grey["300"],
    },
  },
  lequYellow,
  lequRed: {
    ...lequYellow,
    default: {
      ...lequYellow.default,
      backgroundColor: "#e00f21",
      color: "white",
    },
    hover: {
      backgroundColor: "#c70e1e",
      color: "white",
    },
  },
};

export default button;
