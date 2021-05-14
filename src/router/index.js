import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Cores from "../views/Cores.vue";

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
    component: Cores,
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
