<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img
        slot="center"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2Fc75c10385343fbf2b211b3c09a34dd8065380dd721b4&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669291698&t=d5653326ef627a4570a434c4171c8403"
        alt="烧烤"
      />
      <a slot="footer" href="http://songyang.top">更多美食</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="http://songyang.top">单机游戏</a>
        <a href="http://songyang.top">网络游戏</a>
      </div>
    </Category>
    <Category title="电影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <!-- v-slot:footer只能用在template上 -->
      <template v-slot:footer>
        <div class="foot">
          <a href="http://songyang.top">经典</a>
          <a href="http://songyang.top">热门</a>
          <a href="http://songyang.top">推荐</a>
        </div>
        <h4>欢迎观影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火锅", "烧烤", "麻辣串", "烤肉"],
      games: ["英雄联盟", "炉石传说", "超级玛丽"],
      films: ["《星际穿越》", "《那些年》", "《同桌的你》", "你好，李焕英"],
    };
  },
};
</script>
<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4 {
  text-align: center;
}
</style>