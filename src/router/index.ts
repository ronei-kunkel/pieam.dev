import LoginPage from "@/pages/LoginPage.vue";
import HomePage from "@/pages/HomePage.vue";
import { createRouter, createWebHashHistory, type RouteRecordRaw, type RouterOptions } from "vue-router";
import { SessionVerificationService } from "@/services/SessionVerificationService";

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: LoginPage,
    name: 'login',
  },
  {
    path: '/',
    component: HomePage,
    name: 'home',
    meta: {
      breadcrumb: 'Home'
    }
  }
];

const options: RouterOptions = {
  history: createWebHashHistory(),
  routes: routes
};

const router = createRouter(options);

router.beforeEach(async (to, from, next) => {

  if (to.name == 'login') {
    next();
  } else {

    if (from.name === 'login') {
      next();
    } else {

      const validSession = await new SessionVerificationService().validateSession();

      if (!validSession) {
        next({ name: 'login' });
      }

      next();
    }

  }

});

export default router;
