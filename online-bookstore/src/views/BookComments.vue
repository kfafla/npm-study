<template>
  <ul>
    <li v-fro="comment in book.comments" :key="comment.id">
      {{ comment.content }}
    </li>
  </ul>
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
    comments: [
      {
        id: 1,
        content: "333333333333333",
      },
      {
        id: 2,
        content: "333333333333333",
      },
      {
        id: 3,
        content: "333333333333333",
      },
      {
        id: 4,
        content: "333333333333333",
      },
    ],
  },
  {
    id: 2,
    name: "《三国演义》",
    content: "2222222222222222222",
    comments: [
      {
        id: 1,
        content: "333333333333333",
      },
      {
        id: 2,
        content: "333333333333333",
      },
      {
        id: 3,
        content: "333333333333333",
      },
      {
        id: 4,
        content: "333333333333333",
      },
    ],
  },
  {
    id: 3,
    name: "《红楼梦》",
    content: "33333333333333333333333333",
    comments: [
      {
        id: 1,
        content: "333333333333333",
      },
      {
        id: 2,
        content: "333333333333333",
      },
      {
        id: 3,
        content: "333333333333333",
      },
      {
        id: 4,
        content: "333333333333333",
      },
    ],
  },
];
const book = books.find((a) => a.id === Number(bookId));
</script>
