import { defineConfig } from 'vitepress'
import mdItCustomAttrs from 'markdown-it-custom-attrs'
const base = '/';

//上方导航栏
function nav() {
  return [
    { text: '主页', link: '/' },
    { text: 'blog', link: '/blog/config.md' },
    { text: 'AI', link: '/artificialIntelligence/' },
    { text: '项目开发', link: '/project/' },
    { text: '面试进阶', link: '/interview/' },
    {
      text: '拾慧', items: [
        { text: "文章摘录", link: '/article/fragment/' },
        { text: "技巧收集", link: '/article/skill/' },
      ]
    },
    {
      text: "前端", items: [
        { text: "总览", link: "/frontend/" },
        { text: "前端学习路线", link: "/frontend/learning-path.md" },
        {
          text: "", items: [
            { text: "html", link: "/frontend/html/" },
            { text: "css", link: "/frontend/css/" },
            { text: "javascript", link: "/frontend/javascript/" },
          ]
        },
        {
          text: "", items: [
            { text: "vue2", link: "/frontend/vue2/" },
            { text: "vue3", link: "/frontend/vue3/" },
            { text: "vite", link: "/frontend/vite/" },
            { text: "pinia", link: "/frontend/pinia/" },
          ]
        },
        { text: "react", link: "/frontend/react/" },
        { text: "Angular", link: "/frontend/Angular/" },
        { text: "Node.js", link: "/frontend/node/" },
        { text: "TypeScript", link: "/frontend/TypeScript/" },
      ]
    },
    {
      text: '后端', items: [
        { text: 'C#基础', link: '/backend/csharp' },
        { text: 'Blazor基础', link: '/backend/blazor' },
      ]
    }
  ]
}
//左边导航栏
function sidebar() {
  return {
    '/blog/': [{
      text: '页面配置',
      items: [
        { text: '站点配置', link: '/blog/config' },
        { text: '注意事项', link: '/blog/note' },
      ]
    }, {
      text: '插件配置',
      items: [
        { text: '图片插件', link: '/blog/plugins/addPicPlugin' },
      ]
    }
    ],
    '/frontend/optimization/': [{
      text: "优化",
      items: [
        { text: "html优化", link: "/frontend/optimization/" },
        { text: "7000字前端性能优化总结", link: "/frontend/optimization/frontend-7000.md" },
      ]
    }],
    '/frontend/html/': [{
      text: "html",
      items: [
        { text: "html基础", link: "/frontend/html/" },
        { text: "html-bugs", link: "/frontend/html/bugs" },
      ]
    }],
    '/frontend/css/': [{
      text: "css",
      items: [
        { text: "css基础", link: "/frontend/css/" },
        { text: "css常用代码片段", link: "/frontend/css/normalStyle" },
        { text: "BFC", link: "/frontend/css/BFC" },
        { text: "css特殊选择符", link: "/frontend/css/selector" },
      ]
    }],
    '/frontend/javascript/': [{
      text: 'javascript',
      items: [
        { text: '总览', link: '/frontend/javascript/index' },
        { text: 'Array', link: '/frontend/javascript/array' },
        { text: 'String', link: '/frontend/javascript/String' },
        { text: 'Object', link: '/frontend/javascript/Object' },
        { text: '深拷贝&浅拷贝', link: '/frontend/javascript/深拷贝浅拷贝' },
        { text: 'Export导出模块', link: '/frontend/javascript/export' },
        { text: '基础api', link: '/frontend/javascript/basic-api' },
        { text: 'js获取浏览器和设备相关宽高', link: '/frontend/javascript/window-innerwidth' },
        { text: 'js实现图片懒加载', link: '/frontend/javascript/img-lazyload' },
        { text: 'call()、apply()、bind()区别', link: '/frontend/javascript/call-apply-bind' },
        { text: 'JS开发者应懂的33个概念', link: '/frontend/javascript/33-concepts' },
        { text: '防抖与节流', link: '/frontend/javascript/debounce-throttle' },
        { text: 'IIFE', link: '/frontend/javascript/IIFE' },
        {text:'while',link:'/frontend/javascript/while'},
        {
          text: '思维导图', items: [
            { text: '编程风格和技巧', link: '/frontend/javascript/MindMap/codeStyle' },
            { text: 'js基础', link: '/frontend/javascript/MindMap/javaScript' },
            { text: '正则表达式', link: '/frontend/javascript/MindMap/regex' },
            { text: 'Date对象', link: '/frontend/javascript/MindMap/date' },
            { text: '数组对象', link: '/frontend/javascript/MindMap/array' },
            { text: '字符串对象', link: '/frontend/javascript/MindMap/string' },
          ]
        },
      ]
    }],
    '/frontend/vue2/': [{
      text: 'vue2',
      items: [
        { text: '项目搭建', link: '/frontend/vue2' },
        { text: '查漏补缺vue问答', link: '/frontend/vue2/leak_filling' },
        { text: '手写Vue2响应式原理', link: '/frontend/vue2/vue2-reactive-principle' },
        { text: '组件通信', link: '/frontend/vue2/ComponentCommunication' },
        { text: '🌟源码解析', link: '/frontend/vue2/sourcecode' },
        {
          text: '详解',
          items: [
            { text: 'render渲染选项', link: '/frontend/vue2/Details/render' },
            { text: 'toRawType', link: '/frontend/vue2/Details/toRawType' },
            { text: 'isValidArrayIndex', link: '/frontend/vue2/Details/isValidArrayIndex' },
            { text: 'isPromise', link: '/frontend/vue2/Details/isPromise' },
            { text: 'cache', link: '/frontend/vue2/Details/cache' },
            { text: 'toArray', link: '/frontend/vue2/Details/toArray' },
            { text: 'genStaticKeys', link: '/frontend/vue2/Details/genStaticKeys' },
            { text: 'AST', link: '/frontend/vue2/Details/AST' },
            { text: 'looseEqual', link: '/frontend/vue2/Details/looseEqual' }
          ]
        }
      ]
    }],
    '/frontend/vue3/': [{
      text: 'vue3',
      items: [
        { text: 'Vue3安装步骤', link: '/frontend/vue3/' },
        { text: 'vue3语法糖setup', link: '/frontend/vue3/setup' },
        { text: '查漏补缺', link: '/frontend/vue3/leak_filling' },
      ]
    }],
    '/frontend/node/': [{
      text: "Node.js",
      items: [
        { text: "node.js常见问题解决", link: "/frontend/node/" },
      ]
    }],
    '/frontend/react/': [{
      text: 'react',
      collapsed: true,
      items: [
        { text: '待补充', link: '/markdown-examples' },
        { text: '待补充', link: '/api-examples' },
        { text: '待补充', link: '/frontend/react/' }
      ]
    }],
    '/frontend/TypeScript/': [{
      text: 'TypeScript',
      collapsed: true,
      items: [
        { text: '介绍', link: '/frontend/TypeScript/' },
        { text: '常见问题', link: '/frontend/TypeScript/bugs' },
      ]
    }],
    '/article/fragment/': [{
      text: '文章摘录',
      items: [
        { text: '片段', link: '/article/part/' },
        { text: '解决了这7个问题，我开始自律成瘾', link: '/article/part/article' },
        { text: '怎样让记忆力变强', link: '/article/part/improveMemory' },
        { text: '懒洋洋的男人', link: '/article/part/lazyMan' },
        { text: '十年学会编程', link: '/article/part/learnCodeTenYears' },
        { text: '编程随想', link: '/article/part/programmingThinking' },
        { text: '程序一点点地写,日子一天天地过', link: '/article/part/programWrite' },
        { text: '为什么说软件开发是吃青春饭?', link: '/article/part/softwareThinking' },
        { text: '学习方法论', link: '/article/part/studyTips' }
      ],
    }],
    '/article/skill/': [{
      text: '技巧收集',
      items: [
        { text: 'windows命令行技巧', link: '/article/skill/' },
      ]
    }]
  }
}
//head标签  
function head() {
  return [
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" },],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
    ['link', { rel: 'icon', href: `${base}logo.svg` }],
    ['script', { async: '', src: `${base}dandelion.js` }],
  ]
}

//全局配置
export default defineConfig({

  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': "gallery"
      })
    }
  },
  base,
  title: "晨钟暮鼓",
  description: "学习之旅，记录生活的点滴",
  head: head(),
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
      },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><script xmlns=""/>
                  <path d="M5.03628 7.87818C4.75336 5.83955 6.15592 3.95466 8.16899 3.66815L33.6838 0.0367403C35.6969 -0.24977 37.5581 1.1706 37.841 3.20923L42.9637 40.1218C43.2466 42.1604 41.8441 44.0453 39.831 44.3319L14.3162 47.9633C12.3031 48.2498 10.4419 46.8294 10.159 44.7908L5.03628 7.87818Z" fill="url(#paint0_linear_1287_1214)"/>
                  <path d="M6.85877 7.6188C6.71731 6.59948 7.41859 5.65703 8.42512 5.51378L33.9399 1.88237C34.9465 1.73911 35.8771 2.4493 36.0186 3.46861L41.1412 40.3812C41.2827 41.4005 40.5814 42.343 39.5749 42.4862L14.0601 46.1176C13.0535 46.2609 12.1229 45.5507 11.9814 44.5314L6.85877 7.6188Z" fill="white"/>
                  <path d="M33.1857 14.9195L25.8505 34.1576C25.6991 34.5547 25.1763 34.63 24.9177 34.2919L12.3343 17.8339C12.0526 17.4655 12.3217 16.9339 12.7806 16.9524L22.9053 17.3607C22.9698 17.3633 23.0344 17.3541 23.0956 17.3337L32.5088 14.1992C32.9431 14.0546 33.3503 14.4878 33.1857 14.9195Z" fill="url(#paint1_linear_1287_1214)"/>
                  <path d="M27.0251 12.5756L19.9352 15.0427C19.8187 15.0832 19.7444 15.1986 19.7546 15.3231L20.3916 23.063C20.4066 23.2453 20.5904 23.3628 20.7588 23.2977L22.7226 22.5392C22.9064 22.4682 23.1021 22.6138 23.0905 22.8128L22.9102 25.8903C22.8982 26.0974 23.1093 26.2436 23.295 26.1567L24.4948 25.5953C24.6808 25.5084 24.892 25.6549 24.8795 25.8624L24.5855 30.6979C24.5671 31.0004 24.9759 31.1067 25.1013 30.8321L25.185 30.6487L29.4298 17.8014C29.5008 17.5863 29.2968 17.3809 29.0847 17.454L27.0519 18.1547C26.8609 18.2205 26.6675 18.0586 26.6954 17.8561L27.3823 12.8739C27.4103 12.6712 27.2163 12.5091 27.0251 12.5756Z" fill="url(#paint2_linear_1287_1214)"/>
                  <defs>
                    <linearGradient id="paint0_linear_1287_1214" x1="6.48163" y1="1.9759" x2="39.05" y2="48.2064" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#49C7FF"/>
                      <stop offset="1" stop-color="#BD36FF"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_1287_1214" x1="11.8848" y1="16.4266" x2="26.7246" y2="31.4177" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#41D1FF"/>
                      <stop offset="1" stop-color="#BD34FE"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_1287_1214" x1="21.8138" y1="13.7046" x2="26.2464" y2="28.8069" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#FFEA83"/>
                      <stop offset="0.0833333" stop-color="#FFDD35"/>
                      <stop offset="1" stop-color="#FFA800"/>
                    </linearGradient>
                  </defs>
                <script xmlns=""/></svg>`
        }, link: 'https://vitepress.dev/zh/', ariaLabel: 'Visit our Vitepress page'
      },
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                displayDetails: "显示列表细节",
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2019-2024 lxc '
    },
    nav: nav(),
    sidebar: sidebar(),
  }
})
