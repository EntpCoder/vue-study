<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change='handleCheck(todo.id)'/>
      <!-- 如下代码也能实现功能，但是不太推荐，因为违反了有原则(修改了props) -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input 
        type="text" 
        :value="todo.title" 
        v-show="todo.isEdit" 
        @blur="handleBlur(todo,$event)"
        ref="inputTitle">
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit"  v-show="!todo.isEdit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "ToDoItem",
  // 声明接收todo对象
  props:['todo'],
  methods:{
    // 勾选or取消勾选
    handleCheck(id){
      // 通知app组件将对应todo对象的done值取反
      this.$bus.$emit('checkToDo',id)
    },
    handleDelete(id){
      if(confirm('确定删除么?')){
        //this.$bus.$emit('deleteToDo',id)
        pubsub.publish('deleteToDo',id)
      }
    },
    // 编辑
    handleEdit(todo){
      // 如果todo身上有isEdit
      if(Object.prototype.hasOwnProperty.call(todo,'isEdit')){
        todo.isEdit = true
      }else{
        console.log('@')
        this.$set(todo,'isEdit',true)
      }
      this.$nextTick(()=>{
        this.$refs.inputTitle.focus()
      }) 
    },
    // 失去焦点回调(真正执行修改逻辑)
    handleBlur(todo,e){
      todo.isEdit = false
      if(!e.target.value.trim()) return alert('输入不能为空')
      this.$bus.$emit('updateToDo',todo.id,e.target.value)
    }
  }
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: #ddd;
}
li:hover button{
  display: block;
}
</style>