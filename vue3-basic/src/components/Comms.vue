<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="180px">
        <!-- 要注意这里引用CommonAside组件的方法，拆分了两个字符，用中短线连接的-->
        <common-aside></common-aside>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from "./Comms.vue";
export default {
  components: {
    CommonAside,
  },
};
</script>

<style lang="less" scoped>
.common-layout {
  height: 100%;
  & > .el-container {
    height: 100%;
    & > .el-aside {
      height: 100%;
      background: #545c64;
    }
    & > .el-container {
      & > .el-header {
        padding: 0%;
      }
    }
  }
}
</style>
