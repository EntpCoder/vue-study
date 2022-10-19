<template>
  <div>
    <Student name="李四" sex="女" :age="18"/>
    <hr>
    <Student name="小张" sex="男" :age="12"/>
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