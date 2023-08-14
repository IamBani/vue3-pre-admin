import type { AppRouteRecordRaw } from "../types";
import { LoginRoute, RootRoute } from "./basic";

const routeModuleList: AppRouteRecordRaw[] = [];

const modules = require.context("@/router/modules", true, /\.ts$/);
const importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach((item) => {
    const mode = requireContext(item).default;
    routeModuleList.push(mode || {});
  });

try {
  importAll(modules);
} catch (error) {
  console.log(error);
}
console.log(routeModuleList);
export const asyncRoutes = [...routeModuleList];

// 未经许可的基本路由
export const basicRoutes = [
  LoginRoute,
  RootRoute,
  ...asyncRoutes,
  // REDIRECT_ROUTE,
  // PAGE_NOT_FOUND_ROUTE,
];
