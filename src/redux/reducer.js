/*
* 1.该文件是拥有创建一个为。。。。。的reducer, reducer本质就是一个函数 
* 2.reducer 函数会接到两个参数，分别为 之前状态（preState），动作对象（action）
*/
import {INCREMENT, DECREMENT } from './constant'
import { initState } from './state'
// const initState = 0 // 这样写的好处，一眼可见初始值默认值
const reducer = (preState=initState, action) => { // 参数上=赋值，在参数为undifined的时候赋值
  const { type, data } = action
  switch (type) {
    case INCREMENT:
    // case 'increment':
      return preState + data
    case DECREMENT:
    // case 'decrement':
      return preState - data
    default: // 初始化 reducer加载时
      return  preState
  }
}

export default reducer

