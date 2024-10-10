<template>
  <input type="text" v-model="textToCopy" />
  <button @click="copy(textToCopy)">{{ copied ? "Copied" : "Copy" }}</button>
  {{ text }}
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useClipboard } from "@vueuse/core";

const textToCopy = ref("Hello");
const { copy, copied, text } = useClipboard({
  copiedDuring: 3000,
});

useClipboard({
  source: textToCopy,
});
</script>
