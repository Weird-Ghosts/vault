<template>
  <ContentSlot :use="$slots.default" unwrap="p" />
  <div class="logo">
    <a href="https://weirdghosts.ca" target="_blank">
      <img
        width="400"
        height="400"
        src="/img/Weird_Ghosts_Logo-transparent.svg"
      />
    </a>
  </div>
</template>

<style scoped lang="ts">
css({

    '.logo': {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '{space.4}',
      margin: '0 auto',

      img: {
        maxWidth: '100%',
        height: 'auto',
      },
      '@md': {
        display: 'flex',
      }
    },
  })
</style>
