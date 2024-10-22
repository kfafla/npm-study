<template>
  <nav>
    <router-link to="/counter">计数器</router-link>
    <router-link to="/todo">代办清单</router-link>
    <router-link to="/list">记账</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
a {
  margin: 10px;
  text-decoration: none;
  color: #3baee0;
  padding: 5px 10px;
}

.router-link-active {
  background-color: #3baee0;
  color: white;
  font-weight: bold;
}
</style>
