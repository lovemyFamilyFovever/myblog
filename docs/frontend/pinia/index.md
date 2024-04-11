---
# outline: [1,3]
head:
  - - meta
    - name: description
      content: pinia 前端框架 前端开发 前端框架 前端工程师
  - - meta
    - name: keywords
      content: pinia 前端框架 前端开发 前端框架 前端工程师
---


# pinia 前端框架

## pinia里面的getters有啥用，已经有actions还有必要写getters么？这个api的使用场景是啥

> Pinia 是一个 Vue.js 的状态管理库，它是 Vue 3 的官方替代品，用来替代 Vuex。在 Pinia 中，getters 的作用与 Vuex 中的 getters 类似，主要用于在 store 中定义计算属性。这些计算属性可以根据当前 store 的状态衍生出新的数据，而且它们是响应式的，也就是说，当它们依赖的状态发生变化时，它们会自动重新计算。

###  使用场景

1. 派生状态：当你需要从 store 的状态中派生出一些数据，而不是直接使用原始状态时，getters 非常有用。例如，你可能有 一个用户列表，需要从中筛选出活跃用户。
2. 缓存结果：如果某个派生状态的使用非常频繁，使用 getters 可以缓存计算结果，避免每次使用时都重新计算，从而提高性能。
3. 组件间共享：在多个组件中需要使用相同的派生状态时，getters 可以提供一种简便的方法来共享这些状态，而不需要在每个组件中重复编写逻辑。

### 与 Actions 的区别

1. Getters：主要用于同步计算和派生状态，它们是响应式的，并且可以缓存计算结果,与`computed`类似。
2. Actions：主要用于处理异步操作，如 API 调用，或者当改变状态需要多个步骤时。它们也可以用来封装复杂的业务逻辑，保证逻辑的集中和可测试性。

### 示例

```js
// 定义 store
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] // 商品列表
  }),
  getters: {
    totalPrice: (state) => {
      return state.items.reduce((total, item) => {
        return total + item.price
      }, 0)
    }
  },
  actions: {
    // ... 其他 actions
  }
})
```

在组件中使用：

```js
const cartStore = useCartStore()

// 计算购物车总价格
const total = cartStore.totalPrice
```

在这个例子中，totalPrice getter 会根据 items 状态的变化自动更新，这样在组件中就可以直接使用 totalPrice 而不必每次都手动计算。

总之，getters 在 Pinia 中是用来提高代码的可维护性和性能的，它们在需要从现有状态派生出新状态时非常有用。