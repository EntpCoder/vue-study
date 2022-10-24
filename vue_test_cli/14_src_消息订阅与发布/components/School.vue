<template>
    <div class="school">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'SchoolName',
    data(){
        return{
            name:'哔哩哔哩大学',
            address:'bilibili.com'
        }
    },
    mounted(){
        // 消息订阅
        this.pubId = pubsub.subscribe('hello',(a,b)=>{
            console.log('有人发布了hello消息',a,b)
        })
        // 消息总线
        // this.$bus.$on('hello',(data)=>{
        //     console.log("我是school组件 我收到了:",data)
        // })
    },
    beforeDestroy(){
        // this.$bus.$off('hello')
        pubsub.unsubscribe(this.pubId)
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