/**
 * 该文件是整个项目的入口文件
 */
// 引入vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 关闭生产提示
Vue.config.productionTip = false
// 创建vm
/* 
	关于不同版本的Vue：
		1.vue.js与vue.runtime.xxx.js的区别：
			(1).vue.js是完整版的Vue，包含：核心功能+模板解析器。
			(2).vue.runtime.xxx.js是运行版的Vue，只包含：核心功能；没有模板解析器。
		2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
			render函数接收到的createElement函数去指定具体内容。
*/
new Vue({
  // 将app组件放在容器中
  render: h => h(App)
  // render(createElement){
  //   return createElement('h1','你好呀')
  // }
  // template:`<h1>你好呀</h1>`,
  // components:{App}
}).$mount('#app')