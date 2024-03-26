# vue2 查漏补缺

## Vue的数据为什么频繁变化但只会更新一次？

原因：Vue的响应式系统是异步的，当数据发生变化时，Vue并不会立即更新视图，而是等待下一个事件循环（宏任务）再去更新视图。

解决方法：

1. 使用Vue.set()方法，强制更新视图。
2. 使用$nextTick()方法，在下一个事件循环中更新视图。

```javascript
// 1. 使用Vue.set()方法，强制更新视图
this.$set(this.data, 'name', 'newName')

// 2. 使用$nextTick()方法，在下一个事件循环中更新视图
this.$nextTick(() => {
  console.log(this.data.name)
})
```
## vue使用Object.defineProperty() 的缺陷

Object.defineProperty() 方法是用来在对象上定义新属性，或者修改已有属性，它可以用来监听对象属性的变化。但是，它也有一些缺陷：

1. 无法监听数组的变化。
2. 无法监听对象新增的属性。
3. 无法监听数组的索引变化。


解决方法：

1. 使用Vue.set()方法，强制更新视图。
2. 使用$watch()方法，监听数组的变化。
3. 使用$data()方法，监听对象新增的属性。

```javascript
// 1. 使用Vue.set()方法，强制更新视图
this.$set(this.data, 'name', 'newName')

// 2. 使用$watch()方法，监听数组的变化
this.$watch('data', (newVal, oldVal) => {
  console.log(newVal, oldVal)
}, {deep: true})

// 3. 使用$data()方法，监听对象新增的属性
this.$data().$watch('name', (newVal, oldVal) => {
  console.log(newVal, oldVal)
})
```
