export const map = {
  researchingBlogPostsCicero: {
    publishDate: "2021-7-24",
    status: "published",
    type: ["guide"],
    fileImport: () => import("./writeCicero/post.md"),
    imageImport: () => import("./writeCicero/rome.webp"),
  },
}
