<template>
  <div class="welcome-container">
    <h2>欢迎来到网上书店</h2>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.welcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("path-to-your-background-image.jpg");
  background-size: cover;
  background-position: center;
  color: #fff; /* 文字颜色设置为白色，以确保在图片上可见 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 添加文字阴影以提高可读性 */
}

h2 {
  font-size: 2.5rem; /* 标题字体大小 */
  margin: 0; /* 移除默认的外边距 */
  padding: 20px; /* 为标题添加内边距 */
  border-radius: 10px; /* 为标题添加圆角边框 */
  background-color: rgba(255, 255, 255, 0.2); /* 半透明背景，以增加层次感 */
}
</style>
