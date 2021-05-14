import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/styles/index.css/";

import DefaultTheme from "@/theme/DefaultTheme";
import LequTheme from "@/theme/LequTheme";

Vue.config.productionTip = false;

const theme = () => {
  if (window.location.pathname === "/lequ") {
    return LequTheme;
  } else {
    return DefaultTheme;
  }
};

Vue.prototype.__theme = theme();
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
