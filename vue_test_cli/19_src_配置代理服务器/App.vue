<template>
  <div>
    <button @click="getAllOrders">获取订单信息</button>
    <button @click="getCart">获取购物车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getAllOrders() {
      axios.get("http://localhost:8080/songyang/order/getAllOrders").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error);
        }
      );
    },
    getCart() {
      axios.get("http://localhost:8080/cartApi/cart/test/userCart/101").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error);
        }
      );
    },
  },
};
</script>