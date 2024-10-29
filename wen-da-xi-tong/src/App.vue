<template>
  <nav class="navbar">
    <router-link to="/login" class="nav-item">登录</router-link>
    <router-link to="/register" class="nav-item">注册</router-link>
    <router-link to="/question" class="nav-item">所有问题</router-link>
  </nav>
  <router-view />
</template>

<script setup>
// JavaScript code (if any) goes here
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  background-color: #333;
  color: white;
}

.nav-item {
  padding: 10px 15px;
  margin: 0 10px;
  text-decoration: none;
  color: white;
  transition: background-color 0.3s ease-in-out;
}

.nav-item:hover,
.nav-item.router-link-active {
  background-color: #555;
  border-radius: 5px;
}

.nav-item:focus {
  outline: none;
}
</style>
