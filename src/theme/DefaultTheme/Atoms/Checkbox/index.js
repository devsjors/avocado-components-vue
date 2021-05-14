import twConfig from "../../../tailwind-js";
const { colors, spacing } = twConfig.theme;

const checkbox = {
  default: {
    borderColor: colors.base.grey["600"],
    borderRadius: spacing["1"],
    labelColor: colors.base.grey["900"],
  },
  hover: {
    borderColor: colors.primary["slime-dark"],
  },
  checked: {
    iconColor: colors.base.white,
    backgroundColor: colors.primary["slime-light"],
    borderColor: colors.primary["slime-light"],
    hover: {
      backgroundColor: colors.primary["slime-dark"],
      borderColor: colors.primary["slime-dark"],
    },
  },
  disabled: {
    backgroundColor: colors.base.grey["300"],
    borderColor: colors.base.grey["300"],
    labelColor: colors.base.grey["300"],
  },
  error: {
    borderColor: colors.feedback.error,
    message: colors.feedback.error,
  },
};

export default checkbox;
