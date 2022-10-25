<template>
  <div class="container">
    <Category title="游戏"> </Category>
    <Category title="游戏"> </Category>
    <Category title="游戏"> </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: { Category },
};
</script>
<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>