import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/Register")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("@/views/Settings")
  },
  {
    path: "/:username",
    name: "Profile",
    component: () => import("@/views/Profile")
  }
];

const router = new VueRouter({
  routes
});

export default router;
