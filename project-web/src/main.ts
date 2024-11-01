import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
//引入element plus
import  ElementPlus  from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

//引入Pinia构造函数
import { createPinia } from "pinia";
//实例化Pinia
const pinia = createPinia();

const app = createApp(App);

//全局注册图标组件
for (const [key,component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key,component);
}

app.use(router).use(ElementPlus).use(pinia).mount("#app");
