<template>
  <div>
    <h2>{{ book.title }}</h2>
    <p>{{ book.content }}</p>
  </div>
  <router-link :to="`/books/${book.id}/comments`">查看评论</router-link>
  <router-view> </router-view>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const bookId = route.params.id;

const books = [
  {
    id: 1,
    name: "《水浒传》",
    content: "11111111111111111",
  },
  {
    id: 2,
    name: "《三国演义》",
    content: "2222222222222222222",
  },
  {
    id: 3,
    name: "《红楼梦》",
    content: "33333333333333333333333333",
  },
];

const book = books.find((a) => a.id === Number(bookId));
</script>
