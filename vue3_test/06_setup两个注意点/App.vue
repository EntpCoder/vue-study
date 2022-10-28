<template>
  <Demo @hello="showHelloMsg" msg="宋洋哈哈哈哈" school="哔哩哔哩大学">
    <template v-slot:testSlot>
      <span>77777777777777</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo'
export default {
  name: 'App',
  components: { Demo },
  setup() {
    function showHelloMsg(value) {
      alert(`你好呀，你触发了hello事件，我收到的参数是${value}`)
    }
    return {
      showHelloMsg
    }
  }
}
</script>

