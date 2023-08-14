import { LAYOUT } from "@/router/constant";
import type { AppRouteRecordRaw } from "../types";

const about: AppRouteRecordRaw = {
  path: "/about",
  name: "About",
  component: LAYOUT,
  redirect: "/about/index",
  meta: {
    icon: "simple-icons:about-dot-me",
    title: "routes.dashboard.about",
  },
  children: [
    {
      path: "index",
      name: "AboutPage",
      component: () => import("@/views/HomeView.vue"),
      meta: {
        title: "routes.dashboard.about",
        icon: "simple-icons:about-dot-me",
      },
    },
  ],
};

export default about;
