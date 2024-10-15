<template>
  <div>
    <h3>用户登录</h3>
    <button @click="handleLogin">登录</button>
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
