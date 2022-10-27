// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'
//创建一个路由器
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta:{title:'关于'}
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta:{title:'主页'},
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta:{title:'新闻',isAuth:true},
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta:{title:'消息',isAuth:true},
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            meta:{title:'详情',isAuth:true},
                            // props的第三种写法 值为函数
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
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
// 全局前置路由守卫(在每一次路由切换之前被调用、初始化时候被调用)
router.beforeEach((to, from, next) => {
    //console.log('@',to,from)
    if (to.meta.isAuth) {//判断是否需要鉴权
        if (localStorage.getItem('user') === 'songyang') {
            next()
        }else{
            alert("无权限查看！！！")
        }
    }else{
        next()  
    }
})
// 全局后置路由守卫(在每一次路由切换之后被调用、初始化时候被调用)
router.afterEach((to)=>{
    // 切换之后修改页签
    document.title = to.meta.title
})
export default router