<template>
  <div class="cagetory">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽(挖个坑)，等待组件的使用者进行填充 -->
    <slot>我是一些默认值，当使用者没有传递具体结构时我会出现</slot>
  </div>
</template>

<script>
export default {
    name:"CagetoryComponents",
    props:['listData','title']
}
</script>

<style>
    .cagetory{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
      text-align: center;
      background-color: orange;
    }
    img{
      width: 100%;
    }
    video{
      width: 100%;
    }
</style>