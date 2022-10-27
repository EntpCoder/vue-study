// 求和功能相关的配置
export default {
    namespaced:true,
    actions: {
        jia(context, value) {
            context.commit('JIA', value)
        },
        // jian(context,value){
        //     context.commit('JIAN',value)
        // },
        jiaOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
        jiaWait(context, value) {
            setTimeout(() => {
                context.commit('JIA', value)
            }, 2000)
        }
    },
    mutations: {
        JIA(state, value) {
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        }
    },
    state: {
        sum: 0,
        school: '哔哩哔哩大学',
        subject: 'Vue'
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}