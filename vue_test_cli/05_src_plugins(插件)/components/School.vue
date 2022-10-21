<template>
    <div class="school">
        <h2>学校名称:{{name | mySlice}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="hello">点我测试插件中的混入hello方法</button>
    </div>
</template>

<script>
export default {
    name:'SchoolName',
    data(){
        return{
            name:'哔哩哔哩大学',
            address:'bilibili.com'
        }
    }
}
</script>