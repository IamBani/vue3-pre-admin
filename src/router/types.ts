import { RouteRecordRaw, RouteMeta } from "vue-router";

interface Meta extends RouteMeta, Record<string | number | symbol, unknown> {
  isHide?: boolean;
  title: string;
  icon?: string;
  isLink?: boolean;
}

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, "meta"> {
  meta: Meta;
}
