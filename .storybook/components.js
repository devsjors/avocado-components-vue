import Vue from "vue";

import CustomThemeProvider from '../src/theme/Provider'
const ThemeProvider = Vue.component("CustomThemeProvider", CustomThemeProvider);

import AMButton from "../src/components/atoms/Button/Button.vue";
import AMLink from "../src/components/atoms/Link/Link.vue";
import AMBreadcrumb from "../src/components/molecules/Breadcrumb/Breadcrumb.vue";

const Button = Vue.component("AMButton", AMButton);
const Link = Vue.component("AMLink", AMLink);
const Breadcrumb = Vue.component("AMBreadcrumb", AMBreadcrumb);

export default {
  components: {
    ThemeProvider,
    Button,
    Link,
    Breadcrumb,
  },
}