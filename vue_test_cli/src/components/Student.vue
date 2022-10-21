<template>
  <div class="student">
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="sendStudentName">把学校名给App</button>
  </div>
</template>

<script>
export default {
  name: "StudentName",
  data() {
    return {
      name: "宋洋洋",
      sex: "男",
    };
  },
  methods:{
    sendStudentName(){
        // 触发Student组件实例身上的yang事件
        this.$emit('yang',this.name)
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