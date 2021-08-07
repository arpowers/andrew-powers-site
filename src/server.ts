import blogEngineServer from "@factor/plugin-blog-engine/server"
import { map } from "../content/map"
import { installPlugin } from "@factor/api"
import { UserConfigServer } from "@factor/types"

export const setup = (): UserConfigServer | undefined => {
  installPlugin(blogEngineServer, {
    map,
  })

  return
}
