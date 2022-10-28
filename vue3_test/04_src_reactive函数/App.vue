<template>
  <h1>我是根组件</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>工作种类：{{ person.job.type }}</h2>
  <h2>工作薪水：{{ person.job.salary }}</h2>
  <h2>爱好{{ person.hobby }}</h2>
  <h2>嵌套数据{{ person.job.a.b.c }}</h2>
  <button @click="changeIngo">修改人的信息</button>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    // let name = ref("小张")
    // let age = ref(18)
    // let job = reactive({
    //   type: '前端工程师',
    //   salary: '30k',
    //   a: {
    //     b: {
    //       c: 666
    //     }
    //   }
    // })
    // let hobby = reactive(['抽烟','喝酒','烫头'])
    // console.log(job)
    // 数据
    let person = reactive({
      name: '小张',
      age: 18,
      job: {
        type: '前端工程师',
        salary: '30k',
        a: {
          b: {
            c: 666
          }
        }
      },
      hobby: ['抽烟', '喝酒', '烫头']
    })
    // 方法
    // function changeIngo() {
    //   name.value = "小洪"
    //   age.value = 22
    //   job.type = '后端工程师'
    //   job.salary = '40k'
    //   job.a.b.c = 888
    //   hobby[0] = '学习'
    // }
    // 方法
    function changeIngo() {
      person.name = "小洪"
      person.age = 22
      person.job.type = '后端工程师'
      person.job.salary = '40k'
      person.job.a.b.c = 888
      person.hobby[0] = '学习'
    }
    // 返回一个对象(常用)
    // return {
    //   name, age, job, hobby, changeIngo,
    // }
    return {
      person,changeIngo
    }
  }
}
</script>

