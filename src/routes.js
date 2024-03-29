import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const routerHistory = createWebHistory();

import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import P404 from "@/pages/404";
import Item from "@/pages/_itemAlias";

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/:itemAlias",
      name: "itemAlias",
      component: Item,
    },
    {
      path: "/:CatchAll(.*)",
      name: "404",
      component: P404,
    },
  ],
});

export default routers;
