// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
//创建一个路由器
export default new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News,
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,
                            // props的第三种写法 值为函数
                            props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title
                                }
                            }
                            // 连续解构赋值
                            // props({query:{id,title}}){
                            //     return {id:id,title:title}
                            // }
                            // props的第一种写法 值为boolean值 若布尔值为真，就会把该路由组件收到的所有params参数，以prop形式传给detail组件
                            // props:true
                            // props的第一种写法 值为对象 该对象中的所有key-value都会以props的形式传给Detail组件
                            // props:{a:1,b:'hello'}
                        }
                    ]
                }
            ]
        }
    ]
})