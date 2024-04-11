---
outline: [0,3]
layout: doc
---

# config.js {#my-anchor}

## head
添加外部链接,在`head`中添加如下：
```md
 [
      'script',
      {},
      `window._hmt = window._hmt || [];
      (function() {
      var hm = document.createElement("script");
      hm.src = "lib/dandelion.js";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
      })();`
    ]

```
` hm.src = "dandelion.js"` 这个`dandelion.js`是放在`public`中，作为静态文件来引用。


# 添加锚点

先在目标标题元素上添加 id 属性，例如：

```md
## 我的标题 {#my-anchor}
```

然后在文档的任意位置添加锚点链接，例如：

```md
[点击跳转到config.js的位置](#my-anchor)
```

这样，当用户点击锚点"[点击跳转到config.js的位置](#my-anchor)"时，页面会自动滚动到目标标题位置。

