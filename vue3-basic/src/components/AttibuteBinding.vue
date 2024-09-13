<template>
  <div>
    <!-- 绑定 isDisabled 属性 -->
    <!-- <button v-bind="isDisabled">点击</button> -->
    <button :disabled="isDisabled">点击</button>
    <img :src="url" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isDisabled = ref<boolean>(false);
const url = ref<string>(
  "https://cn.bing.com/images/search?view=detailV2&ccid=CgkqtUJl&id=ADD84E0B4BD4E38B74812FEE8727EB814D0DC86A&thid=OIP.CgkqtUJlcMVVv08lRz-AZwHaEo&mediaurl=https%3A%2F%2Fp.qpic.cn%2Fmwegame%2F0%2Fb8269369b23fa64fd5d9898b2eedcb23%2F&exph=800&expw=1280&q=%E9%BB%91%E7%A5%9E%E8%AF%9D%E6%82%9F%E7%A9%BA&simid=608047656395808469&FORM=IRPRST&ck=F1815B27E97287352434CE6DFA3458E3&selectedIndex=1&itb=0&cw=1493&ch=848&ajaxhist=0&ajaxserp=0"
);
</script>
