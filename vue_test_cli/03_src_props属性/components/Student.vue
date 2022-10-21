<template>
    <div class="school">
        <h1>{{msg}}</h1>
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <h2>学生年龄:{{myAge}}</h2>
        <button @click="updataAge">点我修改年龄</button>
    </div>
</template>

<script>
export default {
    name:'StudentName',
    data(){
        return{
            msg:'哈哈哈哈哈哈',
            myAge:this.age
        }
    },
    methods:{
        updataAge(){
            this.myAge++
        }
    },
    // props:['name','sex','age'] // 简单声明接收
    // 接收同时对类型进行限制
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String
    // }
    // 接收同时对类型进行限制 + 必要性限制
    props:{
        name:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            default:99
        },
        sex:{
            type:String,
            required:true
        }
    }
}
</script>