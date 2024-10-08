<template>
  <div>
    <UserForm @submit-form="handleSubmit" />
    <p v-if="subitData">子组件提交的表单数据：{{ subitData }}</p>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import UserForm from "./UserForm.vue";

//定义一个表单提交的数据对象
const subitData = ref(null);

//处理子组件传递的数据
const handleSubmit = (data: any) => {
  subitData.value = data;
};
</script>

<style scoped></style>
