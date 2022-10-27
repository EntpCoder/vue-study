<template>
  <div>
    <h2>Home组件内容</h2>
  </div>
</template>

<script>
export default {
  name: "HomeComponents",
  mounted() {
    console.log("Home组件挂载完毕");
  },
  beforeDestroy() {
    console.log("Home组件要销毁了");
  },
};
</script>

<style>
</style>