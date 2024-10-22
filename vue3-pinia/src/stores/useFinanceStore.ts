import { defineStore } from 'pinia';

 export interface Transaction {
  amount: number;
  description?:string;
}

export const useBudgetStore = defineStore('budget', {
  state: () => ({
    incomes: [] as Transaction[],
    expenses: [] as Transaction[]
  }),
  persist:true,
  actions: {
    addIncome(amount: number,description?:string) {
      this.incomes.push({ amount,description });
    },
    addExpense(amount: number,description?:string) {
      this.expenses.push({ amount,description });
    },
    removeRecord(record: Transaction) {
      const index = this.incomes.findIndex(item => item === record);
      if (index !== -1) {
        this.incomes.splice(index, 1);
      } else {
        const expIndex = this.expenses.findIndex(item => item === record);
        if (expIndex !== -1) {
          this.expenses.splice(expIndex, 1);
        }
      }
    },
    calculateTotal(): { totalIncome: number; totalExpense: number; balance: number } {
      const totalIncome = this.incomes.reduce((acc, cur) => acc + cur.amount, 0);
      const totalExpense = this.expenses.reduce((acc, cur) => acc + cur.amount, 0);
      const balance = totalIncome - totalExpense;
      return { totalIncome, totalExpense, balance };
    }
  }
},);