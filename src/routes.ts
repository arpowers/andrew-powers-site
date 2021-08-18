import PageHome from "./PageHome.vue"
import { RouteRecordRaw } from "vue-router"
import { routes as blogRoutes } from "./blog/routes"
export const getRoutes = (): RouteRecordRaw[] => {
  const routes = [
    {
      path: "/",
      component: PageHome,
    },
    ...blogRoutes,
  ]

  return routes
}
