<template>
  <div class="login-container">
    <div class="login-box">
      <h3>用户登录</h3>
      <img src="" alt="Login Image" class="login-image" />
      <button @click="handleLogin" class="login-button">登录</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const handleLogin = () => {
  localStorage.setItem("token", "hello123");
  router.push("/user/profile");
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
}
.login-box {
  bakcground-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.login-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  margin-bottom: 20px;
}
.login-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.login-button:hover {
  background-color: #0056b3;
}
</style>
