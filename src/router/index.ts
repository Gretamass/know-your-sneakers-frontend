import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

export enum Routes {
  HOME = "home",
  ABOUT_US = "about-us",
  ARTICLES = "articles",
  SINGLE_ARTICLE = "single-article",
  SIGN_UP = "sign-up",
  LOG_IN = "log-in",
  SNEAKERS_HISTORY = "sneakers-history",
  SINGLE_SNEAKER_HISTORY = "single-sneaker-history",
  SNEAKERS_IN_STOCK = "sneakers-in-stock",
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: Routes.HOME,
    component: Home,
  },
  {
    path: "/about-us",
    name: Routes.ABOUT_US,
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/articles",
    name: Routes.ARTICLES,
    component: () => import(""),
  },
  {
    path: "/articles/:articleName",
    name: Routes.SINGLE_ARTICLE,
    component: () => import(""),
  },
  {
    path: "/sign-up",
    name: Routes.SIGN_UP,
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/log-in",
    name: Routes.LOG_IN,
    component: () => import("../views/LogIn.vue"),
  },
  {
    path: "/sneakers-history",
    name: Routes.SNEAKERS_HISTORY,
    component: () => import("../views/SneakersHistory.vue"),
  },
  {
    path: "/sneakers-history/:sneakerName",
    name: Routes.SINGLE_SNEAKER_HISTORY,
    component: () => import("@/views/ProductDetailedPage.vue"),
  },
  {
    path: "/sneakers-in-stock",
    name: Routes.SNEAKERS_IN_STOCK,
    component: () => import(""),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
