<template>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="sum++">点我加++</button>
    <h2>当前的信息为：{{ msg }}</h2>
    <button @click="msg += '!'">修改信息</button>
    <hr>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>薪资：{{ person.job.j1.salary }}K</h2>
    <button @click="person.name += '~'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
</template>
  
<script>
import { ref, watch } from 'vue'
export default {
    name: 'DemoComponents',
    setup() {
        // 数据
        let sum = ref(0)
        let msg = ref('你好呀')
        let person = ref({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })
        watch(sum,(newValue,oldValue)=>{
            console.log('sum的值变化了',newValue,oldValue)
        })
        // 如果用ref定义对象
        // 监视的不是ref数据而是ref中的求助reactive定义的数据
        // watch(person.value, (newValue, oldValue) => {
        //     console.log("person变化了", newValue, oldValue)
        // })
        // 开启深度监视
        // watch(person, (newValue, oldValue) => {
        //     console.log("person变化了", newValue, oldValue)
        // },{deep:true})
        return {
            sum, msg, person
        }
    }
}
</script>