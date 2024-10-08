<template>
  <div>
    <p>当前窗口大小：宽：{{ width }}prx,高：{{ height }}px</p>
    <div :class="{ 'mobile-layout': isMobile }">
      <p>{{ isMobile ? "移动端布局" : "桌面端布局" }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import { computed } from "vue";

//获取窗口大小
const { width, height } = useWindowSize();
//判断是否为移动端布局(窗子宽度小于768px时)
const isMobile = computed(() => width.value < 768);
</script>
<style>
div {
  text-align: center;
  margin-top: 20px;
}
.mobile-layout {
  background-color: lightblue;
}
.mobile-layout p {
  font-size: 36px;
}

@media (min-width: 768px) {
  .mobile-layout {
    background-color: lightcoral;
  }
  .mobile-layout p {
    font-size: 24px;
  }
}
</style>
