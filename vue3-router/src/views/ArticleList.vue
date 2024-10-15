<template>
  <div>
    <h2>文章列表</h2>
    <div style="height: 100px">
      <p>更多文章列表</p>
    </div>
    <ull>
      <li v-for="article in articles" :key="article.id">
        <router-link :to="`/articles/${article.id}`">
          {{ article.title }}
        </router-link>
      </li>
    </ull>
  </div>
</template>

<script setup lang="ts">
const articles = [
  {
    id: 1,
    title: "如何学习vue3",
  },
  {
    id: 2,
    title: "理解 Vue router",
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
