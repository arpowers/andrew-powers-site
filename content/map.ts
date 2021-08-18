import { BlogMap } from "@factor/plugin-blog-engine/types"
import { map as postsMap } from "./posts"
export const map: BlogMap = {
  ...(postsMap as BlogMap),
}
