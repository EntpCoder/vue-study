<template>
    <div class="demo">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="showName">点我输出x</button>
    </div>
</template>
<script>
// 组件交互相关的代码(数据方法等)
export default {
    name:'SchoolName',
    data(){
        return{
            name:'Bilibili大学',
            address:'bilibili.com'
        }
    },
    methods:{
        showName(){
            alert(this.name)
        }
    }
}
</script>

<style>
/* 组件的样式 */
    .demo{
        background-color: chartreuse;
    }
</style>