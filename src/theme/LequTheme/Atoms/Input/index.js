import twConfig from "@/theme/tailwind-js";
const { spacing, borderRadius } = twConfig.theme;
const colors = twConfig.theme.colors.lequColors;

const input = {
  default: {
    padding: `${spacing["2"]} ${spacing["5"]}`,
    borderColor: colors["grey-border"],
    borderRadius: borderRadius["DEFAULT"],
  },
  hover: {
    borderColor: "transparent",
  },
  error: {
    borderColor: colors["lequ-red"],
    iconColor: colors["lequ-red"],
    message: colors["lequ-red"],
  },
};

export default input;
