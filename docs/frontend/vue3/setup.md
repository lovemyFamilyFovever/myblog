---
outline: [1,3]
head:
  - - meta
    - name: description
      content: vue3 setup语法糖
  - - meta
    - name: keywords
      content: Vue.js Vue3 Vue3搭建步骤 Vue3教程 Vue3入门 前端开发 前端框架 前端工程师 setup
---


setup语法糖和原生Vue3的写法基本一致，但是使用setup语法糖可以让代码更加简洁，更加易读。

## 原生Vue3的写法：

```javascript
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const increment = () => {
      count.value++
    }

    onMounted(() => {
      console.log('mounted')
    })

    return {
      count,
      increment
    }
  }
}
```


- `ref` 用来创建响应式变量
- `onMounted` 用来在组件挂载完成后执行一些逻辑
- `return` 返回一个对象，包含响应式变量和方法

## setup语法糖的写法：

```javascript
import { ref, onMounted } from 'vue'
const count = ref(0)
const increment = () => {
    count.value++
}

defineExpose({
    count,
    increment
})

onMounted(() => {
    console.log('mounted')
})
```

setup语法糖会在编译的时候自动添加默认api:`defineExpose()`,如果这个api不输入任何参数，则会默认暴露所有在`setup`函数中定义的变量和方法。