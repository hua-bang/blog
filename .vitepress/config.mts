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
    search: {
      provider: 'local'
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
    sidebar: {
      '/blog/': [
        {
          text: '线下活动',
          items: [
            {
              text: 'in.clusion',
              link: '/blog/in-clusion'
            }
          ]
        },
        {
          text: '互联网',
          items: [
            {
              text: 'AIGC 思考',
              link: '/blog/aigc-think'
            },
            {
              text: '信息过载',
              link: '/blog/information-overload'
            },
          ]
        },
        {
          text: '产品思考',
          items: [
            {
              text: '小红书-内容搜索',
              link: '/blog/content-search'
            },
          ]
        },
      ]
    }
    ,
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hua-bang' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present 华铧'
    }
  }
})
