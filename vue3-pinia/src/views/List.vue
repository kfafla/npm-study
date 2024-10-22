<template>
  <div class="budget-app">
    <h1>记账应用</h1>

    <!-- Add Income -->
    <div class="add-transaction">
      <h2>收入</h2>
      <input v-model="incomeAmount" type="number" placeholder="金额" />
      <input v-model="incomeDescription" placeholder="描述" />
      <button @click="addIncome">添加记录</button>
    </div>

    <!-- Add Expense -->
    <div class="add-transaction">
      <h2>支出</h2>
      <input v-model="expenseAmount" type="number" placeholder="金额" />
      <input v-model="expenseDescription" placeholder="描述" />
      <button @click="addExpense">添加记录</button>
    </div>

    <!-- Records List -->
    <div class="records">
      <h2>交易记录</h2>
      <ul>
        <li v-for="income in budgetStore.incomes">
          收入: {{ income.amount }}
          <span v-if="income.description"> - {{ income.description }}</span>
          <button @click="removeRecord(income)">删除</button>
        </li>
        <li v-for="expense in budgetStore.expenses">
          支出: {{ expense.amount }}
          <span v-if="expense.description"> - {{ expense.description }}</span>
          <button @click="removeRecord(expense)">删除</button>
        </li>
      </ul>
    </div>

    <!-- Balance -->
    <div class="balance">
      <h2>统计信息</h2>
      <p>总收入: {{ budgetStore.calculateTotal().totalIncome.toFixed(2) }}</p>
      <p>
        总支出:
        {{ budgetStore.calculateTotal().totalExpense.toFixed(2) }}
      </p>
      <p>当前余额: {{ budgetStore.calculateTotal().balance.toFixed(2) }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useBudgetStore } from "../stores/useFinanceStore";
import { Transaction } from "../stores/useFinanceStore";

const budgetStore = useBudgetStore();

const incomeAmount = ref(0);
const expenseAmount = ref(0);
const incomeDescription = ref("");
const expenseDescription = ref("");

const addIncome = () => {
  if (incomeAmount.value) {
    budgetStore.addIncome(incomeAmount.value, incomeDescription.value);
    incomeAmount.value = 0;
    incomeDescription.value = "";
  }
};

const addExpense = () => {
  if (expenseAmount.value) {
    budgetStore.addExpense(expenseAmount.value, expenseDescription.value);
    expenseAmount.value = 0;
    expenseDescription.value = "";
  }
};

const removeRecord = (record: Transaction) => {
  budgetStore.removeRecord(record);
};
</script>

<style scoped>
.budget-app {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 10px;
}

.add-transaction,
.records,
.balance {
  margin-bottom: 20px;
}

input[type="number"] {
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
  color: black; /* 将字体颜色改为黑色 */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f8f8f8; /* 可以添加一个浅色背景，使按钮更突出 */
}

button:hover {
  background-color: #e0e0e0; /* 鼠标悬停时的背景色 */
}

.records ul {
  list-style: none;
  padding: 0;
}

.records li {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.balance p {
  margin: 5px 0;
}
</style>
