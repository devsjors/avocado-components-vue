import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/styles/index.css/";
import DefaultTheme from "@/theme/DefaultTheme";
import LequTheme from "@/theme/LequTheme";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.path === "/lequ") {
    Vue.prototype.__theme = LequTheme;
  } else {
    Vue.prototype.__theme = DefaultTheme;
  }
  next();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
