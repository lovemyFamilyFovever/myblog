import { defineConfig } from 'vitepress'
const isProd = process.env.npm_lifecycle_event === 'build'


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
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/logo.svg',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '示例', link: '/markdown-examples' },
      {
        text: "前端",
        items: [
          { text: 'vue', link: '/frontend/vue/' },
          { text: 'react', link: '/frontend/react/' },
        ]
      },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: '目录1', link: '/markdown-examples' },
          { text: '目录2', link: '/api-examples' },
          { text: '目录3', link: '/frontend/react/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lovemyFamilyFovever', ariaLabel: 'Visit our GitHub page' },
      {
        icon: {
          svg: '<svg t="1711213717846" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4245" width="12" height="12"><path d="M512 512m-494.933333 0a494.933333 494.933333 0 1 0 989.866666 0 494.933333 494.933333 0 1 0-989.866666 0Z" fill="#C71D23" p-id="4246"></path><path d="M762.538667 457.045333h-281.088a24.4736 24.4736 0 0 0-24.439467 24.405334v61.098666c-0.034133 13.5168 10.922667 24.439467 24.405333 24.439467h171.1104c13.5168 0 24.439467 10.922667 24.439467 24.439467v12.219733a73.3184 73.3184 0 0 1-73.3184 73.3184h-232.209067a24.439467 24.439467 0 0 1-24.439466-24.439467v-232.174933a73.3184 73.3184 0 0 1 73.3184-73.3184h342.152533c13.482667 0 24.405333-10.922667 24.439467-24.439467l0.034133-61.098666a24.405333 24.405333 0 0 0-24.405333-24.439467H420.352a183.296 183.296 0 0 0-183.296 183.296V762.538667c0 13.482667 10.922667 24.439467 24.405333 24.439466h360.516267a164.9664 164.9664 0 0 0 165.000533-165.000533v-140.526933a24.439467 24.439467 0 0 0-24.439466-24.439467z" fill="#FFFFFF" p-id="4247"></path></svg>'
        },
        link: '',
        // 也可以为无障碍添加一个自定义标签 (可选但推荐):
        ariaLabel: 'cool https://gitee.com/xiangaiyun'
      }
    ]
  }
})
