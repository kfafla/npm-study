<template>
  <div>
    <h2>
      当前用户: {{ userNmae }}
      <p>2+3的结果是:{{ 2 + 3 }}</p>
      <p>全名:{{ firstName + lastName }}</p>
    </h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const userNmae = ref<string>("张三");
console.log(userNmae.value);
const firstName = ref<string>("张");
const lastName = ref<string>("三");
</script>
