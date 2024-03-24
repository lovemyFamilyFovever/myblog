---
layout: doc
---

---

# 主页配置
## actions
```md
hero:
  actions:
    - theme: brand
      text: Markdown示例
      link: /markdown-examples
    - theme: alt
      text: API示例
      link: /api-examples
    - theme: custom-button
      text: blog记录
      link: /blog-config
```

在 VitePress 的主页配置文件中，actions 字段用于定义页面上的动作按钮，而 theme 是用于定义按钮的主题的属性之一。theme 属性接受两种预定义的主题值：brand 和 alt。


- `brand`：该主题通常用于强调页面中的主要操作，比如 "Get Started" 这样的按钮。它通常会使用品牌的主题颜色，并以醒目的方式呈现。
- `alt`：该主题通常用于次要操作或者辅助功能的按钮。它通常会使用非品牌的颜色，比如灰色或者其他中性颜色，并以不那么醒目的方式呈现。
- 除了 theme 属性之外，actions 字段还可以包含自定义按钮，通过设置 theme 属性为 custom-button 来实现。自定义按钮的配置项如下：

---

