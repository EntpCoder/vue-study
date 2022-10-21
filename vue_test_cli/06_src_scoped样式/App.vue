<template>
  <div>
    <School/>
    <hr>
    <Student/>
    <hr>
  </div>
</template>

<script>
// 引入School组件
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
    components:{Student,School},
}
</script>
<style>
    .title{
      color: red;
    }
</style>