import Vue from "vue";
import AMButton from "../src/components/Button";
import CustomThemeProvider from '../src/theme/Provider';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [(story) => ({
  components: { story, CustomThemeProvider, AMButton },
  template: '<CustomThemeProvider><story /></CustomThemeProvider>'
})];