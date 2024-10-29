<template>
  <div class="answer-form">
    <h1>回答以下问题：</h1>
    <p>{{ questionContent }}</p>
    <textarea v-model="answerContent" placeholder="输入你的回答"></textarea>
    <!-- 添加日期选择器 -->
    <input type="datetime-local" v-model="selectedTime" />
    <button @click="submitAnswer">提交回答</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const questionId = ref(route.params.questionId);
const questionContent = ref("");
const answerContent = ref("");
const selectedTime = ref(null); // 用户选择的时间

// 获取问题内容
onMounted(async () => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/questions/${questionId.value}`
    );
    questionContent.value = response.data.content;
  } catch (error) {
    console.error("Error fetching question:", error);
  }
});

// 提交回答
const submitAnswer = async () => {
  if (!selectedTime.value) {
    console.error("No time was selected.");
    return;
  }

  try {
    // 转换日期为时间戳
    const date = new Date(selectedTime.value);
    const timestamp = Math.floor(date.getTime() / 1000);

    const answer = {
      content: answerContent.value,
      questionId: Number(questionId.value),
      userId: 2, // 这里需要根据实际情况获取用户ID
      createAt: timestamp, // 添加时间戳
    };

    const response = await axios.post(
      `http://localhost:8080/api/questions/${questionId.value}/answer`,
      answer
    );
    console.log("Answer submitted:", response.data);
    // 可以在这里添加导航逻辑，例如返回问题列表或显示成功消息
  } catch (error) {
    console.error("Error submitting answer:", error);
  }
};
</script>

<style scoped>
.answer-form {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #333;
}

textarea {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical;
}

input[type="datetime-local"] {
  margin-top: 10px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border: none;
  background-color: #28a745;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #218838;
}
</style>
