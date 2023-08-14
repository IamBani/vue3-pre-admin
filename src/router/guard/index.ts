import type { Router } from "vue-router";
// import { useUserStoreWithOut } from "@/store/modules/user";
export function setupRouterGuard(router: Router) {
  createPageLoadingGuard(router);
}

function createPageLoadingGuard(router: Router) {
  //todo
  console.log(router);
}
