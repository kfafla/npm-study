<template>
  <div>
    <select v-model="selectedItem">
      <option disabled value="">请选择⼀个选项</option>
      <option
        value="
   苹果
   "
      >
        苹果
      </option>
      <option
        value="
   ⾹蕉
   "
      >
        ⾹蕉
      </option>
      <option
        value="
   橘⼦
   "
      >
        橘⼦
      </option>
    </select>
    <p>
      您选择的⽔果是：
      {{ selectedItem }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
// 定义下拉菜单的选项状态
const selectedItem = ref<string>("");
// 初始值为空字符串
</script>
