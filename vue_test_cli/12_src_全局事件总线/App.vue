<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <School/>
    <Student/>
  </div>
</template>

<script>
// 引入School组件
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
    components:{Student,School},
    data(){
      return{
        msg:'你好呀!',
        studentName:''
      }
    }
}
</script>
<style>
  .app{
    background-color:gray;
    padding: 5px;
  }
</style>