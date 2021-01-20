module.export = {
  // chainWebpack 通过链式编程
  // cinfigureWebpack 操作对象
  chainWebpack: config => {
    config.when(process.env.NODE_ENV === 'production', configs => {
      configs.entry('app').clear().add('./src/main.js')
      configs.set('external', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
      })
    })
  }
}

// 通过externals 加载外部cdn资源
// external external 在此中声明的三方依赖包，都不会进行打包
// 同时需要在public/index.html文件头部，添加如下的cdn资源