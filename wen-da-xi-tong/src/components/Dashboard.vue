<template>
  <div class="ask-question">
    <h1>提出问题</h1>
    <form @submit.prevent="submitQuestion" class="question-form">
      <div class="form-group">
        <label for="userId">用户ID:</label>
        <input type="number" id="userId" v-model="question.userId" required />
      </div>
      <div class="form-group">
        <label for="content">问题内容:</label>
        <input type="text" id="content" v-model="question.content" required />
      </div>
      <div class="form-group">
        <label for="createTime">创建时间:</label>
        <input
          type="datetime-local"
          id="createTime"
          v-model="question.createTime"
          required
        />
      </div>
      <button type="submit" class="submit-button">提交问题</button>
    </form>
    <p v-if="response" class="response-message">{{ response }}</p>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { reactive, ref } from "vue";

const question = reactive({
  userId: null,
  content: "",
  createTime: "",
});

const response = ref("");

const submitQuestion = async () => {
  try {
    // 格式化日期时间字符串
    question.createTime = formatDateTime(question.createTime);

    const axiosResponse = await axios.post(
      "http://localhost:8080/api/questions/create",
      question
    );
    response.value = axiosResponse.data; // 正确地使用 `.value` 来更新响应式变量
  } catch (error) {
    console.error("Error submitting question:", error);
    response.value = "问题提交失败";
  }
};

const formatDateTime = (dateTimeStr: string): string => {
  const [date, time] = dateTimeStr.split("T");
  const [year, month, day] = date.split("-");
  const [hour, minute] = time.split(":");
  const second = "00"; // 确保秒数始终存在
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};
</script>

<style scoped>
.ask-question {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.question-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

input[type="number"],
input[type="text"],
input[type="datetime-local"] {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

input[type="number"]:focus,
input[type="text"]:focus,
input[type="datetime-local"]:focus {
  outline: none;
  border-color: #007bff;
}

.submit-button {
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  background-color: #28a745;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
}

.submit-button:hover {
  background-color: #218838;
}

.response-message {
  text-align: center;
  margin-top: 15px;
  color: #28a745;
}
</style>
