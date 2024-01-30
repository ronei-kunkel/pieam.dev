import LoginPage from "@/pages/LoginPage.vue";
import Home from "@/pages/HomePage.vue";
import { createRouter, createWebHashHistory, type RouteRecordRaw, type RouterOptions } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: LoginPage,
    name: 'login'
  },
  {
    path: '/projects',
    component: Home,
    name: 'home'
  }
];

const options: RouterOptions = {
  history: createWebHashHistory(),
  routes: routes
};

const router = createRouter(options);

export default router;
