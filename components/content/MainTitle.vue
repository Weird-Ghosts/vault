<script lang="ts" setup></script>

<template>
  <section class="main-hero">
    <div class="main-title">
      <h2>Hey, Weird / Baby Ghosts! 👋</h2>
      <h1>
        <p>Welcome to your <span>handbook</span>.</p>
      </h1>
      <div class="main-cta">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="ts">
css({
  '.main-hero': {
    marginTop: '{space.16}',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '{space.6}',

    '.main-title': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: "wrap",
      alignItems: 'flex-start',
      gap: '{space.8}',
    },

    '.main-cta': {
      gap: '{space.4}',
      order: '2',
      margin: '0 auto',
      justifyContent: 'center',
      a: {
        display: 'block',
        width: 'auto',
      },
      '@md': {
        order: '3',
        margin: '0',
        justifyContent: 'flex-start',
      }
    },


  },

  h1: {
    width: "100%",
    lineHeight: "{space.10}",
    fontSize: '{fontSize.2xl}',
    order: 1,
    textAlign: 'center',
    '@md': {
      textAlign: 'left',
      fontSize: '{fontSize.4xl}',
      lineHeight: "{space.14}",

    }
  },
  h2: {
    width: "100%",
    textAlign: 'center',
    fontSize: '{fontSize.2xl}',
    order: 1,

    '@md': {
      textAlign: 'left',
      fontSize: '{fontSize.3xl}',
    }
  },


  span: {
    fontFamily: '{typography.font.display}',
    padding: 0,
    fontSize: '{fontSize.4xl}',
    fontWeight: "900",
    backgroundColor: 'transparent !important',
    color: '{color.primary.100} !important',

    '@md': {
      fontSize: '{fontSize.5xl}',
    },
  }
})
</style>
