<template>
    <div>
        <h2>学生姓名:{{name}}</h2>
        <h2>学生年龄:{{age}}</h2>
    </div>
</template>
<script>
// 组件交互相关的代码(数据方法等)
export default {
    name:'StudentName',
    data(){
        return{
            name:'宋洋',
            age:22
        }
    }
}
</script>
