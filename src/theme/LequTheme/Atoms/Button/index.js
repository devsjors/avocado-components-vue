import cores from "../../Cores";
import twConfig from "@/theme/tailwind-js";

const { typography } = cores;
const { spacing, borderRadius } = twConfig.theme;
const colors = twConfig.theme.colors.lequColors;

const primary = {
  default: {
    color: "white",
    backgroundColor: colors["lequ-red"],
  },
  hover: {
    color: "white",
    backgroundColor: colors["dark-red"],
  },
  disabled: {
    color: "white",
    backgroundColor: colors["gray-5"],
  },
};

const button = {
  default: {
    padding: `${spacing["2"]} ${spacing["12"]}`,
    typography: typography.text.button,
    borderRadius: borderRadius.full,
  },
  primary,
  primaryYellow: {
    default: {
      color: colors["black-light"],
      backgroundColor: colors["yellow-light"],
    },
    hover: {
      color: colors["black-light"],
      backgroundColor: colors["yellow"],
    },
    disabled: {
      color: "white",
      backgroundColor: colors["gray-5"],
    },
  },
  primaryRed: {
    default: {
      color: "white",
      backgroundColor: colors["lequ-red"],
    },
    hover: {
      color: "white",
      backgroundColor: colors["dark-red"],
    },
    disabled: {
      ...primary.disabled,
    },
  },
  primaryWhite: {
    default: {
      color: colors["black-light"],
      backgroundColor: "white",
    },
    hover: {
      color: colors["black-light"],
      backgroundColor: colors["gray-5"],
    },
    disabled: {
      ...primary.disabled,
    },
  },
  primaryBlue: {
    default: {
      color: "white",
      backgroundColor: colors["light-blue-dark"],
    },
    hover: {
      color: "white",
      backgroundColor: colors["dark-blue"],
    },
    disabled: {
      ...primary.disabled,
    },
  },
};

export default button;
