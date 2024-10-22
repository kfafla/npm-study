<template>
  <div class="user-container">
    <nav class="user-nav">
      <router-link to="/user/profile" class="nav-link">用户信息</router-link>
      <router-link to="/user/setting" class="nav-link">用户设置</router-link>
    </nav>
    <router-view class="user-content"></router-view>
  </div>
</template>
<style scoped>
.user-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
}

.user-nav {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 20px;
}

.nav-link {
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
  color: #007bff;
  font-size: 16px;
  transition: color 0.3s ease;
  margin: 0 10px;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #0056b3;
}

.user-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
