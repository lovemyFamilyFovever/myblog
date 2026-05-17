import { defineConfig } from 'vitepress'
import mdItCustomAttrs from 'markdown-it-custom-attrs'
const base = '/myblog/';

// ==================== 导航栏 ====================
function nav() {
  return [
    { text: '首页', link: '/' },

    // ── 前端 ──
    {
      text: '前端',
      items: [
        { text: '总览', link: '/frontend/' },
        { text: '学习路线', link: '/frontend/learning-path' },
        {
          text: '基础语言',
          items: [
            { text: 'HTML', link: '/frontend/html/' },
            { text: 'CSS', link: '/frontend/css/' },
            { text: 'JavaScript', link: '/frontend/javascript/' },
            { text: 'TypeScript', link: '/frontend/typescript/' },
          ]
        },
        {
          text: '框架',
          items: [
            { text: 'Vue2', link: '/frontend/vue2/' },
            { text: 'Vue3', link: '/frontend/vue3/' },
            { text: 'React', link: '/frontend/react/' },
            { text: 'Angular', link: '/frontend/angular/' },
          ]
        },
        {
          text: '工程化',
          items: [
            { text: 'Vite', link: '/frontend/vite/' },
            { text: 'Pinia', link: '/frontend/pinia/' },
            { text: 'Node.js', link: '/frontend/node/' },
            { text: '性能优化', link: '/frontend/optimization/' },
          ]
        },
      ]
    },

    // ── 后端 ──
    {
      text: '后端',
      items: [
        {
          text: '服务端',
          items: [
            { text: 'C# 基础', link: '/backend/csharp' },
            { text: 'Blazor', link: '/backend/blazor' },
          ]
        },
      ]
    },

    // ── 网络 ──
    {
      text: '网络',
      items: [
        {
          text: '网络协议',
          items: [
            { text: '网络基础', link: '/network/' },
            { text: 'TCP/IP', link: '/network/TCP-IP' },
            { text: 'JWT 认证', link: '/network/jwt' },
          ]
        },
        {
          text: 'HTTP 相关',
          items: [
            { text: 'HTTP 请求头分析', link: '/network/http-headers-analysis' },
          ]
        },
        { text: '常见 Bug', link: '/frontend/bugs/' },
      ]
    },
    // ── AI ──
    {
      text: 'AI',
      //link: '/artificialIntelligence/' 
      items: [
        { text: '越狱词', link: '/artificialIntelligence/break-prison' },
        { text: '提示词', link: '/artificialIntelligence/prompt' },
        { text: '超级提示词', link: '/artificialIntelligence/super-prompt' },
        { text: '学习', link: '/artificialIntelligence/study' },
      ]
    },

    // ── 面试 ──
    {
      text: '面试',
      items: [
        { text: '前端面试题', link: '/interview/' },
        { text: 'DeepSeek', link: '/interview/business/DS' },
        { text: '智谱 GLM', link: '/interview/business/GLM' },
        { text: 'MiMo', link: '/interview/business/Mimo' },
        { text: 'MiniMax', link: '/interview/business/MiniMax' },
        { text: '通义千问', link: '/interview/business/qwen' },
      ]
    },

    // ── 算法 ──
    { text: '算法', link: '/frontend/javascript/SortingAlgorithm' },

    // ── 项目 ──
    { text: '项目', link: '/project/' },

    // ── 工具 ──
    { text: 'Git', link: '/tools/git/' },

    // ── 随笔 ──
    {
      text: '随笔',
      items: [
        { text: '文章摘录', link: '/article/fragment/' },
        { text: '技巧收集', link: '/article/skill/' },
        { text: '建站笔记', link: '/blog/config' },
      ]
    },
  ]
}

// ==================== 侧边栏 ====================
function sidebar() {
  return {

    // ══════════════════════════════════════
    //  前端 - 基础语言
    // ══════════════════════════════════════

    '/frontend/html/': [{
      text: 'HTML',
      items: [
        { text: 'HTML 基础', link: '/frontend/html/' },
        { text: '常见 Bug', link: '/frontend/html/bugs' },
      ]
    }],

    '/frontend/css/': [{
      text: 'CSS',
      items: [
        { text: 'CSS 基础', link: '/frontend/css/' },
        { text: '常用代码片段', link: '/frontend/css/normalStyle' },
        { text: 'BFC 块级格式化上下文', link: '/frontend/css/bfc' },
        { text: '特殊选择符', link: '/frontend/css/selector' },
        { text: 'Background 详解', link: '/frontend/css/background' },
        { text: 'Grid 布局', link: '/frontend/css/grid' },
      ]
    }],

    '/frontend/javascript/': [
      {
        text: 'JavaScript',
        items: [
          { text: '总览', link: '/frontend/javascript/index' },
          { text: 'Array', link: '/frontend/javascript/array' },
          { text: 'String', link: '/frontend/javascript/string' },
          { text: 'Object', link: '/frontend/javascript/object' },
          { text: '深拷贝 & 浅拷贝', link: '/frontend/javascript/deep-shallow-copy' },
          { text: 'Export 导出模块', link: '/frontend/javascript/export' },
          { text: 'instanceof / static / super', link: '/frontend/javascript/instanceof-static-super' },
          { text: '浏览器与设备宽高获取', link: '/frontend/javascript/browser-dimensions' },
          { text: '图片懒加载实现', link: '/frontend/javascript/img-lazyload' },
          { text: 'call / apply / bind', link: '/frontend/javascript/call-apply-bind' },
          { text: 'JS 开发者 33 个概念', link: '/frontend/javascript/33-concepts' },
          { text: '防抖与节流', link: '/frontend/javascript/debounce-throttle' },
          { text: 'IIFE', link: '/frontend/javascript/iife' },
          { text: 'while 循环', link: '/frontend/javascript/while-loop' },
          { text: '原型链', link: '/frontend/javascript/prototype' },
        ]
      },
      {
        text: '思维导图',
        collapsed: true,
        items: [
          { text: '编程风格和技巧', link: '/frontend/javascript/mindmap/codeStyle' },
          { text: 'JS 基础', link: '/frontend/javascript/mindmap/javaScript' },
          { text: '正则表达式', link: '/frontend/javascript/mindmap/regex' },
          { text: 'Date 对象', link: '/frontend/javascript/mindmap/date' },
          { text: '数组对象', link: '/frontend/javascript/mindmap/array' },
          { text: '字符串对象', link: '/frontend/javascript/mindmap/string' },
        ]
      },
    ],

    '/frontend/typescript/': [{
      text: 'TypeScript',
      items: [
        { text: '介绍', link: '/frontend/typescript/' },
        { text: '常见问题', link: '/frontend/typescript/bugs' },
      ]
    }],

    '/frontend/bugs/': [{
      text: '常见 Bug',
      items: [
        { text: 'textarea 默认值问题', link: '/frontend/bugs/' },
      ]
    }],

    // ══════════════════════════════════════
    //  前端 - 框架
    // ══════════════════════════════════════

    '/frontend/vue2/': [{
      text: 'Vue2',
      items: [
        { text: '项目搭建', link: '/frontend/vue2/' },
        { text: '查漏补缺', link: '/frontend/vue2/leak-filling' },
        { text: '手写响应式原理', link: '/frontend/vue2/vue2-reactive-principle' },
        { text: '组件通信', link: '/frontend/vue2/ComponentCommunication' },
        { text: '源码解析', link: '/frontend/vue2/sourcecode' },
        {
          text: '源码细节',
          collapsed: true,
          items: [
            { text: 'render 渲染选项', link: '/frontend/vue2/details/render' },
            { text: 'toRawType', link: '/frontend/vue2/details/toRawType' },
            { text: 'isValidArrayIndex', link: '/frontend/vue2/details/isValidArrayIndex' },
            { text: 'isPromise', link: '/frontend/vue2/details/isPromise' },
            { text: 'cache', link: '/frontend/vue2/details/cache' },
            { text: 'toArray', link: '/frontend/vue2/details/toArray' },
            { text: 'genStaticKeys', link: '/frontend/vue2/details/genStaticKeys' },
            { text: 'AST', link: '/frontend/vue2/details/AST' },
            { text: 'looseEqual', link: '/frontend/vue2/details/looseEqual' },
            { text: 'constant', link: '/frontend/vue2/details/constant' },
            { text: 'VNode', link: '/frontend/vue2/details/VNode' },
            { text: '方法劫持(重写)', link: '/frontend/vue2/details/MethodHijacking' },
            { text: 'ArrayMutating', link: '/frontend/vue2/details/ArrayMutating' },
            { text: 'once', link: '/frontend/vue2/details/once' },
          ]
        }
      ]
    }],

    '/frontend/vue3/': [{
      text: 'Vue3',
      items: [
        { text: '安装步骤', link: '/frontend/vue3/' },
        { text: 'setup 语法糖', link: '/frontend/vue3/setup' },
        { text: '查漏补缺', link: '/frontend/vue3/leak-filling' },
        { text: '组件通信', link: '/frontend/vue3/Component-Communication' },
        { text: '组件通信 Demo', link: '/frontend/vue3/Component-Communication-demo' },
        { text: 'Vue Router', link: '/frontend/vue3/vue-router' },
      ]
    }],

    '/frontend/react/': [{
      text: 'React',
      items: [
        { text: '介绍', link: '/frontend/react/' },
      ]
    }],

    '/frontend/angular/': [{
      text: 'Angular',
      items: [
        { text: '介绍', link: '/frontend/angular/' },
      ]
    }],

    // ══════════════════════════════════════
    //  前端 - 工程化
    // ══════════════════════════════════════

    '/frontend/vite/': [{
      text: 'Vite',
      items: [
        { text: 'Vite 基础', link: '/frontend/vite/' },
      ]
    }],

    '/frontend/pinia/': [{
      text: 'Pinia',
      items: [
        { text: 'Pinia简介', link: '/frontend/pinia/' },
        { text: 'Pinia和常用的组件传值的对比', link: '/frontend/pinia/pinia-vs-component-props' },
        { text: 'Pinia 核心用法详解', link: '/frontend/pinia/use' },
      ]
    }],

    '/frontend/node/': [{
      text: 'Node.js',
      items: [
        { text: '常见问题解决', link: '/frontend/node/' },
      ]
    }],

    '/frontend/optimization/': [{
      text: '性能优化',
      items: [
        { text: 'HTML 优化', link: '/frontend/optimization/' },
        { text: 'Vue3 图片性能优化', link: '/frontend/optimization/performance-optimization' },
        { text: '7000 字前端性能优化总结', link: '/frontend/optimization/frontend-7000' },
      ]
    }],

    // ══════════════════════════════════════
    //  后端
    // ══════════════════════════════════════

    '/backend/': [{
      text: '后端',
      items: [
        { text: 'C# 基础', link: '/backend/csharp' },
        { text: 'Blazor 基础', link: '/backend/blazor' },
      ]
    }],

    // ══════════════════════════════════════
    //  AI
    // ══════════════════════════════════════

    '/artificialIntelligence/': [{
      text: '人工智能',
      items: [
        { text: '越狱词', link: '/artificialIntelligence/break-prison' },
        { text: '提示词', link: '/artificialIntelligence/prompt' },
        { text: '超级提示词', link: '/artificialIntelligence/super-prompt' },
        { text: '学习', link: '/artificialIntelligence/study' },
      ]

    }],

    // ══════════════════════════════════════
    //  网络
    // ══════════════════════════════════════

    '/network/': [
      {
        text: '网络协议',
        items: [
          { text: '网络基础', link: '/network/' },
          { text: 'TCP/IP', link: '/network/TCP-IP' },
          { text: 'JWT 认证', link: '/network/jwt' },
        ]
      },
      {
        text: 'HTTP 相关',
        items: [
          { text: 'HTTP 请求头分析', link: '/network/http-headers-analysis' },
        ]
      },
    ],

    // ══════════════════════════════════════
    //  面试
    // ══════════════════════════════════════

    '/interview/': [{
      text: '前端面试题',
      items: [
        { text: '面试题汇总', link: '/interview/' },
      ]
    }],

    '/interview/business/': [{
      text: 'AI 公司面经',
      items: [
        { text: 'DeepSeek', link: '/interview/business/DS' },
        { text: '智谱 GLM', link: '/interview/business/GLM' },
        { text: 'MiMo', link: '/interview/business/Mimo' },
        { text: 'MiniMax', link: '/interview/business/MiniMax' },
        { text: '通义千问', link: '/interview/business/qwen' },
      ]
    }],

    // ══════════════════════════════════════
    //  随笔
    // ══════════════════════════════════════

    '/article/fragment/': [{
      text: '文章摘录',
      items: [
        { text: '片段总览', link: '/article/fragment/' },
        { text: '解决了这 7 个问题，我开始自律成瘾', link: '/article/fragment/self-discipline' },
        { text: '怎样让记忆力变强', link: '/article/fragment/improveMemory' },
        { text: '懒洋洋的男人', link: '/article/fragment/lazyMan' },
        { text: '十年学会编程', link: '/article/fragment/learnCodeTenYears' },
        { text: '编程随想', link: '/article/fragment/programmingThinking' },
        { text: '程序一点点地写，日子一天天地过', link: '/article/fragment/programWrite' },
        { text: '为什么说软件开发是吃青春饭？', link: '/article/fragment/softwareThinking' },
        { text: '学习方法论', link: '/article/fragment/studyTips' },
      ],
    }],

    '/article/skill/': [{
      text: '技巧收集',
      items: [
        { text: 'Windows 命令行技巧', link: '/article/skill/' },
        { text: '关于写作', link: '/article/skill/write' },
      ]
    }],

    // ══════════════════════════════════════
    //  建站笔记
    // ══════════════════════════════════════

    '/blog/': [{
      text: '建站笔记',
      items: [
        { text: '站点配置', link: '/blog/config' },
        { text: '注意事项', link: '/blog/note' },
        { text: '图片插件', link: '/blog/plugins/addPicPlugin' },
      ]
    }],

    // ══════════════════════════════════════
    //  算法
    // ══════════════════════════════════════

    '/frontend/javascript/SortingAlgorithm': [{
      text: '排序算法',
      items: [
        { text: '排序算法', link: '/frontend/javascript/SortingAlgorithm' },
      ]
    }],
  }
}

//head标签  
function head() {
  return [
    // SEO 优化
    ["meta", { name: "keywords", content: "前端开发,JavaScript,Vue,React,TypeScript,CSS,HTML,技术博客,学习笔记,AI面经,DeepSeek,网络协议,面试指南" }],
    ["meta", { name: "author", content: "lxc" }],
    ["meta", { name: "robots", content: "index, follow" }],

    // Open Graph / Facebook
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://lovemyfamilyfovever.github.io/myblog/" }],
    ["meta", { property: "og:title", content: "晨钟暮鼓 - 个人技术博客" }],
    ["meta", { property: "og:description", content: "前端开发（Vue/React/TypeScript）、后端技术、网络协议、AI 面经与提示词工程、面试指南等学习笔记" }],
    ["meta", { property: "og:image", content: "/myblog/logo.svg" }],

    // Twitter
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:url", content: "https://lovemyfamilyfovever.github.io/myblog/" }],
    ["meta", { property: "twitter:title", content: "晨钟暮鼓 - 个人技术博客" }],
    ["meta", { property: "twitter:description", content: "前端开发（Vue/React/TypeScript）、后端技术、网络协议、AI 面经与提示词工程、面试指南等学习笔记" }],
    ["meta", { property: "twitter:image", content: "/myblog/logo.svg" }],

    // Favicon - 提供多种格式以确保兼容性
    // 注意：顺序很重要，浏览器会使用最后一个它能识别的格式
    ['link', { rel: 'icon', href: `${base}favicon-32x32.png`, sizes: '32x32', type: 'image/png' }],
    ['link', { rel: 'icon', href: `${base}favicon-16x16.png`, sizes: '16x16', type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: `${base}apple-touch-icon.png`, sizes: '180x180' }],
    ['link', { rel: 'shortcut icon', href: `${base}favicon.ico` }],


    // Canonical URL
    ['link', { rel: 'canonical', href: 'https://lovemyfamilyfovever.github.io/myblog/' }],

    // RSS Feed
    ['link', { rel: 'alternate', type: 'application/atom+xml', title: '晨钟暮鼓', href: `${base}feed.xml` }],

    // Custom scripts
    ['script', { async: '', src: `${base}dandelion.js` }],

    // Structured Data (JSON-LD)
    ["script", { type: "application/ld+json" }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "晨钟暮鼓",
      "description": "学习之旅，记录生活的点滴",
      "url": "https://lovemyfamilyfovever.github.io/myblog/",
      "author": {
        "@type": "Person",
        "name": "lxc"
      }
    })]
  ]
}

//全局配置
export default defineConfig({

  server: {
    port: 5174,        // 设置端口
    open: true,        // 自动打开浏览器
    host: '0.0.0.0'    // 允许外部访问
  },
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
  description: "晨钟暮鼓 - 个人技术博客，涵盖前端开发（Vue/React/TypeScript）、后端技术、网络协议、AI 面经与提示词工程、面试指南等学习笔记与经验分享。",
  head: head(),
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/lovemyFamilyFovever/myblog/edit/main/docs/:path',
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
