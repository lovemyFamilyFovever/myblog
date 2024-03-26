# Vue2 项目搭建

## 介绍

搭建 Vue2 项目有两种主要方法：

- 使用官方脚手架 `Vue CLI`
- 手动搭建项目

## Vue CLI

**使用官方脚手架（推荐）`Vue CLI`,可以快速创建一个包含所有必要配置文件和依赖项的Vue项目。**
   
1. 安装 `Vue CLI`：
```
npm install -g @vue/cli
```
2. 创建一个新项目：
```
vue create my-project
```
3. 进入项目目录：
```
cd my-project
```
4. 运行项目：
```
npm run dev
```

## 手动搭建项目

1. 创建项目目录(文件夹)。
2. 初始化 `package.json` 文件。(初始化项目依赖)
```
npm init -y
```
3. 安装 `Vue` 依赖。
```
npm install vue
```
4. 运行项目。
```
npm run serve
```