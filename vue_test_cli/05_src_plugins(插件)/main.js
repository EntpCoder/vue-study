// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入插件
import plugins from './plugins'
// 使用插件
Vue.use(plugins,1,2,3)
// 关闭生产提示
Vue.config.productionTip = false
// 创建vm
new Vue({
    render: h=>h(App)
}).$mount('#app')