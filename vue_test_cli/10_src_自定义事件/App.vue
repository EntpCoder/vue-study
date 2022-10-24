<template>
  <div class="app">
    <h1>{{msg}},学生的姓名是{{studentName}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现:子给父传数据 -->
    <School :getSchoolName="getSchoolName"/>
    <!-- 通过父组件给子组件绑定一个自定义事件实现子给父传数据(第一种写法使用@或者v-on) -->
    <Student @yang="getStudentName" @click.native="show"/>
    <!-- 通过父组件给子组件绑定一个自定义事件实现子给父传数据(第二种写法使用ref) -->
    <!-- <Student ref="student"/> -->
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
    },
    methods:{
      getSchoolName(name){
        console.log('App收到了学校名:',name)
      },
      getStudentName(name,...params){
        console.log("App收到了学生名:",name,params)
        this.studentName = name
      },
      show(){
        alert("student绑定的原生事件")
      }
    },
    mounted(){
      // 绑定自定义事件
      // this.$refs.student.$on('yang',this.getStudentName)
      // 绑定自定义事件(一次性)
      // this.$refs.student.$once('yang',this.getStudentName)
      // this.$refs.student.$on('yang',function(name,...params){
      //   console.log("App收到了学生名:",name,params)
            // 注意:谁触发的事件，事件回调中的this就是谁，所以这里的this是Student组件的实例对象
      //   this.studentName = name
      // })
            // this.$refs.student.$on('yang',(name,...params)=>{
      //   console.log("App收到了学生名:",name,params)
            // 注意:箭头函数写法此处this是当前组件(App)的实例对象
      //   this.studentName = name
      // })
    }
}
</script>
<style>
  .app{
    background-color:gray;
    padding: 5px;
  }
</style>