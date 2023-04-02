import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChildContainer from "../views/container/ChildView.vue";
import StatsContainer from "../views/container/StatView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ChildContainer,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/child",
      name: "childContainer",
      component: ChildContainer,
    },
    {
      path: "/stats",
      name: "StatsView",
      component: StatsContainer,
    },
  ],
});

export default router;
