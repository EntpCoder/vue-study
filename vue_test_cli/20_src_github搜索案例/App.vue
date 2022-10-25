<template>
  <div class="container">
    <Serach />
    <List />
  </div>
</template>

<script>
import Serach from "./components/Serach";
import List from "./components/List";
export default {
  name: "App",
  components: { Serach, List },
};
</script>