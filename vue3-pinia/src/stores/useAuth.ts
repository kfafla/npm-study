import { defineStore} from "pinia";

import axios from "axios";

//定义类型
interface AuthStore {
    sendCode: (phone: string) => Promise<void>;
    login: (phone: string, code: string) => Promise<void>;
}

//定义返回类型为`AuthStore`的Pinia store
export const useAuthStore = defineStore("auth",(): AuthStore => {
    //发送验证码函数
    const sendCode = async (phone: string): Promise<void> => {
        try{
            //请求后端API接口，传递phone参数
            await axios.post(`http://localhost:8080/sms/send?phone=${phone}`);
        } catch (error) {
            console.error("发送验证码失败：",error);
        }
    };
    //登录函数
    const login = async (phone:string,code:string): Promise<void> =>{
        try{
            const res = await axios.post(
                `http://localhost:8080/user/login?phone=${phone}&code=${code}`
            );
            //登录成功的逻辑
            console.log("登录成功");
            localStorage.setItem("token",res.data.data.accessToken);
        }catch(error) {
            console.error("登录失败：",error);
        }
    };
    return {
        sendCode,
        login,
    };
},
{
    persist:{
        key: 'my-todo-store',
        storage:localStorage,
    },
}
);