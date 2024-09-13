<template>
  <div>
    <h1>装备管理</h1>
    <div>
      <input
        type="text"
        placeholder="输入装备名称"
        v-model="newEquipment.name"
      />
      <button @click="addEquipment">添加装备</button>
    </div>
    <ul>
      <li v-for="(equipment, index) in equipmentlist" :key="equipment.id">
        {{ equipment.name }}
        <button @click="deleteEquipment(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
interface Equipment {
  id: number;
  name: string;
}
const newEquipment = ref<Equipment>({
  id: 0,
  name: "",
});
const equipmentlist = ref<Equipment[]>([]);
const addEquipment = () => {
  if (newEquipment.value.name !== "") {
    equipmentlist.value.push({
      id: equipmentlist.value.length,
      name: newEquipment.value.name,
    });
    newEquipment.value = { id: 0, name: "" };
  }
};
const deleteEquipment = (dId: number) => {
  equipmentlist.value = equipmentlist.value.filter(
    (equipment) => equipment.id !== dId
  );
  for (let i = dId; i < equipmentlist.value.length; i++) {
    equipmentlist.value[i].id = i;
  }
};
</script>

<style scoped>
div {
  text-align: center;
}
</style>
