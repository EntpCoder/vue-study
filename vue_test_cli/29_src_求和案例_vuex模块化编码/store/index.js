// 该文件用于创建 vuex中最为核心的store
// 引入vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入
import countOptions from './count'
import personOptions from './person'
// 使用插件
Vue.use(Vuex)
// 创建并暴露 store
export default new Vuex.Store({
    modules:{
        countAbout:countOptions,
        personAbout:personOptions
    }
})