<template>
  <el-table :data="users" style="width: 100%">
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="email" label="邮箱"></el-table-column>
    <el-table-column label="操作" width="180">
      <template #default="scope">
        <el-popconfirm
          title="确定要删除这条记录吗？"
          @confirm="handleDelete(scope.$index, scope.row)"
        >
          <el-button type="danger" slot="reference">删除</el-button>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const users = ref([
      { name: "张三", email: "zhangsan@example.com" },
      { name: "李四", email: "lisi@example.com" },
      // 更多用户...
    ]);

    const handleDelete = (index, row) => {
      console.log(`Deleted: ${row.name}`);
      // 在这里执行实际的删除逻辑
      // 注意：这里的删除逻辑仅用于演示，实际中你可能需要调用API来删除数据
    };

    return {
      users,
      handleDelete,
    };
  },
};
</script>
