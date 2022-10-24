<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
      />&nbsp;
      <button @click="serachUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: "SerachComponents",
  data(){
    return{
      keyword:''
    }
  },
  methods:{
    serachUsers(){
      axios.get(`https://api.github.com/users?q=${this.keyword}`)
        .then(
          response =>{
            console.log("请求成功",response.data)
          },
          error =>{
            console.log("请求失败了",error.message)
          }
        )
    }
  }
};
</script>

<style>
</style>