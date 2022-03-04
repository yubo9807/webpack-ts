## TypeScript

- [TypeScrpt 文档](https://ts.xcatliu.com/advanced/type-aliases.html)
- [装饰器](https://www.tslang.cn/docs/handbook/decorators.html)

### 类型约束
- 对代码中所有的标识符（变量、函数、参数、返回值）进行类型检查
- 不参与 js 运行

##### 函数调用参数类型不明确

```typescript
/**
 * 格式化时间
 */
function buildTime(value) {
  // code...
}

// ts
function buildTime(value: Date | number) {
  // code...
}
```

### 装饰器

- 对后端数据校验（甩锅）
- 方法更新提示
- 会打包在 js 中，参与 js 运行

##### 后端返回数据可能导致的问题

1. 容易导致前端代码报错

```js
// 正常测试数据返回一个数组
files = [{ name: 'file1', url: '/url1' }, { name: 'file2', url: '/url2' }]

// 线上数据库实际为空，返回 null
files = null

// 结果前端代码是这样写的
files.map();  //--> 产生报错：Cannot read properties of null (reading 'map')
```

2. 在引入一些组件时页面数据消失

```vue
// 有时后端还这样返回
files = [{ name: 'file1', url: '/url1' }, null ]

<!-- 前端就想读取个属性给页面展示 -->
<li v-for="item in files">
  <span>{{ item.name }}</span>
</li>
```

## Axios 

1. 取消全局报错提示
2. 网络条件差的情况下尝试多次请求返回数据
