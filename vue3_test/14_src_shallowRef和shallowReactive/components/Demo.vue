<template>
    <h3>{{ person }}</h3>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ job.j1.salary }}K</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
    <hr>
    <h4>当前的x值是{{x.y}}</h4>
    <button @click="x.y++">点我++</button>
</template>
  
<script>
import { reactive, toRefs, shallowRef } from 'vue'
export default {
    name: 'DemoComponents',
    setup() {
        // 数据
        // 只考虑第一层数据的响应式
        // let person = shallowReactive({
        let person = reactive({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })
        let x = shallowRef({
            y:0
        });
        return {
            x,
            person,
            ...toRefs(person)
        }
    }
}
</script>