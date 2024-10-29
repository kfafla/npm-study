import axios from 'axios'

//创建axios的实例
const api = axios.create({
    baseURL:'https://api.zhihu.com', //基础地址
    timeout:8000, //请求超时时间8秒
    headers:{
        "Content-Type" :"application/json",
        Authorization:`Bearer ${localStorage.getItem("token")}`,
    },
});
//请求拦截器
api.interceptors.request.use(
    config => {
        //获取token,添加到请求头
        const token = localStorage.getItem('token')
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error =>{
        //请求错误的处理
        return Promise.reject(error);
    }
);

//响应拦截器
api.interceptors.response.use(
    response =>{
        //解析响应数据
        return response.data;
    },
    error => {
        if(error.response) {
            const status = error.response.status;
            //根据不同的状态码进行处理
            switch(status) {
                case 401:
                    console.error('未认证，请登录');
                    //跳到登录页面
                    break;
                case 403:
                     console.error('权限不足，访问被禁止');
                    break;
                case 404:
                    console.error('请求的资源不存在');
                    break;
                case 500:
                     console.error('服务器内部错误');
                    break;
                default:
                    console.error(
                        "请求错误：",
                        error.response.data.message || "未知错误"
                    );
            }
        } else if(error.request) {
            console.error("网络链接失败,请检查网络");
        }else {
            console.error("请求出错：",error.message);
        }
        return Promise.reject(error);
    }
);

export default api;