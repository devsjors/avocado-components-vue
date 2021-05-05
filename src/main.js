import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/styles/reset.css/";

import DefaultTheme from "@/theme/DefaultTheme";
const theme = {
  computed: {
    __theme() {
      return DefaultTheme;
    },
  },
};

Vue.config.productionTip = false;

Vue.mixin(theme);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
