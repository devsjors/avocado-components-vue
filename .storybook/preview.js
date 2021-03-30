import components from './components';
import CustomThemeProvider from "../src/theme/Provider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: { inlineStories: true }
}

export const decorators = [(story) => ({
  components: { story, CustomThemeProvider },
  template: "<CustomThemeProvider><story /></CustomThemeProvider>",
})];