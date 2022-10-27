<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "AboutComponents",
  // 通过路由规则进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("About----beforeRouteEnter");
    if (localStorage.getItem("user") === "songyang1") {
      next();
    } else {
      alert("无权限查看！！！");
    }
  },
  // 通过路由规则离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log("About----beforeRouteLeave");
    next()
  },
};
</script>

<style>
</style>