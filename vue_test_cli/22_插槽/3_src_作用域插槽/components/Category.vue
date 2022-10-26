<template>
  <div class="cagetory">
    <h3>{{ title }}分类</h3>
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: "CagetoryComponents",
  props: ["title"],
  data() {
    return {
      games: ["英雄联盟", "炉石传说", "超级玛丽"],
    };
  },
};
</script>

<style>
.cagetory {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>