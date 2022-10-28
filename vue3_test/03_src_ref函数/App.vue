<template>
  <h1>我是根组件</h1>
  <h2>姓名：{{  name  }}</h2>
  <h2>年龄：{{  age  }}</h2>
  <h2>工作种类：{{job.type}}</h2>
  <h2>工作薪水：{{job.salary}}</h2>
  <button @click="changeIngo">修改人的信息</button>
</template>

<script>
//import { h } from 'vue'
import {ref} from 'vue'
export default {
  name: 'App',
  setup() {
    let name = ref("小张")
    let age = ref(18)
    let job = ref({
      type:'前端工程师',
      salary:'30k'
    })
    // 方法
    function changeIngo(){
      name.value = "小洪"
      age.value = 22
      job.value.type = '后端工程师'
      job.value.salary = '40k'
    }
    // 返回一个对象(常用)
    return {
      name,age,job,changeIngo,
    } 
  }
}
</script>

