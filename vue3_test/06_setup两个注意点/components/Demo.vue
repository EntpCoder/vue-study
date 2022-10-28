<template>
    <h1>我是根组件</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>
  
<script>
import { reactive } from 'vue'
export default {
    name: 'DemoComponents',
    props: ['msg', 'school'],
    emits: ['hello'],
    setup(props, context) {
        // console.log('---setup---',props)
        // 相当于Vue2中的$arrts
        // console.log('---setup---',context.attrs)
        // 相当于Vue3中的$emit ，触发自定义事件的
        // console.log('---setup---',context.emit)
        console.log('---setup---', context.slots)
        // 数据
        let person = reactive({
            name: '小张',
            age: 18
        })
        // 方法
        function test() {
            context.emit('hello', 666)
        }
        return {
            person, test
        }
    }
}
</script>