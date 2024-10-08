<template>
  <div class="demo-date-picker">
    <div class="container">
      <div class="block">
        <span class="demonstration">年 份</span>
        <el-date-picker v-model="value3" type="year" placeholder="选择年份" />
      </div>
      <br />
      <div class="block">
        <span class="demonstration">月 份</span>
        <el-date-picker v-model="value2" type="month" placeholder="选择月份" />
      </div>
      <br />
      <div class="block">
        <span class="demonstration">星 期</span>
        <el-date-picker
          v-model="value1"
          type="week"
          format="[Week] ww"
          placeholder="选择星期"
        />
      </div>
      <br />
      <div class="block">
        <span class="demonstration">日 期</span>
        <el-date-picker
          v-model="value4"
          type="dates"
          placeholder="选择一个或多个日期"
        />
      </div>
      <br />
    </div>
  </div>
</template>
<script lang="ts" setup>
import "./styleElementPlus.css";
import { ref } from "vue";

const value1 = ref("");
const value2 = ref("");
const value3 = ref("");
const value4 = ref("");
</script>
<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
  background-color: #ffffff;
}

.demo-date-picker .block {
  padding: 0px 10px;
  text-align: center;
  border-right: solid 2px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .container {
  flex: 1;
  border: 3px solid #535bf2;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
}

.demo-date-picker .container .block {
  border-right: none;
}

.demo-date-picker .container .block:last-child {
  border-top: solid 1px var(--el-border-color);
}

.demo-date-picker .container:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
  color: #ffffff;
  background-color: #535bf2;
  line-height: 30px;
  padding: 0px 10px;
}
</style>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
