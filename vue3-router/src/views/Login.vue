<template>
  <div class="login-container">
    <h3>用户登录</h3>
    <button @click="handleLogin" class="login-button">登录</button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const handleLogin = () => {
  localStorage.setItem("token", "hello123");
  //编程式导航,跳转到个人页面
  router.push("/user/profile");
};
</script>
<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
}

h3 {
  margin-bottom: 20px;
  color: #333;
}

.login-button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #0056b3;
}
</style>
