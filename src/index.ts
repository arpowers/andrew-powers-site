import blogEngine from "@factor/plugin-blog-engine"
import { installPlugin } from "@factor/api"

import { map as blogMap } from "../content/map"

import { initializeRoutes } from "./routes"

export const setup = (): void => {
  installPlugin(blogEngine, {
    map: blogMap,
  })

  initializeRoutes()
}
