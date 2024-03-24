---
layout: doc
---

---

# config.js

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


---

