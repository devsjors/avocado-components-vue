import CustomThemeProvider from '../src/theme/Provider';
import AMButton from "../src/components/Button";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [(story) => ({
  components: { story, CustomThemeProvider, AMButton },
  template: '<CustomThemeProvider class="test"><story /></CustomThemeProvider>'
})];