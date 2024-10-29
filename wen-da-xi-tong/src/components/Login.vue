<template>
  <div class="login-container">
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="user.username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="user.password" required />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
      <div v-if="errorMessage">{{ errorMessage }}</div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

interface User {
  username: string;
  password: string;
}

const user = ref<User>({
  username: "",
  password: "",
});

const errorMessage = ref<string>("");

const router = useRouter();

const handleLogin = async () => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/users/login",
      user.value
    );
    if (response.status === 200) {
      alert(response.data); // 显示登录成功的消息
      // 登录成功后跳转到问答系统主页面
      router.push("/dashboard"); // 确保 '/dashboard' 路由已定义
    } else {
      throw new Error(response.data);
    }
  } catch (error: unknown) {
    const errorMessageText =
      error instanceof Error ? error.message : "Login failed";
    errorMessage.value = errorMessageText;
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input[type="text"],
input[type="password"] {
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

div {
  margin-bottom: 10px;
}
</style>
