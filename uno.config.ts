import { defineConfig, transformerDirectives } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      'deep-primary': '#e6dacd',
      primary: '#f4ece6',
      white: '#fcfbfa',
      emphasis: '#5288FE'
    },
    boxShadow: {
      'home-card': '-10px 10px 18px 0 rgba(0, 0, 0, .2)'
    }
  },
  shortcuts: {
    'flex-center': 'flex items-center justify-center'
  },
  transformers: [transformerDirectives()]
})