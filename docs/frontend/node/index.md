---
outline: [1,3]
head:
  - - meta
    - name: description
      content: Node.js 前端框架 前端开发 前端框架 前端工程师
  - - meta
    - name: keywords
      content: Node.js 前端框架 前端开发 前端框架 前端工程师
---


# 查看node安装的全局模块

```
# "-g" 表示在全局范围内进行操作，
#"--depth=0" 表示只列出顶层依赖，不包括依赖的依赖。

npm list -g --depth=0

```

# 下载速度太慢解决办法

更换镜像源

```
# 查看镜像源
npm config get registry
yarn config get registry
pnpm config get registry
```

```
# 设置镜像源
npm config set registry https://registry.npmmirror.com
yarn config set registry https://registry.npmmirror.com
pnpm config set registry https://registry.npmmirror.com
```

```
# 更新pnpm包管理工具
npm install -g pnpm
```

```
# 重新安装依赖
pnpm install
```

# 如何彻底安全快速的删除 node_modules 目录下的依赖包？

## 1. 手动删除(不推荐)

手动删除 node_modules 目录下的依赖包，需要注意以下几点：

1. 首先，删除 node_modules 目录下的所有依赖包，包括依赖包的依赖包。
2. 然后，删除 package-lock.json 文件。  
3. 最后，删除 package.json 文件中的 dependencies 和 devDependencies 字段。

## 2. 使用 npm-check-updates 工具

npm-check-updates 是一个可以帮助你检查 package.json 文件中的依赖包是否有新版本的工具。

使用 npm-check-updates 工具可以快速找到 package.json 文件中的依赖包是否有新版本，然后使用 npm install 命令更新依赖包。

```bash
npm install -g npm-check-updates
```

```bash
ncu # 检查 package.json 文件中的依赖包是否有新版本
```

```bash
ncu -u # 更新 package.json 文件中的依赖包到最新版本
```


## 3. 使用 rimraf 工具

rimraf 是一个可以帮助你删除文件和目录的工具。

使用 rimraf 工具可以快速删除 node_modules 目录下的依赖包。

```bash
npm install -g rimraf # 安装 rimraf 工具
```

```bash
rimraf node_modules # 删除 node_modules 目录下的依赖包
```

```bash
npm cache clear --force # 清除 npm 缓存
```



