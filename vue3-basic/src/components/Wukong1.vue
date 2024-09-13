<template>
  <div>
    <h1 class="name">{{ name }}</h1>
    <h2 class="nickname">{{ nickname }}</h2>
    <p class="des">{{ descripition }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const name = ref<string>("孙悟空");
const nickname = ref<string>("齐天大圣");
const descripition = ref<string>(
  "在(西游记)中，孙悟空是一个勇敢无畏、机智聪明的角色，以其强大的能力和不屈的精神著称。"
);
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
