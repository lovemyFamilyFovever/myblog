---
outline: [1,3]
head:
  - - meta
    - name: description
      content: vue3 安装步骤
  - - meta
    - name: keywords
      content: Vue.js Vue3 Vue3搭建步骤 Vue3教程 Vue3入门 前端开发 前端框架 前端工程师
---


# Vue3 安装步骤

搭建 Vue3 项目有两种主要方法：

主要方法：

- 使用官方脚手架 `Vue CLI`的 `default` 模板。

- 基于Vite创建项目。


## 使用Vue CLI

[与搭建 Vue2 项目的步骤基本相同，只是 Vue3 脚手架的默认模板有所不同](/frontend/vue2/index)

## 基于Vite创建项目

Vite 是下一代前端构建工具，它能显著提升开发体验，其核心理念是“速度优先”。

具体操作如下（点击查看[官方文档](https://cn.vuejs.org/guide/quick-start.html#creating-a-vue-application)）：

```bash
## 1.创建命令
npm create vue@latest

## 2.具体配置
## 配置项目名称
√ Project name: vue3_test
## 是否添加TypeScript支持
√ Add TypeScript?  Yes
## 是否添加JSX支持
√ Add JSX Support?  No
## 是否添加路由环境
√ Add Vue Router for Single Page Application development?  No
## 是否添加pinia环境
√ Add Pinia for state management?  No
## 是否添加单元测试
√ Add Vitest for Unit Testing?  No
## 是否添加端到端测试方案
√ Add an End-to-End Testing Solution? » No
## 是否添加ESLint语法检查
√ Add ESLint for code quality?  Yes
## 是否添加Prettiert代码格式化
√ Add Prettier for code formatting?  No
```