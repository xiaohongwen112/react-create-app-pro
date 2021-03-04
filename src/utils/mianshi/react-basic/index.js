// const { render } = require("less")

// constructor

// componontWillMount // V17 放弃使用
// static getDerivedStateFromProps

// render



// componentDidMount

// componentWillReceiveProps // qiyong

// shouldComponentUpdate

// componentWillUpdate // qiyong 

// componentDidUpdate

// componentWillUnmount

// // 挂在时
// constructor

// static getDerivedStateFromProps

// render

// componentDidMount

// // gengxinshi
// static getDerivedStateFromProps

// shouldComponentUpdate

// render

// getSnapshotBeforeUpdate

// componentDidUpdate

// // 页面卸载
// componentWillUnmount

// //错误处理
// static getDerivedStateFromError
// componentDidCatch

// 按需引入 antd


// 存在三种模式：
legacy // reactDOM.render 创建 reactDOM.render
blocking // ReactDOM.createBlockingRoot ReactDOM.createBlokingRoot
concurrent // ReactDOM.createRoot 

batchedUpdate // 批处理 触发this.setState . 多次 合并成一次

fiber //