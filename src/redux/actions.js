//
// function createIncrementAction(data) {
//   return {type: 'increment', data}
// }

// function createDecrementAction(data) {
//   return {type: 'increment', data}
// }
import { INCREMENT, DECREMENT } from './constant'
// 以下写法替代上面，意思相同
export const createIncrementAction = data => ({type: INCREMENT,data})
export const createDecrementAction = data => ({type: DECREMENT,data})
