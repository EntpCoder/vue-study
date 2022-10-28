<template>
  <div class="app">
    <h3>我是App(祖){{name}}--{{price}}</h3>
  </div>
</template>

<script>
import { ref,isProxy, isReactive, isReadonly, isRef, reactive,readonly,toRefs } from 'vue'
export default {
  name: 'App',
  setup() {
    let car = reactive({
      name: '奔驰',
      price: 40
    })
    let sum = ref(0)
    let car2 = readonly(car)
    console.log(isRef(sum))
    console.log(isReactive(car))
    console.log(isReadonly(car2))
    console.log(isProxy(car))
    return { ...toRefs(car) }
  }
}
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>