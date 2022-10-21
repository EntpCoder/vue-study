<template>
    <div class="school">
        <h2 @click="showName">学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>

    </div>
</template>

<script>
// 局部混合
import {hunhe,hunhe2} from '../mixin'
export default {
    name:'SchoolName',
    data(){
        return{
            name:'哔哩哔哩大学',
            address:'bilibili.com'
        }
    },
    mixins:[hunhe,hunhe2]
}
</script>