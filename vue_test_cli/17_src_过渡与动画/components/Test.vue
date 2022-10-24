<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear> 
        <h1 v-if="isShow">你好呀</h1>
    </transition>
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
.hello-enter-active {
  animation: songyang 1s;
}
.hello-leave-active  {
  animation: songyang 1s reverse;
}
@keyframes songyang {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>