export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: "@nuxt-themes/docus",

  content: {
    markdown: {
      remarkPlugins: ["remark-smartypants"],
      toc: {
        depth: 4,
        searchDepth: 4,
      },
    },
  },

  modules: ["@nuxtjs/plausible", "@nuxt/devtools", "@nuxthq/studio"],
  compatibilityDate: "2024-12-16",
});