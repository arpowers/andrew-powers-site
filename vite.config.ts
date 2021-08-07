import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  optimizeDeps: {
    exclude: ["@factor/plugin-blog-engine"],
    include: ["dayjs", "dayjs/plugin/timezone", "dayjs/plugin/utc"],
  },
})
