<template>
  <el-card class="login-card">
    <h2>登录表单</h2>

    <el-form label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="password"
          placeholder="请输入密码"
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

//定义表单的响应式数据
const username = ref("");
const password = ref("");

//模拟表单提交处理函数
const submitForm = () => {
  console.log("提交的数据:", {
    username: username.value,
    password: password.value,
  });
};
</script>

<style scoped>
.login-card {
  max-width: 400px; /* 而不是 40px */
  margin: 0 auto;
  padding: 20px;
  /* 可以添加更多样式来美化卡片 */
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
</style>
