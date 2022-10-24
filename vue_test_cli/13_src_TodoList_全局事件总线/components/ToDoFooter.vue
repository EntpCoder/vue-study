<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "ToDoFooter",
  // props: ['todos','checkAllToDo','clearAllToDo'],
  props: ['todos'],
  computed: {
    isAll:{
      get(){
        return this.doneTotal === this.total && this.total > 0
      },
      set(value){
        // this.checkAllToDo(value)
        this.$emit('checkAllToDo',value)
      }
      
    },
    total(){
      return this.todos.length
    },
    doneTotal() {
      return this.todos.reduce((pre, current) => pre + (current.done ? 1 : 0),0);
      // const x = this.todos.reduce((pre,current)=>{
      //   console.log('@',pre,current)
      //   return pre + (current.done?1:0)
      // },0)
      // return x
    },
  },
  methods:{
    clearAll(){
      this.$emit('clearAllToDo')
    }
    // checkAll(e){
    //   this.checkAllToDo(e.target.checked)
    // }
  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>