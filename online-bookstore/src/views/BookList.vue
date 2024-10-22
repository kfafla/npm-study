<template>
  <div>
    <h2>图书列表</h2>
  </div>
  <ul>
    <li v-for="book in books" :key="book.id">
      <router-link :to="`/books/${book.id}`">
        {{ book.name }}
        <img :src="book.img" alt="Book cover" class="book-img" />
      </router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
const books = [
  {
    id: 1,
    name: "《水浒传》",
    img: "", //require('@/assets/book-covers/shz.jpg'),
  },
  {
    id: 2,
    name: "《三国演义》",
    img: "", //require('@/assets/book-covers/shz.jpg'),
  },
  {
    id: 3,
    name: "《红楼梦》",
    img: "", //require('@/assets/book-covers/shz.jpg'),
  },
];
</script>
<style scoped>
.book-img {
  width: 100px; /* 或者你希望的任何尺寸 */
  height: auto;
  margin-left: 10px; /* 与书名保持一定距离 */
}
</style>
