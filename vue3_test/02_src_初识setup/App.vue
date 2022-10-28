<template>
  <h1>我是根组件</h1>
  <h2>姓名：{{  name  }}</h2>
  <h2>年龄：{{  age  }}</h2>
  <button @click="sayHello">说话</button>
</template>

<script>
//import { h } from 'vue'
export default {
  name: 'App',
  // 此处只是测试一下setup，暂时不考虑响应式问题
  setup() {
    let name = "小张"
    let age = 18
    // 方法
    function sayHello() {
      alert(`我叫${name},我今年${age}岁了`)
    }
    // 返回一个对象(常用)
    return {
      name,age,sayHello
    }
    // 返回一个渲染函数
    // return () => { return h('h1', '宋洋洋') }
  }
}
</script>

