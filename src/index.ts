import blogEngine from "@factor/plugin-blog-engine"
import { map as blogMap } from "../content/map"
import { installPlugin } from "@factor/api"

export const setup = (): void => {
  installPlugin(blogEngine, {
    map: blogMap,
    baseRoute: "/",
  })
}
