<template>
  <div class="settings-container">
    <h3 class="settings-title">用户信息设置</h3>
    <button class="logout-button" @click="handleLogout">退出登录</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const handleLogout = () => {
  localStorage.removeItem("token");
  router.push("/login");
};
</script>
<style scoped>
.settings-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
}

.settings-title {
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

.logout-button {
  display: block;
  width: 100%;
  padding: 10px 20px;
  background-color: #e53e3e;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #c23333;
}

.logout-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(229, 62, 62, 0.5);
}
</style>
