import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/styles/reset.css/";

import DefaultTheme from "@/theme/DefaultTheme";

Vue.config.productionTip = false;

const theme = () => {
  if (window.location.pathname === "/sjors") {
    return {
      computed: {
        __theme() {
          return DefaultTheme;
        },
      },
    };
  } else {
    return {
      computed: {
        __theme() {
          return DefaultTheme;
        },
      },
    };
  }
};

Vue.mixin(theme());
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
