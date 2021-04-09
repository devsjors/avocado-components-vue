import cores from "../../Cores";

const button = {
  padding: `${cores.spacing["3"]} ${cores.spacing["5"]}`,
  typography: cores.typography.text.button,
  textTransform: "none",
  borderRadius: cores.spacing["2"],
  primary: {
    textColor: cores.colors.primary.blue,
    backgroundColor: cores.colors.primary.yellow,
    hover: {
      textColor: cores.colors.primary.blue,
      backgroundColor: cores.colors.primary["dark-yellow"],
    },
    disabled: {
      textColor: cores.colors.base.white,
      backgroundColor: cores.colors.base.grey["300"],
    },
  },
  secondary: {
    textColor: cores.colors.primary["slime-light"],
    borderColor: cores.colors.primary["slime-light"],
    hover: {
      textColor: cores.colors.primary["slime-dark"],
      borderColor: cores.colors.primary["slime-dark"],
    },
    disabled: {
      textColor: cores.colors.base.grey["300"],
      borderColor: cores.colors.base.grey["300"],
    },
  },
  ghost: {
    textColor: cores.colors.base.grey["500"],
    hover: {
      textColor: cores.colors.base.grey["700"],
    },
    disabled: {
      textColor: cores.colors.base.grey["300"],
    },
  },
};

export default button;
