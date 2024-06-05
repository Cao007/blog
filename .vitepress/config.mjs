import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
  ],
  title: "狗子吹头的知识库",
  description: "前端开发html/css/javascript/vue/react/node/express 后端开发python/flask/mysql/Django",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '前端', items: [
          { text: 'html', link: '/frontend/html' },
          { text: 'css', link: '/frontend/css' },
          { text: 'javascript', link: '/frontend/javascript' },
        ]
      },
      {
        text: '后端', items: [
          { text: 'python', link: '/backend/python' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      copyright: 'Copyright © 2024-present 狗子吹头'
    },

    sidebar: [
      {
        text: '前端',
        items: [
          { text: 'html', link: '/frontend/html' },
          { text: 'css', link: '/frontend/css' },
          { text: 'javascript', link: '/frontend/javascript' },
        ]
      },
      {
        text: '后端',
        items: [
          { text: 'python', link: '/backend/python' },
        ]
      }
    ],
    outlineTitle: '文章目录',
    outline: [1, 2],
  }
})
