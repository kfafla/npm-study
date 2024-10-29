<template>
  <div>
    <h2>登录</h2>
    <input v-model="phone" placeholder="请输入手机号" />
    <button @click="sendCode" :disabled="isCounting">
      {{ isCounting ? `${countdown}秒后重发` : "发送验证码" }}
    </button>
    <input v-model="code" placeholder="请输入验证码" />
    <button @click="login">登录</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../stores/useAuth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const phone = ref<string>("17802617741");
const code = ref<string>("");
// 倒计时相关状态
const countdown = ref<number>(60); // 倒计时初始值
const isCounting = ref<boolean>(false); // 是否正在倒计时
const sendCode = async () => {
  await authStore.sendCode(phone.value);
  startCountdown();
};
const startCountdown = () => {
  isCounting.value = true; // 开始倒计时
  countdown.value = 60; // 重置倒计时为60秒

  const interval = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(interval);
      isCounting.value = false; // 倒计时结束
    }
  }, 1000); // 每秒更新
};
const login = async () => {
  await authStore.login(phone.value, code.value);
  //登录成功够跳转到个人中心
  router.push("/profile");
};
</script>
