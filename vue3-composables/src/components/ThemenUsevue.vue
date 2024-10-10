<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark(); //true or false
const toggleDark = useToggle(isDark);
</script>

<template>
  {{ isDark }}
  <br />
  <!--<button @click="toggleDark">Toggle Dark Mode</button>-->
</template>

<style>
.dark {
  background: black;
  color: white;
}
</style>
