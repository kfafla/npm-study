<template>
  <div>
    <input type="text" placeholder="Focus me!" />
    <button @click="logActiveElement">Log Active Element</button>
    <p v-if="activeElement">Active Element: {{ activeElement?.tagName }}</p>
  </div>
</template>

<script setup lang="ts">
import { useActiveElement } from "../composables/useActiveElement";

const { activeElement } = useActiveElement();

const logActiveElement = () => {
  console.log(activeElement.value); // 正确访问响应式引用的值
};
</script>

<style scoped>
/* 添加你的样式 */
</style>
