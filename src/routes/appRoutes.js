import Vue from "vue";
import Router from "vue-router";
import MoviesDetail from "../components/MoviesDetail.vue"

Vue.use(Router);

const routes = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/cadastro",
      name: "register",
      component: () => import("@/views/Register.vue"),
    },
    {
      path: "/entrar",
      name: "login",
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/perfil",
      name: "perfil",
      component: () => import("@/views/Perfil.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/views/Dashboard.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/movie/:id",
      name: "dashboard",
      component: MoviesDetail,
    },
  ],
});

export default routes;
