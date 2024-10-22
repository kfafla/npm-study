<template>
  <div class="profile-container">
    <h3>用户个人资料</h3>
    <div class="profile-info">
      <img
        src="https://xmy-oss.oss-cn-hangzhou.aliyuncs.com/%E5%A4%B4%E5%83%8F.jpg"
        alt="用户头像"
        class="profile-avatar"
      />
      <div class="profile-details">
        <p><strong>用户名:</strong> JohnDoe</p>
        <p><strong>邮箱:</strong> johndoe@example.com</p>
        <p><strong>注册日期:</strong> 2023-01-01</p>
        <p><strong>最后登录:</strong> 2024-10-15</p>
      </div>
    </div>
    <div class="profile-stats">
      <ul>
        <li><strong>订单数量:</strong> 10</li>
        <li><strong>总消费金额:</strong> $1200</li>
        <li><strong>收藏商品数:</strong> 5</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h3 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.profile-info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.profile-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
}

.profile-details p {
  margin: 0;
  color: #666;
}

.profile-details strong {
  color: #333;
}

.profile-stats ul {
  list-style: none;
  padding: 0;
}

.profile-stats li {
  margin-bottom: 10px;
  color: #666;
}

.profile-stats strong {
  color: #333;
}
</style>
