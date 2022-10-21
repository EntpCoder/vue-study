<template>
    <div class="demo">
        <h2 class="title">学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
    </div>
</template>

<script>
export default {
    name:'StudentName',
    data(){
        return{
            name:'宋洋洋',
            sex:'男'
        }
    }
}
</script>
<style scoped>
    .demo{
        background-color: bisque;
    }
</style>