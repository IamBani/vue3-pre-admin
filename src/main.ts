import { createApp } from "vue";
import App from "./App.vue";
import router, { setupRouter } from "./router";
import { setupRouterGuard } from "@/router/guard";
import "normalize.css";
import "./theme/css/index.css";
import Plugins from "./plugin";
import "animate.css";
import { setupStore } from "./store";

async function bootstrap() {
  const app = createApp(App);

  setupStore(app); //初始化store

  setupRouter(app); //设置路由

  setupRouterGuard(router);

  app.use(Plugins);

  app.mount("#app");
}

bootstrap();
