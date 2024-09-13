<template>
  <input :value="modelValue" @input="handleInput" />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

// 接收 modelValue 作为输入框的值
const props = defineProps({
  modelValue: String,
});

// 定义 emit 函数
const emit = defineEmits(["update:modelValue"]);

// 处理 input 事件
function handleInput(event: Event) {
  // 确保 event.target 存在并且是 HTMLInputElement
  const target = event.target as HTMLInputElement | null;
  if (target) {
    // 发出更新事件
    emit("update:modelValue", target.value);
  }
}
</script>
