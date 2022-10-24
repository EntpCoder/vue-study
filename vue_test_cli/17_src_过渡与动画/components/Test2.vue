<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="hello" appear> 
        <h1 v-if="isShow" :key="1">你好呀</h1>
        <h1 v-if="isShow" :key="2">宋洋</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "TestCompoents",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}
/* 进入的起点、 离开的终点*/
.hello-enter,.hello-leave-to {
  transform: translateX(-100%);
}
/* 进入的终点、离开的起点*/
.hello-enter-to,.hello-leave {
 transform: translateX(0); 
}
.hello-enter-active,.hello-leave-active{
    transition: 1s linear;
}
</style>