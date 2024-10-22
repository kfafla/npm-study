<template>
  <div class="welcome-container">
    <h2 class="welcom-message">欢迎来到网上书店</h2>
  </div>
</template>
<style scoped>
.welcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  color: #333;
  font-family: "Arial", sans-serif;
}

h2 {
  font-size: 2.5rem;
  margin: 0;
}
.welcome-message {
  opacity: 0;
  animation: fadeIn 2s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.welcome-message:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}
</style>
