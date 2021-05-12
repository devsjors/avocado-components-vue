import twConfig from "@/theme/tailwind-js";
const { colors } = twConfig.theme;

const radio = {
  default: {
    labelColor: colors.base.grey["900"],
    borderColor: colors.base.grey["600"],
  },
  hover: {
    borderColor: colors.primary["slime-dark"],
  },
  checked: {
    borderColor: colors.primary["slime-light"],
    backgroundColor: colors.primary["slime-light"],
    hover: {
      borderColor: colors.primary["slime-dark"],
      backgroundColor: colors.primary["slime-dark"],
    },
  },
  disabled: {
    labelColor: colors.base.grey["300"],
    borderColor: colors.base.grey["300"],
    backgroundColor: colors.base.grey["300"],
  },
};

export default radio;
