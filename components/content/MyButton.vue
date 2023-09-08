<script setup lang="ts">
import type { PropType } from "vue";
import type { PinceauTheme } from "pinceau";
import { computedStyle, cssProp } from "pinceau/runtime";
import type { NuxtLinkProps } from "#app";

defineProps({
  link: {
    type: Object as PropType<NuxtLinkProps>,
    required: false,
  },
  color: computedStyle<keyof PinceauTheme["color"]>("red"),
  ...variants,
  css: cssProp,
});
</script>

<template>
  <NuxtLink v-bind="link">
    <button class="my-button">
      <span v-if="!$slots?.default">Hello Ghosties! 👋</span>
      <span v-else>
        <ContentSlot :use="$slots.default" unwrap="p" />
      </span>
    </button>
  </NuxtLink>
</template>

<style scoped lang="ts">
css({
    '.my-button': {
        '--button-primary': (props) => `{color.${props.color}.100}`,
        '--button-secondary': (props) => `{color.${props.color}.200}`,
        display: 'inline-block',
        // borderRadius: '{radii.xl}',
        transition: '{transition.all}',
        color: '{button.primary}',
        boxShadow: `8px 8px 0 0 {button.primary}`,
        span: {
            display: 'inline-block',
            fontFamily: '{typography.font.display}',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            // borderRadius: '{radii.lg}',
            fontSize: '{fontSize.xl}',
            lineHeight: '{lead.none}',
            transition: '{transition.all}',
            // backgroundColor: '{button.primary}',
            backgroundColor: "white",
            // boxShadow: 'inset 0 -1px 1px {color.dark}',
            border: '2px solid {button.primary}',
        },
        '&:hover': {
          span: {
              transform: 'translateY({space.2}) translateX({space.2})',

          }
        },
        '&:active': {
            span: {
                transform: 'translateY({space.1})'
            }
        }
    },
    variants: {
        size: {
            sm: {
                span: {
                    padding: '{space.3} {space.6}',
                },
            },
            md: {
                span: {
                    padding: '{space.6} {space.8}'
                },
            },
            lg: {
                span: {
                    padding: '{space.8} {space.12}'
                },
            },
            xl: {
                span: {
                    padding: '{space.12} {space.24}'
                },
            },
            options: {
                default: 'sm',
            },
        },
    },
})
</style>
