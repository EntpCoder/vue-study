<template>
    <div class="school">
        <h1>{{msg}}</h1>
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <h2>学生年龄:{{age}}</h2>
    </div>
</template>

<script>
export default {
    name:'StudentName',
    data(){
        return{
            msg:'哈哈哈哈哈哈',
            name:'宋洋',
            sex:'男',
            age:22
        }
    }
}
</script>