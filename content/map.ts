import { BlogMap } from "@factor/plugin-blog-engine/types"
import { map as HeatmapsMap } from "./heatmaps"
import { map as trafficMap } from "./traffic"
import { map as analyticsMap } from "./analytics"
export const map: BlogMap = {
  ...(HeatmapsMap as BlogMap),
  ...(trafficMap as BlogMap),
  ...(analyticsMap as BlogMap),
}
