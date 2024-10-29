import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import axios from 'axios';
//引入pinia
import { createPinia } from 'pinia'
//实例化pinia
const pinia = createPinia();
createApp(App).use(router).use(axios).use(pinia).mount('#app')
