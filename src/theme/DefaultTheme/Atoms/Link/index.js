import cores from "../../Cores";
import twConfig from "@/theme/tailwind-js";

const { typography } = cores;
const { colors } = twConfig.theme;

const link = {
  textColor: colors.base.grey["900"],
  typography: typography.text["body-bold"],
  disabled: {
    textColor: colors.base.grey["300"],
  },
};

export default link;
