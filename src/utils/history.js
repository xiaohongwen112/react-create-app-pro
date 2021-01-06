import { createBrowserHistory } from 'history'
const env = process.env.NODE_ENV
let options = {}

if (env === 'production') {
  options = '/'
}

export default createBrowserHistory()