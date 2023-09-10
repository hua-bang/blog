import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "华铧's Blog",
  description: "Inspire Creativity, Enrich Life.",
  base: '/blog/',
  srcDir: 'docs',
  themeConfig: {
    logo: {
      src: 'https://avatars.githubusercontent.com/u/47221942?v=4',
      style: {
        borderRadius: "50%"
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '🧑🏻‍💻 Tech',
        link: '/tech/'
      },
      {
        text: '✍🏼 Blog',
        link: '/blog/'
      },
      {
        text: '👋🏻 Life',
        link: '/life/'
      },
      {
        text: '⭐️ Me',
        link: '/me/'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hua-bang' }
    ]
  }
})
