<template>
  <div class="book-list-container">
    <h2>书本列表</h2>
    <ul class="book-list">
      <li v-for="article in articles" :key="article.id">
        <router-link :to="`/articles/${article.id}`" class="book-link">
          {{ article.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const articles = [
  {
    id: 1,
    title: "《水浒传》",
  },
  {
    id: 2,
    title: "《三国演义》",
  },
];
</script>

<script lang="ts">
export default {
  beforeRouteEnter(to, from, next) {
    console.log(to, from);
    console.log("进行该页面的检查");
    next();
  },
};
</script>
<style scoped>
.book-list-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.book-list-container h2 {
  color: #333;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.book-list {
  list-style: none;
  padding: 0;
}

.book-list li {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.book-list li:last-child {
  border-bottom: none;
}

.book-link {
  display: block;
  text-decoration: none;
  color: #007bff;
  font-size: 18px;
  transition: color 0.3s ease;
}

.book-link:hover {
  color: #0056b3;
}
</style>
