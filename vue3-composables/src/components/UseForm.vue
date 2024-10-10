<template>
  <!-- 使用了 Vue 的事件修饰符 .prevent，阻止表单的默认提交行为，允许开发者手动处理提交逻辑。 -->
  <form @submit.prevent="handleSubmit">
    <!-- v-model 实现双向数据绑定，将输入字段的值与 fields.username 绑定。
      在 @input 事件中调用 updateField 方法，实时更新字段值并验证。
      当错误信息存在时，展示相应的错误信息。  -->
    <div>
      <label for="username">用户名:</label>
      <input
        id="username"
        v-model="fields.username"
        @input="updateField('username', fields.username)"
      />
      <span v-if="errors.username">{{ errors.username }}</span>
    </div>

    <div>
      <label for="email">邮箱:</label>
      <input
        id="email"
        v-model="fields.email"
        @input="updateField('email', fields.email)"
      />
      <span v-if="errors.email">{{ errors.email }}</span>
    </div>

    <button type="submit">提交</button>
  </form>
</template>

<script setup lang="ts">
import { useForm } from "../composables/useForm";

// 定义验证规则  为每个输入字段定义了一个数组，包含多个验证函数，当函数返回错误信息时，会显式显示。
const validationRules = {
  username: [
    (value: string) => !value && "用户名是必填的",
    (value: string) => value.length < 3 && "用户名至少要3个字符",
  ],
  email: [
    (value: string) => !value && "邮箱是必填的",
    (value: string) => !/\S+@\S+\.\S+/.test(value) && "邮箱格式不正确",
  ],
};

// 使用组合函数
const { fields, errors, validateForm, updateField } = useForm(validationRules);

const handleSubmit = () => {
  if (validateForm()) {
    // 表单验证通过，可以进行提交操作
    alert("表单提交成功");
  } else {
    // 表单验证失败，显示错误消息
    alert("请检查表单中的错误");
  }
};
</script>

<style scoped></style>
