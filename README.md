--- README.md (原始)
# My Blog

url: [lovemyfamilyfovever.github.io/myblog/](https://lovemyfamilyfovever.github.io/myblog/)

+++ README.md (修改后)
# 晨钟暮鼓 - 个人技术博客

[![Deploy](https://github.com/lovemyfamilyfovever/myblog/actions/workflows/deploy.yml/badge.svg)](https://github.com/lovemyfamilyfovever/myblog/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

📝 基于 VitePress 构建的现代化个人技术博客，记录前端、后端、网络、AI 等领域的学习心得与技术总结。

🌐 **在线预览**: [lovemyfamilyfovever.github.io/myblog/](https://lovemyfamilyfovever.github.io/myblog/)

## ✨ 特性

- 🚀 **快速构建**: 基于 Vite + Vue 3，极速热更新
- 📱 **响应式设计**: 完美适配移动端和桌面端
- 🌓 **深色模式**: 自动/手动切换主题
- 🔍 **全文搜索**: 内置客户端搜索功能
- 📦 **Markdown 增强**: 支持自定义组件、代码高亮
- 🎨 **优雅 UI**: 简洁现代的设计风格

## 📚 内容分类

- **前端开发**: Vue、React、TypeScript、CSS 等
- **后端技术**: Node.js、数据库、API 设计
- **计算机网络**: HTTP、TCP/IP、网络安全
- **人工智能**: AI 基础、大模型应用
- **面试指南**: 前端面试题、算法题解
- **工具教程**: Git、Docker、Linux 命令

## 🛠️ 技术栈

- **框架**: [VitePress](https://vitepress.dev/) (Vue 3 + Vite)
- **语言**: TypeScript, Markdown
- **部署**: GitHub Pages
- **包管理**: pnpm (推荐) / npm / yarn

## 🚀 快速开始

### 前置要求

- Node.js >= 18.x
- pnpm >= 8.x (推荐使用 pnpm)

### 安装依赖

```bash
# 推荐使用 pnpm
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### 本地开发

```bash
pnpm dev
# 或
npm run dev
# 或
yarn dev
```

启动后访问 `http://localhost:5173` 预览博客。

### 构建生产版本

```bash
pnpm build
# 或
npm run build
# 或
yarn build
```

构建产物将输出到 `.vitepress/dist` 目录。

### 本地预览生产构建

```bash
pnpm preview
# 或
npm run preview
# 或
yarn preview
```

## 📁 项目结构

```
myblog/
├── docs/                    # 博客文章目录
│   ├── 01.前端/            # 前端相关文档
│   ├── 02.后端/            # 后端相关文档
│   ├── 03.网络/            # 计算机网络文档
│   ├── 04.AI/              # 人工智能文档
│   └── ...                 # 其他分类
├── .vitepress/             # VitePress 配置
│   ├── config.ts           # 站点配置
│   ├── theme/              # 主题定制
│   │   ├── index.ts        # 主题入口
│   │   └── styles/         # 自定义样式
│   └── components/         # 自定义组件
├── public/                 # 静态资源
├── package.json            # 项目依赖
└── README.md               # 项目说明
```

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 [MIT](LICENSE) 许可证。

## 🙏 致谢

感谢以下开源项目：

- [VitePress](https://vitepress.dev/) - 强大的静态站点生成器
- [Vue 3](https://vuejs.org/) - 渐进式 JavaScript 框架
- [Vite](https://vitejs.dev/) - 下一代前端构建工具

---

**© 2024 晨钟暮鼓**. 用文字记录成长，用代码改变世界。