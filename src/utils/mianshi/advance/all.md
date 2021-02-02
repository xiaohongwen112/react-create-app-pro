## react 与 vue 的区别
### 监听数据变化实现原理不同
react： 使用引用diff比较
vue： 2.x Object.defineProperty; 3.x proxy
#### 数据流不同
子父组件之间通信
react 单向
vue双向

### 框架本质
react mvc
vue mvvm

### 代码写法
react jsx+inline style 
vue wepback + vue + loader

### 数据绑定问题
react state 需要 setState
vue data  this.data 直接修改


## react PureComponent
主要涉及 shouldComponentUpdate 这个方法
在数据更新时会调取这个方法，导致页面重新渲染（这意味着就算没有改变组件的props或者state，也会导致组件的重绘。这就经常导致组件因为不相关数据的改变导致重绘，这极大的降低了React的渲染效率）

需要注意的是，PureComponent使用浅比较判断组件是否需要重绘

## http2.0
二进制传输，  http1.x 都是文本传输
首部收缩
客户端请求发送多个响应
多路复用
请求优先级

### http1.1存在有哪些问题：

线头阻塞：TCP连接上只能发送一个请求，前面的请求未完成前，后续的请求都在排队等待。
多个TCP连接
虽然HTTP/1.1管线化可以支持请求并发，但是浏览器很难实现，chrome、firefox等都禁用了管线化。所以1.1版本请求并发依赖于多个TCP连接，建立TCP连接成本很高，还会存在慢启动的问题。
头部冗余，采用文本格式
HTTP/1.X版本是采用文本格式，首部未压缩，而且每一个请求都会带上cookie、user-agent等完全相同的首部。
客户端需要主动请求

## 介绍JSX
