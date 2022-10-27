<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h1>当前求和放大十倍为:{{ bigSum }}</h1>
    <h1>我在{{ school }},学习{{ subject }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "CountComponents",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  mounted() {},
  computed: {
    // 靠程序员亲自去写计算属性
    // sum() {
    //   return this.$store.state.sum;
    // },
    // school() {
    //   return this.$store.state.school;
    // },
    // subject() {
    //   return this.$store.state.subject;
    // },
    // ... 语法是用来展开(key,value)对象放到当前对象中(对象解构)
    // 借助mapState生成计算属性，从state中读取数据(对象写法)(第一个参数为计算属性名，第二个参数为state中属性名)
    //...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),
    // 借助mapState生成计算属性，从state中读取数据(数组写法)(计算属性名和state属性名一致的时候可以这么些)
    ...mapState(["sum", "school", "subject"]),
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // }
    // 借助mapGetters生成计算属性，从getters中读取数据(对象写法)
    // ...mapGetters({bigSum:'bigSum'}),
    // 借助mapGetters生成计算属性，从getters中读取数据(数组写法)
    ...mapGetters(['bigSum'])
  },
  methods: {
    increment() {
      // dispatch => actions
      this.$store.dispatch("jia", this.n);
    },
    decrement() {
      // 跳过action 直接commit到mutation
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      if (this.$store.state.sum % 2) {
        this.$store.dispatch("jiaOdd", this.n);
      }
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
};
</script>
<style scoped>
button {
  margin-left: 5px;
}
</style>