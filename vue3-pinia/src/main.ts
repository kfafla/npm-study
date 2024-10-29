import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//引入pinia
import { createPinia } from 'pinia'
//实例化pinia
const pinia = createPinia();

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
pinia.use(piniaPluginPersistedstate);

import router from './router';
import axios from 'axios';

createApp(App).use(pinia).use(router).use(axios).mount('#app');
