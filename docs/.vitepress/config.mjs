import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/myblog/',
  title: "晨钟暮鼓",
  description: "慢也好，步伐小也罢，是往前走就好。 ",
  head: [
    ['link', { rel: 'icon', href: '/base/logo.svg' }],
    ['link', { rel: 'stylesheet', href: './theme/custom.css' }],
    [
      'script',
      { async: '', src: 'https://raw.githubusercontent.com/lovemyFamilyFovever/myblog/main/docs/public/dandelion.js' }
    ],
  ],
  themeConfig: {
    outlineTitle: '页面导航',
    logo: '/logo.svg',
    nav: [
      { text: '主页', link: '/' },
      { text: 'blog', link: '/blog/home-page.md' },
      { text: 'AI', link: '/ai/' },
      { text: 'python', link: '/python/' },
      {
        text: "前端", items: [
          { text: "css", link: "/frontend/css/" },
          { text: "javascript", link: "/frontend/javascript/" },
          { text: "react", link: "/frontend/react/" },
          { text: "vite", link: "/frontend/vite/" },
          { text: "vue2", link: "/frontend/vue2/" },
          { text: "vue3", link: "/frontend/vue3/" },
          { text: "node.js", link: "/frontend/node/" },
          { text: "TypeScript", link: "/frontend/TypeScript/" },
        ]
      }
    ],
    sidebar: {
      '/blog/': [
        {
          text: '参考',
          items: [
            { text: '主页', link: '/blog/home-page' },
            { text: '自定义', link: '/blog/custom' },
          ]
        }
      ],
      '/frontend/vue2/': [
        {
          text: '前端导航',
          link: '/frontend/',
        },
        {
          text: 'vue2',
          items: [
            { text: '项目搭建', link: '/frontend/vue2/' },
            { text: '查漏补缺', link: '/frontend/vue2/leak_filling' },
          ]
        },
      ],

      '/frontend/react': [
        {
          text: 'react',
          collapsed: true,
          items: [
            { text: '待补充', link: '/markdown-examples' },
            { text: '待补充', link: '/api-examples' },
            { text: '待补充', link: '/frontend/react/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lovemyFamilyFovever', ariaLabel: 'Visit our GitHub page' },
      {
        icon: {
          svg: '<svg t="1711213717846" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4245" width="12" height="12"><path d="M512 512m-494.933333 0a494.933333 494.933333 0 1 0 989.866666 0 494.933333 494.933333 0 1 0-989.866666 0Z" fill="#C71D23" p-id="4246"></path><path d="M762.538667 457.045333h-281.088a24.4736 24.4736 0 0 0-24.439467 24.405334v61.098666c-0.034133 13.5168 10.922667 24.439467 24.405333 24.439467h171.1104c13.5168 0 24.439467 10.922667 24.439467 24.439467v12.219733a73.3184 73.3184 0 0 1-73.3184 73.3184h-232.209067a24.439467 24.439467 0 0 1-24.439466-24.439467v-232.174933a73.3184 73.3184 0 0 1 73.3184-73.3184h342.152533c13.482667 0 24.405333-10.922667 24.439467-24.439467l0.034133-61.098666a24.405333 24.405333 0 0 0-24.405333-24.439467H420.352a183.296 183.296 0 0 0-183.296 183.296V762.538667c0 13.482667 10.922667 24.439467 24.405333 24.439466h360.516267a164.9664 164.9664 0 0 0 165.000533-165.000533v-140.526933a24.439467 24.439467 0 0 0-24.439466-24.439467z" fill="#FFFFFF" p-id="4247"></path></svg>'
        },
        link: 'https://gitee.com/xiangaiyun',
        ariaLabel: 'https://gitee.com/xiangaiyun'
      }
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'
    }
  }
})
