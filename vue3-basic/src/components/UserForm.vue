<template>
  <div>
    <form @submit.prevent="submitForm">
      <input type="password" v-model="form.password" />
      <button type="submit">注册</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const form = reactive({
  username: "admin",
  email: "admin@qq.com",
  password: "123456",
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

<style scoped></style>
