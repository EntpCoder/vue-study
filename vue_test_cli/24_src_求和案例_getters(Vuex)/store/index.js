// 该文件用于创建 vuex中最为核心的store
// 引入vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)
// 准备actions--用于响应组件中的动作(类似于service层)
const actions = {
    jia(context,value){
        context.commit('JIA',value)
    },
    // jian(context,value){
    //     context.commit('JIAN',value)
    // },
    jiaOdd(context,value){
        if(context.state.sum % 2){
            context.commit('JIA',value) 
        }
    },
    jiaWait(context,value){
        setTimeout(()=>{
            context.commit('JIA',value) 
        },2000)
    }
}
// 准备mutations--用于操作数据(state)
const mutations = {
    JIA(state,value){
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    },
}
// 准备state--用于存储数据
const state = {sum:0,school:'哔哩哔哩大学',subject:'Vue'}
// 准备getters--用于将state中的数据进行加工(类似于组件间通用的计算属性)(state和getters类似于data与computed)
const getters = {
    bigSum(state){
        return state.sum*10
    } 
}
// 创建并暴露 store
export default new Vuex.Store({
    actions,mutations,state,getters
})