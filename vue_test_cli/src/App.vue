<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现:子给父传数据 -->
    <School :getSchoolName="getSchoolName"/>
    <!-- 通过父组件给子组件绑定一个自定义事件实现子给父传数据 -->
    <Student v-on:yang="getStudent"/>
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
        msg:'你好呀!'
      }
    },
    methods:{
      getSchoolName(name){
        console.log('App收到了学校名:',name)
      },
      getStudent(name){
        console.log("App收到了学生名:",name)
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