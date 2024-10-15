import { createRouter ,createWebHistory} from "vue-router";

//引入组件
import Layout from "../views/Layout.vue";
//定义路由数组
const routes = [
    {
        path:"/",
        name:"Layout",
        component: Layout,
        redirect: "/home",
        children:[
            {
              path:"/home",
              name:"Home",
              component:() => import("../views/Home.vue"),
            },
            {
              path:"/articles",
              name:"ArticleList",
              component:() => import ("../views/ArticleList.vue"),
             },
             //动态路由配置
             {
              path:"/articles/:id",
              name:"ArticleDetail",
              component:() => import ("../views/ArticleDetail.vue"),
              children:[
                {
                    path:"comments",
                    name:"ArticleComments",
                    component:() => import("../views/ArticleComments.vue"),
                },
              ]
            },
             //嵌套路由
            {
              path:'/user',
               component:() => import ("../views/UserDashboard.vue"),
              //重定向到个人信息页面，这样保证有默认内容
              redirect:"/user/profile",
              children:[
                {
                 path:"profile",
                 name:"UserProfile",
                 component:() => import ("../views/UserProfile.vue"),
               },
               {
                path:"setting",
                name:"UserSetting",
                component:() => import ("../views/UserSetting.vue"),
               },
              ],
            }
        ],
    },
    //登录组件
    {
        path:"/login",
        name:"Login",
        //路由揽加载
        component:() => import ("../views/Login.vue"),
    },
];

//定义路由对象
const router = createRouter({
    history:createWebHistory(),
    routes,
    scrollBehavior(to,from,savePosition) {
        //返回到浏览器保存的滚动为止，当使用浏览器后退时，否则滚动到顶部
        if(savePosition) {
            return savePosition;
        }else{
            return {top:0};
        }
    }
});
//配置全局路由导航守卫
router.beforeEach((to,from,next) =>{
    //要去的路由是/user开头的
   if(to.path.startsWith("/user") && !localStorage.getItem("token")){
         alert("请先登录");
        //跳到/login登录页面
       next("/login");
    }else{
        //直接放行
       next();
    }
});


//导出路由对象
export default router;