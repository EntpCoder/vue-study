<template>
  <div class="student">
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="sendStudentName">点我把学生名给School组件</button>
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
      this.$bus.$emit('hello',this.name)
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