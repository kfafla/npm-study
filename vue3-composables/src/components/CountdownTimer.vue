<template>
  <div>
    <p>Time remaining: {{ formattedTime }}</p>
    <button @click="startCountdown">Start</button>
    <button @click="resetCountdown">Reset</button>
    <button @click="stopCountdown">Stop</button>
  </div>
</template>

<script setup lang="ts">
import { useCountdown } from "../composables/useCountdown"; // 假设 useCountdown.ts 在 composables 文件夹中

// 初始倒计时时间，单位：秒
const initialTime = 60;

// 使用组合式函数 useCountdown
const {
  formattedTime,
  start: startCountdown,
  reset: resetCountdown,
  stop: stopCountdown,
} = useCountdown(initialTime);
</script>

<style scoped>
button {
  margin-right: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.1s ease;
}
button:hover {
  background-color: #007bff; /* 蓝色背景 */
  color: white; /* 白色文字 */
  transform: scale(1.05); /* 轻微放大 */
}

button:active {
  transform: scale(0.95); /* 按下时缩小 */
}

p {
  font-size: 20px;
  margin-bottom: 20px;
  color: #343a40; /* 深灰色文字 */
}
</style>
