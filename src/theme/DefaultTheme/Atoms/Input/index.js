import twConfig from "../../../tailwind-js";
const { colors, spacing } = twConfig.theme;

const input = {
  default: {
    padding: `${spacing["3"]} ${spacing["5"]}`,
    borderColor: colors.base.grey["400"],
    borderRadius: spacing["2"],
    labelColor: colors.base.grey["900"],
    placeholderColor: colors.base.grey["400"],
    iconColor: colors.base.grey["500"],
  },
  hover: {
    borderColor: colors.primary["slime-light"],
    iconColor: colors.primary["slime-light"],
  },
  error: {
    borderColor: colors.feedback.error,
    iconColor: colors.feedback.error,
    message: colors.feedback.error,
  },
};

export default input;
