<template>
  <!-- <div>
    <h1>Hello, Element Plus!</h1>
    <el-button type="primary" @click="handleClick">点击我</el-button>
    <div style="margin-top:20px;font-size:32px">
      <el-icon>
        <Plus />
      </el-icon>
    </div>
  </div> -->


  <h1>{{  store.count }}</h1>
  <h2>{{  count }}</h2>
  <h3>{{  msg  }}</h3>
  <el-button type="primary" size="default" @click="addBtn">新增</el-button>
</template>

<script setup lang="ts">
// import { ElButton,ElIcon } from "element-plus";
// import { Plus } from "@element-plus/icons-vue";

// //注册组件
// const handleClick = () => {
//   console.log("按钮被点击");
// };


import { useTestStore } from '@/store/test';
import { storeToRefs } from 'pinia';

//使用storeToRefs批量解构Store中的响应式数据
const store = useTestStore();
const { count,msg } = storeToRefs(store);

const addBtn = () => {
  //第一种改变数据的方式
  // store.count++;
  
  //第二种
  // store.setCount(++store.count);

  //第三种
  // store.$patch({
  //   count: ++store.count,
  // });
  
  //第四种
  store.$patch(( state: any) =>{
    state.count = ++ state.count;
  });
};
</script>

<style scoped>
 /* h1 {
  color: #42b983;
 } */
</style>
