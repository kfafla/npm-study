<template>
  <div>
    <h1 class="name">{{ name }}</h1>
    <h2>当前状态：{{ title }}</h2>
    <button @click="changeTitle">切换状态</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const name = ref<string>("孙悟空");
const title = ref<string>("斗战神佛");
const changeTitle = () => {
  if (title.value == "齐天大圣") {
    title.value = "斗战胜佛";
  } else {
    title.value = "齐天大圣";
  }
};
</script>

<style scoped>
div {
  margin: 10px;
  padding: 10px;
  background-color: yellow;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
