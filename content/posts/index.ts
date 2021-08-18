export const map = {
  researchingBlogPostsCicero: {
    publishDate: "2021-3-24",
    status: "published",
    type: ["guide"],
    fileImport: () => import("./writeCicero/post.md"),
    imageImport: () => import("./writeCicero/rome.webp"),
  },
  masterQuicklyDaVinciMethod: {
    publishDate: "2021-3-10",
    status: "published",
    type: ["guide"],
    fileImport: () => import("./daVinciMethod/post.md"),
    imageImport: () => import("./daVinciMethod/image.jpg"),
  },
  fiveRulesNamingCompany: {
    publishDate: "2021-4-10",
    status: "published",
    type: ["guide"],
    fileImport: () => import("./namingCompany/post.md"),
    imageImport: () => import("./namingCompany/image.webp"),
  },
  premiumBrandingPicassoMethod: {
    publishDate: "2021-5-10",
    status: "published",
    type: ["guide"],
    fileImport: () => import("./picasso/post.md"),
    imageImport: () => import("./picasso/image.webp"),
  },
}
