import blogEngineServer from "@factor/plugin-blog-engine/server"
import { map } from "../content/map"
import { UserConfigServer } from "@factor/types"

export const setup = (): UserConfigServer | undefined => {
  return {
    plugins: [blogEngineServer({ map })],
  }
}
