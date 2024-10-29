import { createRouter,createWebHistory} from "vue-router";
const routes = [
    {
        path:"/login",
        name:"/Login",
        component:() =>import("../components/Login.vue"),
    },
    {
        path:"/dashboard",
        name:"/Dashboard",
        component:()=>import("../components/Dashboard.vue"),
    },
    {
        path:"/register",
        name:"/Register",
        component:()=>import("../components/Register.vue"),
    },
    {
        path:"/question",
        name:"/Question",
        component:()=>import("../components/Question.vue"),
    },
    {
        path:"/question/:questionId/answer",
        name:"AnswerQuestion",
        component:()=>import("../components/AnswerQuestion.vue"),
    },
    {
        path:"/question/:id",
        name:"QuestionDetail",
        component:()=>import("../components/QuestionDetail.vue"),
    }
];
const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router;
