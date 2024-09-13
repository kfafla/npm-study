<template>
  <h1>技能列表</h1>
  <ul>
    <li v-for="skill in skills" :key="skill.id">
      {{ skill.id }} - {{ skill.name }}
      <span v-if="!skill.isLocked" style="color: green">已解锁</span>
      <span v-if="skill.isLocked" style="color: red">未解锁</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Skill {
  id: number;
  name: string;
  isLocked: boolean;
}

const skills = ref<Skill[]>([
  { id: 1, name: "七十二变", isLocked: true },
  { id: 2, name: "火眼金睛", isLocked: false },
  { id: 3, name: "筋斗云", isLocked: true },
]);
</script>

<style scoped>
/* 这里可以添加一些样式 */
</style>
