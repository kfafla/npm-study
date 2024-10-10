<template>
  <div class="container">
    <div v-for="(item, index) in list" :key="index" class="card">
      <div class="left">
        <img :src="item.banner" alt="" />
      </div>
      <div class="right">
        <h3>{{ item.title }}</h3>
        <p>
          <span class="update">{{ item.updated }}</span>
          <span>{{ item.viewCount }}次浏览</span>
        </p>
      </div>
      <span v-if="item.isFollowing === 'TRUE'" class="follow followed">
        已关注
      </span>
      <span v-else class="follow unfollow">关注 </span>
    </div>

    <div style="text-align: center">
      <button
        @click="prevPage"
        :disabled="isFirstPage"
        :class="{ disabled: isFirstPage }"
      >
        上一页
      </button>

      <button
        @click="nextPage"
        :disabled="isLastPage"
        :class="{ disabled: isLastPage }"
      >
        下一页
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { ref, onMounted, computed } from "vue";
interface Special {
  id: string;
  title: string;
  banner: string;
  introduction: string;
  isFollowing: string;
  followersCount: number;
  viewCount: number;
  updated: string;
}

const list = ref<Special[]>([]);

const limit = ref<number>(3); //每页条数
const offset = ref<number>(0); //偏移量
const total = ref<number>(0); //总条数

//请求分页接口
const fetchByPage = (): void => {
  axios
    .get(
      `http://localhost:8080/api/v1/special/page?limit=${limit.value}&offset=${offset.value}`
    )
    .then((res) => {
      list.value = res.data.data.specials;
      total.value = res.data.data.total;
    })
    .catch((err) => {
      console.error(err);
    });
};

//点击下一页，注意都是计算offset偏移量，计算完毕后要重新调用fetchByPage请求数据
const nextPage = (): void => {
  if (offset.value + limit.value >= list.value.length) {
    offset.value += limit.value;
    fetchByPage();
  }
};

//点击上一页
const prevPage = (): void => {
  if (offset.value > 0) {
    offset.value -= limit.value;
  }
  fetchByPage();
};

//两个计算属性：是否第一页，是否最后一页
const isFirstPage = computed(() => offset.value === 0);
const isLastPage = computed(() => offset.value + limit.value >= total.value);

//页面加载生命周期，调用分页查询函数
onMounted(() => {
  fetchByPage();
});

const fetchAll = (): void => {
  axios
    .get(`http://localhost:8080/api/v1/special/all`)
    .then((res) => {
      console.log(res);
      list.value = res.data.data as Special[];
      console.log(list.value);
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchAll();
</script>

<style scoped>
.container {
  width: 70%;
  margin: 0 auto;
}

button {
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

button:disabled,
button.disabled {
  background-color: #d6d6d6;
  color: #888;
  cursor: not-allowed;
}

.card {
  display: flex;
  height: 160px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  position: relative;
}

.left {
  flex: 1;
}

.right {
  flex: 4;
  padding: 10px;
}

.left img {
  width: 100%;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

p span {
  font-size: 13px;
  color: #333;
}

.updated {
  margin-right: 20px;
}

.follow {
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 5px 10px;
  font-size: 14px;
}

.followed {
  background-color: #f6f6f6;
  color: #716c6c;
}

.unfollow {
  background-color: #eff4fe;
  color: #3670ee;
}
</style>
