// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入vueResource
import vueResource from 'vue-resource'
// 关闭生产提示
Vue.config.productionTip = false
// 使用vueResource插件
Vue.use(vueResource)
// 创建vm
new Vue({
    render: h=>h(App),
    beforeCreate(){
        // 全局事件总线
        Vue.prototype.$bus = this
    }
}).$mount('#app')