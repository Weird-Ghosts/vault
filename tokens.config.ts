import { defineTheme } from 'pinceau'

export default defineTheme({
  transition: {
    all: 'all .1s ease-in-out',
  },
  color: {
    black: '#0c0c0d',
    white: '#fff',
    dimmed: 'rgba(0, 0, 0, .35)',
    dark: 'rgba(255, 255, 255, .15)',
    primary: {
      50: '{color.red.50}',
      100: '{color.red.100}',
      200: '{color.red.200}',
      300: '{color.red.300}',
      400: '{color.red.400}',
      500: '{color.red.500}',
      600: '{color.red.600}',
      700: '{color.red.700}',
      800: '{color.red.800}',
      900: '{color.red.900}',
    },
    red: {
      50: '#FBE8E8',
      100: '#e33f3e',
      200: '#D63736',
      300: '#C82F2E',
      400: '#BA2826',
      500: '#AC201E',
      600: '#9E1916',
      700: '#90110F',
      800: '#820907',
      900: '#740200',
    },
  },
  elements: {
    backdrop: {
      background: {
        initial: '{color.white}',
        dark: '{color.black}',
      },
    },
    border: {
      primary: {
        default: {
          initial: '{color.gray.200}',
          dark: '{color.gray.800}',
        },
      },
    },
  },
  typography: {
    font: {
      body: 'PP Object Sans',
      display: 'PP Object Sans',
    },
  },
  font: {
    body: 'PP Object Sans',
  }

})
