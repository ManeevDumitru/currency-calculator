import { createWebHistory, createRouter } from "vue-router";
import { loadLayoutMiddleware } from "@/router/middleware";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/calc",
    name: "calculator",
    component: () => import("@/views/calc.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(""),
  routes,
});

router.beforeEach(loadLayoutMiddleware);

export default router;
