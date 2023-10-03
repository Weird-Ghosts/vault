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
  modules: [
    // https://github.com/nuxt-modules/plausible
    "@nuxtjs/plausible",
    // https://github.com/nuxt/devtools
    "@nuxt/devtools",
    "@nuxthq/studio",
  ],
});
