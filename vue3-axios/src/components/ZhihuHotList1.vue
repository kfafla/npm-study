<template>
  <div>
    <h2>知乎热榜</h2>
    <button @click="addNewHostItem">添加热榜数据</button>
    <Ul>
      <li v-for="item in pageHostList" :key="item.id">
        <img :src="item.image" alt="image" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.excerpt }}</p>
        <p>热度：{{ item.hotIndex }}</p>
        <!-- <a :href="item.url" target="_blank">查看详情</a> -->
        <button @click="updateOldHotItem(item.id)">更新</button>
        <button @click="removeHotItem(item.id)">删除</button>
      </li>
    </Ul>
    <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
    <button @click="nextPage" :disabled="currentPage === totalPages">
      下一页
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import {
  fetchHostList,
  addHostItem,
  updateHostItem,
  deleteHostItem,
} from "../api/zhihuApi";
import type { HotItem } from "../types/zhihu";

const hotlist = ref<HotItem[]>([]);
const currentPage = ref(1);
const pageSize = ref(2);
const fetchList = async () => {
  const res = await fetchHostList();
  hotlist.value = res.data.data;
};

//添加热榜数据
const addNewHostItem = async () => {
  const newItem = {
    title: "新的热榜数据",
    excerpt: "这是一个新增的热榜项",
  };
  const res = await addHostItem(newItem);
  console.log(res.data.message);
  hotlist.value.unshift(res.data.data);
};

//更新数据
const updateOldHotItem = async (id: number) => {
  const updatedItem = {
    title: "更新后的热榜标题",
    excerpt: "更新后的热榜简介",
  };
  const res = await updateHostItem(id, updatedItem);
  console.log(res.data.message);

  //更新本地数据
  //从数组中找到id为指定数据的元素索引
  const itemIndex = hotlist.value.findIndex((item) => item.id === id);
  if (itemIndex != -1) {
    hotlist.value[itemIndex].title = updatedItem.title;
    hotlist.value[itemIndex].excerpt = updatedItem.excerpt;
  }
};
//删除数据
const removeHotItem = async (id: number) => {
  const res = await deleteHostItem(id);
  console.log(res.data.message);
  //从本地数组移除数据
  hotlist.value = hotlist.value.filter((item) => item.id !== id);
};

//根据当前页码和每页数量，计算分页数据
const pageHostList = computed(() =>
  hotlist.value.slice(
    (currentPage.value - 1) * pageSize.value,
    currentPage.value * pageSize.value
  )
);
//计算属性：计算总页数
const totalPages = computed(() =>
  Math.ceil(hotlist.value.length / pageSize.value)
);

//下一页点击事件
const nextPage = () => {
  //还不是最后一页
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
  }
};

//上一页点击事件
const prevPage = () => {
  //不是第一页
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
};

onMounted(fetchList);
</script>

<style scoped></style>
