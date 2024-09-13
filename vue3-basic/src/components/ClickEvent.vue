<template>
  <div>
    <h2>当前用户： {{ userName }}</h2>
    <button @click="changeName">切换用户</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const userName = ref<string>("张三");

const changeName = () => {
  userName.value = "李四";
};
</script>
