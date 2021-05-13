import cores from "../../Cores";
import twConfig from "@/theme/tailwind-js";

const { typography } = cores;
const { colors } = twConfig.theme;

const link = {
  textColor: "white",
  typography: typography.text["body-regular"],
  disabled: {
    textColor: colors.base.grey["300"],
  },
};

export default link;
