<template>
    <h3>{{person}}</h3>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ job.j1.salary }}K</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
</template>
  
<script>
import { reactive,toRefs} from 'vue'
export default {
    name: 'DemoComponents',
    setup() {
        // 数据
        let person = reactive({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })
        // const name1 = person.name
        // console.log('%%%',name1)
        // const name2 = toRef(person,'name')
        // console.log('#',name2)
        const x = toRefs(person)
        console.log('********',x)
        return {
            // name:toRef(person,'name'),
            // age:toRef(person,'age'),
            // salary:toRef(person.job.j1,'salary')
            person,
            ...toRefs(person)
        }
    }
}
</script>