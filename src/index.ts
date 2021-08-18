import blogEngine from "@factor/plugin-blog-engine"

import { map as blogMap } from "../content/map"

import { getRoutes } from "./routes"
import { UserConfigApp } from "@factor/types"

export const setup = (): UserConfigApp => {
  const routes = getRoutes()

  return {
    routes,
    plugins: [blogEngine({ map: blogMap })],
  }
}
