<template>
  <el-table :data="users" style="width: 100%">
    <el-table-column prop="name" label="姓名" width="180"></el-table-column>
    <el-table-column prop="email" label="邮箱"></el-table-column>
    <el-table-column label="操作" width="180">
      <template #default="scope">
        <el-popconfirm
          title="确定要删除这条记录吗？"
          @confirm="() => handleDelete(scope.row)"
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

    const handleDelete = (row) => {
      console.log(`Deleted: ${row.name}`);
      // 在这里执行实际的删除逻辑
      // 例如，你可以使用数组的 filter 方法来移除用户
      // users.value = users.value.filter(user => user !== row);
      // 注意：上面的 filter 方法可能不会按预期工作，因为对象比较是引用比较
      // 你可能需要根据一个唯一标识符（如 ID）来过滤
    };

    return {
      users,
      handleDelete,
    };
  },
};
</script>
