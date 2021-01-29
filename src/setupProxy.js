const {createProxyMiddleware} = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    // target : "https://192.168.5.236:3002",
    target : "http://192.168.5.223:3002",
    // target : "http://192.168.5.235:8010",
    changeOrigin:true,
    pathRewrite: {
      '/api': ''
    }
  }))
}