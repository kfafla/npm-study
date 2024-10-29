<template>
  <div class="register-container">
    <h2>Register</h2>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="user.username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="user.password" required />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
      <div v-if="errorMessage">{{ errorMessage }}</div>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import axios from "axios"; // 导入 axios
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

// 使用 axios 的返回类型
type AxiosResponse<T = any> = {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: any;
};

const handleRegister = async () => {
  try {
    const response: AxiosResponse = await axios.post(
      "http://localhost:8080/api/users/create",
      user.value
    );
    alert(response.data); // 显示注册成功的消息
    router.push("/login"); // 注册成功后跳转到登录页面
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // 这里假设后端返回的错误信息在 response.data 中
        errorMessage.value = error.response.data || "Registration failed";
      } else {
        errorMessage.value = "Request was made but no response was received";
      }
    } else {
      errorMessage.value = "An unexpected error occurred";
    }
  }
};
</script>

<style scoped>
.register-container {
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
