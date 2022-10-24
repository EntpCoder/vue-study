<template>
    <div class="school">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
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
    },
    mounted(){
        this.$bus.$on('hello',(data)=>{
            console.log("我是school组件 我收到了:",data)
        })
    },
    beforeDestroy(){
        this.$bus.$off('hello')
    }
}
</script>
<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
        margin-top: 5px;
    }
</style>