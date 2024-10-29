<!-- components/QuestionList.vue -->
<template>
  <div class="question-list">
    <h1>所有问题</h1>
    <ul>
      <li
        v-for="question in questions"
        :key="question.id"
        class="question-item"
      >
        <p class="question-content">{{ question.content }}</p>
        <div class="question-actions">
          <!-- 添加回答按钮 -->
          <button @click="answerQuestion(question.id)">回答</button>
          <!-- 添加查看按钮 -->
          <button @click="viewQuestion(question.id)">查看</button>
        </div>
      </li>
    </ul>
    <button v-if="hasMore" class="load-more-btn" @click="loadMore">
      加载更多
    </button>
    <p v-if="!questions.length" class="no-questions">没有找到问题。</p>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

interface Question {
  id: number;
  content: string;
  createTime: Date;
  user?: User;
  answers?: Answer[];
}

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

const questions = ref<Question[]>([]);
const hasMore = ref(true);
const router = useRouter();

const fetchQuestions = async () => {
  try {
    const response = await axios.get<Question[]>(
      "http://localhost:8080/api/questions/all"
    );
    questions.value = [...questions.value, ...response.data];
    if (response.data.length === 0) {
      hasMore.value = false;
    }
  } catch (error) {
    console.error("Error fetching questions:", error);
    hasMore.value = false;
  }
};

fetchQuestions();

const loadMore = () => {
  fetchQuestions();
};

const answerQuestion = (questionId: number) => {
  router.push({ name: "AnswerQuestion", params: { questionId } });
};

const viewQuestion = (questionId: number) => {
  router.push({
    name: "QuestionDetail",
    params: { id: questionId.toString() },
  });
};
</script>

<style scoped>
.question-list {
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

ul {
  list-style-type: none;
  padding: 0;
}

.question-item {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  transition: box-shadow 0.3s ease-in-out;
}

.question-item:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.question-content {
  margin-bottom: 10px;
  color: #666;
}

.question-actions button {
  margin-right: 10px;
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease-in-out;
}

.question-actions button:hover {
  background-color: #0056b3;
}

.load-more-btn {
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #28a745;
  color: white;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease-in-out;
  margin-top: 20px;
}

.load-more-btn:hover {
  background-color: #218838;
}

.no-questions {
  color: #dc3545;
  text-align: center;
}
</style>
