<template>
  <input type="text" v-model="keyWord">
  <h3>{{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 keyWord                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 }}</h3>
</template>

<script>
import { customRef } from 'vue'
export default {
  name: 'App',
  setup() {
    // 自定义ref  --- myRef
    function myRef(value,delay) {
      let timmer
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`有人从myRef容器中读取数据了,我把${value}给他了`)
            // 通知vue追踪数据value的变化
            track()
            return value
          },
          set(newVlaue) {
            console.log(`有人把myRef容器中数据改为了${newVlaue}`)
            clearTimeout(timmer)
            timmer = setTimeout(() => {
              value = newVlaue
              trigger()//通知vue重新解析模板
            }, delay)
          }
        }
      })
    }
    // 使用vue提供的ref
    // let keyWord = ref('hello')
    // 使用自定义的ref
    let keyWord = myRef('hello',1000)

    return { keyWord }
  }
}
</script>

