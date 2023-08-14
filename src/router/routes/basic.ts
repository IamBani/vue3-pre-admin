import { PageEnum } from "@/enums/pageEnum";
import { AppRouteRecordRaw } from "../types";

export const LoginRoute: AppRouteRecordRaw = {
  path: "/login",
  name: "Login",
  component: () =>
    import(/* webpackChunkName: "login" */ "@/views/login/login.vue"),
  meta: {
    isHide: true,
    title: "登录",
  },
};

export const RootRoute: AppRouteRecordRaw = {
  path: "/",
  name: "Root",
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: "Root",
  },
};
