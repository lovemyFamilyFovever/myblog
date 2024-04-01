---
outline: [1,3]
head:
  - - meta
    - name: description
      content: 安全快速地卸载&更新 node_modules 目录下的依赖包
  - - meta
    - name: keywords
      content: node_modules 安全删除
---

如何彻底安全快速的删除 node_modules 目录下的依赖包？

## 1. 手动删除

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

## 3. 使用 npm-clean-install 工具

npm-clean-install 是一个可以帮助你删除 node_modules 目录下的依赖包，并重新安装依赖包的工具。

使用 npm-clean-install 工具可以快速删除 node_modules 目录下的依赖包，并重新安装依赖包。

```bash
npm install -g npm-clean-install
```

```bash
npm-clean-install # 删除 node_modules 目录下的依赖包，并重新安装依赖包
```

## 4. 使用 rimraf 工具

rimraf 是一个可以帮助你删除文件和目录的工具。

使用 rimraf 工具可以快速删除 node_modules 目录下的依赖包。

```bash
npm install -g rimraf
```

```bash
rimraf node_modules # 删除 node_modules 目录下的依赖包
```
