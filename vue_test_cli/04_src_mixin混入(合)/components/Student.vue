<template>
    <div class="school">
        <h2 @click="showName">学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>

    </div>
</template>

<script>
// 局部混合
import {hunhe,hunhe2} from '../mixin'
export default {
    name:'StudentName',
    data(){
        return{
            name:'宋洋洋',
            sex:'男'
        }
    },
    mixins:[hunhe,hunhe2]
}
</script>