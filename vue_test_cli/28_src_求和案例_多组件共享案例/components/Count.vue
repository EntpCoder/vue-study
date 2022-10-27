<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h1>当前求和放大十倍为:{{ bigSum }}</h1>
    <h1>我在{{ school }},学习{{ subject }}</h1>
    <h3 style="color:red">Person组件的总人数是{{personList.length}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions} from "vuex";
export default {
  name: "CountComponents",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  mounted() {},
  computed: {
    // 借助mapState生成计算属性，从state中读取数据(数组写法)(计算属性名和state属性名一致的时候可以这么写)
    ...mapState(["sum", "school", "subject","personList"]),
    ...mapGetters(["bigSum"]),
  },
  methods: {
    // 借助mapActions生成对应的方法，方法会调用dispatch联系mapActions
    ...mapActions({increment:'jia',incrementOdd:'jiaOdd',incrementWait:'jiaWait'}),
    // 借助mapMutations生成对应的方法，方法会调用commit联系mutations
    ...mapMutations({ decrement: "JIAN" }),
  },
};
</script>
<style scoped>
button {
  margin-left: 5px;
}
</style>