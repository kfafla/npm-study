<template>
  <button @click="notifyParent">通知父组件</button>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

//定义emit事件
const emit = defineEmits(["notify"]);

//通知父组件的事件
const notifyParent = (): void => {
  emit("notify", "子组件已点击按钮");
};
</script>
