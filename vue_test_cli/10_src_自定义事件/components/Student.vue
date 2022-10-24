<template>
  <div class="student">
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <h2>当前求和为:{{ number }}</h2>
    <button @click="add">点我num++</button>
    <button @click="sendStudentName">把学生名给App</button>
    <!-- 解绑自定义事件 -->
    <button @click="unbind">解绑yang事件</button>
    <button @click="death">销毁当前Student组件的实例对象(vc)</button>
  </div>
</template>

<script>
export default {
  name: "StudentName",
  data() {
    return {
      name: "宋洋洋",
      sex: "男",
      number:0
    };
  },
  methods:{
    sendStudentName(){
      // 触发Student组件实例身上的yang事件
      this.$emit('yang',this.name,222,111,777)
    },
    unbind(){
      // 解绑一个自定义事件
      this.$off('yang')
      // 解绑多个自定义事件
      // this.$off(['yang','xxx'])
      // 解绑所有自定义事件
      // this.$off()
    },
    add(){
      console.log("add回调被调用")
      this.number++
    },
    death(){
      this.$destroy()//销毁当前student组件实例 销毁后所有Student实例的自定义事件全都不奏效
    }
  }
};
</script>
<style scoped>
.student {
  background-color: bisque;
  padding: 5px;
  margin-top: 5px;
}
</style>