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
    path: "/documentation",
    name: "documentation",
    component: () => import("../views/Documentation.vue"),
  },
  {
    path: "/usertest-part-1",
    name: "usertest-part-1",
    component: () => import("../views/Usertest_2/part_1.vue"),
  },
  {
    path: "/usertest-part-2",
    name: "usertest-part-2",
    component: () => import("../views/Usertest_2/part_2.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to, from) => {
  if (
    to.path === "/lequ" ||
    from.path === "/lequ" ||
    to.path === "/usertest-part-1" ||
    from.path === "/usertest-part-1" ||
    to.path === "/usertest-part-2" ||
    from.path === "/usertest-part-2"
  ) {
    if (!window.location.hash) {
      window.location = `${window.location}#loaded`;
      window.location.reload();
    }
  }
});

export default router;
