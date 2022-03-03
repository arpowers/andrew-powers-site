import PageHome from "./PageHome.vue"
import { AppRoute } from "@factor/api"

export const routes = [
  new AppRoute({
    key: "home",
    path: "/",
    component: PageHome,
  }),
]
