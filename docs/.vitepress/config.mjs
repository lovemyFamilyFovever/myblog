import { defineConfig } from 'vitepress'
const isProd = process.env.npm_lifecycle_event === 'build'

const head = [['link', { rel: 'icon', href: `/logo.svg` }]]

if (isProd) {
  //增加百度统计
  head.push([
    'script',
    {},
    `
      window._hmt = window._hmt || [];
      (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?59ad112586fc5290621ebf30a17146c4";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
      })();
      `
  ])
}

export default defineConfig({
  base: '/myblog/',
  head,
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '目录1', link: '/markdown-examples' },
          { text: '目录2', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
