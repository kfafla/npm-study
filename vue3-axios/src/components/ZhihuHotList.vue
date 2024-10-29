<template>
  <div>
    <h2>知乎热榜</h2>
    <Ul>
      <li v-for="item in hotlist" :key="item.id">
        <img :src="item.image" alt="image" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.excerpt }}</p>
        <p>热度：{{ item.hotIndex }}</p>
        <a :href="item.url" target="_blank">查看详情</a>
      </li>
    </Ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import type { HotItem } from "../types/zhihu";

const hotlist = ref<HotItem[]>([]);

const fetchList = async () => {
  const res = await axios.get("https://api.zhihu.com/hot");
  hotlist.value = res.data.data;
};
onMounted(fetchList);
</script>

<style scoped></style>
