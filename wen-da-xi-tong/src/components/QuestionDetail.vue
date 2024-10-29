<template>
  <div class="question-detail">
    <h1>问题详情</h1>
    <div v-if="question" class="question">
      <p><strong>内容：</strong>{{ question.content }}</p>
      <p><strong>提问者ID：</strong>{{ question.user?.id }}</p>
      <h2>回答</h2>
      <div v-for="answer in question.answers" :key="answer.id" class="answer">
        <p><strong>回答者ID：</strong>{{ answer.userId }}</p>
        <p><strong>内容：</strong>{{ answer.content }}</p>
      </div>
    </div>
    <div v-else>
      <p>未找到问题。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

interface User {
  id: number;
}

interface Answer {
  id: number;
  content: string;
  questionId: number;
  userId: number;
  createAt: Date;
}

interface Question {
  id: number;
  content: string;
  user: User | null;
  answers?: Answer[];
}

const route = useRoute();
const question = ref<Question | null>(null);

onMounted(async () => {
  try {
    const response = await axios.get<Question>(
      `http://localhost:8080/api/questions/${route.params.id}`
    );
    question.value = response.data;
  } catch (error) {
    console.error("Error fetching question:", error);
  }
});
</script>

<style scoped>
.question-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.question {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
}

.question h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
}

.question p {
  margin: 5px 0;
  color: #666;
}

.answer {
  background-color: #f3f3f3;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
}

.answer p {
  margin: 5px 0;
  color: #444;
}
</style>
