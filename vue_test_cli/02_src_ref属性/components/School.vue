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
    }
}
</script>

<style>
    .school{
        background: rgb(248, 114, 114);
    }
</style>