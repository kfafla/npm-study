<template>
  <div>
    <h2>{{ article.title }}</h2>
    <p>{{ article.content }}</p>
    <div style="height: 100px">
      <p>更多文章列表</p>
    </div>
    <router-link :to="`/articles/${article.id}/comments`">查看评论</router-link>
    <router-view> </router-view>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
//接收到路由中的id参数
const articleId = route.params.id;

const articles = [
  {
    id: 1,
    title: "如何学习vue3",
    content: "如何学习11111111111111111111111",
  },
  {
    id: 2,
    title: "理解 Vue router",
    content: "理解vue222222222222222222222222222222",
  },
];

//超找id 为 articleid的文章
const article = articles.find((a) => a.id === Number(articleId));
</script>
