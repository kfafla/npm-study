import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions:{
      scss:{
        api:'modern-compiler',
      },
    },
  },
  plugins: [vue()],
  server: {
    host:"0.0.0.0",//允许从外部访问开发服务器
    port:8000,//指定开发服务器运行的端口
    hmr:true,//启动热模块替换（HMR），实现热更新功能
    open:true,//在启动开发服务器自动打开默认浏览器
  },
  resolve:{
    alias:[
      {
        find:"@",
        replacement: resolve(__dirname,"src"),
      },
    ],
  },
});