<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "AboutComponents",
  mounted() {
    console.log("About组件挂载完毕");
  },
  beforeDestroy() {
    console.log("About组件要销毁了");
  },
};
</script>

<style>
</style>