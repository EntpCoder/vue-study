// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入混合
// import {hunhe,hunhe2} from './mixin'
// Vue.mixin(hunhe)
// Vue.mixin(hunhe2)
// 关闭生产提示
Vue.config.productionTip = false
// 创建vm
new Vue({
    render: h=>h(App)
}).$mount('#app')