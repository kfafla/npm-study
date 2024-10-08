<template>
  <div>
    <EmailForm @submit-form="handleSubmit" />
    <p v-if="subitData">邮件已发送：{{ subitData }}</p>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import EmailForm from "./EmailForm.vue";
import axios from "axios";

const subitData = ref(null);
//处理子组件传递的数据
const handleSubmit = (data: any) => {
  subitData.value = data;
  axios.post("http://localhost:8080/mail", subitData.value).then((res) => {
    console.log("邮件已发送！");
  });
};
</script>
<style scoped></style>
