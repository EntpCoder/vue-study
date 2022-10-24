module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    }
  },
  lintOnSave: false, // 关闭语法检查
  // 开启代理服务器(方式一)
  // devServer:{
  //   proxy:'http://localhost:8083'
  // }
  // 开启代理服务器(方式二)
  devServer: {
    proxy: {
      '/songyang':{
        target:'http://localhost:8083',
        // 重写路径
        pathRewrite:{'^/songyang':''}
        // ws:true,//用于支持websocket
        // changeOrigin:true // 用于控制请求中的Host值
      },
      '/cartApi':{
        target:'http://localhost:8082',
        pathRewrite:{'^/cartApi':''}
      },
    }
  }
}