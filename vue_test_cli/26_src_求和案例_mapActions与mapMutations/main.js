// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 关闭生产提示
Vue.config.productionTip = false
// 引入store
import store from './store'
// 创建vm
new Vue({
    render: h=>h(App),
    store,
    beforeCreate(){
        // 全局事件总线
        Vue.prototype.$bus = this
    }
}).$mount('#app')