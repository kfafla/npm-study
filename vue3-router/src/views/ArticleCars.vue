<template>
  <div>
    <h1>{{ article.title }}</h1>
    <img :src="article.image" alt="Book Cover" />
    <router-link :to="`/articles/${article.id}`" tag="button"
      >删除书本</router-link
    >
    <router-view> </router-view>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
const articleId = route.params.id;
const articleImageUrl1 = "https://xmy-oss.oss-cn-hangzhou.aliyuncs.com/shz.jpg";
const articleImageUrl = "https://xmy-oss.oss-cn-hangzhou.aliyuncs.com/sgyy.jpg";
const articles = [
  {
    id: 1,
    title: "《三国演义》",
    content:
      "   《三国演义》是中国古典四大名著之一，由明代小说家罗贯中创作。这部小说以东汉末年到西晋初年之间的历史为背景，讲述了魏、蜀、吴三国之间的政治和军事斗争。小说塑造了一系列栩栩如生的人物形象，如曹操、刘备、孙权、诸葛亮、关羽、张飞等，以及许多脍炙人口的故事，如桃园三结义、赤壁之战、三顾茅庐等。《三国演义》不仅是一部历史小说，也蕴含了丰富的政治、军事、哲学和人生智慧。它以宏大的叙事结构、深刻的人物刻画和精彩的故事情节，展现了那个时代的社会风貌和人物性格，对后世的文学创作产生了深远的影响。",
    image: articleImageUrl,
  },
  {
    id: 2,
    title: "《水浒传》",
    content:
      "《水浒传》是中国古典四大名著之一，由元末明初的文学家施耐庵所著，并由罗贯中加以润色及编排。这部小说以北宋末年宋江领导的梁山泊农民起义为题材，塑造了宋江、林冲、武松、鲁智深等108位英雄好汉的形象，他们因为各种原因被逼上梁山，形成了一股反抗封建统治的力量。《水浒传》的故事最初起源于北宋宣和年间，从南宋开始就成为了民间口头文学的主要题材。施耐庵把这些在不同地区流传的故事汇集起来，经过选择、加工、再创作，写成了《水浒传》。小说通过生动的情节和鲜明的人物形象，展现了当时社会的矛盾和冲突，以及人民群众反抗封建压迫的斗争精神。《水浒传》的结构是纵横交错的复式结构，梁山起义的发生发展和失败的全过程纵贯全篇，其间连缀着一个一个相对独立自成整体的主要人物的故事。这些故事自身在结构上既纵横开合，各尽特色，又是整个水浒故事的有机组成部分。小说的语言采用白话文，生动、形象，充满了生活气息，对后世的文学创作产生了深远的影响。《水浒传》的版本有繁本和简本之分。繁本通常指嘉靖年间的百回本，而简本则是在万历年间出现的，增加了征田虎、征王庆的故事。此外，还有金圣叹评的七十回本，这个版本对原著进行了删减，并加上了自己的评语。",
    image: articleImageUrl1,
  },
];
const article = articles.find((a) => a.id === Number(articleId));
</script>
