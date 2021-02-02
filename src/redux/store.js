import { createStore } from 'redux'
import reducer from './reducer'
// import actions from './actions'
// import getter from './getter'
// import state from './state'

// 区分vuex 一下是vuex
// export default createStore ({
//   mutation,
//   actions,
//   getter,
//   state,
//   module,
// })
export default createStore(reducer)
