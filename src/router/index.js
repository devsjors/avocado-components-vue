import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LequTheme from "@/theme/LequTheme";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cores",
    name: "cores",
    component: () => import("../views/Cores.vue"),
  },
  {
    path: "/atoms",
    name: "atoms",
    component: () => import("../views/Atoms.vue"),
  },
  {
    path: "/molecules",
    name: "molecules",
    component: () => import("../views/Molecules.vue"),
  },
  {
    path: "/organisms",
    name: "organisms",
    component: () => import("../views/Organisms.vue"),
  },
  {
    path: "/sjors",
    name: "Sjors",
    component: () => import("../views/UserTest-Sjors.vue"),
  },
  {
    path: "/lequ",
    name: "Lequ",
    component: () => import("../views/Lequ.vue"),
  },
  {
    path: "/usertest-sem",
    name: "Usertest-Sem",
    component: () => import("../views/Usertest-Sem.vue"),
  },
  {
    path: "/components",
    name: "components",
    component: () => import("../views/Components.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to, from) => {
  if (to.path === "/lequ") {
    if (!window.location.hash) {
      window.location = `${window.location}#loaded`;
      window.location.reload();
    }
  }
  if (from.path === "/lequ") {
    if (!window.location.hash) {
      window.location = `${window.location}#loaded`;
      window.location.reload();
    }
  }
});

export default router;
