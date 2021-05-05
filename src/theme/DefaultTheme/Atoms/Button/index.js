import cores from "../../Cores";
const { colors, typography, spacing } = cores;

const button = {
  default: {
    padding: `${spacing["3"]} ${spacing["5"]}`,
    typography: typography.text.button,
    textTransform: "uppercase",
    borderRadius: spacing["2"],
  },
  primary: {
    textColor: colors.base.white,
    backgroundColor: colors.primary["slime-light"],
    hover: {
      textColor: colors.base.white,
      backgroundColor: colors.primary["slime-dark"],
    },
    disabled: {
      textColor: colors.base.white,
      backgroundColor: colors.base.grey["300"],
    },
  },
  secondary: {
    textColor: colors.primary["slime-light"],
    borderColor: colors.primary["slime-light"],
    hover: {
      textColor: colors.primary["slime-dark"],
      borderColor: colors.primary["slime-dark"],
    },
    disabled: {
      textColor: colors.base.grey["300"],
      borderColor: colors.base.grey["300"],
    },
  },
  ghost: {
    textColor: colors.base.grey["500"],
    hover: {
      textColor: colors.base.grey["700"],
    },
    disabled: {
      textColor: colors.base.grey["300"],
    },
  },
  leipeButton: {
    color: "red",
    backgroundColor: "green",
    hover: {
      color: "green",
      backgroundColor: "red",
      borderRadius: "0",
    },
    disabled: {
      color: "purple",
      backgroundColor: "lightgray",
    },
  },
};

export default button;
