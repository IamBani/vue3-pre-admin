import type { Router } from "vue-router";
import { WHITE_NAME_LIST } from "..";
import { useUserStore } from "@/store/modules/user";
export function setupRouterGuard(router: Router) {
  createPageLoadingGuard(router);
}

function createPageLoadingGuard(router: Router) {
  //todo

  router.beforeEach(async (to, from, next) => {
    if (WHITE_NAME_LIST.includes(to.name as string)) {
      next();
    } else {
      if (useUserStore().getToken) {
        next();
      } else {
        next("/login");
      }
    }
  });
}
