<template>
  <AppLayout>
    <NuxtPage />
  </AppLayout>
</template>

<style lang="ts">
css({
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
  ".button-link": {
    fontSize: "36px !important",
    borderWidth: "2px !important",
    textTransform: "uppercase !important",
    borderColor: "{color.primary.100} !important",
    backgroundColor: "{color.white} !important",
    color: "{color.primary.100} !important",
    "&:hover": {
      backgroundColor: "{color.primary.200} !important",
      color: "{color.white} !important",
    },
    borderRadius: "{radii.none} !important",
    padding: "{space.4} {space.6} !important",
  }
});
</style>
<style lang="postcss">
body {
  font-family: "PP Object Sans", sans-serif !important;
}

@font-face {
  font-family: "PP Object Sans";
  src: url("/PPObjectSans-Regular.eot");
  src: url("/PPObjectSans-Regular.eot?#iefix") format("embedded-opentype"),
    url("/PPObjectSans-Regular.woff2") format("woff2"),
    url("/PPObjectSans-Regular.woff") format("woff"),
    url("/PPObjectSans-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "PP Object Sans";
  src: url("/PPObjectSans-Black.eot");
  src: url("/PPObjectSans-Black.eot?#iefix") format("embedded-opentype"),
    url("/PPObjectSans-Black.woff2") format("woff2"),
    url("/PPObjectSans-Black.woff") format("woff"),
    url("/PPObjectSans-Black.ttf") format("truetype");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "PP Object Sans";
  src: url("/ObjectSans-Bold.eot");
  src: url("/ObjectSans-Bold.eot?#iefix") format("embedded-opentype"),
    url("/ObjectSans-Bold.woff2") format("woff2"),
    url("/ObjectSans-Bold.woff") format("woff"),
    url("/ObjectSans-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
</style>
