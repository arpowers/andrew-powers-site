import blogEngine from "@factor/plugin-blog-engine"

import { map as blogMap } from "../content/map"

import { initializeRoutes } from "./routes"
import { UserConfigApp } from "@factor/types"

export const setup = (): UserConfigApp => {
  initializeRoutes()

  return {
    plugins: [
      blogEngine({
        map: blogMap,
      }),
    ],
  }
}
