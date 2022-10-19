<template>
  <div>
    <Student/>
    <hr>
    <Student/>
    <hr>
    <Student/>
    <hr>
  </div>
</template>

<script>
// 引入School组件
import Student from './components/Student.vue'
export default {
    components:{Student},
}
</script>