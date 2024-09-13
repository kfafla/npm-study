<template>
  <div>
    <p>血量： {{ hp }} / {{ full }} ({{ hpPercentage }}%)</p>
    <progress value="70" max="100">{{ hpPercentage }}%</progress>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const full = ref<number>(100);
const hp = ref<number>(70);
const hpPercentage = computed(() => {
  return (hp.value / full.value) * 100;
});
</script>

<style scoped>
progress {
  background-color: red;
  width: 500px;
  height: 10px;
}
</style>
