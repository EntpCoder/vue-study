<template>
    <div class="school">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="sendSchoolName">把学校名给App</button>
    </div>
</template>

<script>
export default {
    name:'SchoolName',
    props:['getSchoolName'],
    data(){
        return{
            name:'哔哩哔哩大学',
            address:'bilibili.com'
        }
    },
    methods:{
        sendSchoolName(){
            this.getSchoolName(this.name)
        }
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