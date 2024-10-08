<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <input type="text" placeholder="请输入邮箱" v-model="form.to" />
      <input type="text" placeholder="请输入主题" v-model="form.subject" />
      <input type="text" placeholder="请输入内容" v-model="form.body" />
      <button type="submit" class="submit-data">发送</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const form = reactive({
  to: "",
  subject: "",
  body: "",
});

//定义 emits事件
const emit = defineEmits<{ "submit-form": [any] }>();

//阻止了表单的默认提交、自定义了表单的提交函数
const submitForm = () => {
  //console.log("表单提交数据： ", form);
  //子组件通过eimit('submit-form',form)触发submit-form事件，并将表单数据传递给
  emit("submit-form", form);
};
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}
.submit-data {
  margin-top: 20px;
  padding: 15px;
  background-color: #e7f3ff;
  border: 1px soild #b3daff;
  border-radius: 8px;
  color: #333;
  line-height: 1.6;
}
</style>
