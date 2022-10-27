// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入vue-touter
import VueRouter from 'vue-router'
// 引入 路由器
import router from './router'
// 关闭生产提示
Vue.config.productionTip = false
// 应用插件
Vue.use(VueRouter)
// 创建vm
new Vue({
    render: h=>h(App),
    router
}).$mount('#app')