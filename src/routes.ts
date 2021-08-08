import { addRoutes } from "@factor/api";

import PageHome from "./PageHome.vue";

export const initializeRoutes = (): void => {
  const routes = [
    {
      path: "/",
      component: PageHome,
    },
  ];

  addRoutes(routes);
};
