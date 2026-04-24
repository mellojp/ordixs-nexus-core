import { createStartHandler, defaultRenderHandler } from "@tanstack/react-start/server";
import { getRouter } from "./router";

const router = getRouter();

export default createStartHandler({
  router,
})(defaultRenderHandler);
