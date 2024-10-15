<template>
  <ul>
    <li v-for="comment in article.comments" :key="comment.id">
      {{ comment.content }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const articleId = route.params.id;

const articles = [
  {
    id: 1,
    title: "如何学习vue3",
    content: "如何学习11111111111111111111111",
    comments: [
      {
        id: 1,
        content: "vue3语法很简洁",
      },
      {
        id: 2,
        content: "vue3功能很强大",
      },
      {
        id: 3,
        content: "vue3的组合式函数很棒",
      },
      {
        id: 4,
        content: "vue3的生态很好",
      },
    ],
  },
  {
    id: 2,
    title: "理解 Vue router",
    content: "理解vue222222222222222222222222222222",
    comments: [
      {
        id: 1,
        content: "vue router语法很简洁",
      },
      {
        id: 2,
        content: "vue router功能很强大",
      },
      {
        id: 3,
        content: "vue router的组合式函数很棒",
      },
      {
        id: 4,
        content: "vue router的生态很好",
      },
    ],
  },
];
const article = articles.find((a) => a.id === Number(articleId));
</script>
