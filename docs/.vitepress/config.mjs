import { defineConfig } from 'vitepress'

const base = '/myblog/';

//上方导航栏
function nav() {
  return [
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
        { text: "Node.js", link: "/frontend/node/" },
        { text: "TypeScript", link: "/frontend/TypeScript/" },
      ]
    }
  ]
}
//左边导航栏
function sidebar() {
  return {
    '/blog/': [{
      text: '参考',
      items: [
        { text: '主页', link: '/blog/home-page' },
        { text: '自定义', link: '/blog/custom' }
      ]
    }
    ],
    '/frontend/vue2/': [
      {
        text: '前端导航',
        link: '/frontend/',
      }, {
        text: 'vue2',
        items: [
          { text: '项目搭建', link: '/frontend/vue2/' },
          { text: '查漏补缺', link: '/frontend/vue2/leak_filling' },
          {
            text: '渲染选项', items: [
              { text: 'render', link: '/frontend/vue2/render' },
            ]
          },
        ]
      },
    ],
    '/frontend/node/': [
      {
        text: "Node.js",
        items: [
          { text: "node.js", link: "/frontend/node/" },
          { text: "更新卸载node_modules", link: "/frontend/node/npm-uninstall" },
        ]
      }

    ],
    '/frontend/react/': [
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
  }
}

//全局配置
export default defineConfig({
  base,
  title: "晨钟暮鼓",
  description: "学习之旅，记录生活的点滴",
  head: [
    ['link', { rel: 'icon', href: `${base}logo.svg` }],
    [
      'script',
      { async: '', src: `${base}dandelion.js` }
    ],
  ],
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    logo: '/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lovemyFamilyFovever', ariaLabel: 'Visit our GitHub page' },
      {
        icon: {
          svg: '<svg t="1711213717846" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4245" width="12" height="12"><path d="M512 512m-494.933333 0a494.933333 494.933333 0 1 0 989.866666 0 494.933333 494.933333 0 1 0-989.866666 0Z" fill="#C71D23" p-id="4246"></path><path d="M762.538667 457.045333h-281.088a24.4736 24.4736 0 0 0-24.439467 24.405334v61.098666c-0.034133 13.5168 10.922667 24.439467 24.405333 24.439467h171.1104c13.5168 0 24.439467 10.922667 24.439467 24.439467v12.219733a73.3184 73.3184 0 0 1-73.3184 73.3184h-232.209067a24.439467 24.439467 0 0 1-24.439466-24.439467v-232.174933a73.3184 73.3184 0 0 1 73.3184-73.3184h342.152533c13.482667 0 24.405333-10.922667 24.439467-24.439467l0.034133-61.098666a24.405333 24.405333 0 0 0-24.405333-24.439467H420.352a183.296 183.296 0 0 0-183.296 183.296V762.538667c0 13.482667 10.922667 24.439467 24.405333 24.439466h360.516267a164.9664 164.9664 0 0 0 165.000533-165.000533v-140.526933a24.439467 24.439467 0 0 0-24.439466-24.439467z" fill="#FFFFFF" p-id="4247"></path></svg>'
        },// 这里的svg是自己写的，可以换成别的svg图标
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
    },
    nav: nav(),
    sidebar: sidebar(),
  }
})
