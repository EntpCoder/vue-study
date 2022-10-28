<template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我加++</button>
</template>
  
<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
export default {
    name: 'DemoComponents',
    setup() {
        // 数据
        let sum = ref(0)
        // 组合式api 生命周期钩子
        onBeforeMount(()=>{
            // 函数体
            console.log('---onBeforeMount---')
        })
        onMounted(()=>{
            // 函数体
            console.log('---onMounted---')
        })
        onBeforeUpdate(()=>{
            // 函数体
            console.log('---onBeforeUpdate---')
        })
        onUpdated(()=>{
            // 函数体
            console.log('---onUpdated---')
        })
        onBeforeUnmount(()=>{
            // 函数体
            console.log('---onBeforeUnmount---')
        })
        onUnmounted(()=>{
            // 函数体
            console.log('---onUnmounted---')
        })
        // 通过组合式api的形式去使用生命周期钩子
        return {
            sum
        }
    },
    //通过配置项的形式使用生命周期钩子
    // beforeCreate() {
    //     console.log('---beforeCreate---')
    // },
    // created() {
    //     console.log('---created---')
    // },
    // beforeMount() {
    //     console.log('---beforeMount---')
    // },
    // mounted() {
    //     console.log('---mounted---')
    // },
    // beforeUpdate() {
    //     console.log('---beforeUpdate---')
    // },
    // updated() {
    //     console.log('---updated---')
    // },
    // beforeUnmount() {
    //     console.log('---beforeUnmount---')
    // },
    // unmounted() {
    //     console.log('---unmounted---')
    // }
}
</script>