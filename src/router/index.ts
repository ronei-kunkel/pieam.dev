import { createRouter, createWebHistory, type RouteRecordRaw, type RouterOptions } from "vue-router";
import { SessionVerificationService } from "@/services/SessionVerificationService";

const LoginPage = () => import('@/pages/Login/index.vue');
const HomePage = () => import('@/pages/Home/index.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: LoginPage,
    name: 'login',
    meta: {
      private: false
    }
  },
  {
    path: '/',
    component: HomePage,
    name: 'home',
    meta: {
      private: true
    }
  }
];

const options: RouterOptions = {
  history: createWebHistory('/'),
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
