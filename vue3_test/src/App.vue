<template>
  <div class="app">
    <h3>我是App(祖)</h3>
    <Suspense>
      <template v-slot:default>
        <Child></Child>
      </template> 
      <template v-slot:fallback>
        正在加载中.....
      </template>
    </Suspense>
  </div>
</template>

<script>
// 静态引入
// import Child from './components/Child'
import {defineAsyncComponent} from 'vue'
// 异步引入
const Child = defineAsyncComponent(()=>import('./components/Child'))
export default {
  name: 'App',
  components: { Child }
}
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>