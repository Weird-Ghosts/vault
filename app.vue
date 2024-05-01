<template>
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>

<script setup lang="ts">
const { page } = useContent();

useHead({
  meta: [
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "keywords",
      content:
        "social impact, impact measurement, indie studios, impact funding, social finance",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Weird Ghosts" },
    { name: "copyright", content: "© 2023 Weird Ghosts" },
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk}` : "Weird Ghosts Learn";
  },
  link: [
    {
      rel: "icon",
      type: "image/ico",
      href: "/favicon.ico",
    },
  ],
});
const defaultTitle = "Weird Ghosts Learn";
const defaultDescription =
  "Resources for indie game devs building sustainable, impact-oriented studios.";
const defaultImage = "https://learn.weirdghosts.ca/img/weird_explosion.png";
const defaultUrl = "https://learn.weirdghosts.ca";
const baseUrl = "https://learn.weirdghosts.ca";

// useSeoMeta({
//   title: () => (page.value && page.value.title) || defaultTitle,
//   ogTitle: () => (page.value && page.value.title) || defaultTitle,
//   ogDescription: () =>
//     (page.value && page.value.description) || defaultDescription,
//   description: () =>
//     (page.value && page.value.description) || defaultDescription,
//   ogImage: () =>
//     page.value && page.value.image ? page.value.image.src : defaultImage,
//   ogUrl: () => (page.value && `${baseUrl}${page.value._path}`) || defaultUrl,
//   twitterTitle: () => (page.value && page.value.title) || defaultTitle,
//   twitterDescription: () =>
//     (page.value && page.value.description) || defaultDescription,
//   twitterImage: () =>
//     page.value && page.value.image ? page.value.image.src : defaultImage,
// });
</script>

<style lang="ts">
css({
  ".card-grid": {
    paddingBottom: "{space.8} !important",
  },
  ".docs-prev-next": {
    display: "none !important",
  },
  ".docs-page-content": {
    "&.has-aside": {
      gridTemplateColumns: "minmax(250px,250px) minmax(320px,1fr) minmax(250px,250px) !important",
    }
  },
  ".page-body": {
    "h1:not(.not-prose):first-child": {
      fontSize: "{fontSize.4xl} !important",
      lineHeight: "{text.4xl.lineHeight} !important",
    },
  },
  h2: {
    color: "{color.primary.100}",
    a: {
      color: "{color.primary.100}",
    }
  },
  h3 : {
    color: "{color.primary.400}",
    a: {
      color: "{color.primary.400}",
    }
  },
  article: {
    h3: {
      "+ ul": {
        marginTop: "0 !important",
      }
    },
    ul: {
      padding: "0 1.5rem !important",
      margin: "1.5rem 0 !important",
      li: {
        fontSize: "{fontSize.lg}",
        marginBottom: "0 !important",
        marginTop: ".25rem !important",
        "&:last-child": {
          marginBottom: "0",
        },
        ul: {
          marginTop: "0 !important",
        }
      },
    },
    ol: {
      padding: "0 2rem !important",
      li: {
        fontSize: "{fontSize.lg}",
        marginBottom: "0 !important",
        marginTop: ".25rem !important",
        "&:last-child": {
          marginBottom: "0",
        },
      },
    },
  },
  ".docs-aside-tree": {
    // ".link": {
    //   fontSize: "{fontSize.lg} !important",
    //   lineHeight: "{text.lg.lineHeight} !important",
    // },
    ".title-collapsible-button": {
      // fontSize: "{fontSize.lg} !important",
      // lineHeight: "{text.lg.lineHeight} !important",
      textAlign: "left !important",
    }
  },
  ".alert": {
    fontSize: "{fontSize.lg} !important",
    lineHeight: "1.5 !important",
  },
  // ".button-link": {
  //   fontSize: "32px !important",
  //   borderWidth: "2px !important",
  //   textTransform: "uppercase !important",
  //   borderColor: "{color.primary.100} !important",
  //   backgroundColor: "{color.white} !important",
  //   color: "{color.primary.100} !important",
  //   "&:hover": {
  //     backgroundColor: "{color.primary.200} !important",
  //     color: "{color.white} !important",
  //   },
  //   borderRadius: "{radii.none} !important",
  //   padding: "{space.4} {space.6} !important",
  // }
});
</style>
<style lang="postcss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
body {
  font-family: "Roboto", sans-serif !important;
}
</style>
