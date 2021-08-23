import routes from "./appRoutes";
import store from "@/store"

routes.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAutenticated = store.getters.hasSession;
  if (requiresAuth && !isAutenticated) {
    next("/entrar");
  } else if (!requiresAuth && isAutenticated) {
    next();
  } else {
    next();
  }
});

export default routes;
